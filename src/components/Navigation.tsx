import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ menuOpen, setMenuOpen}: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 py-2 border-b">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logowithoutname.jpeg" alt="CBD Panelbeating & Mechanical" className="h-10" />
            <span className="text-xl font-bold">CBD Panelbeating & Mechanical</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex justify-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/auto-repair" className="text-sm font-medium hover:text-blue-600 transition">
              Auto Repair
            </Link>
            <Link to="/vehicles" className="text-sm font-medium hover:text-blue-600 transition">
              Vehicles
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-blue-600 transition">
              Shop
            </Link>
            <Link to="/pages" className="text-sm font-medium hover:text-blue-600 transition">
              Pages
            </Link>
          </nav>

          {/* Working Hours, Support, Cart */}
          <div className="flex items-center justify-end gap-4">
            <div className="text-sm hidden md:block">
              <div>1900 1088</div>
              <div>info@example.com</div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
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
              <Link to="/auto-repair" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Auto Repair
              </Link>
              <Link to="/vehicles" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Vehicles
              </Link>
              <Link to="/shop" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/pages" className="block py-2 font-medium text-left w-full" onClick={() => setMenuOpen(false)}>
                Pages
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
