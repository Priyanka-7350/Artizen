const GH = 'https://raw.githubusercontent.com/Priyanka-7350/Artizen-Website/main/';
const UP = 'https://customer-assets.emergentagent.com/job_artizen-canvas/artifacts/';

const experiences = [
  {
    id: 'painting',
    title: 'Painting Sessions',
    subtitle: 'DIY Art for Everyone',
    description:
      'Pick your canvas, choose your palette, and paint freely. No experience needed — just curiosity and a willing hand.',
    image: `${UP}bu968c51_650750727_17987449418957189_936890723416456691_n.jpg`,
    accent: '#A3B18A',
    tag: 'Most Popular',
  },
  {
    id: 'date-night',
    title: 'Date Night',
    subtitle: 'Create Together',
    description:
      'A romantic evening of painting, sipping, and creating memories side by side on the same canvas.',
    image: `${UP}7ebgxfwl_650990055_17987449391957189_5869847284198424935_n.jpg`,
    accent: '#E5B8B7',
    tag: 'Couples',
  },
  {
    id: 'friends',
    title: 'Friends Outing',
    subtitle: 'Art & Laughter',
    description:
      'Bring your crew, share a laugh, and go home with a masterpiece — and a story to tell.',
    image: `${UP}nyi2n85w_651074300_17987449343957189_8356130856163082839_n.jpg`,
    accent: '#F4D06F',
    tag: 'Groups',
  },
  {
    id: 'chill',
    title: 'Chill Time',
    subtitle: 'Just You & Your Art',
    description:
      'A quiet corner, your favourite brew, and a blank canvas. Solo therapy at its absolute finest.',
    image: `${UP}9hwjvrta_651011976_17987449445957189_4522402988618780881_n.jpg`,
    accent: '#E07A5F',
    tag: 'Solo',
  },
];

const ExperienceCard = ({ exp, className = '' }) => (
  <div
    data-testid={`experience-card-${exp.id}`}
    className={`relative overflow-hidden group cursor-pointer rounded-2xl md:rounded-3xl ${className}`}
  >
    <img
      src={exp.image}
      alt={exp.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
      style={{ transition: 'transform 0.7s ease' }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(to top,rgba(18,16,12,0.90) 0%,rgba(0,0,0,0.15) 55%,transparent 100%)',
      }}
    />
    {/* Tag */}
    <div
      className="absolute top-3 left-3 md:top-4 md:left-4 font-['Poppins'] text-[0.6rem] font-semibold px-2.5 py-0.5 rounded-full text-[#2C302E]"
      style={{ backgroundColor: exp.accent }}
    >
      {exp.tag}
    </div>
    {/* Text */}
    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6">
      <p className="font-['Poppins'] text-[0.6rem] text-white/65 uppercase tracking-[0.18em] mb-0.5">
        {exp.subtitle}
      </p>
      <h3 className="font-['DM_Serif_Display'] text-xl md:text-2xl text-white leading-tight mb-1.5">
        {exp.title}
      </h3>
      <p className="font-['Poppins'] text-xs sm:text-sm text-white/75 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-16 group-hover:opacity-100 transition-all duration-500">
        {exp.description}
      </p>
    </div>
  </div>
);

const Experiences = () => {
  return (
    <section
      id="experiences"
      data-testid="experiences-section"
      className="py-20 md:py-32 bg-[#F1EDE4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="scroll-reveal section-label block mb-3">What We Offer</span>
          <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#2C302E] leading-tight">
            Lose Yourself Here
          </h2>
          <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-sm md:text-base text-[#5C635F] mt-4 max-w-lg mx-auto leading-relaxed">
            Each visit to Artizen is a different story. What kind of day are you painting today?
          </p>
        </div>

        {/* Bento grid — mobile: 2-col masonry | desktop: 3-col tetris */}
        <div className="scroll-reveal delay-2">

          {/* Desktop tetris (lg+) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-4" style={{ gridTemplateRows: 'repeat(2, 300px)' }}>
            {/* Painting — tall (row-span-2) */}
            <ExperienceCard exp={experiences[0]} className="row-span-2" />
            {/* Date Night — wide */}
            <ExperienceCard exp={experiences[1]} className="col-span-2" />
            {/* Friends */}
            <ExperienceCard exp={experiences[2]} />
            {/* Chill */}
            <ExperienceCard exp={experiences[3]} />
          </div>

          {/* Mobile/tablet grid (< lg) — 2×2 uniform */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4" style={{ gridAutoRows: '220px' }}>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
