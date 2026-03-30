import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const UP = 'https://customer-assets.emergentagent.com/job_artizen-canvas/artifacts/';
const GH = 'https://raw.githubusercontent.com/Priyanka-7350/Artizen-Website/main/';

const reviews = [
  {
    id: 1,
    name: 'Riya Sharma',
    role: 'Date Night Visit',
    photo: `${GH}655943747_17988473345957189_7670786767594726046_n.jpg`,
    rating: 5,
    text: "Came for a date night and left with a masterpiece and memories. The vibe is absolutely unreal — warm, cozy, and perfectly artistic. We're already planning our next visit!",
  },
  {
    id: 2,
    name: 'Aarav Mehta',
    role: 'Friends Outing',
    photo: `${UP}nyi2n85w_651074300_17987449343957189_8356130856163082839_n.jpg`,
    rating: 5,
    text: 'Best birthday surprise idea ever! My friends loved the painting session so much. The coffee is top-notch and the staff made the whole experience so special.',
  },
  {
    id: 3,
    name: 'Priya Kulkarni',
    role: 'Weekly Regular',
    photo: `${UP}5jvjr4jl_650305993_17987449382957189_7978341390699930889_n.jpg`,
    rating: 5,
    text: 'This place is pure magic. I go every Sunday for the art brunch and it has become my ritual. Something about painting while eating good food and sipping chai just resets my soul.',
  },
  {
    id: 4,
    name: 'Sahil Desai',
    role: 'First-time Visitor',
    photo: `${UP}9hwjvrta_651011976_17987449445957189_4522402988618780881_n.jpg`,
    rating: 5,
    text: 'Finally a café that does something truly unique. The ambiance is Instagram-worthy, the food is delicious, and the painting sessions are genuinely fun for non-artists like me.',
  },
  {
    id: 5,
    name: 'Ananya Rao',
    role: 'Solo Session',
    photo: `${UP}7ebgxfwl_650990055_17987449391957189_5869847284198424935_n.jpg`,
    rating: 5,
    text: "Took a solo painting session and it was the most therapeutic afternoon I've had in months. Just me, my canvas, a latte, and the most beautiful playlist. 10/10.",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} className="fill-[#F4D06F] text-[#F4D06F]" />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useCallback(
    (dir) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + dir + reviews.length) % reviews.length);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 5500);
    return () => clearInterval(timer);
  }, [navigate]);

  const review = reviews[current];

  return (
    <section
      id="reviews"
      data-testid="testimonials-section"
      className="py-20 md:py-32 bg-[#F1EDE4] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <span className="scroll-reveal section-label block mb-3">Voices from the Canvas</span>
          <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#2C302E] leading-tight">
            What Our Artists Say
          </h2>
        </div>

        {/* Carousel card */}
        <div
          data-testid="testimonial-carousel"
          className="scroll-reveal delay-2 relative bg-[#F9F6F0] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm"
        >
          {/* Big decorative quote */}
          <div
            className="absolute top-4 left-6 font-['DM_Serif_Display'] leading-none pointer-events-none select-none"
            style={{ fontSize: 'clamp(5rem,12vw,7rem)', color: '#E07A5F', opacity: 0.1 }}
            aria-hidden="true"
          >
            "
          </div>

          {/* Content */}
          <div
            className="relative z-10"
            style={{ opacity: isAnimating ? 0 : 1, transition: 'opacity 0.3s ease' }}
          >
            <StarRating count={review.rating} />

            <blockquote className="font-['DM_Serif_Display'] italic text-lg sm:text-xl md:text-2xl text-[#2C302E] leading-relaxed mt-4 mb-6 md:mb-8">
              "{review.text}"
            </blockquote>

            {/* Reviewer — photo + name */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* 1:1 customer photo */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#E2D9CE]">
                <img
                  src={review.photo}
                  alt={review.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <p className="font-['Poppins'] font-medium text-sm text-[#2C302E]">{review.name}</p>
                <p className="font-['Poppins'] text-xs text-[#5C635F]">{review.role}</p>
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex gap-2">
            <button
              onClick={() => navigate(-1)}
              data-testid="testimonial-prev"
              aria-label="Previous review"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E2D9CE] flex items-center justify-center text-[#5C635F] hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-all duration-300"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => navigate(1)}
              data-testid="testimonial-next"
              aria-label="Next review"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E2D9CE] flex items-center justify-center text-[#5C635F] hover:bg-[#E07A5F] hover:text-white hover:border-[#E07A5F] transition-all duration-300"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              data-testid={`testimonial-dot-${i}`}
              aria-label={`Review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === current ? 'w-6 bg-[#E07A5F]' : 'w-1.5 bg-[#E2D9CE] hover:bg-[#A3B18A]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
