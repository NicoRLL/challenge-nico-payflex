import { useEffect, useLayoutEffect, useRef, useState } from "react";

const logos = [
  { src: "/clientes/acc.png", alt: "Acc" },
  { src: "/clientes/alamano.png", alt: "Alamano" },
  { src: "/clientes/avenida.png", alt: "Avenida" },
  { src: "/clientes/cataf-rey.png", alt: "Cataf-Rey" },
  { src: "/clientes/costa-azul.png", alt: "Costa Azul" },
  { src: "/clientes/GlobalUrbanTravel.png", alt: "Global Urban Travel" },
  { src: "/clientes/hertz.png", alt: "Hertz" },
  { src: "/clientes/paselibre.png", alt: "Paselibre" },
  { src: "/clientes/polosur.png", alt: "PoloSur" },
  { src: "/clientes/seo-sur.png", alt: "SeoSur" },
  { src: "/clientes/tripwip.png", alt: "TripWip" },
];

export default function Clients() {
  const wrapRef = useRef(null);    
  const groupARef = useRef(null);   
  const [loaded, setLoaded] = useState(false);
  const loadedCount = useRef(0);

  const SPEED = 120;

  const onImgLoad = () => {
    loadedCount.current += 1;
    if (loadedCount.current >= logos.length) setLoaded(true);
  };

  useLayoutEffect(() => {
    if (!loaded) return;
    const wrap = wrapRef.current;
    const groupA = groupARef.current;
    if (!wrap || !groupA) return;

    const measure = () => {
      const distance = groupA.getBoundingClientRect().width;
      const durationSec = Math.max(12, distance / SPEED); 

      wrap.style.setProperty("--marquee-distance", `${distance}px`);
      wrap.style.setProperty("--marquee-duration", `${durationSec}s`);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(groupA);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [loaded]);

  return (
    <section id="clients" className="py-16 bg-white text-brand">
  <div className="mx-auto max-w-6xl px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center">Ellos ya confían</h2>
    <p className="mt-2 text-center text-sm text-neutral-600">
      Algunas de las empresas que utilizan nuestra plataforma
    </p>
  </div>

  <div className="clients-bleed">
    <div className="clients-marquee mt-8">
      <div className="clients-track">
        <div className="clients-group">
          {logos.map((l) => (
            <img key={`A-${l.alt}`} src={l.src} alt={l.alt} className="logo-simple" loading="lazy" />
          ))}
        </div>
        <div className="clients-group" aria-hidden="true">
          {logos.map((l) => (
            <img key={`B-${l.alt}`} src={l.src} alt="" className="logo-simple" loading="lazy" />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
