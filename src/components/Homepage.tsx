import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useInView, PanInfo } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Blog from './Blog';
import { Timeline } from './ui/timeline';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Panel Beating',
    imageUrl: '/panel-beatt.jpg',
  },
  {
    id: 2,
    title: 'Paint and Refinishing',
    imageUrl: '/car-tune-up.jpg',
  },
  {
    id: 3,
    title: 'Mechanical',
    imageUrl: '/headlight.webp',
  },
  {
    id: 4,
    title: 'Caravan Repairs',
    imageUrl: '/shop.webp',
  },
  {
    id: 5,
    title: 'Boat Repairs',
    imageUrl: '/tesla.jpg',
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: { item: typeof accordionItems[0], isActive: boolean, onMouseEnter: () => void }) => {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden cursor-pointer md:flex-shrink-0
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
    <div className="bg-white font-mulish">
      <section id="about-intro" className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left Side: Image Accordion */}
          <div className="w-full md:w-1/2 md:min-w-[420px] md:flex-none">
            <div className="flex flex-row items-center justify-center md:justify-start gap-2 md:gap-4 overflow-x-auto p-2 md:p-4 md:whitespace-nowrap">
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
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left">
                CBD Panel and Paint is shaped by values we put into practice every day: integrity, precision, excellence, and genuine customer care. As a family-operated workshop, we are committed to honest guidance, skilled workmanship, and repairs done right from the start. Our goal is to deliver results that last, while building trust and long-term relationships with every driver who chooses us.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Our Story</h3>
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left">
                For more than 30 years, we have been proudly serving Auckland with quality panel beating, mechanical repairs, and insurance work. Whether it’s a small dent or a major collision, we approach every job with care and attention, restoring your vehicle to its best possible condition.
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

