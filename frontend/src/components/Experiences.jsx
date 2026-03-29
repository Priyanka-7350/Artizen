const PAINTING_IMG =
  'https://images.unsplash.com/photo-1753791271805-0dc8add665e5?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85';
const DATE_NIGHT_IMG =
  'https://static.prod-images.emergentagent.com/jobs/a47afbc5-59ad-4fa3-98cf-3b506c6040c0/images/28e5865fccd7bd753fad711e03024c8db64c2ed2d49226115d6af3461248a2d0.png';
const FRIENDS_IMG =
  'https://static.prod-images.emergentagent.com/jobs/a47afbc5-59ad-4fa3-98cf-3b506c6040c0/images/2ee6a61e1de37e78cf33f41a81b919130dd7c1815edfd7d9335dbc3dac25afb3.png';
const CHILL_IMG =
  'https://static.prod-images.emergentagent.com/jobs/a47afbc5-59ad-4fa3-98cf-3b506c6040c0/images/eb40021aee861af2adfd247488f217caba697e3dc678ee1d38ead33e11b749f2.png';

const experiences = [
  {
    id: 'painting',
    title: 'Painting Sessions',
    subtitle: 'DIY Art for Everyone',
    description:
      'Pick your canvas, choose your palette, and paint freely. No experience needed — just curiosity and a willing hand.',
    image: PAINTING_IMG,
    accent: '#A3B18A',
    tag: 'Most Popular',
  },
  {
    id: 'date-night',
    title: 'Date Night',
    subtitle: 'Create Together',
    description:
      'A romantic evening of painting, sipping, and creating memories side by side on the same canvas.',
    image: DATE_NIGHT_IMG,
    accent: '#E5B8B7',
    tag: 'Couples',
  },
  {
    id: 'friends',
    title: 'Friends Outing',
    subtitle: 'Art & Laughter',
    description:
      'Bring your crew, share a laugh, and go home with a masterpiece — and a story to tell.',
    image: FRIENDS_IMG,
    accent: '#F4D06F',
    tag: 'Groups',
  },
  {
    id: 'chill',
    title: 'Chill Time',
    subtitle: 'Just You & Your Art',
    description:
      'A quiet corner, your favourite brew, and a blank canvas. Solo therapy at its absolute finest.',
    image: CHILL_IMG,
    accent: '#E07A5F',
    tag: 'Solo',
  },
];

const ExperienceCard = ({ exp, className = '' }) => (
  <div
    data-testid={`experience-card-${exp.id}`}
    className={`relative rounded-3xl overflow-hidden group cursor-pointer ${className}`}
  >
    <img
      src={exp.image}
      alt={exp.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    {/* Gradient overlay */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'linear-gradient(to top, rgba(20,18,14,0.88) 0%, rgba(0,0,0,0.08) 60%, transparent 100%)',
      }}
    />
    {/* Tag */}
    <div
      className="absolute top-4 left-4 font-['Poppins'] text-xs font-semibold px-3 py-1 rounded-full text-[#2C302E]"
      style={{ backgroundColor: exp.accent }}
    >
      {exp.tag}
    </div>
    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
      <p className="font-['Poppins'] text-[0.65rem] text-white/65 uppercase tracking-[0.2em] mb-1">
        {exp.subtitle}
      </p>
      <h3 className="font-['DM_Serif_Display'] text-2xl md:text-[1.7rem] text-white leading-tight mb-2">
        {exp.title}
      </h3>
      <p className="font-['Poppins'] text-sm text-white/75 leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500">
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
      className="py-24 md:py-32 bg-[#F1EDE4]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="scroll-reveal section-label block mb-3">What We Offer</span>
          <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-[2.8rem] md:text-5xl text-[#2C302E] leading-tight">
            Lose Yourself Here
          </h2>
          <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-base text-[#5C635F] mt-4 max-w-lg mx-auto leading-relaxed">
            Each visit to Artizen is a different story. What kind of day are you painting today?
          </p>
        </div>

        {/* Tetris / Bento grid — desktop 3 cols, 2 rows */}
        <div
          className="scroll-reveal delay-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{ gridTemplateRows: 'repeat(2, 300px)' }}
        >
          {/* Painting — tall (row span 2) */}
          <ExperienceCard
            exp={experiences[0]}
            className="sm:row-span-2 lg:row-span-2"
          />
          {/* Date Night — wide (col span 2) */}
          <ExperienceCard
            exp={experiences[1]}
            className="lg:col-span-2"
          />
          {/* Friends */}
          <ExperienceCard exp={experiences[2]} />
          {/* Chill */}
          <ExperienceCard exp={experiences[3]} />
        </div>
      </div>
    </section>
  );
};

export default Experiences;
