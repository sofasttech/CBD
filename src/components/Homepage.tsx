import { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useInView, PanInfo } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Blog from './Blog';
import HorizontalScrollSection from './HorizontalScrollSection';

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
  const [hoveredTech1, setHoveredTech1] = useState(false);
  const [hoveredTech2, setHoveredTech2] = useState(false);
  const [hoveredTech3, setHoveredTech3] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const aboutImages = ['/panel-beatt.jpg', '/car-tune-up.jpg', '/headlight.webp'];
  const [cards, setCards] = useState<string[]>(aboutImages);
  const [swiping, setSwiping] = useState<{ src: string | null; dir: number }>({ src: null, dir: 0 });

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);

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
      <section id="home" className="pt-16 px-4">
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
        
        <div className="h-24"></div>
        
     
        
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
      <motion.section
        id="about-intro"
        className="px-4 pt-0 md:pt-16 pb-14 bg-black text-white"
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
              <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg">
                At CBD Panelbeating & Mechanical, we pride ourselves on delivering exceptional automotive repair services with integrity, precision, and a commitment to excellence. Our family-run business values honesty, quality workmanship, and building lasting relationships with our customers.
              </p>
            </div>

            <div >
              <h3 className="text-blue-400 text-lg font-semibold mb-2">Our Story</h3>
              <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg">
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
        className="px-0 pt-12 pb-12 bg-white-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            <div ref={ref1} className="bg-white-800 p-12 shadow-lg border border-blue-500/20 relative overflow-hidden group" onMouseEnter={() => setHoveredTech1(true)} onMouseLeave={() => setHoveredTech1(false)}>
              <div className="absolute inset-0 flex items-start justify-end opacity-100">
                <img src="/im1.png" alt="Precision Repairs Icon" className="w-48 h-48 md:w-80 md:h-80 brightness-0 invert z-20" />
              </div>
              <motion.div
                className="absolute inset-0 bg-green-600 z-5"
                animate={{ x: (isMobile ? inView1 : hoveredTech1) ? 0 : '-100%' }}
                transition={{ duration: isMobile ? 1 : 0.5 }}
              />
              <h3 className={`text-blue-400 ${(isMobile ? inView1 : hoveredTech1) ? 'text-white' : ''} text-xl font-['Tomorrow'] font-medium mb-4 relative z-10 transition`}>Precision Repairs</h3>
              <p className={`text-gray-900 ${(isMobile ? inView1 : hoveredTech1) ? 'text-white' : ''} leading-relaxed relative z-10 transition`}>Our state-of-the-art equipment ensures every repair is done with pinpoint accuracy, restoring your vehicle to its original condition.</p>
            </div>
            <div ref={ref2} className="bg-white-800 p-12 shadow-lg border border-blue-500/20 relative overflow-hidden group" onMouseEnter={() => setHoveredTech2(true)} onMouseLeave={() => setHoveredTech2(false)}>
              <div className="absolute inset-0 flex items-start justify-end opacity-100">
                <img src="/im2.png" alt="Quality Materials Icon" className="w-48 h-48 md:w-80 md:h-80 brightness-0 invert z-20" />
              </div>
              <motion.div
                className="absolute inset-0 bg-green-600 z-5"
                animate={{ x: (isMobile ? inView2 : hoveredTech2) ? 0 : '-100%' }}
                transition={{ duration: isMobile ? 1 : 0.5 }}
              />
              <h3 className={`text-blue-400 ${(isMobile ? inView2 : hoveredTech2) ? 'text-white' : ''} text-xl font-['Tomorrow'] font-medium mb-4 relative z-10 transition`}>Quality Materials</h3>
              <p className={`text-gray-900 ${(isMobile ? inView2 : hoveredTech2) ? 'text-white' : ''} leading-relaxed relative z-10 transition`}>We use only the highest quality materials and parts to guarantee durability and longevity in every repair we perform.</p>
            </div>
            <div ref={ref3} className="bg-white-800 p-12 shadow-lg border border-blue-500/20 relative overflow-hidden group" onMouseEnter={() => setHoveredTech3(true)} onMouseLeave={() => setHoveredTech3(false)}>
              <div className="absolute inset-0 flex items-start justify-end opacity-100">
                <img src="/im3.png" alt="Experienced Technicians Icon" className="w-48 h-48 md:w-80 md:h-80 brightness-0 invert z-20" />
              </div>
              <motion.div
                className="absolute inset-0 bg-green-600 z-5"
                animate={{ x: (isMobile ? inView3 : hoveredTech3) ? 0 : '-100%' }}
                transition={{ duration: isMobile ? 1 : 0.5 }}
              />
              <h3 className={`text-blue-400 ${(isMobile ? inView3 : hoveredTech3) ? 'text-white' : ''} text-xl font-['Tomorrow'] font-medium mb-4 relative z-10 transition`}>Experienced Technicians</h3>
              <p className={`text-gray-900 ${(isMobile ? inView3 : hoveredTech3) ? 'text-white' : ''} leading-relaxed relative z-10 transition`}>Our team of certified professionals brings decades of experience to deliver exceptional results you can trust.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/*Distinctive Services Section - Stacking Cards */}
      <section id="services" className="text-white w-full bg-black">
        <div className="text-center py-16">
          <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-bold uppercase mb-4">DISTINCTIVE SERVICE FOR DISCERNING DRIVERS</h2>
          <p className="text-xl mb-8 uppercase font-medium">OUR SERVICES</p>
        </div>
        
        <div className="w-full">
          <div className="sticky top-0 w-full">
            <div className="w-full h-screen flex items-center justify-center">
              <article className="bg-green-600 h-[450px] w-[90%] md:w-[70%] rounded-lg p-8 md:p-10 shadow-lg overflow-hidden relative">
                <div className="flex h-full gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="text-white text-2xl font-['Tomorrow'] mb-2">01</div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase">MAINTENANCE</h3>
                    <p className="text-base md:text-lg">Keep your vehicle running smoothly and safely, giving you peace of mind on every journey. Our comprehensive maintenance services include regular oil changes, tire rotations, brake inspections, fluid checks, and diagnostic tests to prevent breakdowns and extend your vehicle's lifespan.</p>
                    <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-sm font-medium w-fit">
                      LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="hidden md:block w-1/3 relative">
                    <img src="/car-polishing-tray.png" alt="Maintenance" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          <div className="sticky top-2 w-full">
            <div className="w-full h-screen flex items-center justify-center">
              <article className="bg-blue-600 h-[450px] w-[92%] md:w-[75%] rounded-lg p-8 md:p-10 shadow-[0_-5px_16px_4px_rgba(0,0,0,0.8),0_2px_4px_-1px_rgba(0,0,0,0.06)] overflow-hidden relative">
                <div className="flex h-full gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="text-white text-2xl font-['Tomorrow'] mb-2">02</div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase">WHEELS</h3>
                    <p className="text-base md:text-lg">Upgrade your ride with precision wheel services that enhance performance and style. We offer wheel alignment, balancing, tire replacement, and custom rim installations to improve handling, safety, and aesthetics.</p>
                    <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-sm font-medium w-fit">
                      LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="hidden md:block w-1/3 relative">
                    <img src="/tyer.png" alt="Wheels" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          <div className="sticky top-4 w-full">
            <div className="w-full h-screen flex items-center justify-center">
              <article className="bg-orange-500 h-[450px] w-[94%] md:w-[80%] rounded-lg p-8 md:p-10 shadow-lg overflow-hidden relative">
                <div className="flex h-full gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="text-white text-2xl font-['Tomorrow'] mb-2">03</div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase">ALIGNMENT</h3>
                    <p className="text-base md:text-lg">Ensure perfect alignment for a smoother, safer drive that you can feel in every turn. Proper wheel alignment improves fuel efficiency, reduces tire wear, and enhances vehicle stability and handling.</p>
                    <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-sm font-medium w-fit">
                      LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="hidden md:block w-1/3 relative">
                    <img src="/car-pieces.png" alt="Alignment" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          <div className="sticky top-6 w-full">
            <div className="w-full h-screen flex items-center justify-center">
              <article className="bg-red-600 h-[450px] w-[96%] md:w-[85%] rounded-lg p-8 md:p-10 shadow-lg overflow-hidden relative">
                <div className="flex h-full gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="text-white text-2xl font-['Tomorrow'] mb-2">04</div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase">POWER COATING</h3>
                    <p className="text-base md:text-lg">Our power coating service provides a durable, high-quality finish that protects your vehicle from corrosion, scratches, and fading. Using advanced electrostatic application techniques, we ensure even coverage and long-lasting color retention.</p>
                    <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-sm font-medium w-fit">
                      LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="hidden md:block w-1/3 relative">
                    <img src="/car-polishing-tray.png" alt="Power Coating" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          <div className="sticky top-8 w-full">
            <div className="w-full h-screen flex items-center justify-center">
              <article className="bg-purple-600 h-[450px] w-[98%] md:w-[90%] rounded-lg p-8 md:p-10 shadow-lg overflow-hidden relative">
                <div className="flex h-full gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="text-white text-2xl font-['Tomorrow'] mb-2">05</div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase">BRAKES</h3>
                    <p className="text-base md:text-lg">Our brake service ensures your vehicle's stopping power is at its best. We inspect, repair, and replace brake pads, rotors, calipers, and brake lines using high-quality parts. Regular maintenance prevents accidents and extends the life of your braking system.</p>
                    <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-sm font-medium w-fit">
                      LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="hidden md:block w-1/3 relative">
                    <img src="/breaks.png" alt="Brakes" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </article>
            </div>
          </div>
          
          <div className="sticky top-10 w-full">
            <div className="w-full h-screen flex items-center justify-center">
              <article className="bg-indigo-600 h-[450px] w-[100%] md:w-[95%] rounded-lg p-8 md:p-10 shadow-lg overflow-hidden relative">
                <div className="flex h-full gap-6">
                  <div className="flex-1 flex flex-col justify-center gap-4">
                    <div className="text-white text-2xl font-['Tomorrow'] mb-2">06</div>
                    <h3 className="text-3xl md:text-4xl font-bold uppercase">ENGINE SERVICE</h3>
                    <p className="text-base md:text-lg">Our comprehensive engine service includes diagnostics, tune-ups, oil changes, and major repairs. We use advanced tools to identify issues early and provide expert repairs to keep your engine running smoothly. From routine maintenance to complex overhauls, we ensure optimal performance and longevity.</p>
                    <button className="flex items-center text-white hover:text-blue-200 transition uppercase text-sm font-medium w-fit">
                      LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <div className="hidden md:block w-1/3 relative">
                    <img src="/car-pieces.png" alt="Engine Service" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </article>
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
