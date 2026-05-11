import { useCallback, useEffect, useRef, useState } from 'react'
import { useContent, buildPortfolioSummary } from '../contexts/ContentContext'

const API_URL = import.meta.env.VITE_CHAT_API_URL || ''

export default function ChatAgent() {
  const content = useContent()
  const summary = buildPortfolioSummary(content)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState(() => [
    {
      role: 'assistant',
      content:
        "Hi — ask me anything about Moksha's background, projects, or how to get in touch.",
    },
  ])
  const [pending, setPending] = useState(false)
  const [err, setErr] = useState(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const send = useCallback(async () => {
    const text = input.trim()
    if (!text || pending) return
    setInput('')
    setErr(null)
    const userMsg = { role: 'user', content: text }

    setMessages((prev) => [...prev, userMsg])

    const history = [...messages.filter((x) => x.role !== 'system'), userMsg]

    if (!API_URL) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'The chat API is not configured yet. Set VITE_CHAT_API_URL to your deployed /api/chat endpoint (see README). For now, use the Contact section or LinkedIn.',
        },
      ])
      return
    }

    setPending(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are a helpful assistant for Moksha Shah's portfolio. Answer only using the facts below. If unsure, say you don't know and suggest emailing ${content.site?.email || 'the contact on the site'}.\n\n${summary}`,
            },
            ...history.map(({ role, content: c }) => ({ role, content: c })),
          ],
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || res.statusText || 'Request failed')
      const reply = data.reply || data.message || 'No reply.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch (e) {
      setErr(e.message)
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `Something went wrong: ${e.message}. Try again later.` },
      ])
    } finally {
      setPending(false)
    }
  }, [input, pending, messages, summary, content.site?.email])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg ring-2 ring-white/20 transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:ring-zinc-900/30"
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <span className="text-xl leading-none">×</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 7.5 7.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 flex w-[min(100vw-2.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900"
          role="dialog"
          aria-label="Portfolio assistant"
        >
          <div className="border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Portfolio assistant</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">AI answers from this site&apos;s content</p>
          </div>
          <div ref={listRef} className="max-h-72 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === 'user'
                    ? 'ml-6 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'
                    : 'mr-4 rounded-lg bg-zinc-50 px-3 py-2 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300'
                }
              >
                {msg.content}
              </div>
            ))}
            {pending && <p className="text-xs text-zinc-500">Thinking…</p>}
            {err && !pending && <p className="text-xs text-red-600 dark:text-red-400">{err}</p>}
          </div>
          <div className="flex gap-2 border-t border-zinc-200 p-3 dark:border-zinc-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask a question…"
              className="min-w-0 flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            />
            <button
              type="button"
              onClick={send}
              disabled={pending}
              className="rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-white disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
