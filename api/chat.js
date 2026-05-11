/**
 * Vercel Serverless Function (Node). Deploy this repo to Vercel and set:
 *   OPENAI_API_KEY=sk-...
 * Optional: OPENAI_MODEL=gpt-4o-mini
 *
 * Frontend: VITE_CHAT_API_URL=https://your-domain.vercel.app/api/chat
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const key = process.env.OPENAI_API_KEY
  if (!key) {
    res.status(500).json({ error: 'OPENAI_API_KEY is not set' })
    return
  }

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini'
  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      res.status(400).json({ error: 'Invalid JSON' })
      return
    }
  }

  const messages = body?.messages
  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: 'messages array required' })
    return
  }

  try {
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: messages.map((m) => ({
          role: m.role,
          content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content),
        })),
        temperature: 0.4,
        max_tokens: 512,
      }),
    })

    const data = await r.json()
    if (!r.ok) {
      res.status(r.status).json({ error: data.error?.message || 'OpenAI error' })
      return
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || ''
    res.status(200).json({ reply })
  } catch (e) {
    res.status(500).json({ error: e.message || 'Server error' })
  }
}
