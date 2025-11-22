import { Calendar, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Understanding Insurance Claims for Auto Repairs',
      excerpt: 'Learn how to navigate the insurance claim process and what to expect when getting your vehicle repaired after an accident.',
      date: 'March 15, 2024',
      category: 'Insurance',
      image: 'insurance'
    },
    {
      title: 'The Importance of Regular Vehicle Servicing',
      excerpt: 'Discover why regular maintenance is crucial for your vehicle\'s longevity and how it can save you money in the long run.',
      date: 'March 10, 2024',
      category: 'Maintenance',
      image: 'service'
    },
    {
      title: 'Panel Beating vs. Body Shop: What\'s the Difference?',
      excerpt: 'Understand the difference between panel beating and general body shop work, and which service your vehicle needs.',
      date: 'March 5, 2024',
      category: 'Panel Beating',
      image: 'panel'
    },
    {
      title: 'How to Choose the Right Auto Repair Shop',
      excerpt: 'Essential tips for selecting a trustworthy auto repair shop that will provide quality service and fair pricing.',
      date: 'February 28, 2024',
      category: 'Tips & Guides',
      image: 'guide'
    },
    {
      title: 'Common Signs Your Vehicle Needs Mechanical Attention',
      excerpt: 'Learn to recognize the warning signs that indicate your vehicle requires professional mechanical inspection and repair.',
      date: 'February 20, 2024',
      category: 'Mechanical',
      image: 'mechanical'
    },
    {
      title: 'The Complete Guide to WOF Preparation',
      excerpt: 'Everything you need to know about preparing your vehicle for a Warrant of Fitness inspection to ensure a smooth pass.',
      date: 'February 15, 2024',
      category: 'WOF',
      image: 'wof'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">
            News & Guides
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Latest From Our Blog
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Expert advice, industry news, and helpful guides for vehicle owners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400 opacity-20">
                    {post.image.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    <Tag size={12} className="mr-1" />
                    {post.category}
                  </span>
                  <span className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <button className="flex items-center text-yellow-400 font-bold hover:text-yellow-500 transition-colors group">
                  Read More
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors">
            VIEW ALL ARTICLES
          </button>
        </div>
      </div>
    </section>
  );
}
