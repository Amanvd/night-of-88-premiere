import { useEffect, useRef, useState } from "react";

const RegisterSection = () => {
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
    <section id="register" className="pt-6 pb-10 md:pt-10 md:pb-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div
        ref={ref}
        className={`container mx-auto max-w-2xl text-center relative z-10 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 font-sans">
          Registration
        </p>
        <h2 className="text-4xl md:text-6xl font-serif font-black text-foreground mb-6">
          Seats Are<br />Extremely Limited
        </h2>
        <p className="text-muted-foreground text-lg font-sans mb-4">
          Entry by confirmation only. Once seats fill, registration closes.
        </p>
        <p className="text-muted-foreground/60 text-sm font-sans mb-10">
          Secure your spot for this exclusive private screening.
        </p>

        {/* Replace the href below with your Google Form link */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdxtQIFIRPz9VQQqRp8v-zoaOcUZ8_ECi59bn3NJ7EXns5xcA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground text-sm tracking-[0.25em] uppercase px-8 sm:px-12 py-5 rounded-sm hover:bg-primary/90 transition-all duration-300 font-semibold hover:shadow-[0_0_40px_hsl(0_72%_50%/0.35)] glow-border"
        >
          Register for Screening
        </a>
      </div>
    </section>
  );
};

export default RegisterSection;
