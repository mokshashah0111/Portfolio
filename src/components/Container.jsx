export default function Container({ children, id }) {
  return (
    <section id={id} className="py-20 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4">{children}</div>
    </section>
  )
}
