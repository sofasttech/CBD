import { useState, useEffect } from 'react';
import { ChevronRight, Star, Settings,  Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Blog from './Blog';

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Panel Beating');

  const heroImages = ['/stf.png'];

  const hotspots = [
    { top: '25%', left: '25%', title: 'Side Mirrors', desc: 'Repair or replace Side Mirrors.' },
    { top: '33%', right: '25%', title: 'Bonnet', desc: 'Restore or replace Bonnet.' },
    { top: '75%', left: '33%', title: 'Tires', desc: 'Check and replace tires for safety.' },
    { top: '67%', right: '33%', title: 'Engine', desc: 'Mechanical repairs and servicing.' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { image: '/collision-repair-icon-dark.svg', title: 'Collision Repairs', href: '#' },
    { image: '/headlight-icon-dark.svg', title: 'Bumper Replacement', href: '#' },
    { image: '/headlight-icon-dark.svg', title: 'Headlight Restoration', href: '#' },
    { image: '/car-servicing-icon-dark.svg', title: 'Car Servicing', href: '#' },
    { image: '/tyre-dark.svg', title: 'Tyres Check & Replacement', href: '#' },
    { image: '/car-battery-icon-dark.svg', title: 'Battery Check', href: '#' },
  ];

  const features = [
    { image: '/care-tires.png', title: 'Quick Turn Around', desc: 'Fast, high-quality repairs we outperform large insurance shops with quicker turnaround times and precision results.' },
    { image: '/Wrenches.png', title: 'Cost Effective', desc: 'We understand how quickly costs can add up after even a minor accident. That\'s why we offer smart, budget-friendly repair solutions.' },
    { image: '/spray-gun-attachment.png', title: 'Experienced', desc: 'Our technicians bring decades of combined experience to every job no guesswork, just quality workmanship.' },
    { image: '/car-polishing-tray.png', title: 'Family Orientated', desc: 'As a family-run business, we offer the kind of personal service and consistent quality big corporations can\'t match.' },
    { image: '/kiwi-bird.png', title: '100% Kiwi-Owned', desc: 'We\'re proudly local committed to supporting our community and delivering exceptional service with every repair.' },
    { image: '/car-pieces.png', title: 'Multiple Services, One Location', desc: 'From panel beating to mechanical work, get it all sorted in one place saving you time, money, and hassle.' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, service });
    // You can add form submission logic here, e.g., send to API
    alert('Appointment booked! We will contact you soon.');
    setName('');
    setEmail('');
    setPhone('');
    setService('Panel Beating');
  };

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero */}
      <motion.section
        id="home"
        className="pt-24 md:pt-32 pb-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side text */}
          <div>
            <p className="text-blue-600 text-sm font-medium mb-2">Car Troubles?</p>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">Automotive Repair Services</h1>
            <p className="text-xl text-gray-700 mb-6">CBD Panelbeaters LTD is one of Auckland’s leading full service automotive repair services specializing in the full range of repairs including warrant of fitness and mechanical.</p>
            <div className="mb-6">
              <p className="flex items-center gap-2 text-gray-700 mb-2">
                <span className="text-green-600">✓</span> Our Work is Guaranteed
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✓</span> Save Time and Money
              </p>
            </div>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
              View All Services
            </button>
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
      </motion.section>

      {/* Cars Ribbon */}
      <section className="w-full relative">
        <img src="/cars.jpeg" alt="Cars" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-start justify-start md:justify-center pt-0 md:pt-8 pl-4 md:pl-0">
          <h2 className="text-black text-lg md:text-5xl text-left drop-shadow-lg italic font-serif font-light px-4">
            We SERVICE <span className="text-blue-600">All</span> MAKES and MODELS...<br />
            <span className="text-black md:text-black">FOREIGN and DOMESTIC!</span>
          </h2>
        </div>
      </section>

      {/* New Section */}
      <section className="px-4 py-16 bg-white-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-blue-600">We Repair All Makes of Automobiles</h2>
          <p className="text-xl text-gray-700 mb-8 italic">We work with all makes and models of vehicles</p>
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{ x: [-800, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <img src="/brand-01.png" alt="Brand 1" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-02.png" alt="Brand 2" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-03.png" alt="Brand 3" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-04.png" alt="Brand 4" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-05.png" alt="Brand 5" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-06.png" alt="Brand 6" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-07.png" alt="Brand 7" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-01.png" alt="Brand 1" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-02.png" alt="Brand 2" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-03.png" alt="Brand 3" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-04.png" alt="Brand 4" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-05.png" alt="Brand 5" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-06.png" alt="Brand 6" className="h-28 w-22 flex-shrink-0" />
              <img src="/brand-07.png" alt="Brand 7" className="h-28 w-22 flex-shrink-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Appointment */}
      <motion.section
        className="px-4 py-16 bg-white relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <img src="/wave.webp" alt="" className="absolute inset-0 w-[120%] h-[120%] object-cover -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black inline-block px-4 py-2 rounded">Book a <span className="text-blue-600">free</span> appointment.</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg border">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Panel Beating</option>
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">
                Book Appointment
              </button>
            </form>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center">
                <Settings className="w-6 h-6 mr-2" />
                Panel Beating
              </h3>
              <p className="mb-2 text-gray-700 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                <strong>Email:</strong> info@cbdpanel.co.nz
              </p>
              <p className="mb-2 text-gray-700 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                <strong>Phone:</strong> +64 9-309 1906
              </p>
              <p className="text-gray-700 flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-600 mt-1" />
                <span><strong>Address:</strong> 390 Great North Road, Grey Lynn, Auckland, New Zealand</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        id="services"
        className="px-4 pb-16 relative z-30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg hover:bg-gray-100 hover:translate-y-[-4px] transition group">
                <div className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center transition">
                  <img src={s.image} alt={s.title} className="w-11 h-11" />
                </div>
                <p className="text-sm font-bold">{s.title}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition font-medium">View all</a>
          </div>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="px-4 py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Mount Roskill <br /> Collision Centre</h2>
            <p className="text-gray-600 mb-4">
              CBD Panelbeating & Mechanical has proudly served Auckland for over 30 years. From car repairs, panel and paint to full mechanical servicing, our auto garage provides repairs, honest service, and seamless insurance work.
            </p>
            <p className="text-gray-600 mb-6">
              Whether it's a car, van, SUV or ute, we treat your vehicle like it's our own. Our estimators provide clear, upfront costs & advice.
            </p>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('about')} className="bg-blue-600 text-black px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-blue-500 transition">Learn More <ChevronRight className="w-4 h-4" /></button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-black px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-blue-500 transition">Contact us <ChevronRight className="w-4 h-4" /></button>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />)}
              </div>
              <span className="text-sm text-gray-600">Google Reviews</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl w-full h-80 md:w-[36rem] md:h-[32rem] flex items-center justify-center relative overflow-hidden">
            <img src="/shop.webp" alt="Expert Mechanics at Work" className="w-full h-full object-cover" />
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center hover:scale-105 transition-transform">
                <img src={f.image} alt={f.title} className="w-48 h-32 object-contain rounded-2xl mb-4 mx-auto" />
                <h3 className="font-bold mb-2 text-black">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Insurance CTA */}
      <motion.section
        className="px-4 py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">We support insurance claims for Panel Beating and Mechanical Repairs.</h1>
          <p className="text-xl md:text-2xl font-semibold text-blue-600 mb-8">Get in touch today.</p>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-700 mb-6 text-center">
              <span className="font-bold">Panel Beating Insurance</span> covers repairs to your vehicle's bodywork, including dents, scratches, and collision damage. Our team will restore your car to its pre-accident condition with care and precision.
            </p>
            <p className="text-gray-700 mb-6 text-center">
              <span className="font-bold">Mechanical Insurance</span> covers engine, transmission, and other mechanical faults keeping your car running smoothly after a breakdown. We'll guide you through the claim process from start to finish.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              Panel Beating Insurance <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-black px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-500 transition">
              Auto Mechanical Insurance <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-[28rem] flex items-center justify-center">
            <img src="/undercar.jpg" alt="Mechanic working under car" className="w-full h-full object-cover rounded-3xl" />
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
            <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
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