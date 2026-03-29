const bites = [
  { name: 'Avocado Toast with Microgreens', price: '₹280' },
  { name: 'Bruschetta Platter', price: '₹250' },
  { name: 'Truffle Cheese Board', price: '₹380' },
  { name: 'Pesto Pasta Bowl', price: '₹320' },
  { name: 'Garden Salad & Lemon Dressing', price: '₹220' },
  { name: 'Focaccia with Herb Dip', price: '₹200' },
];

const sips = [
  { name: 'Signature Artizen Latte', price: '₹180' },
  { name: 'Matcha Bloom', price: '₹200' },
  { name: 'Cold Brew Canvas', price: '₹190' },
  { name: 'Rose Cardamom Chai', price: '₹160' },
  { name: 'Blue Spirulina Lemonade', price: '₹220' },
  { name: 'Fresh Mint Cooler', price: '₹150' },
  { name: 'Golden Turmeric Milk', price: '₹170' },
];

const specials = [
  {
    name: "The Creator's Plate",
    desc: 'Coffee + Bruschetta + Canvas Session',
    price: '₹650',
  },
  {
    name: 'Date Night Bundle',
    desc: '2 drinks + Cheese Board + 2 Canvases',
    price: '₹1,200',
  },
  {
    name: 'Friends Circle Pack',
    desc: '4 coffees + Sharing Platter + 4 Sessions',
    price: '₹2,800',
  },
  {
    name: 'Solo Artist Set',
    desc: 'Latte + Avocado Toast + Canvas',
    price: '₹580',
  },
];

const MenuItem = ({ name, price, desc }) => (
  <div className="flex items-end gap-1 py-3 border-b border-[#E2D9CE] last:border-0 group">
    <div className="flex-1 min-w-0">
      <p className="font-['Poppins'] text-sm text-[#2C302E] group-hover:text-[#E07A5F] transition-colors duration-300">
        {name}
      </p>
      {desc && (
        <p className="font-['Poppins'] text-xs text-[#5C635F] mt-0.5 leading-snug">{desc}</p>
      )}
    </div>
    <div className="dot-leader shrink-0" style={{ width: '24px' }} />
    <span className="font-['Poppins'] text-sm font-medium text-[#E07A5F] shrink-0">{price}</span>
  </div>
);

const MenuColumn = ({ title, accent, items, delay }) => (
  <div className={`scroll-reveal ${delay}`}>
    <div className="mb-5 flex items-center gap-3">
      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: accent }} />
      <h3 className="font-['DM_Serif_Display'] text-2xl text-[#2C302E]">{title}</h3>
    </div>
    <div>
      {items.map((item) => (
        <MenuItem key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <section
      id="menu"
      data-testid="menu-section"
      className="py-24 md:py-32 bg-[#F9F6F0] relative overflow-hidden"
    >
      {/* Decorative paint blob */}
      <div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: '#F4D06F', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full opacity-15 pointer-events-none"
        style={{ backgroundColor: '#E5B8B7', filter: 'blur(50px)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="scroll-reveal section-label block mb-3">The Artizen Menu</span>
            <h2 className="scroll-reveal delay-1 font-['DM_Serif_Display'] text-[2.8rem] md:text-5xl text-[#2C302E] leading-tight">
              Fuel Your<br />Creativity
            </h2>
          </div>
          <p className="scroll-reveal delay-2 font-['Poppins'] font-light text-sm text-[#5C635F] max-w-xs leading-relaxed">
            Every bite and sip is crafted to spark something inside you. Good food, great art.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-12">
          <MenuColumn title="Bites & Plates" accent="#A3B18A" items={bites} delay="delay-1" />
          <MenuColumn title="Café Sips" accent="#E5B8B7" items={sips} delay="delay-2" />
          <MenuColumn title="Artist Specials" accent="#E07A5F" items={specials} delay="delay-3" />
        </div>

        {/* Bottom note */}
        <p className="scroll-reveal delay-4 font-['Poppins'] text-xs text-[#5C635F] text-center mt-14 italic">
          All prices inclusive of taxes. Canvas sessions require advance booking.
        </p>
      </div>
    </section>
  );
};

export default Menu;
