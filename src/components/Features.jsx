import { useEffect, useRef, useState } from "react";

const items = [
  { title: "Onboarding rápido", 
    desc: "Proceso de incorporación rápido, seguro y guiado, diseñado para que tu equipo acceda al adelanto de sueldo sin demoras." },
  { title: "Pagos seguros",
    desc: "Protegemos cada transacción con tecnología de nivel bancario, asegurando la confidencialidad y tranquilidad tanto para tu empresa como para tus colaboradores.",
  },
  { title: "Compliance local",
    desc: "Cumplimiento integral de la normativa argentina para garantizar operaciones seguras y confiables.",
  },
  
];

function useInView(options) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return [ref, visible];
}

export default function Features() {
  const [ref, visible] = useInView({ threshold: 0.5 });

  return (
    <section
      id="features"
      ref={ref}
      className={`py-20 bg-[var(--color-feature-bg)] text-white transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
          Integración transparente y eficiente
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-3xl mx-auto">
          Simplificamos lo complejo para que tu equipo avance más rápido:
          implementación ágil, cumplimiento local y una infraestructura segura
          pensada para escalar sin fricciones.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur text-center transform transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 300}ms` }}
            >
              <h3 className="font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
