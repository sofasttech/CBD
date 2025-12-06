import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useInView, PanInfo } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Blog from './Blog';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Panel Beating',
    imageUrl: '/panel-beatt.jpg',
  },
  {
    id: 2,
    title: 'Mechanical Repairs',
    imageUrl: '/car-tune-up.jpg',
  },
  {
    id: 3,
    title: 'Headlight Restoration',
    imageUrl: '/headlight.webp',
  },
  {
    id: 4,
    title: 'Quality Service',
    imageUrl: '/shop.webp',
  },
  {
    id: 5,
    title: 'Expert Care',
    imageUrl: '/tesla.jpg',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { item: typeof accordionItems[0], isActive: boolean, onMouseEnter: () => void }) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive
          ? 'w-[280px] md:w-[400px] h-[350px] md:h-[450px]'
          : 'w-[50px] md:w-[60px] h-[350px] md:h-[450px]'
        }
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { const target = e.target as HTMLImageElement; target.onerror = null; target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${isActive
            ? 'text-base md:text-lg bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
            // Inactive state: vertical, positioned at the bottom, for all screen sizes
            : 'text-sm md:text-base w-auto text-left bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};


// --- About Accordion Section Component ---
function AboutAccordionSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-sans">
      <section id="about-intro" className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-2 md:gap-4 overflow-x-auto p-2 md:p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">About CBD Panelbeaters LTD</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase leading-tight mt-2">Superior Service with a Touch of Class</h2>

            <div className="mt-8">
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Core Values</h3>
              <p className="text-black-900 leading-relaxed font-mulish font-extralight text-lg">
                At CBD Panelbeating & Mechanical, we pride ourselves on delivering exceptional automotive repair services with integrity, precision, and a commitment to excellence. Our family-run business values honesty, quality workmanship, and building lasting relationships with our customers.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Our Story</h3>
              <p className="text-black-900 leading-relaxed font-mulish font-extralight text-lg">
                For over 30 years, we've been serving Auckland with top-tier panel beating, mechanical repairs, and insurance support. From minor dents to major collisions, we treat every vehicle as if it were our own, ensuring your car is restored to perfection.
              </p>
            </div>

            <div className="mt-8">
              <button onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} className="relative bg-blue-600 text-white px-8 py-3 font-medium transition inline-flex items-center gap-2 group">
                <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const AnimatedPercentage = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      const node = ref.current;
      if (!node) return;
      let start = 0;
      const end = target;
      const duration = 2000; // 2 seconds
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const current = Math.min(end, (progress / duration) * end);
        node.textContent = Math.floor(current) + '%';
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, started, target]);

  return <span ref={ref}>0%</span>;
};

