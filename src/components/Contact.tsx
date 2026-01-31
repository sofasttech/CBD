import { useState, useEffect } from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
    images: [] as File[],
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

  // Helper to compress image
  const compressImage = async (file: File): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('Canvas context not available'));

        let width = img.width;
        let height = img.height;
        const maxDim = 1024;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (!blob) return reject(new Error('Compression failed'));
          resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
        }, 'image/jpeg', 0.8);
      };
      img.onerror = (err) => reject(err);
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const processedFiles = await Promise.all(
        files.map(async (file) => {
          try {
            // Only compress if larger than 500KB or if it is an image
            if (file.size > 500 * 1024 && file.type.startsWith('image/')) {
              return await compressImage(file);
            }
            return file;
          } catch (error) {
            console.error("Error compressing file:", error);
            return file;
          }
        })
      );

      setFormData(prev => ({
        ...prev,
        // Limit to 5 images total
        images: [...prev.images, ...processedFiles].slice(0, 5)
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.isHuman) {
      alert('Please confirm you are a human.');
      return;
    }

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images') {
          (value as File[]).forEach(file => {
            data.append('images', file);
          });
        } else {
          data.append(key, value.toString());
        }
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        // Content-Type header is not needed for FormData, browser sets it automatically with boundary
        body: data,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setShowSuccessModal(true);
        setFormData({
          service: '',
          name: '',
          email: '',
          phone: '',
          vehicleReg: '',
          message: '',
          images: [],
          isHuman: false
        });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth relative">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#0C55AC' }}>
            Get in Touch with Us
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: '#0C55AC' }}>Need assistance with panel repairs or mechanical servicing? We're just a call away!</p>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            At <strong>CBD Panel and Paint Limited</strong>, we're dedicated to providing fast, efficient, and reliable service for all your vehicle needs. Whether you're seeking panel repairs, mechanical diagnostics, or routine servicing, our experienced team is here to get you back on the road quickly and safely.
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
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1F366A' }}>Contact Details</h2>
            <div className="space-y-8">
              <div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" style={{ color: '#14A0B5' }} />
                    <a href="mailto:info@cbdpanel.co.nz	" className="hover:opacity-80" style={{ color: '#1F366A' }}>info@cbdpanel.co.nz	</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: '#14A0B5' }} />
                    <span className="font-bold" style={{ color: '#1F366A' }}>09-309 1906</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: '#14A0B5' }} />
                    <span className="font-bold" style={{ color: '#1F366A' }}>0274593411 (24 hr service)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1" style={{ color: '#14A0B5' }} />
                    <span style={{ color: '#1F366A' }}>390 Great North Road, Grey Lynn, Auckland, New Zealand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Get in Touch */}
          <div>
            <h2 className="text-4xl font-bold mb-8" style={{ color: '#1F366A' }}>Get in Touch</h2>
            <p className="mb-8" style={{ color: '#B5B5B5' }}>
              Fill out the form below to book a repair or ask about our services. A member of our team will get in touch with you shortly to discuss your needs.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Service Type</label>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  <label className="flex items-center rounded-full px-4 py-2 cursor-pointer whitespace-nowrap" style={{ backgroundColor: '#FDDD7F' }}>
                    <input
                      type="radio"
                      name="service"
                      value="Panel Beating"
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Panel Beating
                  </label>
                  <label className="flex items-center rounded-full px-4 py-2 cursor-pointer whitespace-nowrap" style={{ backgroundColor: '#FDDD7F' }}>
                    <input
                      type="radio"
                      name="service"
                      value="Mechanical"
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Mechanical
                  </label>
                  <label className="flex items-center rounded-full px-4 py-2 cursor-pointer whitespace-nowrap" style={{ backgroundColor: '#FDDD7F' }}>
                    <input
                      type="radio"
                      name="service"
                      value="Caravan and Boat"
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Caravan and Boat
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Name <span style={{ color: '#E4AEB3' }}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#B5B5B5' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Email <span style={{ color: '#E4AEB3' }}>*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#B5B5B5' }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Phone Number <span style={{ color: '#E4AEB3' }}>*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#B5B5B5' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Vehicle Registration Number <span style={{ color: '#E4AEB3' }}>*</span></label>
                  <input
                    type="text"
                    name="vehicleReg"
                    required
                    value={formData.vehicleReg}
                    onChange={handleInputChange}
                    placeholder="Vehicle Registration Number*"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: '#B5B5B5' }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent"
                  style={{ borderColor: '#B5B5B5' }}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1F366A' }}>Upload Images</label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition"
                  style={{ borderColor: '#B5B5B5' }}
                  onClick={() => document.getElementById('image-upload')?.click()}
                >
                  <input
                    type="file"
                    id="image-upload"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <p className="text-gray-500">Click to upload images (Max 5)</p>
                </div>
                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          <span className="text-xs text-gray-500 truncate px-2">{file.name}</span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); removeImage(index); }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <label className="flex items-center" style={{ color: '#1F366A' }}>
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={formData.isHuman}
                    onChange={handleInputChange}
                    required
                    className="mr-2"
                  />
                  I am a human <span style={{ color: '#E4AEB3' }}>*</span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
                  style={{ backgroundColor: '#0C55AC' }}
                >
                  Submit <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div >
      </motion.section >

      {/* Location Maps */}
      < motion.section
        className="px-4 pb-16"
        initial={{ opacity: 0, y: 50 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#1F366A' }}>Our Location</h2>
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: '#14A0B5' }}>CBD Panel and Paint - 390 Great North Road, Grey Lynn, Auckland</h3>
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
          </div>
        </div>
      </motion.section >

      <Footer scrollToSection={scrollToSection} />

      {/* Success Modal */}
      {
        showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-8">
                Thank you for reaching out. We have received your message and will get back to you shortly.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#0C55AC] text-white py-3 rounded-xl font-semibold hover:bg-[#1F366A] transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )
      }
    </div >
  );
}
