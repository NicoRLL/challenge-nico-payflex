const testimonials = [
  {
    text: "¡Increíble! PayFlex fue un antes y después para nosotros. La alegría de los empleados al saber que pueden contar con su dinero en momentos críticos es palpable. Realmente, un cambio positivo en el clima de nuestra empresa.",
    name: "Diego de Salterain",
    role: "CEO & Founder @Paselibre",
    image: "/testimonials/diego.png",
  },
  {
    text: "PayFlex es esa pieza del rompecabezas que no sabíamos que faltaba. Ver la tranquilidad en los rostros de nuestro equipo sabiendo que tienen un respaldo financiero es invaluable. Definitivamente, un acierto para nuestra cultura empresarial.",
    name: "Maximo Fischer",
    role: "CEO & Founder @ArreglaTodo",
    image: "/testimonials/maxi.png",
  },
  {
    text: "Sorprendente. PayFlex trajo una onda de optimismo a nuestro lugar de trabajo. La posibilidad de anticipar el salario ha sido más que un beneficio; es una muestra de cuidado y comprensión hacia las necesidades de nuestros empleados.",
    name: "Elias Margolis",
    role: "CTO & Founder @Credifama",
    image: "/testimonials/elias.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-brand mb-12">
          Testimonios
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl shadow-md border border-gray-100 p-6 bg-white hover:shadow-lg transition"
            >
              <div className="flex text-yellow-400 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">“{t.text}”</p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
