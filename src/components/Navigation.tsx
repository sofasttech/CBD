import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Panel Beating', href: '#services' },
    { name: 'Mechanical', href: '#services' },
    { name: 'Insurance', href: '#insurance' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-yellow-400">MT ROSKILL</span>
              <span className="text-white"> COLLISION</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors duration-200">
              BOOK NOW
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-900 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors mt-4">
              BOOK NOW
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
