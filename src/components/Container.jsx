export default function Container({ children, id }) {
  return (
    <section id={id} className="pt-8 pb-12 md:pt-10 md:pb-14 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4">{children}</div>
    </section>
  )
}
