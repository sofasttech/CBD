import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navigation({ menuOpen, setMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logowithoutname.jpeg" alt="Mt Roskill Collision" className="h-10" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Services', id: 'services' },
            { name: 'Reviews', id: 'reviews' },
            { name: 'Contact', id: 'contact' }
          ].map(item => (
            <button key={item.name} onClick={() => scrollToSection(item.id)} className="text-sm font-medium hover:text-blue-600 transition">
              {item.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => scrollToSection('contact')} className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">Contact us</button>
          <a href="tel:0800227762" className="border-2 border-gray-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">0800 227 762</a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
            className="md:hidden bg-white border-t px-4 py-4"
          >
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Reviews', id: 'reviews' },
              { name: 'Contact', id: 'contact' }
            ].map(item => (
              <button key={item.name} onClick={() => scrollToSection(item.id)} className="block py-2 font-medium text-left w-full">
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
