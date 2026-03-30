import { ZoomIn } from 'lucide-react';

const GH = 'https://raw.githubusercontent.com/Priyanka-7350/Artizen-Website/main/';
const UP = 'https://customer-assets.emergentagent.com/job_artizen-canvas/artifacts/';

const galleryImages = [
  // Uploaded real café customer images
  { url: `${UP}nyi2n85w_651074300_17987449343957189_8356130856163082839_n.jpg`, alt: 'Friends with paintings at Artizen' },
  { url: `${UP}5jvjr4jl_650305993_17987449382957189_7978341390699930889_n.jpg`, alt: 'Painting outdoors at Artizen' },
  { url: `${UP}bu968c51_650750727_17987449418957189_936890723416456691_n.jpg`, alt: 'Group session overhead view' },
  { url: `${UP}7ebgxfwl_650990055_17987449391957189_5869847284198424935_n.jpg`, alt: 'Two artists at Artizen Café' },
  { url: `${UP}9hwjvrta_651011976_17987449445957189_4522402988618780881_n.jpg`, alt: 'Painting session in progress' },

  // GitHub real café images
  { url: `${GH}651133878_17987449409957189_8254288634157859052_n.jpg`, alt: 'Artizen Café moment' },
  { url: `${GH}652252096_17987449352957189_6171440808765095993_n.jpg`, alt: 'Creative session at Artizen' },
  { url: `${GH}654911069_17988473393957189_4833772707850184219_n.jpg`, alt: 'Art café atmosphere' },
  { url: `${GH}655101581_17988473372957189_2300121547585468406_n.jpg`, alt: 'Painting in progress' },
  { url: `${GH}655345934_17988473369957189_8950525848806477298_n.jpg`, alt: 'Artizen Café experience' },
  { url: `${GH}655591471_18314161882281189_1695804068024884694_n.jpg`, alt: 'Creative art moment' },
  { url: `${GH}655650161_17989326449957189_3152244345571613120_n.jpg`, alt: 'Artizen session' },
  { url: `${GH}655683715_17989326509957189_8219164673699429152_n.jpg`, alt: 'Canvas and brushes' },
  { url: `${GH}655852876_17988473402957189_4267218922830974246_n.jpg`, alt: 'Art café vibe' },
  { url: `${GH}655930560_17988473336957189_4740933777782272394_n.jpg`, alt: 'Creative workshop' },
  { url: `${GH}655943747_17988473345957189_7670786767594726046_n.jpg`, alt: 'Artizen moment' },
  { url: `${GH}656015921_17989456736957189_1543319552785002958_n.jpg`, alt: 'Painting session' },
  { url: `${GH}656025650_17988473411957189_6732360852035598378_n.jpg`, alt: 'Café art experience' },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-20 md:py-32 bg-[#F1EDE4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <div>
            <span className="scroll-reveal section-label block mb-3">Our World</span>
            <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-4xl md:text-5xl text-[#2C302E] leading-tight">
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
              className="masonry-item relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full block transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#E07A5F]/0 group-hover:bg-[#E07A5F]/20 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2.5">
                  <ZoomIn className="text-white" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
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
