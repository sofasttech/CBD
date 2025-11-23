import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Understanding Insurance Claims for Auto Repairs',
      excerpt: 'Learn how to navigate the insurance claim process and what to expect when getting your vehicle repaired after an accident.',
      date: 'March 15, 2024',
      category: 'Insurance',
      image: '/close-up-photo-of-mechanic-changing-antifreeze-flu-2025-03-08-13-09-02-utc-300x200.jpg'
    },
    {
      title: 'The Importance of Regular Vehicle Servicing',
      excerpt: 'Discover why regular maintenance is crucial for your vehicle\'s longevity and how it can save you money in the long run.',
      date: 'March 10, 2024',
      category: 'Maintenance',
      image: '/pouring-engine-oil-to-car-engine-fresh-oil-poured-2022-11-01-09-27-40-utc-scaled-1-300x200.jpg'
    },
    {
      title: 'Panel Beating vs. Body Shop: What\'s the Difference?',
      excerpt: 'Understand the difference between panel beating and general body shop work, and which service your vehicle needs.',
      date: 'March 5, 2024',
      category: 'Panel Beating',
      image: '/testing-car-battery-2021-08-26-19-52-15-utc-scaled-1-300x200.jpg'
    },
  ];

  return (
    <section id="reviews" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
            News & Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group max-w-sm w-full"
            >
              <div className="relative h-32 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-base font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4 text-xs">
                  {post.excerpt.length > 80 ? post.excerpt.slice(0, 80) + '...' : post.excerpt}
                </p>

                <button className="flex items-center text-blue-600 font-bold hover:text-blue-500 transition-colors group text-xs">
                  Read More
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
