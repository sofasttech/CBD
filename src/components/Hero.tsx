import { Phone, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                MTA-APPROVED AUTO GARAGE
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Expert <span className="text-yellow-400">Panel Beating</span> & Mechanical Repairs
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              With over 30 years of experience, we provide comprehensive automotive repair services you can trust. From minor dents to major collision repairs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                GET A FREE QUOTE
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-200">
                VIEW SERVICES
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="text-yellow-400" size={20} />
                <span className="font-semibold">(09) 620-4570</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-yellow-400" size={20} />
                <span className="font-semibold">Mon-Fri 8AM-5PM</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-8 space-y-6">
                <h3 className="text-2xl font-bold text-black">Quick Contact</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                  />
                  <textarea
                    placeholder="Tell us about your vehicle"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none"
                  ></textarea>
                  <button className="w-full bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">
                    SUBMIT ENQUIRY
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
