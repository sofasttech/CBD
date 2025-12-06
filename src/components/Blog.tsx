

import { ChevronsRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'SUPERIOR SERVICE WITH A TOUCH OF CLASS',
      excerpt: 'Discover how our expert panel beaters restore your vehicle to its original glory with precision craftsmanship and high-quality materials.',
      date: 'MAY 29, 2025',
      category: 'ASK PROJECT',
      image: '/close-up-photo-of-mechanic-changing-antifreeze-flu-2025-03-08-13-09-02-utc-300x200.jpg'
    },
    {
      title: 'A TRADITIONS OF AUTOMOTIVE EXCELLENCE',
      excerpt: 'From engine diagnostics to full mechanical overhauls, our team ensures your car runs smoothly and safely on the road.',
      date: 'MAY 29, 2025',
      category: 'ASK PROJECT',
      image: '/pouring-engine-oil-to-car-engine-fresh-oil-poured-2022-11-01-09-27-40-utc-scaled-1-300x200.jpg'
    },
    {
      title: 'DRIVING IN STYLES, EXPERTLY MAINTAINED',
      excerpt: 'Keep your vehicle in top condition with our comprehensive maintenance services, including battery checks and tire rotations.',
      date: 'MAY 29, 2025',
      category: 'ASK PROJECT',
      image: '/testing-car-battery-2021-08-26-19-52-15-utc-scaled-1-300x200.jpg'
    },
  ];

  return (
    <section id="reviews" className="py-6 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-2">BLOG & NEWS</p>
            <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-bold text-black">
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
            <div key={index} className='w-full max-w-[400px] relative mt-4 h-[400px] group mx-auto bg-white border overflow-hidden rounded-md text-black'>
              <figure className='w-full h-full rounded-md overflow-hidden'>
                <img
                  src={post.image}
                  alt={post.title}
                  className='h-full w-full scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
                />
              </figure>
              <div className='absolute top-0 left-0 w-full h-full transition-all duration-300 bg-gradient-to-b from-[#0066ff25] via-[#0066ff5b] to-[#0066ff]'></div>
              <article className='p-4 space-y-2 absolute -bottom-10 group-hover:bottom-0 transition-all duration-300'>
                <h1 className='text-2xl font-semibold capitalize w-[90%]'>
                  {post.title}
                </h1>
                <a
                  href='#'
                  className='text-base text-white font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 flex gap-1 transition-all duration-300'
                >
                  Read Story
                  <span>
                    <ChevronsRight />
                  </span>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
