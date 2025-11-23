import { useState, useEffect } from 'react';
import { ChevronRight, Star, Car, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Blog from './Blog';

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = ['/IMG_6538-2048x1365.jpg', '/IMG_7612-2048x1365.jpg'];

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

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero */}
      <motion.section
        id="home"
        className="pt-28 pb-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Need Expert Panel Beating and Collision Repair in Auckland?
          </h1>
          <p className="text-xl md:text-2xl font-bold text-blue-600 mb-6">We've Got You Covered!</p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            As an MTA-approved auto garage providing <a href="#" className="underline">panel beating</a> and <a href="#" className="underline">mechanical repair</a> services, we deliver expert workmanship with care, passion, and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('services')} className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-500 transition">
              Panel Beating <ChevronRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              Auto Mechanical <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-80 md:h-96 flex items-center justify-center relative overflow-hidden">
            <img src={heroImages[currentImage]} alt="Mechanic and customer looking under hood" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            </div>
          </div>
        </div>
      </motion.section>

      {/* Two Cards */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 hover:shadow-lg transition-shadow relative"
          >
            <div className="absolute top-6 left-6 w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Car className="w-6 h-6 text-blue-600" />
            </div>
            <div className="pt-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Panel Beating</h2>
              <p className="text-gray-800 mb-6">Our panel beaters repair your vehicle bodywork with precision, skill, and a flawless paint finish.</p>
              <button onClick={() => scrollToSection('services')} className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-gray-800 transition mb-4">
                Explore Services <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                <div className="bg-white rounded-lg px-3 py-1 text-xs font-medium h-8 w-20" style={{backgroundImage: 'url(/AfterPay-Logo.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
                <div className="bg-white rounded-lg px-3 py-1 text-xs font-medium">Zip</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-white rounded-3xl p-8 hover:shadow-lg transition-shadow relative"
          >
            <div className="absolute top-6 left-6 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <Settings className="w-6 h-6 text-black" />
            </div>
            <div className="pt-8">
              <h2 className="text-2xl font-bold mb-4">Mechanical Repairs</h2>
              <p className="text-gray-300 mb-6">MTA-approved auto garage delivering quality across all types of mechanical and electrical repairs.</p>
              <button onClick={() => scrollToSection('services')} className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-blue-500 transition mb-4">
                Explore Services <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                <div className="bg-white rounded-lg px-3 py-1 text-xs font-medium h-8 w-20" style={{ backgroundImage: 'url(/AfterPay-Logo.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <motion.section
        id="services"
        className="px-4 pb-16"
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
        <div className="bg-gray-50 py-4">
          <div className="max-w-5xl mx-auto px-4">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">What our customers say about our services?</h3>
            <p className="text-lg md:text-xl font-medium text-center text-gray-600 mb-8">Testimonials</p>
            <div className="text-center">
              <div className="mx-auto w-full max-w-7xl">
                <iframe
                  src="https://widgets.sociablekit.com/google-reviews/iframe/25625462"
                  frameBorder="0"
                  className="w-full h-[500px] rounded-lg"
                  loading="lazy"
                  title="Google Reviews"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}