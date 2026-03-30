import { Phone, ArrowRight } from 'lucide-react';

const BG =
  'https://customer-assets.emergentagent.com/job_artizen-canvas/artifacts/bu968c51_650750727_17987449418957189_936890723416456691_n.jpg';

const ReadyToPaintBanner = () => {
  return (
    <section
      data-testid="ready-to-paint-banner"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '420px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1e1e16]/80" />

      {/* Decorative paint-splash */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-8 left-12 w-40 h-40 rounded-full bg-[#E07A5F] blur-3xl" />
        <div className="absolute bottom-8 right-16 w-32 h-32 rounded-full bg-[#A3B18A] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-[#F4D06F] blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <span className="section-label text-white/50 block mb-5">Your Canvas Awaits</span>

        <h2
          className="font-['DM_Serif_Display'] text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Ready to Paint?
        </h2>

        <p className="font-['Poppins'] font-light text-white/70 max-w-lg mx-auto mb-9 leading-relaxed"
           style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)' }}>
          Call us, walk in, or book in advance. Every day at Artizen is a chance to make something
          beautiful and leave with a memory on canvas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="tel:+919876543210"
            data-testid="banner-call-btn"
            className="inline-flex items-center gap-2 font-['Poppins'] font-medium text-sm bg-[#E07A5F] text-white px-8 py-4 rounded-full hover:bg-[#c8694f] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <Phone size={14} />
            Call Now
          </a>
          <a
            href="#contact"
            data-testid="banner-directions-btn"
            className="inline-flex items-center gap-2 font-['Poppins'] font-medium text-sm border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Get Directions
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReadyToPaintBanner;
