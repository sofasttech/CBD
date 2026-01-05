import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useInView, PanInfo } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
        relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0
        transition-all duration-700 ease-in-out
        ${isActive
          ? 'w-[180px] md:w-[400px] h-[280px] md:h-[450px]'
          : 'w-[40px] md:w-[60px] h-[280px] md:h-[450px]'
        }
      `}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
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
            ? 'text-xs md:text-lg bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
            // Inactive state: vertical, positioned at the bottom, for all screen sizes
            : 'text-[10px] md:text-base w-auto text-left bottom-14 md:bottom-24 left-1/2 -translate-x-1/2 rotate-90'
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
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-['Poppins']">
      <section id="about-intro" className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">

          {/* Left Side: Image Accordion */}
          <div className="w-full xl:w-[750px] xl:flex-none">
            <div className="w-fit mx-auto flex flex-row items-center gap-1 md:gap-4 p-2 md:p-4">
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
          <div className="w-full xl:flex-1 text-center xl:text-left">
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">About CBD Panelbeaters LTD</p>
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase leading-tight mt-2">Superior Service with a Touch of Class</h2>

            <div className="mt-8">
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Core Values</h3>
              <p className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify xl:text-left" style={{ wordSpacing: window.innerWidth < 768 ? '-0.15rem' : '-0.08rem' }}>
                CBD Panel and Paint is shaped by values we put into practice every day: integrity, precision, excellence, and genuine customer care. As a family-operated workshop, we are committed to honest guidance, skilled workmanship, and repairs done right from the start. Our goal is to deliver results that last, while building trust and long-term relationships with every driver who chooses us.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Our Story</h3>
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify xl:text-left">
                For more than 30 years, we have been proudly serving Auckland with quality panel beating, mechanical repairs, and insurance work. Whether it’s a small dent or a major collision, we approach every job with care and attention, restoring your vehicle to its best possible condition.
              </p>
            </div>

            <div className="mt-8">
              <button onClick={() => navigate('/our-story')} className="relative bg-blue-600 text-white px-8 py-3 font-medium transition inline-flex items-center gap-2 group">
                <span className="absolute left-0 top-0 h-full bg-CGreen w-0 group-hover:w-full transition-all duration-300"></span>
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
      title: "BOOK APPOINTMENT",
      content: (
        <div>
          <p className="mb-8 text-lg font-['Poppins'] font-semibold text-black leading-relaxed text-justify md:text-left">
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
      title: "SERVICE & REPAIR",
      content: (
        <div>
          <p className="mb-8 text-lg font-['Poppins'] font-semibold text-black leading-relaxed text-justify md:text-left">
            Our experienced technicians perform the necessary repairs and maintenance with precision and care, utilizing advanced diagnostic tools and proven techniques to identify and resolve issues efficiently.
          </p>
          <p className="mb-8 text-lg font-['Poppins'] font-semibold text-black leading-relaxed text-justify md:text-left">
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
      title: "QUALITY CHECK",
      content: (
        <div>
          <p className="mb-8 text-lg font-['Poppins'] font-semibold text-black leading-relaxed text-justify md:text-left">
            Every vehicle undergoes thorough quality inspection before delivery to ensure it meets our highest standards and your complete satisfaction. Our certified inspectors meticulously check every component, from mechanical systems to bodywork, using advanced diagnostic equipment and visual inspections.
          </p>
          <p className="mb-8 text-lg font-['Poppins'] font-semibold text-black leading-relaxed text-justify md:text-left">
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
              href="/quality.webp"
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
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-white font-['Poppins'] scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero - Horizontal Scroll */}
      <section id="home" className="pt-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p
              className="text-blue-600 text-sm font-medium mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Car Troubles?
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-['Poppins'] font-medium text-blue-600 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We'll power you back on the road
            </motion.h1>
            <motion.p
              style={{ wordSpacing: '-0.08rem' }}
              className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify md:text-left mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              CBD Panel and Paint Limited is a full-service auto repair centre in Grey Lynn, offering panel beating, spray painting, mechanical servicing, WOF inspections, towing, and insurance-approved repairs. We oversee every job from initial assessment through to completion, ensuring your vehicle is restored safely and kept road-ready.
            </motion.p>
            <motion.div
              className="mb-6 grid grid-cols-2 gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                'Insurance Approved',
                'Fast service',
                'Fair price',
                'Expert workmanship',
                'Family-run',
                'All services under one roof'
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className={`flex items-center gap-2 text-gray-700 ${index === 5 ? 'col-span-2 md:col-span-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <span className="text-green-600">•</span> {text}
                </motion.p>
              ))}
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button onClick={() => navigate('/panel-beating')} className="bg-CDarkBlue text-white px-4 py-2 md:px-8 md:py-3 font-medium hover:bg-gray-800 transition">
                View All Services
              </button>
              <button onClick={() => navigate('/contact')} className="relative bg-blue-600 text-white px-4 py-2 md:px-8 md:py-3 font-medium transition group">
                <span className="absolute left-0 top-0 h-full bg-CGreen w-0 group-hover:w-full transition-all duration-300"></span>
                <span className="relative z-10">Appointment</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={heroImages[currentImage]} alt="Grey SUV" className="w-full h-auto rounded-lg" />
            {/* Hotspots */}
            {hotspots.map((hotspot, index) => (
              <motion.div
                key={index}
                className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                style={{ top: hotspot.top, left: hotspot.left, right: hotspot.right }}
                onMouseEnter={() => setHoveredHotspot(index)}
                onMouseLeave={() => setHoveredHotspot(null)}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                viewport={{ once: true }}
              >
                <span className="text-red-600 font-bold text-lg">+</span>
              </motion.div>
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
          </motion.div>
        </div>

        <div className="h-16"></div>



      </section>

      {/* Cars Ribbon */}
      <motion.section
        className="w-full relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src="/carsnz.png" alt="Cars" className="w-full h-44 md:h-auto object-cover object-center" />
        <div className="absolute inset-0 bg-white/70 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-start justify-center px-4 pt-10 md:pt-16">
          <motion.h2
            className="text-black text-xl sm:text-3xl md:text-5xl lg:text-6xl text-center drop-shadow-lg font-['Poppins'] font-medium leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We SERVICE <span className="text-blue-600">All</span> MAKES and MODELS...<br />
            <span className="text-black">FOREIGN and DOMESTIC!</span>
          </motion.h2>
        </div>
      </motion.section>

      {/* Infinity Brand Scroll */}
      <motion.section
        className="px-2 py-14 bg-white-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
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
      </motion.section>

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
            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide">About CBD Panelbeaters LTD</p>
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase leading-tight">Superior Service with a Touch of Class</h2>

            <div className="mb-10">
              <h3 className="text-blue-600 text-lg font-semibold mb-2">Core Values</h3>
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black-900 leading-relaxed font-['Poppins'] font-extralight text-lg">
                At CBD Panel and Paint, we pride ourselves on delivering exceptional automotive repair services with integrity, precision, and a commitment to excellence. Our family-run business values honesty, quality workmanship, and building lasting relationships with our customers.
              </p>
            </div>

            <div >
              <h3 className="text-blue-600 text-lg font-semibold mb-2">Our Story</h3>
              <p style={{ wordSpacing: '-0.08rem' }} className="text-black-900 leading-relaxed font-['Poppins'] font-extralight text-lg">
                For over 30 years, we've been serving Auckland with top-tier panel beating, mechanical repairs, and insurance support. From minor dents to major collisions, we treat every vehicle as if it were our own, ensuring your car is restored to perfection.
              </p>
            </div>

            <button onClick={() => navigate('/our-story')} className="relative bg-blue-600 text-white px-8 py-3 font-medium transition inline-flex items-center gap-2 group">
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
            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Technical Excellence</p>
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase text-black">Premium Quality Standards</h2>
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
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 group-hover:bg-opacity-80"></div>

                {/* Number Badge */}
                <div className="absolute top-4 left-4 text-white text-2xl font-['Poppins'] z-10 group-hover:opacity-0 transition-opacity duration-300">
                </div>

                {/* Default Content */}
                <div className="relative z-10 text-left group-hover:hidden transition-opacity duration-300">
                  <h3 className="text-2xl font-['Poppins'] font-bold uppercase mb-2 text-white">{feature.title}</h3>
                  <p className="text-lg mb-4 text-gray-200">{feature.shortDesc}</p>
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
                    <h3 className="text-2xl font-['Poppins'] font-bold uppercase mb-4">{feature.title}</h3>
                    <p className="text-lg leading-relaxed text-gray-300">{feature.fullDesc}</p>
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
          <h1 className="text-4xl md:text-6xl px-8 font-['Poppins'] font-medium text-center tracking-tight leading-[120%] relative z-10 -mt-8 md:mt-0 md:mb-32">
            DISTINCTIVE SERVICE FOR <br /> DISCERNING DRIVERS
          </h1>
        </div>

        {/* Stacking Cards Section */}
        <div className="w-full bg-transparent pt-10 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-16 gap-8">
            {/* Cards Stack */}
            <div className="grid gap-4 flex-1">
              {/* Card 01 - Accident Repair */}
              <motion.figure
                className="sticky top-[28vh] h-[70vh] grid place-content-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-150px" }}
              >
                <article className="bg-gradient-to-br from-CBlue to-blue-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-3 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  {/* Content Side - Left */}
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    {/* Number Badge */}
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">01</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Accident Repair
                    </h3>

                    {/* Description */}
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Our Accident repair service handles everything from minor fender benders to major collisions. We work directly with insurance companies and use genuine or quality aftermarket parts.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Insurance Approved</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Frame Alignment</span>
                    </div>
                  </div>

                  {/* Image Side - Right */}
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/panel-beatt.jpg" alt="Accident Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </article>
              </motion.figure>

              {/* Card 02 - Bumper Repair */}
              <motion.figure
                className="sticky top-[28vh] h-[70vh] grid place-content-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-150px" }}
              >
                <article className="bg-gradient-to-br from-CDarkBlue to-blue-900 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl -rotate-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">02</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Bumper Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Repair, reshape and refinish bumpers damaged by impacts. We restore structural mounting points and paint so the bumper fits and protects as intended.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Impact Repair</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Refinishing</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/BumperRepair.jpg" alt="Bumper Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/panel-beatt.jpg' }} />
                    </div>
                  </div>
                </article>
              </motion.figure>

              {/* Card 03 - Chassis and structural repair */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CLightBlue to-cyan-600 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">03</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Chassis & Structural Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Structural damage compromises vehicle safety. Our state-of-the-art frame straightening equipment and laser measuring systems ensure your vehicle's chassis is restored to exact factory specifications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Frame Alignment</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Laser Measuring</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/chassis.jpg" alt="Chassis Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/car-pieces.png' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 04 - Curb Rash Repair */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CGreen to-green-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl -rotate-3 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">04</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Curb Rash Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Wheel refurbishment to remove scuffs, bends and paint loss. Our process restores balance and cosmetics so rims look showroom-fresh and perform safely.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Wheel Refurbishment</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Showroom Finish</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/wheel_rim.jpg" alt="Curb Rash" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/tyer.png' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 05 - Dent Repair */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CPurple to-purple-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-1 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">05</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Dent Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Minor dents and dings can often be repaired without repainting using our paintless dent removal (PDR) technique. This cost-effective method maintains your original paint finish.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Paintless Removal</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Panel Beating</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/dent.jpg" alt="Dent Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/panel-beatt.jpg' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 06 - Exterior Polishing */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CYellow to-yellow-600 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl -rotate-1 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">06</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Exterior Polishing
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Our multi-stage polishing process removes imperfections and restores depth and clarity to your paint. We offer a range of correction services from light enhancement to full restoration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Multi-Stage Process</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Paint Correction</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/polish.jpg" alt="Exterior Polishing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/shop.webp' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 07 - Headlight Polishing */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CGray to-gray-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">07</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Headlight Polishing
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Oxidised headlights reduce nighttime visibility and diminish your vehicle's appearance. Our restoration process restores clarity and applies UV-protective coating.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">UV Protection</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Lens Restoration</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/headlight.webp" alt="Headlight Polishing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 08 - Paint and Refinishing */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CPink to-pink-600 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl -rotate-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">08</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Paint & Refinishing
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      From single panel refinishing to complete resprays, our modern paint booth and computerised colour matching system ensure perfect results with premium automotive paints.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Color Matching</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Premium Paints</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/paint.jpg" alt="Paint and Refinishing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/shop.webp' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 09 - Panel Repair */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CBlue to-blue-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-1 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">09</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Panel Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Damaged panels are carefully assessed to determine whether repair or replacement is the most cost-effective option. Our craftsmen reshape steel and aluminium panels to their original contours.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Panel Reshaping</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Perfect Fit</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/panel-beatt.jpg" alt="Panel Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 10 - Windscreen Removal and Installation */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CDarkBlue to-blue-900 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl -rotate-1 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">10</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Windscreen Removal & Installation
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Windscreen replacement requires precision and proper technique. We use OEM-quality glass and adhesives, and recalibrate ADAS systems if equipped.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">OEM Glass</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">ADAS Calibration</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/windscreen.jpg" alt="Windscreen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/im3.png' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 11 - Mechanical Repair */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CLightBlue to-cyan-600 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">11</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Mechanical Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Diagnostics, scheduled servicing and major mechanical repairs carried out by our certified team. We supply and fit quality parts and provide detailed estimates before work begins.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Diagnostics</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Quality Parts</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/mechanical.jpg" alt="Mechanical Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/oil.jpg' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 12 - WOF and Compliance */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CGreen to-green-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl -rotate-2 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">12</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      WOF & Compliance
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Complete WOF inspections and corrective repairs to ensure vehicles meet local regulations. We document findings and carry out required fixes efficiently.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">WOF Inspections</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Compliance Repairs</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/wof.jpg" alt="WOF" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/im3.png' }} />
                    </div>
                  </div>
                </article>
              </figure>

              {/* Card 13 - Caravan and Board Repair */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-CPurple to-purple-700 h-[28rem] md:h-[24rem] w-full max-w-5xl rounded-3xl rotate-1 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">13</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      Caravan & Board Repair
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      Structural and cosmetic repairs for caravans and motorhomes, including panel replacement and waterproofing. We cater to large format repairs with specialist tools and experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Waterproofing</span>
                      <span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">Large Format</span>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="/caravan.jpg" alt="Caravan Repair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = '/shop.webp' }} />
                    </div>
                  </div>
                </article>
              </figure>
            </div>

            {/* Sticky Side Text - Removed */}
          </div>
        </div>
      </section>

      <div className="h-40 bg-white"></div>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-24 bg-white text-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6">EXCELLENCE IN EVERY DETAIL</h2>
            <p className="text-black max-w-2xl mx-auto text-lg font-['Poppins'] font-semibold leading-relaxed ">
              We don't just repair cars; we restore confidence. Experience the perfect blend of technical expertise and customer-focused service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[minmax(0,1fr)]">
            {/* Large Item 1 */}
            <motion.div
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl shadow-xl min-h-[400px] cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/panel-beatt.jpg')" }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                <h3 className="text-2xl md:text-4xl font-bold font-['Poppins'] mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-200 text-lg max-w-sm">Our certified technicians bring decades of combined experience to every repair, ensuring factory-standard results.</p>
              </div>
            </motion.div>

            {/* Item 2 */}
            <motion.div
              className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-xl min-h-[200px] md:min-h-[250px] cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/tech.jpg')" }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-bold font-['Poppins'] mb-1">Advanced Technology</h3>
                <p className="text-gray-200 text-sm md:text-base max-w-md">We utilize the latest diagnostic tools and repair equipment to deliver precise and lasting solutions.</p>
              </div>
            </motion.div>

            {/* Item 3 */}
            <motion.div
              className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl shadow-xl min-h-[200px] md:min-h-[250px] cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('/shop.webp')" }} />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                <h3 className="text-xl md:text-2xl font-bold font-['Poppins'] mb-1">Lifetime Guarantee</h3>
                <p className="text-gray-200 text-sm md:text-base max-w-md">We stand behind our work. Enjoy peace of mind knowing that our repairs are backed by a comprehensive warranty.</p>
              </div>
            </motion.div>

            {/* Stats Items */}
            {[
              { label: "Years Experience", value: 30, suffix: "+" },
              { label: "Cars Repaired", value: 9900, suffix: "K+" },
              { label: "Customer Rating", value: 100, suffix: "%" },
              { label: "Expert Staff", value: 10, suffix: "+" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="md:col-span-1 bg-gray-50 rounded-2xl shadow-sm p-6 flex flex-col justify-center items-center border border-gray-100 hover:shadow-md transition-shadow min-h-[160px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
              >
                <div className="text-3xl lg:text-4xl font-bold font-['Poppins'] text-blue-600 mb-2">
                  <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-black font-semibold uppercase tracking-wider text-center">{stat.label}</div>
              </motion.div>
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
        <section id="reviews" className="py-8 ">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6">Customer Reviews</h2>
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



