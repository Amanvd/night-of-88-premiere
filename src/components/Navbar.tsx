import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <span className="font-serif text-lg tracking-[0.3em] text-primary">ON88</span>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Experience", "Showtimes", "Register"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#register"
          className="bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-sm hover:bg-primary/90 transition-colors duration-300 font-medium"
        >
          Reserve
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
