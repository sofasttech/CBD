

import { ChevronsRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'Panel Beating Repair Costs Explained – From Small Dents to Major Damage',
      excerpt: 'Understanding panel beating costs helps you make informed decisions. Prices vary based on damage severity, parts, labour, paint type, and insurance coverage.',
      date: 'MAY 29, 2025',
      category: 'PANEL BEATING',
      image: '/panel-beatt.jpg',
      route: '/tips-advice/panel-beating-costs'
    },
    {
      title: 'Repair or Replace? How to Know When a Panel Should Be Replaced',
      excerpt: 'Should a damaged panel be repaired or replaced? Understanding the difference helps you make informed decisions and avoid paying for the wrong repair.',
      date: 'MAY 29, 2025',
      category: 'PANEL BEATING',
      image: '/car-polishing-tray.png',
      route: '/tips-advice/repair-or-replace'
    },
    {
      title: 'Why Front Bumper Repair Matters: A Practical Guide for Drivers',
      excerpt: 'The front bumper absorbs impact and protects key components; professional repairs restore strength, alignment, and finish.',
      date: 'MAY 29, 2025',
      category: 'PANEL BEATING',
      image: '/frontbumper.webp',
      route: '/tips-advice/bumper-repair-guide'
    },
  ];

  return (
    <section id="reviews" className="py-6 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-2">BLOG & NEWS</p>
            <h2 className="text-4xl md:text-5xl font-['Poppins'] font-bold text-black">
              ARTICLES FROM AUTOACE
            </h2>
          </div>
          <a href="/tips-advice" className="relative group bg-blue-600 text-white px-8 py-3 font-medium transition inline-flex items-center gap-2">
            <span className="absolute left-0 top-0 h-full bg-CGreen w-0 group-hover:w-full transition-all duration-300"></span>
            <span className="relative z-10">MORE</span>
            <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
            <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
            <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
            <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post, index) => (
            <div key={index} className='w-full max-w-[400px] relative mt-4 h-[400px] group mx-auto bg-white border overflow-hidden rounded-md text-white'>
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
                  href={post.route ?? '#'}
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
