

export default function Blog() {
  const posts = [
    {
      title: 'SUPERIOR SERVICE WITH A TOUCH OF CLASS',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'MAY 29, 2025',
      category: 'ASK PROJECT',
      image: '/close-up-photo-of-mechanic-changing-antifreeze-flu-2025-03-08-13-09-02-utc-300x200.jpg'
    },
    {
      title: 'A TRADITIONS OF AUTOMOTIVE EXCELLENCE',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'MAY 29, 2025',
      category: 'ASK PROJECT',
      image: '/pouring-engine-oil-to-car-engine-fresh-oil-poured-2022-11-01-09-27-40-utc-scaled-1-300x200.jpg'
    },
    {
      title: 'DRIVING IN STYLES, EXPERTLY MAINTAINED',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'MAY 29, 2025',
      category: 'ASK PROJECT',
      image: '/testing-car-battery-2021-08-26-19-52-15-utc-scaled-1-300x200.jpg'
    },
  ];

  return (
    <section id="reviews" className="py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-2">BLOG & NEWS</p>
            <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-bold text-white">
              ARTICLES FROM AUTOACE
            </h2>
          </div>
          <button className="relative group bg-blue-600 text-white px-4 py-2 md:px-8 md:py-3 font-medium transition">
            <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
            <span className="relative z-10">VIEW MORE</span>
            <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
            <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
            <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group max-w-sm w-full relative"
            >
              <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
              <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
              <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
              <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
              <div className="relative h-32 bg-gradient-to-br from-gray-600 to-gray-700 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-400 text-xs font-medium uppercase">{post.category}</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4 text-xs">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
