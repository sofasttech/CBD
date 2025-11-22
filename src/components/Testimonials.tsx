import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Private Customer',
      content: 'Absolutely outstanding service! My car looks brand new after the panel beating work. The team was professional, communicative, and completed the work faster than expected. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Insurance Claim',
      content: 'After a serious accident, Mt Roskill Collision handled everything perfectly. They dealt directly with my insurance company and kept me informed throughout. The repair quality is exceptional.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'Regular Customer',
      content: 'I have been bringing my vehicles here for years. The quality of work is consistently excellent, and the prices are very fair. The staff are friendly and always go the extra mile.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Fleet Manager',
      content: 'We use Mt Roskill Collision for all our company vehicle repairs. Their efficiency and reliability make them our preferred choice. Great team, great service.',
      rating: 5
    },
    {
      name: 'Lisa Patel',
      role: 'Private Customer',
      content: 'Professional service from start to finish. They provided a detailed quote, completed the work on time, and the results exceeded my expectations. Will definitely return!',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Mechanical Service',
      content: 'Not only excellent panel beaters but also great mechanics. They diagnosed and fixed an issue other workshops missed. Honest, skilled, and reasonably priced.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="text-yellow-400 mb-4" size={40} />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-400 rounded-2xl p-1">
            <div className="bg-black rounded-xl px-12 py-8">
              <h3 className="text-2xl font-bold mb-2">Ready to Experience Quality Service?</h3>
              <p className="text-gray-300 mb-6">Join thousands of satisfied customers</p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
                GET YOUR FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
