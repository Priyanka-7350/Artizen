import { Clock, Calendar, Users } from 'lucide-react';

const events = [
  {
    id: 'watercolor-weekend',
    day: 'Every Saturday',
    time: '11:00 AM – 1:00 PM',
    title: 'Watercolour Weekend',
    description:
      'Explore the dreamy, fluid world of watercolours. From soft washes to bold strokes — all levels welcome.',
    spots: '8 spots',
    accent: '#A3B18A',
    bg: '#F0F4EC',
    tag: 'Beginner Friendly',
  },
  {
    id: 'canvas-date',
    day: 'Every Friday',
    time: '7:00 PM – 9:00 PM',
    title: 'Canvas Date Night',
    description:
      'A romantic evening for two. Paint together, sip together, fall a little more in love.',
    spots: '6 couples',
    accent: '#E5B8B7',
    bg: '#FAF0F0',
    tag: 'Couples Only',
  },
  {
    id: 'art-brunch',
    day: 'Every Sunday',
    time: '10:00 AM – 12:00 PM',
    title: 'Art & Brunch',
    description:
      'Start your Sunday the right way — good food, great company, and a blank canvas waiting for your story.',
    spots: '10 spots',
    accent: '#F4D06F',
    bg: '#FDF8EC',
    tag: 'Weekend Special',
  },
  {
    id: 'clay-coffee',
    day: 'Alternate Thursdays',
    time: '9:00 AM – 11:00 AM',
    title: 'Clay & Coffee Morning',
    description:
      'Get your hands dirty with clay while your coffee gets cold. The most therapeutic morning ritual in Pune.',
    spots: '6 spots',
    accent: '#E07A5F',
    bg: '#FDF2EE',
    tag: 'New Experience',
  },
];

const EventCard = ({ event, delay }) => (
  <div
    data-testid={`event-card-${event.id}`}
    className={`scroll-reveal ${delay} card-lift rounded-3xl overflow-hidden bg-white`}
    style={{ backgroundColor: event.bg }}
  >
    {/* Accent top strip */}
    <div className="h-1.5 w-full" style={{ backgroundColor: event.accent }} />

    <div className="p-6 md:p-7">
      {/* Tag */}
      <span
        className="inline-block font-['Poppins'] text-[0.65rem] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4 text-[#2C302E]"
        style={{ backgroundColor: event.accent + '50' }}
      >
        {event.tag}
      </span>

      {/* Title */}
      <h3 className="font-['DM_Serif_Display'] text-[1.6rem] text-[#2C302E] leading-tight mb-3">
        {event.title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins'] font-light text-sm text-[#5C635F] leading-relaxed mb-5">
        {event.description}
      </p>

      {/* Details */}
      <div className="flex flex-col gap-2 mb-6">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-[#5C635F] shrink-0" />
          <span className="font-['Poppins'] text-xs text-[#5C635F]">{event.day}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#5C635F] shrink-0" />
          <span className="font-['Poppins'] text-xs text-[#5C635F]">{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={14} className="text-[#5C635F] shrink-0" />
          <span className="font-['Poppins'] text-xs text-[#5C635F]">Limited to {event.spots}</span>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        data-testid={`event-book-${event.id}`}
        className="inline-block font-['Poppins'] text-sm font-medium px-5 py-2.5 rounded-full text-[#2C302E] transition-all duration-300 hover:shadow-md"
        style={{ backgroundColor: event.accent }}
      >
        Reserve a Spot
      </a>
    </div>
  </div>
);

const Events = () => {
  return (
    <section
      id="events"
      data-testid="events-section"
      className="py-24 md:py-32 bg-[#F9F6F0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="scroll-reveal section-label block mb-3">What's On</span>
          <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-[2.8rem] md:text-5xl text-[#2C302E] leading-tight">
            Join the Creative Circle
          </h2>
          <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-base text-[#5C635F] mt-4 max-w-lg mx-auto leading-relaxed">
            Regular sessions, special evenings, and spontaneous creativity. There's always something happening at Artizen.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {events.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              delay={`delay-${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
