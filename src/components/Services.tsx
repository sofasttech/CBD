import { Wrench, Car, Shield, Gauge, Hammer, Cog } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Hammer,
      title: 'Panel Beating',
      description: 'Expert dent removal, panel replacement, and collision repair services with precision craftsmanship.',
      features: ['Dent Removal', 'Panel Replacement', 'Collision Repair', 'Frame Straightening']
    },
    {
      icon: Wrench,
      title: 'Mechanical Repairs',
      description: 'Complete mechanical services from routine maintenance to complex engine repairs.',
      features: ['Engine Diagnostics', 'Brake Services', 'Transmission', 'Suspension']
    },
    {
      icon: Car,
      title: 'Spray Painting',
      description: 'Professional automotive painting with color matching and high-quality finishes.',
      features: ['Color Matching', 'Full Resprays', 'Touch-ups', 'Clear Coating']
    },
    {
      icon: Shield,
      title: 'Insurance Claims',
      description: 'We work directly with all major insurance companies to streamline your claim process.',
      features: ['Direct Billing', 'Claims Support', 'Documentation', 'Assessment']
    },
    {
      icon: Gauge,
      title: 'WOF & Servicing',
      description: 'Warrant of Fitness inspections and comprehensive vehicle servicing.',
      features: ['WOF Inspections', 'Pre-purchase Checks', 'Regular Servicing', 'Safety Checks']
    },
    {
      icon: Cog,
      title: 'Custom Work',
      description: 'Specialized modifications and custom automotive work tailored to your needs.',
      features: ['Custom Fabrication', 'Modifications', 'Upgrades', 'Restoration']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Comprehensive Auto Care Services
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            From minor repairs to major collision work, we handle it all with expertise and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-8">
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-blue-600 font-bold hover:text-blue-500 transition-colors flex items-center group">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Not Sure What You Need?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team can assess your vehicle and recommend the best solution
          </p>
          <button className="bg-blue-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-colors">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
