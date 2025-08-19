const logos = [
  { src: "/partners/bcra.png", alt: "Banco Central del Uruguay" },
  { src: "/partners/microsoft.png", alt: "Microsoft" },
  { src: "/partners/apple.png", alt: "Apple Business" },
  { src: "/partners/equifax.png", alt: "Equifax" },
  { src: "/partners/google.png", alt: "Google" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-16 bg-[#f4f7fb]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-brand mb-10">
          Partners
        </h2>

        <ul
          className="
            grid gap-x-10 gap-y-8
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            items-center justify-items-center
          "
        >
          {logos.map((l) => (
            <li key={l.alt} className="w-full flex items-center justify-center">
              <img
                src={l.src}
                alt={l.alt}
                className="
                  h-10 md:h-12 lg:h-14
                  w-auto object-contain
                  opacity-90 hover:opacity-100
                  transition-opacity
                "
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
