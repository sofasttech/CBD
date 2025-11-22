import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Contact Us Today
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Ready to get your vehicle repaired? We're here to help
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="john.smith@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="(09) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option>Select a service</option>
                  <option>Panel Beating</option>
                  <option>Mechanical Repairs</option>
                  <option>Spray Painting</option>
                  <option>Insurance Claim</option>
                  <option>WOF & Servicing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Tell us about your vehicle and what service you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <div className="bg-yellow-400 rounded-lg p-3 mr-4">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1">Address</h4>
                  <p className="text-gray-600">
                    123 Mt Roskill Road<br />
                    Mt Roskill, Auckland 1041<br />
                    New Zealand
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <div className="bg-yellow-400 rounded-lg p-3 mr-4">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:096204570" className="hover:text-yellow-400 transition-colors">
                      (09) 620-4570
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <div className="bg-yellow-400 rounded-lg p-3 mr-4">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@mtroskillcollision.co.nz" className="hover:text-yellow-400 transition-colors">
                      info@mtroskillcollision.co.nz
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-xl shadow-md">
                <div className="bg-yellow-400 rounded-lg p-3 mr-4">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Emergency Service?</h4>
              <p className="text-gray-300 mb-4">
                For urgent repairs or towing assistance, please call us directly.
              </p>
              <a
                href="tel:096204570"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
              >
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
