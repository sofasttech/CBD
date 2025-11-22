import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span className="text-yellow-400">MT ROSKILL</span>
              <br />
              <span className="text-white">COLLISION</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Auckland's trusted auto repair specialists for over 30 years. Quality workmanship, honest service, and competitive pricing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Insurance', 'FAQs', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Panel Beating',
                'Mechanical Repairs',
                'Spray Painting',
                'Insurance Claims',
                'WOF & Servicing',
                'Custom Work',
                'Frame Straightening',
                'Dent Removal'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-yellow-400 mr-3 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Mt Roskill Road<br />
                  Mt Roskill, Auckland 1041
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <a href="tel:096204570" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  (09) 620-4570
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-yellow-400 mr-3 flex-shrink-0" size={20} />
                <a href="mailto:info@mtroskillcollision.co.nz" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  info@mtroskillcollision.co.nz
                </a>
              </li>
            </ul>

            <div className="mt-6 bg-gray-900 p-4 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Business Hours:</p>
              <p className="text-white font-semibold">Mon-Fri: 8AM-5PM</p>
              <p className="text-white font-semibold">Sat: 9AM-1PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Mt Roskill Collision. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="bg-gray-800 px-4 py-2 rounded">
                <span className="text-yellow-400 font-bold">MTA</span>
                <span className="text-white text-sm ml-2">Approved</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded">
                <span className="text-yellow-400 font-bold">30+</span>
                <span className="text-white text-sm ml-2">Years Experience</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded">
                <span className="text-yellow-400 font-bold">100%</span>
                <span className="text-white text-sm ml-2">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
