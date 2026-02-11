import { useEffect, useRef, useState } from "react";

const shows = [
  { date: "13 Feb", show: "Show 1", time: "6:30 pm", seats: "Limited" },
  { date: "13 Feb", show: "Show 2", time: "7:30 pm", seats: "Limited" },
];

const ShowtimesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showtimes" className="py-20 px-6 relative film-grain">
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 font-sans">
            Showtimes
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
            Choose Your <span className="text-red-500">Night</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {shows.map((s, i) => (
            <div
              key={i}
              className="glass-card glow-border rounded-lg p-8 text-center hover:scale-[1.02] transition-all duration-500 group"
            >
              <p className="text-xs tracking-[0.4em] uppercase text-primary/70 font-sans mb-2">
                {s.date}
              </p>
              <h3 className="text-2xl font-serif text-foreground font-bold mb-1">
                {s.show}
              </h3>
              <p className="text-sm text-muted-foreground font-sans mb-4">{s.time}</p>
              <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-primary/60 font-sans border border-primary/20 rounded-full px-4 py-1 group-hover:border-primary/40 transition-colors">
                {s.seats} Seats
              </span>
            </div>
          ))}
        </div>

        {/* Venue Location */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 font-sans">
            Venue
          </p>
          <a
            href="https://maps.app.goo.gl/mmoS29sJb6nDd4MEA"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-2 hover:text-primary transition-colors"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
              The Writer's Room
            </h3>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              View on Google Maps
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowtimesSection;
