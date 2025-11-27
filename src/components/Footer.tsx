import { Facebook } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Top Footer Area */}
      <div className="px-4 py-36 bg-gray-900 relative" style={{ backgroundImage: 'url(/footer1.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-left bg-black bg-opacity-80 p-8 max-w-2xl mx-auto md:ml-96">
            <h2 className="text-sm uppercase mb-4 text-blue-600">GET STARTED</h2>
            <h1 className="text-5xl font-bold mb-4 text-white font-tomorrow">REFINE, RESTORE, RENEW ANYTHING</h1>
            <p className="text-base mb-6 text-gray-400">We specialize in expert panel beating, mechanical repairs, and comprehensive vehicle servicing to restore your vehicle to its best condition.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 r text-base font-semibold hover:bg-blue-500 transition">APPOINTMENT</button>
              <button onClick={() => scrollToSection('services')} className="bg-white text-black px-6 py-2  text-base font-semibold hover:bg-gray-200 transition">OUR SERVICES</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="bg-black px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logowithname.png" alt="Mt Roskill Collision" className="h-36 mb-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-white">Services</h4>
              <ul className="text-sm font-normal text-gray-400 space-y-1">
                <li><a href="#" className="hover:text-blue-600 transition">Panel Beating</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Auto Mechanical</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Car Servicing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Tyres & Wheels</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-white">Company</h4>
              <ul className="text-sm font-normal text-gray-400 space-y-1">
                <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Testimonials</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-3 text-white">Contact & Hours</h4>
              <p className="text-sm font-normal text-gray-400 mb-2">Mon to Fri – 7:00 am – 4:30 pm<br />Closed on Public Holidays</p>
              <div className="flex gap-2">
                <span className="text-blue-600 text-sm">Motor Repair CPA</span>
                <span className="text-blue-600 text-sm">MTA Assured</span>
              </div>
              <div className="mt-2">
                <a href="https://web.facebook.com/CBDPanelbeaters/?_rdc=1&_rdr#" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex justify-center items-center gap-8 mb-4">
              <img src="/MTA-logo_480x480.webp" alt="MTA" className="h-12" />
              <img src="/NZI_logo.svg.png" alt="NZI" className="h-12" />
              <img src="/Insurance_austr_group_logo15.png" alt="Insurance Australia Group" className="h-12" />
              <img src="/state-house-and-contents-product_default.webp" alt="State Insurance" className="h-12" />
            </div>
            <div className="text-center text-gray-500 text-sm">
              © 2025 CBD Panelbeating & Mechanical. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
