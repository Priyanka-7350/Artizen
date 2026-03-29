import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F9F6F0]/92 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          data-testid="navbar-logo"
          className="font-['DM_Serif_Display'] text-xl md:text-2xl text-[#2C302E] tracking-tight select-none"
        >
          Artizen Café
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              data-testid={`nav-${label.toLowerCase()}`}
              className="nav-link font-['Poppins'] text-sm text-[#5C635F] hover:text-[#2C302E] transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          data-testid="navbar-cta"
          className="hidden lg:inline-block font-['Poppins'] text-sm font-medium bg-[#E07A5F] text-white px-5 py-2.5 rounded-full hover:bg-[#c8694f] transition-all duration-300 hover:shadow-md"
        >
          Book a Session
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          data-testid="mobile-menu-toggle"
          aria-label="Toggle navigation"
          className="lg:hidden p-1.5 text-[#2C302E] rounded-lg"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[#F9F6F0] border-t border-[#e2d9ce] px-6 pt-4 pb-6 flex flex-col gap-0"
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              data-testid={`mobile-nav-${label.toLowerCase()}`}
              className="font-['Poppins'] text-[15px] text-[#2C302E] py-3.5 border-b border-[#e2d9ce] last:border-0"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            data-testid="mobile-cta"
            onClick={() => setMobileOpen(false)}
            className="mt-4 font-['Poppins'] font-medium bg-[#E07A5F] text-white py-3 rounded-full text-center text-sm"
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
