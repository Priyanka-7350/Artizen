const BRUSH_IMG =
  'https://images.pexels.com/photos/4709865/pexels-photo-4709865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
const COFFEE_IMG =
  'https://images.unsplash.com/photo-1770546025492-cbbd01700768?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85';

const pillars = [
  { label: 'Eat', desc: 'Fresh bites for creatives', color: '#A3B18A' },
  { label: 'Sip', desc: 'Artisanal brews & dreamy drinks', color: '#E5B8B7' },
  { label: 'Paint', desc: 'Canvases, brushes & pure joy', color: '#F4D06F' },
];

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-[#F9F6F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Text column */}
          <div>
            <span className="scroll-reveal section-label block mb-4">Our Story</span>
            <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-[2.8rem] md:text-5xl text-[#2C302E] leading-tight mb-6">
              A Canvas for<br />Every Craving
            </h2>
            <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-base text-[#5C635F] leading-relaxed mb-4">
              Artizen Café was born from a simple, beautiful idea:{' '}
              <em className="font-normal text-[#2C302E]">what if your favourite café also let you paint?</em>{' '}
              Nestled in the heart of Pune, we're a creative experience space where art, coffee, and warmth converge.
            </p>
            <p className="scroll-reveal delay-3 font-['Poppins'] font-light text-base text-[#5C635F] leading-relaxed mb-10">
              Whether you're picking up a brush for the first time or you're a seasoned creative, Artizen is your corner of the world. We believe creativity isn't a talent — it's a ritual. Come, lose yourself in colour, and leave with a piece of your heart on canvas.
            </p>

            {/* Pillars */}
            <div className="scroll-reveal delay-4 grid grid-cols-3 gap-3">
              {pillars.map(({ label, desc, color }) => (
                <div
                  key={label}
                  data-testid={`pillar-${label.toLowerCase()}`}
                  className="group text-center p-4 rounded-2xl bg-[#F1EDE4] hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div
                    className="w-8 h-1.5 rounded-full mx-auto mb-3"
                    style={{ backgroundColor: color }}
                  />
                  <p className="font-['DM_Serif_Display'] text-xl text-[#2C302E] mb-1">{label}</p>
                  <p className="font-['Poppins'] text-xs text-[#5C635F] leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="scroll-reveal delay-2 relative h-[420px] md:h-[520px] lg:h-[560px]">
            {/* Main image — top right */}
            <div className="absolute top-0 right-0 w-[72%] h-[75%] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={BRUSH_IMG}
                alt="Painting brushes with colourful palette"
                className="w-full h-full object-cover img-hover"
              />
            </div>

            {/* Secondary image — bottom left */}
            <div className="absolute bottom-0 left-0 w-[50%] h-[48%] rounded-2xl overflow-hidden shadow-lg border-4 border-[#F9F6F0]">
              <img
                src={COFFEE_IMG}
                alt="Artisan latte at Artizen Café"
                className="w-full h-full object-cover img-hover"
              />
            </div>

            {/* Colour blobs */}
            <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-[#F4D06F]/30 blur-3xl pointer-events-none blob-decoration" />
            <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-[#E5B8B7]/40 blur-2xl pointer-events-none" />

            {/* Floating badge */}
            <div className="absolute -top-4 left-4 md:left-8 bg-[#A3B18A] text-white rounded-2xl px-4 py-3 shadow-lg">
              <p className="font-['DM_Serif_Display'] text-base leading-tight">Since 2022</p>
              <p className="font-['Poppins'] text-xs opacity-90">Pune, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
