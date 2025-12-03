import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ menuOpen, setMenuOpen }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 border-b">
        <div className="flex justify-between md:grid md:grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logowithoutname.jpeg" alt="CBD Panelbeating & Mechanical" className="h-10" />
            <span className="hidden md:block text-xl font-['Tomorrow']">CBD Panelbeating & Mechanical</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex justify-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/our-story" className="text-sm font-medium hover:text-blue-600 transition">
              Our Story
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-blue-600 transition">
                Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link to="/panel-beating" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">
                  Panel Beating
                </Link>
                <Link to="/mechanical" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">
                  Mechanical
                </Link>
                <Link to="/caravans-boats" className="block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition">
                  Caravans & Boats
                </Link>
              </div>
            </div>
            <Link to="/faqs" className="text-sm font-medium hover:text-blue-600 transition">
              FAQs
            </Link>
            <Link to="/tips-advice" className="text-sm font-medium hover:text-blue-600 transition">
              Tips & Advice
            </Link>
          </nav>

          {/* Working Hours, Support, Cart */}
          <div className="flex items-center justify-end gap-4">
            <div className="text-sm hidden md:block">
              <div>1900 1088</div>
              <div>info@example.com</div>
            </div>
            <button className="bg-blue-600 text-white px-4 md:px-6 py-2  text-sm font-medium hover:bg-red-700 transition">
              Book a Service
            </button>
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
              <Link to="/" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/our-story" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Our Story
              </Link>
              <Link to="/panel-beating" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Panel Beating
              </Link>
              <Link to="/mechanical" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Mechanical
              </Link>
              <Link to="/caravans-boats" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Caravans & Boats
              </Link>
              <Link to="/faqs" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                FAQs
              </Link>
              <Link to="/tips-advice" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Tips & Advice
              </Link>
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm mb-2">
                  <div className="font-medium">Mon - Fri: 7:30 AM - 5:30 PM</div>
                </div>
                <div className="text-sm mb-4">
                  <div>1900 1088</div>
                  <div>info@example.com</div>
                </div>
                <button className="w-full bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition" onClick={() => setMenuOpen(false)}>
                  Book a Service
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