function TimelineDemo() {
  const data = [
    {
      title: "Book Appointment",
      content: (
        <div>
          <p className="mb-8 text-sm font-mulish font-semibold text-black md:text-lg leading-relaxed text-justify md:text-left">
            Schedule an appointment with our team to discuss your vehicle's repair needs and get a free quote. Our experienced advisors will assess your requirements, provide transparent pricing, and arrange a convenient time for your service. Whether it's a minor repair or major restoration, we ensure your vehicle gets the attention it deserves with our comprehensive consultation process.
          </p>
          <svg className="h-40 w-full md:h-60 lg:h-80" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice">
            <defs>
              <clipPath id="clip-timeline-1" clipPathUnits="objectBoundingBox">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0249688 0C0.0111789 0 0 0.0112775 0 0.0251889V0.851385C0 0.865297 0.0111789 0.876574 0.0249688 0.876574H0.179775V0.974811C0.179775 0.988723 0.190954 1 0.204744 1H0.975031C0.988821 1 1 0.988723 1 0.974811V0.157431C1 0.143519 0.988821 0.132242 0.975031 0.132242H0.810237V0.0251889C0.810237 0.0112775 0.799058 0 0.785268 0H0.0249688Z"
                  fill="#D9D9D9"
                />
              </clipPath>
            </defs>
            <image
              href="/panel-beatt.jpg"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip-timeline-1)"
              className="hover:scale-105 transition-all duration-300"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Service & Repair",
      content: (
        <div>
          <p className="mb-8 text-sm font-mulish font-semibold text-black md:text-lg leading-relaxed text-justify md:text-left">
            Our experienced technicians perform the necessary repairs and maintenance with precision and care, utilizing advanced diagnostic tools and proven techniques to identify and resolve issues efficiently.
          </p>
          <p className="mb-8 text-sm font-mulish font-semibold text-black md:text-lg leading-relaxed text-justify md:text-left">
            We use state-of-the-art equipment and quality materials to ensure every repair meets our high standards. From minor tune-ups to major overhauls, our comprehensive service covers everything from engine diagnostics to bodywork restoration, guaranteeing your vehicle performs at its best with our expert craftsmanship and attention to detail.
          </p>
          <svg className="h-40 w-full md:h-60 lg:h-80" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice">
            <defs>
              <clipPath id="clip-timeline-2" clipPathUnits="objectBoundingBox">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0249688 0C0.0111789 0 0 0.0112775 0 0.0251889V0.851385C0 0.865297 0.0111789 0.876574 0.0249688 0.876574H0.179775V0.974811C0.179775 0.988723 0.190954 1 0.204744 1H0.975031C0.988821 1 1 0.988723 1 0.974811V0.157431C1 0.143519 0.988821 0.132242 0.975031 0.132242H0.810237V0.0251889C0.810237 0.0112775 0.799058 0 0.785268 0H0.0249688Z"
                  fill="#D9D9D9"
                />
              </clipPath>
            </defs>
            <image
              href="/oil.jpg"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip-timeline-2)"
              className="hover:scale-105 transition-all duration-300"
            />
          </svg>
        </div>
      ),
    },
    {
      title: "Quality Check",
      content: (
        <div>
          <p className="mb-8 text-sm font-mulish font-semibold text-black md:text-lg leading-relaxed text-justify md:text-left">
            Every vehicle undergoes thorough quality inspection before delivery to ensure it meets our highest standards and your complete satisfaction. Our certified inspectors meticulously check every component, from mechanical systems to bodywork, using advanced diagnostic equipment and visual inspections.
          </p>
          <p className="mb-8 text-sm font-mulish font-semibold text-black md:text-lg leading-relaxed text-justify md:text-left">
            We perform comprehensive testing including road tests, brake inspections, fluid level checks, and alignment verification to guarantee your vehicle is safe, reliable, and ready for the road. Only when everything passes our rigorous standards do we hand over the keys.
          </p>
          <svg className="h-40 w-full md:h-60 lg:h-80" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice">
            <defs>
              <clipPath id="clip-timeline-3" clipPathUnits="objectBoundingBox">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0249688 0C0.0111789 0 0 0.0112775 0 0.0251889V0.851385C0 0.865297 0.0111789 0.876574 0.0249688 0.876574H0.179775V0.974811C0.179775 0.988723 0.190954 1 0.204744 1H0.975031C0.988821 1 1 0.988723 1 0.974811V0.157431C1 0.143519 0.988821 0.132242 0.975031 0.132242H0.810237V0.0251889C0.810237 0.0112775 0.799058 0 0.785268 0H0.0249688Z"
                  fill="#D9D9D9"
                />
              </clipPath>
            </defs>
            <image
              href="/im3.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip-timeline-3)"
              className="hover:scale-105 transition-all duration-300"
            />
          </svg>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

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

  // Inject Shapo widget script dynamically so it executes in React
  useEffect(() => {
    if (!document.getElementById('shapo-embed-js')) {
      const s = document.createElement('script');
      s.id = 'shapo-embed-js';
      s.type = 'text/javascript';
      s.src = 'https://cdn.shapo.io/js/embed.js';
      s.defer = true;
      document.body.appendChild(s);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white font-mulish scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero - Horizontal Scroll */}
      <section id="home" className="pt-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side text */}
          <div>
            <p className="text-blue-600 text-sm font-medium mb-2">Car Troubles?</p>
            <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium text-blue-600 mb-4">Automotive Repair Services</h1>
            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left mb-6">CBD Panel and Paint Limited is a Grey Lynn full-service auto repair centre handling panel beating, spray painting, mechanical servicing, WOF inspections, towing and insurance-approved repairs. We manage each job from assessment to completion to keep your vehicle safe and road-ready.</p>
            <div className="mb-6 grid grid-cols-2 gap-2">
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Fast service
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Fair price
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Family-run
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Expert workmanship
              </p>
              <p className="flex items-center gap-2 text-gray-700 col-span-2 md:col-span-1">
                <span className="text-green-600">✓</span> All services under one roof
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
        <img src="/carsnz.png" alt="Cars" className="w-full h-44 md:h-auto object-cover object-center" />
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
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black-900 leading-relaxed font-mulish font-extralight text-lg">
                At CBD Panel and Paint, we pride ourselves on delivering exceptional automotive repair services with integrity, precision, and a commitment to excellence. Our family-run business values honesty, quality workmanship, and building lasting relationships with our customers.
              </p>
            </div>

            <div >
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Our Story</h3>
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black-900 leading-relaxed font-mulish font-extralight text-lg">
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
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Technical Excellence</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black">Premium Quality Standards</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Precision Repairs',
                shortDesc: 'State-of-the-art equipment for perfect results',
                fullDesc: 'Our state-of-the-art equipment ensures every repair is done with pinpoint accuracy, restoring your vehicle to its original condition. We use advanced laser measuring systems and computerized frame straightening technology to ensure every panel, body line, and structural component is perfectly aligned.',
                image: '/Precision Repairs.jpg'
              },
              {
                title: 'Quality Materials',
                shortDesc: 'Only the best parts and materials used',
                fullDesc: 'We use only the highest quality materials and parts to guarantee durability and longevity in every repair we perform. All our paints are premium automotive-grade with UV protection and color-matching technology. We source genuine OEM parts and certified aftermarket components.',
                image: '/oil.jpg'
              },
              {
                title: 'Expert Technicians',
                shortDesc: 'Decades of combined experience',
                fullDesc: 'Our team of certified professionals brings decades of experience to deliver exceptional results you can trust. Each technician holds industry certifications and undergoes continuous training on the latest repair techniques and vehicle technologies.',
                image: '/im3.png'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden h-96 flex flex-col justify-end p-6 bg-cover bg-center border border-gray-200 group shadow-xl rounded-xl"
                style={{ backgroundImage: `url('${feature.image}')` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-80"></div>

                {/* Number Badge */}
                <div className="absolute top-4 left-4 text-white text-2xl font-['Tomorrow'] z-10 group-hover:opacity-0 transition-opacity duration-300">
                </div>

                {/* Default Content */}
                <div className="relative z-10 text-left group-hover:hidden transition-opacity duration-300">
                  <h3 className="text-2xl font-['Tomorrow'] font-bold uppercase mb-2 text-white">{feature.title}</h3>
                  <p className="text-sm mb-4 text-gray-200">{feature.shortDesc}</p>
                  <button className="flex items-center text-white hover:text-blue-400 transition uppercase text-sm font-medium">
                    LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                {/* Corner Brackets */}
                <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center text-white p-6 opacity-0 translate-x-32 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-in-out z-30">
                  <div className="text-left">
                    <h3 className="text-2xl font-['Tomorrow'] font-bold uppercase mb-4">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-300">{feature.fullDesc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section - Stacking Cards */}
      <section id="services" className="text-black w-full bg-white">
        {/* Hero Section */}
        <div className="sticky top-0 z-0 h-[50vh] md:h-[60vh] w-full bg-white flex items-center justify-center relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e5e52e_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e52e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl px-8 font-['Tomorrow'] font-bold text-center tracking-tight leading-[120%] relative z-10 md:mb-32">
            DISTINCTIVE SERVICE FOR <br /> DISCERNING DRIVERS
          </h1>
        </div>

        {/* Stacking Cards Section */}
        <div className="w-full bg-transparent pt-10 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 gap-8">
            {/* Cards Stack */}
            <div className="grid gap-4 flex-1">
              {/* Card 01 - Accident Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-green-600 h-96 w-full max-w-3xl rounded-lg rotate-3 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">01</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Accident Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Comprehensive collision repairs to restore your vehicle to factory standards. We handle panel replacement, frame alignment, and finish work so your car is safe and looks like new.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/panel-beatt.jpg" alt="Accident Repair" className="w-full h-full object-cover rounded-lg" /></div>
                  </div>
                </article>
              </figure>

              {/* Card 02 - Bumper Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-blue-600 h-96 w-full max-w-3xl rounded-lg -rotate-2 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">02</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Bumper Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Repair, reshape and refinish bumpers damaged by impacts. We restore structural mounting points and paint so the bumper fits and protects as intended.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/BumperRepair.jpg" alt="Bumper Repair" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/panel-beatt.jpg'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 03 - Chassis and structural repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-orange-500 h-96 w-full max-w-3xl rounded-lg rotate-2 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">03</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Chassis & Structural Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Frame straightening, weld repairs and structural reinforcement to restore crash integrity. Work follows manufacturer tolerances and is verified with precision measuring tools.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/chassis.jpg" alt="Chassis Repair" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/car-pieces.png'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 04 - Curb Rash Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-red-600 h-96 w-full max-w-3xl rounded-lg -rotate-3 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">04</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Curb Rash Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Wheel refurbishment to remove scuffs, bends and paint loss. Our process restores balance and cosmetics so rims look showroom-fresh and perform safely.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/wheel_rim.jpg" alt="Curb Rash" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/tyer.png'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 05 - Dent Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-purple-600 h-96 w-full max-w-3xl rounded-lg rotate-1 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">05</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Dent Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Paintless dent removal for minor impacts and full panel repair when needed. We prioritise preserving original paint where possible to maintain value.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/dent.jpg" alt="Dent Repair" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/panel-beatt.jpg'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 06 - Exterior Polishing */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-indigo-600 h-96 w-full max-w-3xl rounded-lg -rotate-1 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">06</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Exterior Polishing</h3>
                      </div>
                      <p className="text-sm lg:text-base">Multi-stage machine polishing to remove swirls, light scratches and oxidation. Results restore gloss and improve long-term protection when combined with sealants.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/polish.jpg" alt="Exterior Polishing" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/shop.webp'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 07 - Headlight Polishing */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-yellow-500 h-96 w-full max-w-3xl rounded-lg rotate-2 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">07</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Headlight Polishing</h3>
                      </div>
                      <p className="text-sm lg:text-base">Remove haze and yellowing to improve night visibility and restore original clarity. We seal lenses to slow future oxidation.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/headlight.webp" alt="Headlight Polishing" className="w-full h-full object-cover rounded-lg" /></div>
                  </div>
                </article>
              </figure>

              {/* Card 08 - Paint and Refinishing */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-red-500 h-96 w-full max-w-3xl rounded-lg -rotate-2 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">08</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Paint & Refinishing</h3>
                      </div>
                      <p className="text-sm lg:text-base">Full paintwork and refinishing with OEM colour matching and modern coatings. We guarantee even coverage, proper cure and long-lasting results.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/paint.jpg" alt="Paint and Refinishing" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/shop.webp'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 09 - Panel Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-teal-600 h-96 w-full max-w-3xl rounded-lg rotate-1 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">09</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Panel Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Meticulous metalwork and panel replacement to restore lines and gaps. We ensure doors, hoods and boot lids align correctly after repair.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/panel-beatt.jpg" alt="Panel Repair" className="w-full h-full object-cover rounded-lg" /></div>
                  </div>
                </article>
              </figure>

              {/* Card 10 - Windscreen Removal and Installation */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-sky-600 h-96 w-full max-w-3xl rounded-lg -rotate-1 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">10</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Windscreen Removal & Installation</h3>
                      </div>
                      <p className="text-sm lg:text-base">Accurate removal and fitment using OEM adhesives and correct curing. We replace chips and full windscreens with a focus on airtight seals and lane-camera recalibration if required.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/windscreen.jpg" alt="Windscreen" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/im3.png'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 11 - Mechanical Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-emerald-600 h-96 w-full max-w-3xl rounded-lg rotate-2 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">11</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Mechanical Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Diagnostics, scheduled servicing and major mechanical repairs carried out by our certified team. We supply and fit quality parts and provide detailed estimates before work begins.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/mechanical.jpg" alt="Mechanical Repair" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/oil.jpg'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 12 - WOF and Compliance */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-indigo-700 h-96 w-full max-w-3xl rounded-lg -rotate-2 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">12</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">WOF & Compliance</h3>
                      </div>
                      <p className="text-sm lg:text-base">Complete WOF inspections and corrective repairs to ensure vehicles meet local regulations. We document findings and carry out required fixes efficiently.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/wof.jpg" alt="WOF" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/im3.png'}} /></div>
                  </div>
                </article>
              </figure>

              {/* Card 13 - Caravan and Board Repair */}
              <figure className="sticky top-[36vh] h-[70vh] grid place-content-center">
                <article className="bg-slate-600 h-96 w-full max-w-3xl rounded-lg rotate-1 p-8 lg:p-10 shadow-2xl overflow-hidden">
                  <div className="flex h-full gap-4">
                    <div className="flex-1 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-['Tomorrow'] font-bold">13</span>
                        <h3 className="text-2xl lg:text-3xl font-bold font-['Tomorrow'] uppercase">Caravan & Board Repair</h3>
                      </div>
                      <p className="text-sm lg:text-base">Structural and cosmetic repairs for caravans and motorhomes, including panel replacement and waterproofing. We cater to large format repairs with specialist tools and experience.</p>
                      
                    </div>
                    <div className="hidden md:block w-40 lg:w-48 flex-shrink-0"><img src="/caravan.jpg" alt="Caravan Repair" className="w-full h-full object-cover rounded-lg" onError={(e)=>{(e.target as HTMLImageElement).src='/shop.webp'}} /></div>
                  </div>
                </article>
              </figure>
            </div>

            {/* Sticky Side Text */}
            <div className="hidden lg:grid sticky top-[40vh] h-[50vh] place-content-center">
              <h2 className="text-3xl lg:text-5xl px-8 font-medium font-['Tomorrow'] text-center tracking-tight leading-[120%]">
                OUR <br /> SERVICES 😎
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="h-40 bg-white"></div>

      {/* Why Choose Us */}
      <section className="py-24 bg-white text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-bold mb-6">Excellence in Every Detail</h2>
            <p className="text-black max-w-2xl mx-auto text-lg font-mulish font-semibold leading-relaxed ">
              We don't just repair cars; we restore confidence. Experience the perfect blend of technical expertise and customer-focused service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Craftsmanship",
                desc: "Our certified technicians bring decades of combined experience to every repair, ensuring factory-standard results.",
                image: "/panel-beatt.jpg"
              },
              {
                title: "Advanced Technology",
                desc: "We utilize the latest diagnostic tools and repair equipment to deliver precise, efficient, and lasting solutions.",
                image: "/tech.jpg"
              },
              {
                title: "Lifetime Guarantee",
                desc: "We stand behind our work. Enjoy peace of mind knowing that our repairs are backed by a comprehensive warranty.",
                image: "/shop.webp"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 transition-all duration-500"
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    {item.title}
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white-200 pt-12">
             {[
                { label: "Years Experience", value: 30, suffix: "+" },
                { label: "Cars Repaired", value: 9900, suffix: "K+" },
                { label: "Customer Rating", value: 100, suffix: "%" },
                { label: "Expert Staff", value: 10, suffix: "+" }
             ].map((stat, index) => (
                <div key={index} className="text-center">
                   <div className="text-4xl md:text-5xl font-['Tomorrow'] font-bold text-blue-500 mb-2">
                      <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                   </div>
                   <div className="text-sm text-black uppercase tracking-wider">{stat.label}</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      <div className="h-20 bg-white"></div>

      {/* How it works */}
      <motion.section
        id="how-it-works"
        className="bg-white -mt-12 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <TimelineDemo />
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
            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-bold mb-6">Customer Reviews</h2>
            <div className="rounded-lg overflow-hidden shadow-sm">
              <div id="shapo-widget-65035ad084a4892e58a0"></div>
            </div>
          </div>
        </section>
      </motion.section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}