const AnimatedNumber = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      const node = ref.current;
      if (!node) return;
      let start = 0;
      const end = target;
      const duration = 2000; // 2 seconds
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const current = Math.min(end, (progress / duration) * end);
        if (suffix === 'K+') {
          node.textContent = (current / 1000).toFixed(1) + 'K+';
        } else {
          node.textContent = Math.floor(current) + suffix;
        }
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [inView, started, target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentImage = 0;
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const aboutImages = ['/panel-beatt.jpg', '/car-tune-up.jpg', '/headlight.webp'];
  const [cards, setCards] = useState<string[]>(aboutImages);
  const [swiping, setSwiping] = useState<{ src: string | null; dir: number }>({ src: null, dir: 0 });

  const heroImages = ['/stf.png'];

  const hotspots = [
    { top: '25%', left: '25%', title: 'Side Mirrors', desc: 'Repair or replace Side Mirrors.' },
    { top: '33%', right: '25%', title: 'Bonnet', desc: 'Restore or replace Bonnet.' },
    { top: '75%', left: '33%', title: 'Tires', desc: 'Check and replace tires for safety.' },
    { top: '67%', right: '33%', title: 'Engine', desc: 'Mechanical repairs and servicing.' },
  ];

  // Card stack replaces the previous auto-rotating about image.
  // Swiped cards are animated out then moved to the back of the stack.
  useEffect(() => {
    if (!swiping.src) return;
    const timer = setTimeout(() => {
      setCards((prev) => {
        if (prev.length <= 1) return prev;
        // move the currently-swiped (top) card to the back
        return [...prev.slice(1), prev[0]];
      });
      setSwiping({ src: null, dir: 0 });
    }, 420);
    return () => clearTimeout(timer);
  }, [swiping]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero - Horizontal Scroll */}
      <section id="home" className="pt-28 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side text */}
          <div>
            <p className="text-blue-600 text-sm font-medium mb-2">Car Troubles?</p>
            <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium text-blue-600 mb-4">Automotive Repair Services</h1>
            <p className="text-xl text-gray-700 mb-6">CBD Panelbeaters LTD is one of Auckland’s leading full service automotive repair services specializing in the full range of repairs including warrant of fitness and mechanical.</p>
            <div className="mb-6">
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <span className="text-green-600">✓</span> Our Work is Guaranteed
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Save Time and Money
              </p>
            </div>
            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-4 py-2 md:px-8 md:py-3 font-medium hover:bg-gray-800 transition">
                View All Services
              </button>
              <button onClick={() => scrollToSection('book-appointment')} className="relative bg-blue-600 text-white px-4 py-2 md:px-8 md:py-3 font-medium transition group">
                <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10">Appointment</span>
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <img src={heroImages[currentImage]} alt="Grey SUV" className="w-full h-auto rounded-lg" />
            {/* Hotspots */}
            {hotspots.map((hotspot, index) => (
              <div
                key={index}
                className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: hotspot.top, left: hotspot.left, right: hotspot.right }}
                onMouseEnter={() => setHoveredHotspot(index)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                <span className="text-red-600 font-bold text-lg">+</span>
              </div>
            ))}
            {/* Tooltip */}
            {hoveredHotspot !== null && (
              <motion.div
                className="absolute bg-black text-white p-2 rounded shadow-lg text-sm max-w-xs z-10 pointer-events-none"
                style={{
                  top: hotspots[hoveredHotspot].top,
                  left: hotspots[hoveredHotspot].left,
                  transform: 'translate(40px, -50%)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-bold">{hotspots[hoveredHotspot].title}</h4>
                <p>{hotspots[hoveredHotspot].desc}</p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="h-16"></div>



      </section>

      {/* Cars Ribbon */}
      <section className="w-full relative">
        <img src="/cars.jpeg" alt="Cars" className="w-full h-44 md:h-auto object-cover object-center" />
        <div className="absolute inset-0 flex items-start justify-start md:justify-center pt-0 md:pt-8 pl-4 md:pl-0">
          <h2 className="text-black text-lg md:text-5xl text-left drop-shadow-lg  font-['Tomorrow'] font-light px-4">
            We SERVICE <span className="text-blue-600">All</span> MAKES and MODELS...<br />
            <span className="text-black md:text-black">FOREIGN and DOMESTIC!</span>
          </h2>
        </div>
      </section>

      {/* Infinity Brand Scroll */}
      <section className="px-2 py-14 bg-white-100 overflow-hidden">
        <div className="max-w-8xl mx-auto">
          <div className="relative flex overflow-hidden">
            <div className="flex gap-0 animate-[infinite-scroll_25s_linear_infinite]">
              <div className="flex gap-0 flex-shrink-0">
                <img src="/brand-01.png" alt="Brand 1" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-02.png" alt="Brand 2" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-03.png" alt="Brand 3" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-04.png" alt="Brand 4" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-05.png" alt="Brand 5" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-06.png" alt="Brand 6" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-07.png" alt="Brand 7" className="h-28 w-auto mx-6 flex-shrink-0" />
              </div>
              <div className="flex gap-0 flex-shrink-0" aria-hidden="true">
                <img src="/brand-01.png" alt="Brand 1" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-02.png" alt="Brand 2" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-03.png" alt="Brand 3" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-04.png" alt="Brand 4" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-05.png" alt="Brand 5" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-06.png" alt="Brand 6" className="h-28 w-auto mx-6 flex-shrink-0" />
                <img src="/brand-07.png" alt="Brand 7" className="h-28 w-auto mx-6 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutAccordionSection />

      <motion.section
        id="about-intro-old"
        className="hidden px-4 pt-0 md:pt-16 pb-14 bg-white text-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Card Stack (swipe top card left/right, moves to back) */}
          <div className="relative -mx-4 md:mx-0 overflow-hidden h-[32rem] md:h-[40rem] flex items-center justify-center">
            {cards.map((src, index) => {
              const isTop = index === 0;
              // slightly tighter vertical spacing between stacked cards (a bit more lift)
              const yOffset = index * 26;
              const scale = 1 - index * 0.02;
              // lift the whole stack higher so cards align with the right column text
              // use a smaller lift on mobile to avoid clipping
              const baseYOffset = isMobile ? -160 : -300;
              const z = cards.length - index;
              // small horizontal offsets so cards peek out from beneath the top card
              const xPeek = index === 1 ? -40 : index === 2 ? 40 : 0;
              // blur background cards to make the top card pop (smaller blur on mobile)
              const blur = isTop ? 'none' : isMobile ? 'blur(4px)' : 'blur(6px)';
              return (
                <motion.img
                  key={src}
                  src={src}
                  alt={`About ${index}`}
                  className="absolute w-3/4 md:w-2/3 h-[85%] md:h-[90%] object-cover shadow-lg border-0 md:border-4 border-white rounded-lg"
                  style={{ zIndex: z, pointerEvents: isTop ? 'auto' : 'none', left: '50%', top: '50%', filter: blur }}
                  initial={{ x: `calc(-50% + ${xPeek}px)`, y: `${baseYOffset + yOffset}px`, scale }}
                  animate={
                    swiping.src === src
                      ? { x: swiping.dir * 1000, rotate: swiping.dir * 15, opacity: 0 }
                      : { x: `calc(-50% + ${xPeek}px)`, y: `${baseYOffset + yOffset}px`, scale, rotate: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.35 }}
                  drag={isTop ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  whileTap={isTop ? { scale: 0.98 } : {}}
                  onDragEnd={
                    isTop
                      ? (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
                        const shouldSwipe = Math.abs(info.offset.x) > 150 || Math.abs(info.velocity.x) > 500;
                        if (shouldSwipe) {
                          setSwiping({ src, dir: info.offset.x > 0 ? 1 : -1 });
                        }
                      }
                      : undefined
                  }
                />
              );
            })}
          </div>

          {/* Right Column: Textual Content */}
          <div className="space-y-4 -mt-4">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">About CBD Panelbeaters LTD</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase leading-tight">Superior Service with a Touch of Class</h2>

            <div className="mb-10">
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Core Values</h3>
              <p className="text-black-900 leading-relaxed font-mulish font-extralight text-lg">
                At CBD Panelbeating & Mechanical, we pride ourselves on delivering exceptional automotive repair services with integrity, precision, and a commitment to excellence. Our family-run business values honesty, quality workmanship, and building lasting relationships with our customers.
              </p>
            </div>

            <div >
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Our Story</h3>
              <p className="text-black-900 leading-relaxed font-mulish font-extralight text-lg">
                For over 30 years, we've been serving Auckland with top-tier panel beating, mechanical repairs, and insurance support. From minor dents to major collisions, we treat every vehicle as if it were our own, ensuring your car is restored to perfection.
              </p>
            </div>

            <button onClick={() => scrollToSection('about')} className="relative bg-blue-600 text-white px-8 py-3 font-medium transition inline-flex items-center gap-2 group">
              <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* Technical Features */}
      <motion.section
        className="px-4 pt-12 pb-12 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Precision Repairs */}
            <div className="card-container group perspective-1000">
              <div className="card-content relative w-full h-96 md:h-[28rem] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Back */}
                <div className="card-back absolute w-full h-full rounded-xl overflow-hidden backface-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-40 h-[160%] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-spin-slow" />
                  </div>
                  <div className="absolute inset-[2px] bg-gray-900 rounded-xl flex flex-col items-center justify-center gap-6 text-white p-6">
                    <img src="/Precision Repairs.jpg" alt="Precision Repairs" className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-lg" />
                    <strong className="text-xl font-['Tomorrow']">Precision Repairs</strong>
                    <p className="text-center text-sm text-gray-300">State-of-the-art equipment for perfect results</p>
                  </div>
                </div>
                {/* Front */}
                <div className="card-front absolute w-full h-full rounded-xl overflow-hidden backface-hidden rotate-y-180 bg-gray-900">
                  <div className="absolute inset-0">
                    <div className="circle-float w-24 h-24 rounded-full bg-blue-400 absolute blur-xl animate-float" style={{ left: '10%', top: '20%' }} />
                    <div className="circle-float w-40 h-40 rounded-full bg-blue-500 absolute blur-xl animate-float-delayed-1" style={{ left: '30%', top: '0%' }} />
                    <div className="circle-float w-8 h-8 rounded-full bg-blue-600 absolute blur-xl animate-float-delayed-2" style={{ left: '80%', top: '-10%' }} />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs w-fit">Premium</span>
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg shadow-xl">
                      <h3 className="text-lg font-bold font-['Tomorrow'] mb-2">Precision Repairs</h3>
                      <p className="text-xs text-gray-300 mb-3">Our state-of-the-art equipment ensures every repair is done with pinpoint accuracy, restoring your vehicle to its original condition.</p>
                      <p className="text-xs text-gray-400">We use advanced laser measuring systems and computerized frame straightening technology to ensure every panel, body line, and structural component is perfectly aligned. From minor dents to major collision damage, our precision approach guarantees factory-level results every time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Quality Materials */}
            <div className="card-container group perspective-1000">
              <div className="card-content relative w-full h-96 md:h-[28rem] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Back */}
                <div className="card-back absolute w-full h-full rounded-xl overflow-hidden backface-hidden">                
                  <div className="absolute inset-[2px] bg-gray-900 rounded-xl flex flex-col items-center justify-center gap-6 text-white p-6">
                    <img src="/oil.jpg" alt="Quality Materials" className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-lg" />
                    <strong className="text-xl font-['Tomorrow']">Quality Materials</strong>
                    <p className="text-center text-sm text-gray-300">Only the best parts and materials used</p>
                  </div>
                </div>
                {/* Front */}
                <div className="card-front absolute w-full h-full rounded-xl overflow-hidden backface-hidden rotate-y-180 bg-gray-900">
                  <div className="absolute inset-0">
                    <div className="circle-float w-24 h-24 rounded-full bg-green-400 absolute blur-xl animate-float" style={{ left: '10%', top: '20%' }} />
                    <div className="circle-float w-40 h-40 rounded-full bg-green-500 absolute blur-xl animate-float-delayed-1" style={{ left: '30%', top: '0%' }} />
                    <div className="circle-float w-8 h-8 rounded-full bg-green-600 absolute blur-xl animate-float-delayed-2" style={{ left: '80%', top: '-10%' }} />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs w-fit">Guaranteed</span>
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg shadow-xl">
                      <h3 className="text-lg font-bold font-['Tomorrow'] mb-2">Quality Materials</h3>
                      <p className="text-xs text-gray-300 mb-3">We use only the highest quality materials and parts to guarantee durability and longevity in every repair we perform.</p>
                      <p className="text-xs text-gray-400">All our paints are premium automotive-grade with UV protection and color-matching technology. We source genuine OEM parts and certified aftermarket components, backed by comprehensive warranties. Our commitment to quality means your vehicle will look and perform like new for years to come.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Experienced Technicians */}
            <div className="card-container group perspective-1000">
              <div className="card-content relative w-full h-96 md:h-[28rem] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Back */}
                <div className="card-back absolute w-full h-full rounded-xl overflow-hidden backface-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-40 h-[160%] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-spin-slow" />
                  </div>
                  <div className="absolute inset-[2px] bg-gray-900 rounded-xl flex flex-col items-center justify-center gap-6 text-white p-6">
                    <img src="/im3.png" alt="Experienced Technicians" className="w-32 h-32 md:w-40 md:h-40 brightness-0 invert" />
                    <strong className="text-xl font-['Tomorrow']">Expert Technicians</strong>
                    <p className="text-center text-sm text-gray-300">Decades of combined experience</p>
                  </div>
                </div>
                {/* Front */}
                <div className="card-front absolute w-full h-full rounded-xl overflow-hidden backface-hidden rotate-y-180 bg-gray-900">
                  <div className="absolute inset-0">
                    <div className="circle-float w-24 h-24 rounded-full bg-orange-400 absolute blur-xl animate-float" style={{ left: '10%', top: '20%' }} />
                    <div className="circle-float w-40 h-40 rounded-full bg-orange-500 absolute blur-xl animate-float-delayed-1" style={{ left: '30%', top: '0%' }} />
                    <div className="circle-float w-8 h-8 rounded-full bg-red-500 absolute blur-xl animate-float-delayed-2" style={{ left: '80%', top: '-10%' }} />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <span className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs w-fit">Certified</span>
                    <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg shadow-xl">
                      <h3 className="text-lg font-bold font-['Tomorrow'] mb-2">Expert Technicians</h3>
                      <p className="text-xs text-gray-300 mb-3">Our team of certified professionals brings decades of experience to deliver exceptional results you can trust.</p>
                      <p className="text-xs text-gray-400">Each technician holds industry certifications and undergoes continuous training on the latest repair techniques and vehicle technologies. With over 30 years of combined experience, our team has mastered the art of panel beating, spray painting, and mechanical repairs across all vehicle makes and models.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes spin-slow {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes float-delayed-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes float-delayed-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }
        .animate-float {
          animation: float 2.6s ease-in-out infinite;
        }
        .animate-float-delayed-1 {
          animation: float-delayed-1 2.6s ease-in-out infinite;
          animation-delay: -0.8s;
        }
        .animate-float-delayed-2 {
          animation: float-delayed-2 2.6s ease-in-out infinite;
          animation-delay: -1.8s;
        }
      `}</style>

      {/* Services Section - Stacking Cards */}
      <section id="services" className="text-black w-full bg-white">
        {/* Hero Section */}
        <div className="h-[50vh] md:h-[60vh] w-full bg-white flex items-center justify-center sticky top-0 -mb-20">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e5e52e_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e52e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl px-8 font-['Tomorrow'] font-bold text-center tracking-tight leading-[120%] relative z-10 -mt-32">
            DISTINCTIVE SERVICE FOR <br /> DISCERNING DRIVERS
          </h1>
        </div>

        {/* Stacking Cards Section */}
        <div className="w-full bg-white pt-[40rem]">
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 gap-8">
            {/* Cards Stack */}
            <div className="grid gap-2 flex-1">
              {/* Card 1 - Maintenance */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-green-600 h-72 w-full max-w-2xl rounded-lg rotate-3 p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-['Tomorrow'] font-bold">01</span>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Tomorrow'] uppercase">Maintenance</h3>
                      </div>
                      <p className="text-xs lg:text-sm">
                        Keep your vehicle running smoothly and safely, giving you peace of mind on every journey. Our comprehensive maintenance services include regular oil changes, tire rotations, brake inspections, fluid checks, and diagnostic tests.
                      </p>
                      <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-xs font-medium w-fit bg-black/30 px-3 py-2 rounded-md">
                        LEARN MORE <ChevronRight className="w-3 h-3 ml-2" />
                      </button>
                    </div>
                    <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
                      <img src="/car-polishing-tray.png" alt="Maintenance" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 2 - Wheels */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-blue-600 h-72 w-full max-w-2xl rounded-lg -rotate-2 p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-['Tomorrow'] font-bold">02</span>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Tomorrow'] uppercase">Wheels</h3>
                      </div>
                      <p className="text-xs lg:text-sm">
                        Upgrade your ride with precision wheel services that enhance performance and style. We offer wheel alignment, balancing, tire replacement, and custom rim installations to improve handling, safety, and aesthetics.
                      </p>
                      <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-xs font-medium w-fit bg-black/30 px-3 py-2 rounded-md">
                        LEARN MORE <ChevronRight className="w-3 h-3 ml-2" />
                      </button>
                    </div>
                    <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
                      <img src="/tyer.png" alt="Wheels" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 3 - Alignment */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-orange-500 h-72 w-full max-w-2xl rounded-lg rotate-2 p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-['Tomorrow'] font-bold">03</span>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Tomorrow'] uppercase">Alignment</h3>
                      </div>
                      <p className="text-xs lg:text-sm">
                        Ensure perfect alignment for a smoother, safer drive that you can feel in every turn. Proper wheel alignment improves fuel efficiency, reduces tire wear, and enhances vehicle stability and handling.
                      </p>
                      <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-xs font-medium w-fit bg-black/30 px-3 py-2 rounded-md">
                        LEARN MORE <ChevronRight className="w-3 h-3 ml-2" />
                      </button>
                    </div>
                    <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
                      <img src="/car-pieces.png" alt="Alignment" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 4 - Power Coating */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-red-600 h-72 w-full max-w-2xl rounded-lg -rotate-3 p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-['Tomorrow'] font-bold">04</span>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Tomorrow'] uppercase">Power Coating</h3>
                      </div>
                      <p className="text-xs lg:text-sm">
                        Our power coating service provides a durable, high-quality finish that protects your vehicle from corrosion, scratches, and fading. Using advanced electrostatic application techniques, we ensure even coverage.
                      </p>
                      <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-xs font-medium w-fit bg-black/30 px-3 py-2 rounded-md">
                        LEARN MORE <ChevronRight className="w-3 h-3 ml-2" />
                      </button>
                    </div>
                    <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
                      <img src="/car-polishing-tray.png" alt="Power Coating" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 5 - Brakes */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-purple-600 h-72 w-full max-w-2xl rounded-lg rotate-1 p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-['Tomorrow'] font-bold">05</span>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Tomorrow'] uppercase">Brakes</h3>
                      </div>
                      <p className="text-xs lg:text-sm">
                        Our brake service ensures your vehicle's stopping power is at its best. We inspect, repair, and replace brake pads, rotors, calipers, and brake lines using high-quality parts. Regular maintenance prevents accidents.
                      </p>
                      <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-xs font-medium w-fit bg-black/30 px-3 py-2 rounded-md">
                        LEARN MORE <ChevronRight className="w-3 h-3 ml-2" />
                      </button>
                    </div>
                    <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
                      <img src="/breaks.png" alt="Brakes" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 6 - Engine Service */}
              <figure className="sticky top-0 h-screen grid place-content-center">
                <article className="bg-indigo-600 h-72 w-full max-w-2xl rounded-lg -rotate-1 p-6 lg:p-8 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-['Tomorrow'] font-bold">06</span>
                        <h3 className="text-xl lg:text-2xl font-bold font-['Tomorrow'] uppercase">Engine Service</h3>
                      </div>
                      <p className="text-xs lg:text-sm">
                        Our comprehensive engine service includes diagnostics, tune-ups, oil changes, and major repairs. We use advanced tools to identify issues early and provide expert repairs to keep your engine running smoothly.
                      </p>
                      <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-xs font-medium w-fit bg-black/30 px-3 py-2 rounded-md">
                        LEARN MORE <ChevronRight className="w-3 h-3 ml-2" />
                      </button>
                    </div>
                    <div className="hidden md:block w-32 lg:w-40 flex-shrink-0">
                      <img src="/car-pieces.png" alt="Engine Service" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                </article>
              </figure>
            </div>

            {/* Sticky Side Text */}
            <div className="hidden lg:grid sticky top-0 h-screen place-content-center">
              <h2 className="text-3xl lg:text-5xl px-8 font-medium font-['Tomorrow'] text-center tracking-tight leading-[120%]">
                OUR <br /> SERVICES 😎
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        id="why-choose-us"
        className="py-0 pb-0 bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 items-center">
          {/* Left Column: Content and Persuasion */}
          <div className="text-white p-8 h-90 md:h-[38.8rem] flex flex-col justify-center md:bg-black">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-2">WHY CHOOSE US</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase leading-tight mb-4">ATTENTION TO DETAIL, TAILORED TO YOU</h2>
            <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg mb-8">
              At CBD Panelbeating & Mechanical, we combine decades of expertise with a personalized approach to ensure every vehicle receives the care it deserves. Our commitment to precision and quality means your car isn't just repaired—it's restored to perfection.
            </p>
            {/* Trust Indicators (Progress Bars) */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">EXPERT TECHNICIANS</span>
                  <AnimatedPercentage target={99} />
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full">
                  <motion.div
                    className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '99%' }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">QUICK TURNAROUND</span>
                  <AnimatedPercentage target={99} />
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full">
                  <motion.div
                    className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '99%' }}
                    transition={{ duration: 2, delay: 0.7 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">QUALITY ASSURANCE</span>
                  <AnimatedPercentage target={100} />
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full">
                  <motion.div
                    className="bg-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 2, delay: 0.9 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Visual Impact */}
          <div className="relative h-90 md:h-[38.8rem] flex items-center justify-center">
            <img src="/shop.webp" alt="Luxury Sports Car" className="w-full h-full object-cover shadow-lg" />
          </div>
        </div>
      </motion.section>



      {/* Achievements */}
      <motion.section
        id="achievements"
        className="pt-0 py-16 bg-black "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-0 items-center">
          {/* Left Column: Visual Emphasis */}
          <div className="relative h-96 md:h-[46rem] flex items-center justify-center order-2 md:order-1">
            <img src="/tesla.jpg" alt="High-Performance Vehicle" className="w-full h-full object-cover " />
          </div>
          {/* Right Column: Establishing Authority */}
          <div className="text-white p-8  h-[44rem] md:h-[46rem] flex flex-col justify-center order-1 md:order-2 md:bg-black">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-2">ACHIEVEMENTS</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase leading-tight mb-4">DRIVING IN STYLE, EXPERTLY MAINTAINED</h2>
            <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg mb-8">
              Our commitment to excellence is reflected in our track record of delivering top-tier automotive services across New Zealand. From routine maintenance to complex repairs, we ensure every vehicle leaves our workshops in perfect condition.
            </p>
            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2"><AnimatedNumber target={25} suffix="+" /></div>
                <div className="text-sm text-gray-300">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2"><AnimatedNumber target={600} suffix="+" /></div>
                <div className="text-sm text-gray-300">Expert Mechanics</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2"><AnimatedNumber target={9900} suffix="K+" /></div>
                <div className="text-sm text-gray-300">Repaired Vehicles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-blue-400 mb-2"><AnimatedNumber target={80} suffix="+" /></div>
                <div className="text-sm text-gray-300">Company Branches</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section
        id="how-it-works"
        className="px-4 py-16 bg-black text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-2">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase leading-tight mb-4">SUPERIOR SERVICE WITH A TOUCH OF CLASS</h2>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('book-appointment')} className="relative group bg-blue-600 text-white px-8 py-3 font-medium transition">
                <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10">APPOINTMENT</span>
                <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
              </button>
              <button onClick={() => scrollToSection('services')} className="relative group bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition">
                OUR SERVICES
                <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 shadow-lg border border-white relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-3 py-1 ">01</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold uppercase mb-4">BOOK AN APPOINTMENT</h3>
                <p className="text-white-600">Schedule an appointment with our team to discuss your vehicle's repair needs and get a free quote.</p>
              </div>
            </div>
            <div className="p-8 shadow-lg border border-white relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-3 py-1 ">02</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold uppercase mb-4">CHOOSE YOUR SERVICE</h3>
                <p className="text-white-600">Select the specific services you require from our comprehensive range of panel beating and mechanical repairs.</p>
              </div>
            </div>
            <div className="p-8 shadow-lg border border-white relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-3 py-1 ">03</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold uppercase mb-4">CONFIRM YOUR REQUEST</h3>
                <p className="text-white-600">Receive confirmation of your booking details, including date, time, and estimated costs.</p>
              </div>
            </div>
            <div className="p-8 shadow-lg border border-white relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-3 py-1 ">04</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold uppercase mb-4">DROP OFF YOUR VEHICLE</h3>
                <p className="text-white-600">Bring your vehicle to our workshop at the scheduled time for inspection and service.</p>
              </div>
            </div>
            <div className="p-8 shadow-lg border border-white relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-3 py-1 ">05</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold uppercase mb-4">SERVICE AND REPAIR</h3>
                <p className="text-white-600">Our experienced technicians perform the necessary repairs and maintenance with precision and care.</p>
              </div>
            </div>
            <div className="p-8 shadow-lg border border-white relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-2xl font-bold px-3 py-1 ">06</div>
              <div className="pt-12">
                <h3 className="text-xl font-bold uppercase mb-4">REVIEW AND PICK UP</h3>
                <p className="text-white-600">Review the completed work, receive your vehicle, and enjoy peace of mind with our quality guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs */}


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Blog />
      </motion.div>
      {/* Reviews */}
      <motion.section
        id="reviews"
        className="py-4 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <section id="reviews" className="py-8 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-['Tomorrow']  mb-4">Customer Reviews</h3>
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                src="https://widgets.sociablekit.com/google-reviews/iframe/25625462"
                frameBorder="0"
                className="w-full h-[480px]"
                loading="lazy"
                title="Google Reviews"
              ></iframe>
            </div>
          </div>
        </section>
      </motion.section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
