import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Top Footer Area */}
      <div className="px-4 py-36 bg-gray-900 relative" style={{ backgroundImage: 'url(/Footer-bg.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-5xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-4">Book a <span className="text-blue-600">free</span><br />appointment.</h3>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-black px-6 py-2 rounded-full text-base font-semibold inline-block hover:bg-blue-500 transition">Book now</button>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3 text-white">Panel Beating</h4>
              <p className="text-base font-normal text-gray-400 flex items-center gap-2 mb-2"><Mail className="w-4 h-4" /> info@mtroskillcollision.co.nz</p>
              <p className="text-base font-normal text-gray-400 flex items-center gap-2 mb-2"><Phone className="w-4 h-4" /> 0800 227 762</p>
              <p className="text-base font-normal text-gray-400 flex items-center gap-2"><MapPin className="w-4 h-4" /> 42 Carr Road, Mt Roskill</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3 text-white">Auto Mechanic</h4>
              <p className="text-base font-normal text-gray-400 flex items-center gap-2 mb-2"><Mail className="w-4 h-4" /> admin@roskillauto.co.nz</p>
              <p className="text-base font-normal text-gray-400 flex items-center gap-2 mb-2"><Phone className="w-4 h-4" /> 09 242 1870</p>
              <p className="text-base font-normal text-gray-400 flex items-center gap-2"><MapPin className="w-4 h-4" /> 2/40 Carr Road<br />Three Kings Auckland 1042<br />New Zealand</p>
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
                <a href="https://www.facebook.com/mtroskillcollision/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 transition">f</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
            © 2025 Mt Roskill Collision Centre. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
