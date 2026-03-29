const HERO_IMG =
  'https://static.prod-images.emergentagent.com/jobs/a47afbc5-59ad-4fa3-98cf-3b506c6040c0/images/4883473fd5b6f0e110df1c88d2deb6f281df43dc09ce9210849298702f45ff76.png';

const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '620px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      />

      {/* Layered gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.02) 35%, rgba(28,28,22,0.72) 100%)',
        }}
      />

      {/* Decorative paint-splash dots */}
      <div className="absolute top-10 right-10 opacity-25 pointer-events-none hidden md:block">
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none">
          <circle cx="65" cy="65" r="9" fill="#E07A5F" />
          <circle cx="38" cy="28" r="6" fill="#F4D06F" />
          <circle cx="100" cy="42" r="7" fill="#A3B18A" />
          <circle cx="22" cy="88" r="5" fill="#E5B8B7" />
          <circle cx="108" cy="96" r="8" fill="#E07A5F" opacity="0.6" />
          <circle cx="52" cy="108" r="4" fill="#F4D06F" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pb-16">
        <span className="hero-label inline-block font-['Poppins'] text-[0.7rem] tracking-[0.24em] uppercase text-white/75 mb-5 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
          Pune's Creative Experience Space
        </span>

        <h1
          data-testid="hero-title"
          className="hero-title font-['DM_Serif_Display'] text-white leading-none tracking-tight mb-5"
          style={{ fontSize: 'clamp(3.6rem, 10vw, 7.5rem)' }}
        >
          Eat. Sip. Paint.
        </h1>

        <p className="hero-sub font-['Poppins'] font-light text-white/85 leading-relaxed max-w-md mb-9"
           style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
          Where creativity meets comfort. Pick up a brush, order your favourite brew, and leave with a piece of your heart on canvas.
        </p>

        <div className="hero-cta flex flex-wrap gap-3 justify-center">
          <a
            href="#experiences"
            data-testid="hero-explore-btn"
            className="font-['Poppins'] font-medium text-sm bg-[#E07A5F] text-white px-8 py-3.5 rounded-full hover:bg-[#c8694f] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Experiences
          </a>
          <a
            href="#about"
            data-testid="hero-story-btn"
            className="font-['Poppins'] font-medium text-sm border border-white/35 text-white px-8 py-3.5 rounded-full hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 float-animation opacity-60">
        <div className="w-5 h-9 border-2 border-white/50 rounded-full flex justify-center items-start pt-1.5">
          <div className="w-0.5 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
