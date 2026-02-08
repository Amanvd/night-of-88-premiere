import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain vignette">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dark atmospheric café interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/80 to-background" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="animate-fade-up text-xs tracking-[0.5em] uppercase text-primary/80 mb-8 pt-6 font-sans">
          A Psychological Thriller
        </p>

        <h1 className="animate-fade-up-delay-1 font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.85] mb-6">
          <span className="block text-primary">ON THE</span>
          <span className="block text-primary">NIGHT</span>
          <span className="block text-foreground">OF <span className="text-primary">88</span></span>
        </h1>

        <p className="animate-fade-up-delay-2 text-muted-foreground text-lg md:text-xl italic font-serif mt-8 mb-4">
          "Some nights never end."
        </p>

        <div className="animate-fade-up-delay-3 mt-10 space-y-4">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans">
            Private Café Screening · Limited Seats
          </p>
          <p className="text-2xl md:text-3xl font-serif text-foreground font-bold">
            13 & 14 February
          </p>
          <a
            href="#register"
            className="inline-block mt-6 bg-primary text-primary-foreground text-sm tracking-[0.25em] uppercase px-8 sm:px-10 py-4 rounded-sm hover:bg-primary/90 transition-all duration-300 font-medium hover:shadow-[0_0_30px_hsl(0_72%_50%/0.3)]"
          >
            Reserve Your Seat
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50 animate-pulse-glow" />
      </div>
    </section>
  );
};

export default HeroSection;
