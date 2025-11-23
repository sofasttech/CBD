import { useState, useEffect } from 'react';
import { ChevronRight, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const features = [
    { image: '/care-tires.png', title: 'Quick Turn Around', desc: 'Fast, high-quality repairs we outperform large insurance shops with quicker turnaround times and precision results.' },
    { image: '/Wrenches.png', title: 'Cost Effective', desc: 'We understand how quickly costs can add up after even a minor accident. That\'s why we offer smart, budget-friendly repair solutions.' },
    { image: '/spray-gun-attachment.png', title: 'Experienced', desc: 'Our technicians bring decades of combined experience to every job no guesswork, just quality workmanship.' },
    { image: '/car-polishing-tray.png', title: 'Family Orientated', desc: 'As a family-run business, we offer the kind of personal service and consistent quality big corporations can\'t match.' },
    { image: '/kiwi-bird.png', title: '100% Kiwi-Owned', desc: 'We\'re proudly local committed to supporting our community and delivering exceptional service with every repair.' },
    { image: '/car-pieces.png', title: 'Multiple Services, One Location', desc: 'From panel beating to mechanical work, get it all sorted in one place saving you time, money, and hassle.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero */}
      <motion.section
        className="pt-28 pb-12 px-4 bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Our <span className="text-blue-400">Story</span> –<br />
            Mt Roskill Collision Centre &<br />
            Roskill Auto Mechanical
          </h1>
          <img src="/shop.webp" alt="Our team at Mt Roskill Collision Centre" className="w-full h-auto rounded-3xl" />
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Building Trust for Over 30 Years</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over 30 years of experience, Mt Roskill Collision Centre has built a reputation for expert workmanship, genuine care, and community trust. From the beginning, our mission has been simple: raise the standard of automotive repair in Auckland with honest service, skilled craftsmanship, and great value.
                </p>
                <p>
                  Over the years, we've grown alongside our community and earned our place as one of Auckland's most trusted names in panel and paint. Whether it's a small bumper fix or a full collision restoration, our team blends traditional techniques with the latest in repair and paint technology to get the job done right.
                </p>
                <p>
                  We also work closely with all major insurance providers, offering a smooth, stress-free experience that gets you back on the road with confidence.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4">Our Expertise</h4>
                <ul className="space-y-3">
                  {[
                    'Panel beating and paint',
                    'Collision restoration',
                    'Insurance claims handling',
                    'Traditional and modern techniques',
                    'State-of-the-art equipment'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Expansion Section */}
      <motion.section
        className="px-4 py-16 bg-blue-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Expanding to Serve You Better</h3>
          <div className="space-y-4 text-white leading-relaxed max-w-3xl mx-auto">
            <p>
              After decades of listening to our customers, we recognised a growing need for complete vehicle care—beyond panel beating. That's why we launched Roskill Auto Mechanical, giving you access to expert mechanical servicing and diagnostics under the same trusted roof.
            </p>
            <p>
              No more running between multiple providers—just one location, one expert team, and a seamless experience from start to finish.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Sustainability Section */}
      <motion.section
        className="px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-green-50 rounded-2xl p-8">
                <Leaf className="w-16 h-16 text-green-600 mb-4" />
                <h4 className="text-2xl font-bold mb-4">Proudly Kiwi & Environmentally Conscious</h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    We're proudly Kiwi-owned and deeply committed to sustainability. One of our proudest initiatives? Leading the way in soft plastics recycling.
                  </p>
                  <p>
                    We were among the first in NZ's automotive repair industry to launch large-scale soft plastic recycling—a move recognised in PanelTalk magazine and beyond.
                  </p>
                  <p>
                    It's just one example of how we're doing our part for a cleaner, greener future.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-black mb-6">Environmental Leadership</h3>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to sustainability goes beyond recycling. We continuously invest in eco-friendly practices and technologies that minimize our environmental impact while maintaining the highest standards of automotive repair.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        className="px-4 py-16 bg-black"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center hover:scale-105 transition-transform">
                <img src={f.image} alt={f.title} className="w-48 h-32 object-contain rounded-2xl mb-4 mx-auto" />
                <h3 className="font-bold mb-2 text-white">{f.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Closing Section */}
      <motion.section
        className="px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-black mb-6">Trusted by Generations</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              We've built long-term relationships with generations of local families and businesses, and we're proud to keep delivering the same care and passion that started it all.
            </p>
            <p>
              You can trust Mt Roskill Collision Centre and Roskill Auto Mechanical to treat your vehicle like it's our own.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Contact Us Today
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
