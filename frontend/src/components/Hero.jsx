import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image:
      'https://static.prod-images.emergentagent.com/jobs/a47afbc5-59ad-4fa3-98cf-3b506c6040c0/images/4883473fd5b6f0e110df1c88d2deb6f281df43dc09ce9210849298702f45ff76.png',
    eyebrow: "Pune's Creative Experience Space",
    lines: ['More Than a Café —', "It's an Experience"],
    sub: 'Where creativity meets comfort. Pick up a brush, order your favourite brew, and leave with something beautiful.',
    ctas: [
      { text: 'Explore Experiences', href: '#experiences', primary: true },
      { text: 'Our Story', href: '#about', primary: false },
    ],
  },
  {
    id: 2,
    image:
      '/Images/slide1.jpg',
    eyebrow: 'Where Pune Creates',
    lines: ['Every Session', 'Is a Story'],
    sub: "Join hundreds of people who've discovered their inner artist at Artizen. No experience needed.",
    ctas: [
      { text: 'See Our Sessions', href: '#experiences', primary: true },
      { text: 'View Gallery', href: '#gallery', primary: false },
    ],
  },
  {
    id: 3,
    image:
      '/Images/slide2.jpg',
    eyebrow: 'Art Is More Fun Together',
    lines: ['Paint. Laugh.', 'Remember.'],
    sub: 'Bring your friends, your partner, or just yourself. Every visit becomes a memory worth keeping.',
    ctas: [
      { text: 'Book a Session', href: '#contact', primary: true },
      { text: 'See Events', href: '#events', primary: false },
    ],
  },
  {
    id: 4,
    image:
      '/Images/slide3.jpg',
    eyebrow: 'Find Your Creative Rhythm',
    lines: ['Unplug.', 'Paint. Be Present.'],
    sub: 'Step away from the screen and into a world of colour. Artizen is your creative sanctuary in Pune.',
    ctas: [
      { text: 'Explore Experiences', href: '#experiences', primary: true },
      { text: 'Get Directions', href: '#contact', primary: false },
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '620px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide backgrounds (crossfade) */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.04) 35%,rgba(22,22,18,0.75) 100%)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-5 sm:px-8 pb-16">
        <span className="inline-block font-['Poppins'] text-[0.65rem] sm:text-[0.7rem] tracking-[0.24em] uppercase text-white/75 mb-4 sm:mb-5 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
          {slide.eyebrow}
        </span>

        <h1
          data-testid="hero-title"
          className="font-['DM_Serif_Display'] text-white leading-none tracking-tight mb-4 sm:mb-5"
          style={{ fontSize: 'clamp(2.4rem, 7.5vw, 6rem)' }}
        >
          {slide.lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p
          className="font-['Poppins'] font-light text-white/85 leading-relaxed max-w-xs sm:max-w-md mb-7 sm:mb-9"
          style={{ fontSize: 'clamp(0.82rem, 1.8vw, 1.05rem)' }}
        >
          {slide.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          {slide.ctas.map((cta, i) => (
            <a
              key={i}
              href={cta.href}
              data-testid={i === 0 ? 'hero-primary-cta' : 'hero-secondary-cta'}
              className={`font-['Poppins'] font-medium text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 w-full sm:w-auto text-center ${
                cta.primary
                  ? 'bg-[#E07A5F] text-white hover:bg-[#c8694f] hover:shadow-xl hover:-translate-y-0.5'
                  : 'border border-white/35 text-white hover:bg-white/15 backdrop-blur-sm'
              }`}
            >
              {cta.text}
            </a>
          ))}
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        data-testid="hero-prev-btn"
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        data-testid="hero-next-btn"
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            data-testid={`hero-dot-${i}`}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
