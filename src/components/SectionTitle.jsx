export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-2">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{children}</h2>
      {subtitle && <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm">{subtitle}</p>}
    </div>
  )
}
