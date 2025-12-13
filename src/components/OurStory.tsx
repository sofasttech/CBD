import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';

export default function OurStory() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(50);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Parallax Hero Section */}
            <div className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-black">
                <motion.div
                    className="absolute inset-0 z-0 opacity-50"
                    style={{
                        backgroundImage: "url('/shop.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        y: useTransform(useScroll().scrollY, [0, 500], [0, 200])
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

                <motion.div
                    className="relative z-20 text-center px-4 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <p className="text-blue-400 text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6">
                            Est. 1990 • Auckland, NZ
                        </p>
                        <h1 className="text-5xl md:text-8xl font-['Tomorrow'] font-bold uppercase mb-8 leading-tight">
                            <span className="text-white">Crafting</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Perfection</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mulish font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        More than just repairs. We are the custodians of automotive excellence, blending traditional craftsmanship with cutting-edge innovation.
                    </motion.p>
                </motion.div>
            </div>

            {/* Stats Section */}
            <section className="py-20 bg-black text-white border-b border-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {[
                            { number: "30+", label: "Years Experience" },
                            { number: "5k+", label: "Happy Customers" },
                            { number: "100%", label: "Satisfaction" },
                            { number: "24/7", label: "Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl md:text-6xl font-['Tomorrow'] font-bold text-blue-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-400 font-mulish uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Scrapbook Section */}
            <section className="py-24 bg-neutral-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Behind the Scenes</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black">
                            Our <span className="text-blue-600">Scrapbook</span>
                        </h2>
                    </div>

                    <div className="relative h-[600px] w-full flex items-center justify-center">
                        {/* Scattered Photos */}
                        {[
                            { src: "/shop.webp", rotate: -6, x: -200, y: -50, caption: "The Early Days" },
                            { src: "/panel-beatt.jpg", rotate: 5, x: 200, y: -80, caption: "Master Craftsmen" },
                            { src: "/car-tune-up.jpg", rotate: -3, x: -150, y: 150, caption: "Precision Tuning" },
                            { src: "/headlight.webp", rotate: 8, x: 180, y: 120, caption: "Attention to Detail" },
                            { src: "/shop.webp", rotate: 0, x: 0, y: 0, caption: "Our Workshop", scale: 1.2, z: 10 }
                        ].map((photo, index) => (
                            <motion.div
                                key={index}
                                className="absolute bg-white p-4 shadow-xl rounded-sm cursor-pointer"
                                style={{ zIndex: photo.z || 1 }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: photo.scale || 1,
                                    rotate: photo.rotate,
                                    x: photo.x,
                                    y: photo.y
                                }}
                                whileHover={{
                                    scale: 1.3,
                                    zIndex: 50,
                                    rotate: 0,
                                    transition: { duration: 0.3 }
                                }}
                                drag
                                dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-64 h-48 overflow-hidden mb-3 bg-gray-200">
                                    <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover pointer-events-none" />
                                </div>
                                <p className="font-['Caveat'] text-xl text-gray-600 text-center font-handwriting">{photo.caption}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gray-500 mt-8 italic">Drag photos to explore our memories</p>
                </div>
            </section>

            {/* Transformation Showcase */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">The Magic Touch</p>
                            <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-6">Restoring Glory</h2>
                            <p className="text-gray-300 leading-relaxed mb-6 text-lg font-mulish font-light">
                                See the difference our craftsmanship makes. We take damaged vehicles and return them to their showroom condition, often exceeding the original factory finish.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-gray-600 rounded-full"></span> Before
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span> After
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                            {/* After Image (Background) */}
                            <img src="/shop.webp" alt="After Repair" className="absolute inset-0 w-full h-full object-cover" />

                            {/* Before Image (Foreground, clipped) */}
                            <div
                                className="absolute inset-0 w-full h-full overflow-hidden"
                                style={{ width: `${sliderPosition}%` }}
                            >
                                <img
                                    src="/shop.webp"
                                    alt="Before Repair"
                                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                                    style={{ width: '100vw', maxWidth: 'none' }} // Ensure image doesn't squash
                                />
                                {/* Label */}
                                <div className="absolute top-4 left-4 bg-black/70 text-white px-2 py-1 text-xs rounded">BEFORE</div>
                            </div>

                            {/* After Label */}
                            <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-2 py-1 text-xs rounded">AFTER</div>

                            {/* Slider Handle */}
                            <div
                                className="absolute inset-y-0 w-1 bg-blue-500 cursor-ew-resize z-20"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-blue-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" transform="rotate(90 12 12)" />
                                    </svg>
                                </div>
                            </div>

                            {/* Range Input for Interaction */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPosition}
                                onChange={(e) => setSliderPosition(Number(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Company History */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/shop.webp" alt="CBD Panelbeaters Workshop" className="w-full h-auto shadow-lg" />
                    </div>
                    <div>
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Our Beginning</p>
                        <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-6">Building Trust Since Day One</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            CBD Panel and Paint began with a simple vision: to provide Auckland with honest, high-quality automotive repair services that vehicle owners could trust. What started as a small family operation has grown into one of the region's most respected automotive service centers.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                            Over 30 years of dedication to our craft has earned us a reputation for precision, reliability, and exceptional customer care. Every vehicle that enters our workshop receives the same meticulous attention to detail that has defined our service from the very beginning.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Today, we continue to uphold the values that our founders established: integrity in every repair, transparency in every quote, and excellence in every outcome.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Our Leadership Section */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Our Leadership</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase">Meet Our Team</h2>
                    </div>

                    <div className='group flex max-md:flex-col justify-center gap-2 w-[80%] mx-auto mb-10 mt-3'>
                        {[
                            {
                                id: '1',
                                url: 'https://randomuser.me/api/portraits/men/32.jpg',
                                title: 'Adrian Paul',
                                description: 'COO & Co-Founder',
                                tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
                            },
                            {
                                id: '2',
                                url: 'https://randomuser.me/api/portraits/men/45.jpg',
                                title: 'Flualy Cual',
                                description: 'Founder & CEO',
                                tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
                            },
                            {
                                id: '3',
                                url: 'https://randomuser.me/api/portraits/men/67.jpg',
                                title: 'Naymur Rahman',
                                description: 'CTO & Co-Founder',
                                tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
                            },
                        ].map((item) => {
                            return (
                                <motion.article 
                                    key={item.id} 
                                    className='group/article relative w-full rounded-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur-sm after:rounded-lg after:transition-all focus-within:ring-3 focus-within:ring-indigo-300'
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: parseInt(item.id) * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        flex: "1 1 60%",
                                        transition: { duration: 0.3, ease: [0.5, 0.85, 0.25, 1.15] }
                                    }}
                                    style={{ flex: "1 1 33.33%" }}
                                >
                                    <a
                                        className='absolute inset-0 text-white z-10  p-3 flex flex-col justify-end'
                                        href='#0'
                                    >
                                        <h1 className=' text-xl font-medium   md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'>
                                            {item?.title}
                                        </h1>
                                        <span className=' text-3xl font-medium  md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500'>
                                            {item?.description}
                                        </span>
                                    </a>
                                    <img
                                        className='object-cover h-72 md:h-[420px]  w-full'
                                        src={item?.url}
                                        width='960'
                                        height='480'
                                        alt={item?.title}
                                    />
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            {/* Timeline */}
            <motion.section
                className="px-4 py-16 bg-black text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Our Journey</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase">Milestones of Excellence</h2>
                    </div>

                    <div className="relative space-y-8">
                        {/* Animated Vertical Line */}
                        <motion.div
                            className="absolute left-[29%] top-2 bottom-0 w-0.5 bg-blue-900 hidden md:block"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />

                        {/* Timeline Item 1 */}
                        <motion.div
                            className="grid md:grid-cols-12 gap-8 items-start relative z-10 group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="md:col-span-3 text-right">
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-400 group-hover:text-white transition-colors">1990s</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-white">The Foundation</h3>
                                <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg">
                                    CBD Panel and Paint opens its doors in Auckland's CBD, establishing a reputation for quality panel beating and collision repair work.
                                </p>
                            </div>
                        </motion.div>

                        {/* Timeline Item 2 */}
                        <motion.div
                            className="grid md:grid-cols-12 gap-8 items-start relative z-10 group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="md:col-span-3 text-right">
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-400 group-hover:text-white transition-colors">2000s</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-white">Expansion & Growth</h3>
                                <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg">
                                    Expanded our services to include comprehensive mechanical repairs, WOF inspections, and became insurance-approved repairers for major providers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Timeline Item 3 */}
                        <motion.div
                            className="grid md:grid-cols-12 gap-8 items-start relative z-10 group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="md:col-span-3 text-right">
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-400 group-hover:text-white transition-colors">2010s</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-white">Modernization</h3>
                                <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg">
                                    Invested in cutting-edge diagnostic equipment and computerized paint matching systems. Introduced specialized services for caravans, boats, and custom trailer fabrication.
                                </p>
                            </div>
                        </motion.div>

                        {/* Timeline Item 4 */}
                        <motion.div
                            className="grid md:grid-cols-12 gap-8 items-start relative z-10 group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="md:col-span-3 text-right">
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-400 group-hover:text-white transition-colors">Today</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-white transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-white">Industry Leaders</h3>
                                <p className="text-gray-300 leading-relaxed font-mulish font-extralight text-lg">
                                    Now recognized as one of Auckland's premier full-service automotive repair centers, serving thousands of satisfied customers with a team of expert technicians and state-of-the-art facilities.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Core Values */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">What Drives Us</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">01</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Integrity</h3>
                            <p className="text-gray-700 group-hover:text-white leading-relaxed">
                                Honest assessments, transparent pricing, and ethical practices in every interaction. We never recommend unnecessary repairs.
                            </p>
                        </motion.div>

                        {/* Value 2 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">02</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Excellence</h3>
                            <p className="text-gray-700 group-hover:text-white leading-relaxed">
                                Commitment to superior craftsmanship using quality materials and advanced techniques. Every repair meets our exacting standards.
                            </p>
                        </motion.div>

                        {/* Value 3 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">03</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Customer Care</h3>
                            <p className="text-gray-700 group-hover:text-white leading-relaxed">
                                Your satisfaction is our priority. We treat every vehicle as our own and every customer as family.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                className="px-4 py-16 bg-black text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Meet The Team</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase">Expert Technicians</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed font-mulish font-extralight">
                            Our team of certified professionals brings together decades of combined experience, ongoing training, and a passion for automotive excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 overflow-hidden rounded-lg">
                                <img src="/panel-beatt.jpg" alt="Panel Beating Expert" className="w-full h-80 object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2">Panel Beating Specialists</h3>
                            <p className="text-blue-400 mb-3">Expert Craftsmen</p>
                            <p className="text-gray-300 leading-relaxed font-mulish font-extralight">
                                Certified technicians specializing in collision repair, dent removal, and precision bodywork restoration.
                            </p>
                        </motion.div>

                        {/* Team Member 2 */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 overflow-hidden rounded-lg">
                                <img src="/car-tune-up.jpg" alt="Mechanical Expert" className="w-full h-80 object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2">Mechanical Experts</h3>
                            <p className="text-blue-400 mb-3">Master Technicians</p>
                            <p className="text-gray-300 leading-relaxed font-mulish font-extralight">
                                Highly trained mechanics with expertise in diagnostics, engine repair, and comprehensive vehicle servicing.
                            </p>
                        </motion.div>

                        {/* Team Member 3 */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-4 overflow-hidden rounded-lg">
                                <img src="/headlight.webp" alt="Paint Specialist" className="w-full h-80 object-cover hover:scale-110 transition duration-500" />
                            </div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2">Paint & Finishing Team</h3>
                            <p className="text-blue-400 mb-3">Color Matching Specialists</p>
                            <p className="text-gray-300 leading-relaxed font-mulish font-extralight">
                                Precision painters using computerized color matching for flawless paint refinishing and detailing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="px-4 py-20 bg-blue-600 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Experience The Difference
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed font-mulish font-extralight">
                        Join thousands of satisfied customers who trust CBD Panelbeaters LTD for all their automotive needs.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="relative group bg-white text-blue-600 px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">BOOK APPOINTMENT</span>
                        </button>
                        <button className="relative group bg-black text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-black">VIEW SERVICES</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
