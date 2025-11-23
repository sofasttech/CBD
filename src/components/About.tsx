import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Clock, value: '30+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Award, value: 'MTA', label: 'Approved' },
    { icon: ThumbsUp, value: '100%', label: 'Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold text-sm uppercase tracking-wide">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2 mb-6">
              Auckland's Trusted Auto Repair Specialists
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                For over three decades, Mt Roskill Collision has been the go-to destination for quality automotive repairs in Auckland. Our MTA-approved facility combines traditional craftsmanship with modern technology to deliver exceptional results.
              </p>
              <p className="text-lg">
                We pride ourselves on transparency, quality workmanship, and customer satisfaction. Whether it's a minor scratch or major collision damage, our experienced team treats every vehicle with the same level of care and attention to detail.
              </p>
              <p className="text-lg">
                Our state-of-the-art workshop is equipped with the latest diagnostic and repair equipment, ensuring your vehicle receives the best possible care. We work with all insurance companies and offer competitive rates for private work.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg">
                <Award className="text-blue-600" size={24} />
                <span className="font-semibold">MTA Approved</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-lg">
                <ThumbsUp className="text-blue-600" size={24} />
                <span className="font-semibold">Fully Licensed</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    'Over 30 years of industry experience',
                    'MTA-approved and fully certified',
                    'Work with all insurance companies',
                    'State-of-the-art equipment',
                    'Competitive pricing',
                    'Quality guaranteed workmanship',
                    'Free quotes and assessments',
                    'Convenient location in Mt Roskill'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-black rounded-xl p-8 hover:bg-gray-900 transition-colors">
                <stat.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
