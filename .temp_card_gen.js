#!/usr/bin/env node

// Template for remaining cards 4-13
const cardTemplate = (num, title, desc, color1, color2, img, altText, features, rotation) => `              {/* Card ${num} - ${title} */}
              <figure className="sticky top-[28vh] h-[70vh] grid place-content-center">
                <article className="bg-gradient-to-br from-${color1} to-${color2} h-[24rem] w-full max-w-5xl rounded-3xl ${rotation} overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group flex p-6 lg:p-8 gap-6">
                  <div className="w-full md:w-[60%] flex flex-col justify-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-['Poppins'] font-extrabold text-white">${num}</span>
                      </div>
                      <div className="h-12 w-1 bg-gradient-to-b from-white/80 to-transparent rounded-full"></div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-['Poppins'] font-extrabold text-white mb-4 uppercase tracking-tight leading-tight">
                      ${title}
                    </h3>
                    <p className="text-white/95 text-base lg:text-lg leading-relaxed mb-6 font-light">
                      ${desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      ${features.map(f => `<span className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">${f}</span>`).join('\n                      ')}
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-[40%] items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <img src="${img}" alt="${altText}" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" ${img.includes('Error') ? img.split('className="')[1].split('"')[1] : ''} />
                    </div>
                  </div>
                </article>
              </figure>`;

console.log("Card templates generated successfully!");
