import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
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
    <section id="about" className="py-20 px-6 relative film-grain">
      <div
        ref={ref}
        className={`container mx-auto max-w-3xl text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs tracking-[0.5em] uppercase text-primary mb-8 font-sans">
          About the Film
        </p>

        <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed mb-12 font-sans font-light">
          In a world between dusk and dawn, four strangers find themselves locked inside
          a café with no memory of how they arrived. As the clock ticks past midnight,
          the walls begin to whisper — and truths darker than shadows start to emerge.
          Nothing is what it seems. No one is who they claim to be.
        </p>

        <div className="border-l-2 border-primary/40 pl-8 text-left max-w-lg mx-auto">
          <p className="text-xl md:text-2xl font-serif italic text-foreground/90 leading-relaxed">
            "This story unfolds in silence, shadows, and choices."
          </p>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4 font-sans">
            — Director's Note
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
