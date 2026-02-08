import { useEffect, useRef, useState } from "react";

const features = [
  { icon: "☕", title: "Cozy Café", desc: "An intimate setting bathed in warm golden light" },
  { icon: "🎬", title: "Immersive Sound", desc: "Cinema-grade audio in an enclosed atmosphere" },
  { icon: "✨", title: "Warm Lighting", desc: "Candlelit ambiance that mirrors the film's world" },
  { icon: "🪑", title: "Intimate Seating", desc: "Carefully arranged for the perfect viewing angle" },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-32 px-6 relative">
      <div
        ref={ref}
        className={`container mx-auto max-w-5xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 font-sans">
            The Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            More Than a <span className="text-primary">Screening</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card rounded-lg p-8 text-center hover:glow-border transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-serif text-lg text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-sans">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <span className="inline-block glass-card rounded-full px-6 py-2 text-xs tracking-[0.3em] uppercase text-primary font-sans font-medium glow-border">
            Only 35–40 seats per show
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
