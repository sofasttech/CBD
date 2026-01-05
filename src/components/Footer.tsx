import { Facebook, Phone, Mail, Clock, ArrowRight, Instagram, Youtube, Linkedin, Video } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="relative bg-black text-white">
      {/* Wave Separator at top of footer */}
      <div className="relative w-full overflow-hidden bg-white" style={{ marginTop: '-80px' }}>
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px] md:h-[100px]"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
            fill="#111827"
          />
        </svg>
      </div>

      {/* Hero CTA Section with Background */}


      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black" style={{ marginTop: '-1px' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info - Takes 4 columns */}
            <div className="lg:col-span-4">
              <img
                src="/logowithname.png"
                alt="CBD Panel and Paint"
                className="h-44 w-64 mb-6 brightness-110 object-contain -ml-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Your trusted partner for premium automotive care since establishment.
                Delivering excellence in panel beating and mechanical services with a commitment to quality and customer satisfaction.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://web.facebook.com/CBDPanelbeaters/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-11 h-11 rounded-lg bg-blue-600 border border-blue-600 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-11 h-11 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 border border-pink-600 flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-11 h-11 rounded-lg bg-black border border-gray-800 flex items-center justify-center hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <Video className="w-5 h-5 text-white transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-11 h-11 rounded-lg bg-red-600 border border-red-600 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="w-5 h-5 text-white transition-transform" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="group w-11 h-11 rounded-lg bg-blue-700 border border-blue-700 flex items-center justify-center hover:bg-blue-800 hover:border-blue-800 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links - Services */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {['Panel Beating', 'Painting and Refinishing', 'Mechanical', 'WOF and Compliance', 'Caravan and Boat Repair'].map((service) => {
                  const getOnClick = () => {
                    if (service === 'Panel Beating') return () => navigate('/panel-beating');
                    if (service === 'Mechanical') return () => navigate('/panel-beating');
                    if (service === 'Caravan and Boat Repair') return () => navigate('/caravans-boats');
                    return () => scrollToSection('services');
                  };
                  return (
                    <li key={service}>
                      <a
                        href="#"
                        onClick={getOnClick()}
                        className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                        {service}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    onClick={() => navigate('/our-story')}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigate('/faqs')}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigate('/tips-advice')}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Tips and Advice
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => navigate('/#reviews')}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4">
              <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </h3>
              <div className="space-y-4">
                {/* Business Hours */}
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 p-2 rounded-lg bg-blue-600/10 border border-blue-600/20 group-hover:bg-blue-600/20 transition-colors">
                    <Clock className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Business Hours</p>
                    <p className="text-gray-400 text-xs">Monday - Friday: 7:00 AM - 4:30 PM</p>
                    <p className="text-gray-400 text-xs">Closed on Public Holidays</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 p-2 rounded-lg bg-blue-600/10 border border-blue-600/20 group-hover:bg-blue-600/20 transition-colors">
                    <Phone className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Phone</p>
                    <p className="text-gray-400 text-xs">093091906 | 24hr: 0274593411</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 group">
                  <div className="mt-1 p-2 rounded-lg bg-blue-600/10 border border-blue-600/20 group-hover:bg-blue-600/20 transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">Email</p>
                    <p className="text-gray-400 text-xs">info@cbdpanel.co.nz	</p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1.5 bg-blue-600/10 border border-blue-600/30 rounded-full text-blue-400 text-xs font-semibold">
                    Motor Repair CPA
                  </span>
                  <span className="px-3 py-1.5 bg-blue-600/10 border border-blue-600/30 rounded-full text-blue-400 text-xs font-semibold">
                    MTA Assured
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full-bleed Partners & Copyright (white background) */}
        <div className="w-full bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="mb-10 text-center">
              <p className="text-center text-gray-500 text-xs uppercase tracking-wider mb-6 font-semibold">
                Trusted Insurance Partners
              </p>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                <img src="/MTA-logo_480x480.webp" alt="MTA" className="h-14 md:h-16 opacity-100 transition-opacity duration-300 object-contain" />
                <img src="/NZI_logo.svg.png" alt="NZI" className="h-14 md:h-16 opacity-100 transition-opacity duration-300 object-contain" />
                <img src="/Insurance_austr_group_logo15.png" alt="Insurance Australia Group" className="h-14 md:h-16 opacity-100 transition-opacity duration-300 object-contain" />
                <img src="/state-house-and-contents-product_default.webp" alt="State Insurance" className="h-14 md:h-16 opacity-100 transition-opacity duration-300 object-contain" />
              </div>
            </div>
            <div className="text-center text-gray-700">
              <p className="text-sm mb-2">© 2025 CBD Panel and Paint. All rights reserved.</p>
              <p className="text-xs">Crafted with precision and care for automotive excellence</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
