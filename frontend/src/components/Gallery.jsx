import { ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1761728719776-2e20fde6ea8c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Creative café moment',
  },
  {
    url: 'https://images.pexels.com/photos/4709865/pexels-photo-4709865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Watercolor painting in progress',
  },
  {
    url: 'https://images.pexels.com/photos/17368121/pexels-photo-17368121.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Art café interior',
  },
  {
    url: 'https://images.unsplash.com/photo-1681477701208-f5233e9dcd45?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Painting session at Artizen',
  },
  {
    url: 'https://images.unsplash.com/photo-1770546025492-cbbd01700768?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Artisan latte art',
  },
  {
    url: 'https://images.unsplash.com/photo-1767528401646-950a1f1186f4?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Colourful artwork on café wall',
  },
  {
    url: 'https://images.pexels.com/photos/19758894/pexels-photo-19758894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Café atmosphere',
  },
  {
    url: 'https://images.unsplash.com/photo-1687286183607-7c5cd416e50d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Artist paint brushes',
  },
  {
    url: 'https://images.unsplash.com/photo-1774521044355-508615f287ca?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85',
    alt: 'Creative studio session',
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 md:py-32 bg-[#F1EDE4]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="scroll-reveal section-label block mb-3">Our World</span>
            <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-[2.8rem] md:text-5xl text-[#2C302E] leading-tight">
              Moments in Colour
            </h2>
          </div>
          <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-sm text-[#5C635F] max-w-xs leading-relaxed">
            Every picture tells a story of a creative soul who sat here and made something beautiful.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="masonry-grid scroll-reveal delay-2">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              data-testid={`gallery-item-${index}`}
              className="masonry-item relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#E07A5F]/0 group-hover:bg-[#E07A5F]/25 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-instagram-btn"
            className="inline-flex items-center gap-2 font-['Poppins'] text-sm font-medium text-[#2C302E] border border-[#2C302E]/30 px-6 py-3 rounded-full hover:border-[#E07A5F] hover:text-[#E07A5F] transition-all duration-300"
          >
            See more on Instagram
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
