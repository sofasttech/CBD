import { Facebook, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer id="contact" className="relative bg-black text-white overflow-hidden">
      {/* Hero CTA Section with Background */}
      

      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
            {/* Company Info - Takes 4 columns */}
            <div className="lg:col-span-4">
              <img 
                src="/logowithname.png" 
                alt="CBD Panel and Paint" 
                className="h-28 mb-6 brightness-110"
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
                  className="group w-11 h-11 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
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
                {['Panel Beating', 'Auto Mechanical', 'Car Servicing', 'Tyres & Wheels'].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-6 relative inline-block">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {['About Us', 'Testimonials', 'Blog', 'FAQs'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
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
                    <p className="text-gray-400 text-xs">093091906</p>
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
