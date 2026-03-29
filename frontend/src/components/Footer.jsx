import { Instagram, Facebook, Twitter } from 'lucide-react';

const quickLinks = ['About', 'Experiences', 'Menu', 'Gallery', 'Events', 'Reviews', 'Contact'];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://www.twitter.com' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="bg-[#2C302E] text-white relative overflow-hidden"
    >
      {/* Decorative colour blobs */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: '#A3B18A', filter: 'blur(70px)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: '#E07A5F', filter: 'blur(60px)' }}
      />

      {/* Top section — massive display text */}
      <div className="relative border-b border-white/10 py-16 md:py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-['DM_Serif_Display'] leading-none select-none text-white/10"
            style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
          >
            Artizen
          </h2>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-4">
            <p className="font-['DM_Serif_Display'] italic text-[#E07A5F] text-xl md:text-2xl">
              Eat • Sip • Paint
            </p>
            <a
              href="#contact"
              data-testid="footer-book-btn"
              className="font-['Poppins'] text-sm font-medium bg-[#E07A5F] text-white px-6 py-3 rounded-full hover:bg-[#c8694f] transition-colors duration-300 shrink-0"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-['DM_Serif_Display'] text-2xl text-white mb-3">Artizen Café</p>
            <p className="font-['Poppins'] font-light text-sm text-white/55 leading-relaxed mb-5 max-w-xs">
              A creative experience space in Pune where art, coffee, and warmth converge. Your corner to create.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-[#E07A5F] hover:text-[#E07A5F] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-['Poppins'] text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    data-testid={`footer-link-${link.toLowerCase()}`}
                    className="font-['Poppins'] text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit us */}
          <div>
            <p className="font-['Poppins'] text-xs uppercase tracking-[0.2em] text-white/40 mb-5">
              Visit Us
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-['Poppins'] text-xs text-white/40 mb-1">Address</p>
                <p className="font-['Poppins'] text-sm text-white/65 leading-relaxed">
                  12, FC Road, Shivajinagar<br />Pune – 411004, Maharashtra
                </p>
              </div>
              <div>
                <p className="font-['Poppins'] text-xs text-white/40 mb-1">Hours</p>
                <p className="font-['Poppins'] text-sm text-white/65 leading-relaxed">
                  Tue – Sun: 10 AM – 9 PM<br />Monday: Closed
                </p>
              </div>
              <div>
                <p className="font-['Poppins'] text-xs text-white/40 mb-1">Contact</p>
                <a
                  href="tel:+919876543210"
                  data-testid="footer-phone"
                  className="font-['Poppins'] text-sm text-white/65 hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 lg:px-10 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center">
          <p className="font-['Poppins'] text-xs text-white/30">
            © {year} Artizen Café, Pune. All rights reserved.
          </p>
          <p className="font-['Poppins'] text-xs text-white/25 italic">
            Where every visit is a masterpiece.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
