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
            <div className="relative h-[80vh] overflow-hidden flex items-center justify-center bg-white">
                <motion.div
                    className="absolute inset-0 z-0 opacity-30"
                    style={{
                        backgroundImage: "url('/shop.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        y: useTransform(useScroll().scrollY, [0, 500], [0, 200])
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white z-10" />

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
                        <p className="text-blue-600 text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6">
                            Est. 1990 • Auckland, NZ
                        </p>
                        <h1 className="text-5xl md:text-8xl font-['Tomorrow'] font-bold uppercase mb-8 leading-tight">
                            <span className="text-gray-900">Crafting</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Perfection</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        style={{ wordSpacing: '-0.08rem' }}
                        className="text-black leading-relaxed font-mulish font-semibold text-lg text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        More than just repairs. We are the custodians of automotive excellence, blending traditional craftsmanship with cutting-edge innovation.
                    </motion.p>
                </motion.div>
            </div>

            {/* Stats Section */}
            <section className="py-20 bg-white text-gray-900 border-b border-gray-200">
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
                                <div className="text-4xl md:text-6xl font-['Tomorrow'] font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wide">
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
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase">
                            Our <span className="text-blue-600">Gallery</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { src: "/shop.webp", caption: "Our Workshop" },
                            { src: "/panel-beatt.jpg", caption: "Master Craftsmen" },
                            { src: "/car-tune-up.jpg", caption: "Precision Tuning" },
                            { src: "/headlight.webp", caption: "Attention to Detail" },
                            { src: "/shop.webp", caption: "The Early Days" },
                            { src: "/car-tune-up.jpg", caption: "Modern Equipment" }
                        ].map((photo, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-[400px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0}}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                {/* Image */}
                                <div className="absolute inset-0">
                                    <img 
                                        src={photo.src} 
                                        alt={photo.caption} 
                                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                                    />
                                </div>

                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                {/* Title */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white text-2xl md:text-3xl font-['Tomorrow'] font-medium">
                                        {photo.caption}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Showcase */}
            <section className="py-24 bg-white text-gray-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">The Magic Touch</p>
                            <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-6">Restoring Glory</h2>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left mb-6">
                                See the difference our craftsmanship makes. We take damaged vehicles and return them to their showroom condition, often exceeding the original factory finish.
                            </p>
                            <div className="flex items-center gap-4 text-base md:text-lg text-gray-600">
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-4 bg-gray-400 rounded-full"></span> Before
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-4 bg-blue-600 rounded-full"></span> After
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-300">
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
                                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 text-sm md:text-base font-medium rounded">BEFORE</div>
                            </div>

                            {/* After Label */}
                            <div className="absolute top-4 right-4 bg-blue-600/90 text-white px-3 py-2 text-sm md:text-base font-medium rounded">AFTER</div>

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
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left mb-4">
                            CBD Panel and Paint began with a simple vision: to provide Auckland with honest, high-quality automotive repair services that vehicle owners could trust. What started as a small family operation has grown into one of the region's most respected automotive service centres.
                        </p>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left mb-4">
                            With over 30 years of dedication to our craft, we have earned a reputation for integrity, precision, excellence, and exceptional customer care. Every vehicle that enters our workshop receives the same meticulous attention to detail that has defined our service from the very beginning.
                        </p>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left">
                            Today, we continue to uphold the values that our founders established: integrity in every repair, Precision with every panel, Excellence without compromise and Care that puts customers first.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Our Leadership Section commented out */}

            {/* Timeline */}
            <motion.section
                className="px-4 py-16 bg-white text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Our Journey</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black">Milestones of Excellence</h2>
                    </div>

                    <div className="relative space-y-8">
                        {/* Animated Vertical Line */}
                        <motion.div
                            className="absolute left-[29%] top-2 bottom-0 w-0.5 bg-blue-200 hidden md:block"
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
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-blue-800 transition-colors">1990s</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-blue-800 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-gray-900">The Foundation</h3>
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
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
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-blue-800 transition-colors">2000s</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-blue-800 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-gray-900">Expansion & Growth</h3>
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
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
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-blue-800 transition-colors">2010s</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-blue-800 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-gray-900">Modernization</h3>
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
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
                                <div className="text-4xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-blue-800 transition-colors">Today</div>
                            </div>
                            <div className="md:col-span-1 flex justify-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 group-hover:scale-150 group-hover:bg-blue-800 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
                            </div>
                            <div className="md:col-span-8 bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-600 transition-colors">
                                <h3 className="text-2xl font-['Tomorrow'] font-medium mb-2 text-gray-900">Industry Leaders</h3>
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
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
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black">Our Core Values</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-9xl mx-auto">
                        {/* Value 1 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">01</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Integrity in every repair</h3>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black group-hover:text-white leading-relaxed font-mulish font-semibold text-lg">
                                We believe in doing things the right way, every time. Honest communication, fair advice, and transparent workmanship guide every project we undertake. Customers trust us because we stand by our word and our work.
                            </p>
                        </motion.div>

                        {/* Value 2 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0}}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">02</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Precision with every panel</h3>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black group-hover:text-white leading-relaxed font-mulish font-semibold text-lg">
                                Every repair matters, whether it is a small dent or a full structural restoration. We pay attention to detail in shaping, painting, and finishing, ensuring your vehicle looks and performs as it should. Quality is built through accuracy.
                            </p>
                        </motion.div>

                        {/* Value 3 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">03</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Excellence without compromise</h3>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black group-hover:text-white leading-relaxed font-mulish font-semibold text-lg">
                                We aim for high standards in everything we do. From modern equipment to skilled hands, we continually strive to deliver results that last. Excellence is our benchmark, not an option.
                            </p>
                        
                        </motion.div>
                        {/*value 4 */}
                        <motion.div
                            className="p-8 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
                        >
                            <div className="text-5xl font-['Tomorrow'] font-bold text-blue-600 group-hover:text-white mb-4">04</div>
                            <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4">Care that puts customers first</h3>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black group-hover:text-white leading-relaxed font-mulish font-semibold text-lg">
                               People come first. We listen, guide you through repair decisions, and keep the process clear and stress-free. Your satisfaction is at the heart of our service, and we take pride in the relationships we build with every person who walks through our doors.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
                className="px-4 py-16 bg-white text-gray-900"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Meet The Team</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black">Expert Technicians</h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black max-w-3xl mx-auto mt-6 leading-relaxed font-mulish font-semibold text-lg text-justify md:text-left">
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
                            <p className="text-blue-600 mb-3 font-medium">Expert Craftsmen</p>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
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
                            <p className="text-blue-600 mb-3 font-medium">Master Technicians</p>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
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
                            <p className="text-blue-600 mb-3 font-medium">Color Matching Specialists</p>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg">
                                Precision painters using computerized color matching for flawless paint refinishing and detailing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Team Group Photo Section */}
            <motion.section
                className="px-4 py-16 bg-neutral-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Our Team</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black mb-4">
                            Together We Deliver Excellence
                        </h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg max-w-3xl mx-auto">
                            Meet the dedicated professionals who make CBD Panelbeaters LTD your trusted automotive repair partner.
                        </p>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-5xl mx-auto">
                        <img 
                            src="/shop.webp" 
                            alt="CBD Panelbeaters Team" 
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                            <p className="text-white text-lg md:text-xl font-['Tomorrow'] font-medium text-center">
                                Your trusted team of automotive experts since 1990
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 max-w-5xl mx-auto">
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-justify md:text-center">
                            Our team brings together certified technicians who excel in collision repair, dent removal, and careful bodywork restoration. Our painters use advanced colour-matching technology to deliver seamless, high-quality finishes, while our skilled mechanics provide expert diagnostics, engine repairs, and complete vehicle servicing.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="px-4 py-20 bg-white text-gray-900 border-t border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black mb-6">
                        Experience The Difference
                    </h2>
                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-8 leading-relaxed font-mulish font-semibold text-lg">
                        Join thousands of satisfied customers who trust CBD Panelbeaters LTD for all their automotive needs.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-blue-800 w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10">BOOK APPOINTMENT</span>
                        </button>
                        <button className="relative group bg-gray-900 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-gray-700 w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10">VIEW SERVICES</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
