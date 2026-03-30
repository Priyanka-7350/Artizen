import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: '12, FC Road, Shivajinagar, Pune – 411004',
    accent: '#E07A5F',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    accent: '#A3B18A',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@artizencafe.in',
    accent: '#E5B8B7',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Tue – Sun: 10 AM – 9 PM\nMonday: Closed',
    accent: '#F4D06F',
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#F9F6F0]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="scroll-reveal section-label block mb-3">Find Us</span>
          <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-[2.8rem] md:text-5xl text-[#2C302E] leading-tight">
            Come Create with Us
          </h2>
          <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-base text-[#5C635F] mt-4 max-w-lg mx-auto">
            We're tucked in the heart of Pune, waiting to help you make something beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* Map placeholder */}
          <div className="scroll-reveal delay-1 order-2 lg:order-1">
            <div
              className="w-full rounded-3xl overflow-hidden bg-[#E8EFE4] relative"
              style={{ height: '400px' }}
              data-testid="map-placeholder"
            >
              {/* Styled map placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                {/* Grid lines for map feel */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full border-b border-[#A3B18A]"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-full border-r border-[#A3B18A]"
                      style={{ left: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                </div>

                {/* Road-like shapes */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute bg-white/60 rounded-full"
                    style={{ width: '60%', height: '12px', top: '45%', left: '20%' }} />
                  <div className="absolute bg-white/60 rounded-full"
                    style={{ width: '12px', height: '50%', left: '50%', top: '25%' }} />
                </div>

                {/* Pin */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-[#E07A5F] rounded-full flex items-center justify-center shadow-xl">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="bg-white rounded-2xl px-5 py-3 shadow-lg text-center">
                    <p className="font-['DM_Serif_Display'] text-lg text-[#2C302E]">Artizen Café</p>
                    <p className="font-['Poppins'] text-xs text-[#5C635F]">FC Road, Pune</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="get-directions-btn"
              className="mt-4 w-full flex items-center justify-center gap-2 font-['Poppins'] text-sm font-medium text-white bg-[#2C302E] px-5 py-3.5 rounded-full hover:bg-[#4A5240] transition-colors duration-300"
            >
              <MapPin size={14} />
              Get Directions
            </a>
          </div>

          {/* Contact info */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactItems.map(({ icon: Icon, label, value, accent }, i) => (
                <div
                  key={label}
                  data-testid={`contact-${label.toLowerCase()}`}
                  className={`scroll-reveal delay-${i + 1} bg-[#F1EDE4] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: accent + '30' }}
                  >
                    <Icon size={16} style={{ color: accent }} />
                  </div>
                  <p className="font-['Poppins'] text-xs text-[#5C635F] mb-1 uppercase tracking-wider">{label}</p>
                  <p className="font-['Poppins'] text-sm text-[#2C302E] whitespace-pre-line leading-relaxed">{value}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="scroll-reveal delay-4">
              <p className="font-['Poppins'] text-xs text-[#5C635F] uppercase tracking-wider mb-3">Follow our journey</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-instagram"
                  className="flex items-center gap-2 font-['Poppins'] text-sm font-medium bg-[#F1EDE4] text-[#2C302E] px-4 py-2.5 rounded-full hover:bg-[#E07A5F] hover:text-white transition-all duration-300"
                >
                  <Instagram size={14} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="social-facebook"
                  className="flex items-center gap-2 font-['Poppins'] text-sm font-medium bg-[#F1EDE4] text-[#2C302E] px-4 py-2.5 rounded-full hover:bg-[#A3B18A] hover:text-white transition-all duration-300"
                >
                  <Facebook size={14} />
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
