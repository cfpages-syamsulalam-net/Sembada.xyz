const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_LEN = { name: 100, email: 254, phone: 30, company: 120, message: 5000 }
const WINDOW_MS = 60 * 1000
const MAX_HITS = 10
const hits = new Map()

function json(obj, status) {
  return Response.json(obj, { status, headers: { 'Cache-Control': 'no-store' } })
}

function tooLong(v, max) {
  return typeof v !== 'string' || v.length === 0 || v.length > max
}

export async function onRequestPost(context) {
  const { request, env } = context

  let body = null
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, error: 'Payload JSON tidak valid.' }, 400)
  }
  if (!body || typeof body !== 'object') return json({ ok: false, error: 'Payload tidak valid.' }, 400)

  if (body.website) return json({ ok: true })

  const name = (body.name || '').trim()
  const email = (body.email || '').trim()
  const phone = (body.phone || '').trim()
  const company = (body.company || '').trim()
  const message = (body.message || '').trim()

  if (tooLong(name, MAX_LEN.name) || !EMAIL_RE.test(email) || email.length > MAX_LEN.email || tooLong(message, MAX_LEN.message)) {
    return json({ ok: false, error: 'Nama, email, dan pesan wajib diisi dengan benar.' }, 400)
  }
  if (phone.length > MAX_LEN.phone || company.length > MAX_LEN.company) {
    return json({ ok: false, error: 'Kolom terlalu panjang.' }, 400)
  }

  const ip = request.headers.get('cf-connecting-ip') || 'unknown'
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_HITS) return json({ ok: false, error: 'Terlalu banyak percobaan. Coba lagi sebentar.' }, 429)
  recent.push(now)
  hits.set(ip, recent)

  const apiKey = env.RESEND_API_KEY
  if (!apiKey) return json({ ok: false, error: 'Layanan email belum dikonfigurasi.' }, 500)
  const to = env.CONTACT_TO || 'admin@alampintar.org'
  const from = env.CONTACT_FROM || 'Website Sembada <noreply@sembada.xyz>'

  const text = [`Nama: ${name}`, `Email: ${email}`, phone ? `WhatsApp: ${phone}` : null, company ? `Perusahaan: ${company}` : null, '', message].filter((l) => l !== null).join('\n')

  let res
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to, reply_to: email, subject: `Kontak Sembada.xyz — ${name}`, text }),
    })
  } catch {
    return json({ ok: false, error: 'Gagal menghubungi layanan email.' }, 502)
  }
  if (!res.ok) return json({ ok: false, error: 'Email gagal dikirim. Coba lagi atau hubungi via WhatsApp.' }, 502)

  return json({ ok: true })
}
