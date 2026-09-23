import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO } from 'astro:env/server';

/** Sitenin tek sunucu tarafı rotası; geri kalan her sayfa statik. */
export const prerender = false;

/** Formdan gelen metin e-postaya HTML olarak gömüldüğü için kaçırılıyor. */
const kacir = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Tek satırlık alanlarda satır sonu ve aşırı uzunluk kabul edilmiyor. */
const temizle = (v: FormDataEntryValue | null, limit: number) =>
  typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, limit) : '';

const json = (govde: unknown, status: number) =>
  new Response(JSON.stringify(govde), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const DIL_ADI: Record<string, string> = {
  tr: 'Türkçe',
  en: 'İngilizce',
  ru: 'Rusça',
};

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'Form okunamadı' }, 400);
  }

  // Bal küpü: gerçek kullanıcı bu alanı göremiyor, botlar dolduruyor.
  // Sessizce başarılı dönüyoruz ki bot yeniden denemesin.
  if (temizle(form.get('website'), 200)) {
    return json({ success: true }, 200);
  }

  const isim = temizle(form.get('isim'), 120);
  const tel = temizle(form.get('tel'), 40);
  const konu = temizle(form.get('konu'), 120);
  const not = typeof form.get('not') === 'string' ? String(form.get('not')).trim().slice(0, 2000) : '';
  const dil = temizle(form.get('dil'), 8);

  if (!isim || !tel || !konu) {
    return json({ error: 'Ad, telefon ve konu zorunlu' }, 400);
  }

  if (!SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    // Yapılandırma eksik. Hastaya "alındı" demiyoruz; istemci telefon/e-posta
    // panelini gösteriyor.
    console.error('SMTP degiskenleri eksik — randevu talebi gonderilemedi.');
    return json({ error: 'Posta yapılandırması eksik' }, 500);
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const satir = (etiket: string, deger: string) =>
    `<tr>
       <td style="padding:8px 16px 8px 0;color:#666;vertical-align:top;white-space:nowrap;">${etiket}</td>
       <td style="padding:8px 0;font-weight:600;">${kacir(deger)}</td>
     </tr>`;

  const tarih = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

  try {
    await transporter.sendMail({
      from: `"burhanmayir.com" <${SMTP_USER}>`,
      to: MAIL_TO,
      subject: `Yeni randevu talebi — ${isim} (${konu})`,
      text: [
        `Ad Soyad: ${isim}`,
        `Telefon: ${tel}`,
        `Konu: ${konu}`,
        not ? `Not: ${not}` : null,
        `Form dili: ${DIL_ADI[dil] ?? dil ?? '-'}`,
        `Tarih: ${tarih}`,
      ]
        .filter(Boolean)
        .join('\n'),
      html: `
        <h2 style="font-family:sans-serif;">Yeni Randevu / Bilgi Talebi</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          ${satir('Ad Soyad', isim)}
          ${satir('Telefon', tel)}
          ${satir('Konu', konu)}
          ${not ? satir('Not', not) : ''}
          ${satir('Form dili', DIL_ADI[dil] ?? dil ?? '-')}
          ${satir('Tarih', tarih)}
        </table>
      `,
    });
  } catch (err) {
    console.error('Randevu e-postasi gonderilemedi:', err);
    return json({ error: 'E-posta gönderilemedi' }, 502);
  }

  return json({ success: true }, 200);
};

/** Uç noktaya tarayıcıdan girilirse boş sayfa yerine anlamlı yanıt. */
export const GET: APIRoute = () => json({ error: 'Yalnızca POST' }, 405);
