export default function Header() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a
  href="#"
  className="flex items-center gap-3 font-semibold text-3xl md:text-4xl text-brand"
>
  <img
    src="/payflexIcon.png"
    alt="PayFlex logo"
    className="h-12 w-12 object-contain"
  />
  PayFlex
</a>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Características</a>
            <a href="#partners" className="hover:opacity-80">Partners</a>
            <a href="#testimonials" className="hover:opacity-80">Testimonios</a>
            <a href="#contact" className="hover:opacity-80">Empezar</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-medium hover:opacity-90 transition"
            >
              Lo quiero!
            </a>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm hover:bg-gray-50">
              <span role="img" aria-label="Argentina flag">🇦🇷</span>
              <span>Argentina</span>
            </button>
          </div>
        </div>
      </header>

      <div className="h-[72px]" />
    </>
  );
}
