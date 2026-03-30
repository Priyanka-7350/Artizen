import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const reels = [
  'DWdJ0toDPNi',
  'DWbtr32ohVK',
  'DWZFmG6EvVF',
  'DWY-5AUjReg',
  'DWTmN3BDIWN',
  'DWPE9L1CkVk',
  'DWPCljKiKy1',
  'DWO1JWigkzG',
  'DWOK3oTiE_P',
  'DWLWJMuDArh',
  'DWKOcfUErp5',
  'DWGfVpjjPEw',
  'DV7lhngEVsi',
];

const ReelsSection = () => {
  const scrollRef = useRef(null);

  const scrollBy = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 290, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="reels"
      data-testid="reels-section"
      className="py-20 md:py-28 bg-[#F9F6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="scroll-reveal section-label block mb-3">As Seen on Instagram</span>
            <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#2C302E] leading-tight">
              Life at Artizen
            </h2>
          </div>
          <div className="scroll-reveal delay-2 flex items-center gap-3">
            <button
              onClick={() => scrollBy(-1)}
              data-testid="reels-prev-btn"
              aria-label="Scroll reels left"
              className="w-10 h-10 rounded-full border border-[#E2D9CE] flex items-center justify-center text-[#5C635F] hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              data-testid="reels-next-btn"
              aria-label="Scroll reels right"
              className="w-10 h-10 rounded-full border border-[#E2D9CE] flex items-center justify-center text-[#5C635F] hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reels-instagram-link"
              className="inline-flex items-center gap-2 font-['Poppins'] text-sm font-medium text-[#E07A5F] hover:text-[#c8694f] transition-colors"
            >
              <Instagram size={15} />
              Follow Us
            </a>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="scroll-reveal delay-2 flex gap-4 overflow-x-auto pb-4 reels-scroll snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin' }}
        >
          {reels.map((code) => (
            <div
              key={code}
              data-testid={`reel-${code}`}
              className="shrink-0 snap-center rounded-2xl overflow-hidden bg-[#F1EDE4] border border-[#E2D9CE]"
              style={{ width: '270px', height: '480px' }}
            >
              <iframe
                src={`https://www.instagram.com/reel/${code}/embed/`}
                width="270"
                height="480"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allowFullScreen
                title={`Instagram Reel ${code}`}
                loading="lazy"
                style={{ border: 'none', display: 'block' }}
              />
            </div>
          ))}
        </div>

        <p className="mt-4 font-['Poppins'] text-xs text-[#5C635F] text-center italic">
          Scroll to see more → Tap a reel to watch &amp; unmute
        </p>
      </div>
    </section>
  );
};

export default ReelsSection;
