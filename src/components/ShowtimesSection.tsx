import { useEffect, useRef, useState } from "react";

const shows = [
  { date: "13 Feb", show: "Show 1", time: "Evening", seats: "Limited" },
  { date: "13 Feb", show: "Show 2", time: "Late Night", seats: "Limited" },
  { date: "13 Feb", show: "Show 3", time: "Night", seats: "Limited" },
  { date: "14 Feb", show: "Show 1", time: "Evening", seats: "Limited" },
  { date: "14 Feb", show: "Show 2", time: "Late Night", seats: "Limited" },
  { date: "14 Feb", show: "Show 3", time: "Night", seats: "Limited" },
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
    <section id="showtimes" className="py-32 px-6 relative film-grain">
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
            Choose Your Night
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
      </div>
    </section>
  );
};

export default ShowtimesSection;
