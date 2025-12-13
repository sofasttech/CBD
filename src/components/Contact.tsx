import { useState, useEffect } from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    vehicleReg: '',
    message: '',
    isHuman: false
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isHuman) {
      alert('Please confirm you are a human.');
      return;
    }
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero */}
      <motion.section
        className="pt-28 pb-12 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 leading-tight">
            Get in Touch with Us
          </h1>
          <p className="text-xl md:text-2xl font-bold text-blue-600 mb-6">Need assistance with panel repairs or mechanical servicing? We're just a call away!</p>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            At <strong>Mt Roskill Collision Centre & Roskill Auto Mechanical</strong>, we're dedicated to providing fast, efficient, and reliable service for all your vehicle needs. Whether you're seeking panel repairs, mechanical diagnostics, or routine servicing, our experienced team is here to get you back on the road quickly and safely.
          </p>
        </div>
      </motion.section>

      {/* Shop Image */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <img src="/shop.webp" alt="Mt Roskill Collision Centre Exterior with Certifications" className="w-full h-auto rounded-3xl" />
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="px-4 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Details */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-8">Contact Details</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Panel Repairs</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:info@cbdpanel.co.nz	" className="text-gray-700 hover:text-blue-600">info@cbdpanel.co.nz	</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-700">+64 9-309 1906</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">390 Great North Road, Grey Lynn, Auckland, New Zealand</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Mechanical Repairs</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:admin@roskillauto.co.nz" className="text-gray-700 hover:text-blue-600">admin@roskillauto.co.nz</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="font-bold text-gray-700">09 242 1870</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">2/40 Carr Road Three Kings Auckland 1042 New Zealand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Get in Touch */}
          <div>
            <h2 className="text-4xl font-bold text-black mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below to book a repair or ask about our services. A member of our team will get in touch with you shortly to discuss your needs.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <div className="flex gap-4">
                  <label className="flex items-center bg-gray-100 rounded-full px-4 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="service"
                      value="Panel Beating"
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Panel Beating
                  </label>
                  <label className="flex items-center bg-gray-100 rounded-full px-4 py-2 cursor-pointer">
                    <input
                      type="radio"
                      name="service"
                      value="Mechanical"
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Mechanical
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Registration Number <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="vehicleReg"
                    required
                    value={formData.vehicleReg}
                    onChange={handleInputChange}
                    placeholder="Vehicle Registration Number*"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={formData.isHuman}
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  I am a human <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                >
                  Submit <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Location Maps */}
      <motion.section
        className="px-4 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Panel Repairs - 390 Great North Road, Grey Lynn, Auckland</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.123456789012!2d174.7385!3d-36.8606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9d1c3d%3A0x4b0b8b8b8b8b8b8b!2zMzkwIEdyZWF0IE5vcnRoIFJvYWQsIEdyZXkgTHlubiBBdWNrbGFuZA!5e0!3m2!1sen!2snz!4v1234567890123!5m2!1sen!2snz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Panel Repairs Location"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Mechanical Repairs - 2/40 Carr Road, Three Kings</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.123456789012!2d174.7528!3d-36.9067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9d1c3d%3A0x4b0b8b8b8b8b8b8b!2zMi80MCBDYXJyIFJvYWQsIFRocmVlIEtpbmdzIEF1Y2tsYW5kIDEwNDI!5e0!3m2!1sen!2snz!4v1234567890123!5m2!1sen!2snz"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mechanical Repairs Location"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
