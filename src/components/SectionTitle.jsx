export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight">{children}</h2>
      {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
    </div>
  )
}
