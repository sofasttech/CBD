import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      {/* Top Bar */}
      <div className="w-full px-4 py-3 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 min-w-fit">
            <img src="/logowithoutname.jpeg" alt="CBD Panel and Paint" className="h-10" />
            <span className="hidden lg:block text-xl font-['Poppins'] whitespace-nowrap">CBD Panel and Paint</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex justify-center items-center gap-4 lg:gap-6 flex-1 overflow-visible ml-8">
            <Link to="/" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              Home
            </Link>
            <Link to="/our-story" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/our-story' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              Our Story
            </Link>
            <Link to="/panel-beating" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/panel-beating' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              Panel Beating
            </Link>
            <Link to="/mechanical" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/mechanical' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              Mechanical
            </Link>
            <Link to="/caravans-boats" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/caravans-boats' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              Caravans & Boats
            </Link>
            <Link to="/tips-advice" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/tips-advice' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              Tips & Advice
            </Link>
            <Link to="/faqs" className={`text-sm font-medium transition py-2 whitespace-nowrap ${location.pathname === '/faqs' ? 'text-blue-600' : 'hover:text-blue-600'}`}>
              FAQs
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center justify-end gap-3 flex-shrink-0 min-w-fit">
            <div className="text-xs hidden xl:block text-right whitespace-nowrap">
              <div>093091906</div>
              <div>info@cbdpanel.co.nz</div>
            </div>
            <Link to="/contact" className="bg-blue-600 text-white px-4 lg:px-6 py-2 text-sm font-medium hover:bg-CGreen transition whitespace-nowrap">
              Book a Service
            </Link>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 px-4 py-4"
          >
            <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
              <X />
            </button>
            <div className="mt-12">
              <Link to="/" className={`block py-2 font-medium text-left w-full ${location.pathname === '/' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/our-story" className={`block py-2 font-medium text-left w-full ${location.pathname === '/our-story' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                Our Story
              </Link>
              <Link to="/panel-beating" className={`block py-2 font-medium text-left w-full ${location.pathname === '/panel-beating' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                Panel Beating
              </Link>
              <Link to="/mechanical" className={`block py-2 font-medium text-left w-full ${location.pathname === '/mechanical' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                Mechanical
              </Link>
              <Link to="/caravans-boats" className={`block py-2 font-medium text-left w-full ${location.pathname === '/caravans-boats' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                Caravans & Boats
              </Link>
              <Link to="/faqs" className={`block py-2 font-medium text-left w-full ${location.pathname === '/faqs' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
              <Link to="/tips-advice" className={`block py-2 font-medium text-left w-full ${location.pathname === '/tips-advice' ? 'text-blue-600' : ''}`} onClick={() => setMenuOpen(false)}>
                Tips & Advice
              </Link>
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm mb-2">
                  <div className="font-medium">Mon - Fri: 7:30 AM - 5:30 PM</div>
                </div>
                <div className="text-sm mb-4">
                  <div>093091906 </div>
                  <div>info@cbdpanel.co.nz		</div>
                </div>
                <Link to="/contact" className="w-full bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition block text-center" onClick={() => setMenuOpen(false)}>
                  Book a Service
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
