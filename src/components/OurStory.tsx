import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { Heart, Target, Award, Users } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

// Before/After Slider Component
function BeforeAfterSlider({ item, index }: { item: { before: string; after: string; title: string; description: string }; index: number }) {
    const [position, setPosition] = useState(50);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-4"
        >
            {/* Title */}
            <div className="text-center">
                <h3 className="text-2xl font-['Poppins'] font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{item.description}</p>
            </div>

            {/* Before/After Slider */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-300 group">
                {/* After Image (Background) */}
                <img
                    src={item.after}
                    alt={`${item.title} - After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = '/shop.webp';
                    }}
                />

                {/* Before Image (Foreground, clipped) */}
                <div
                    className="absolute inset-0 overflow-hidden transition-all duration-100"
                    style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                >
                    <img
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75"
                        onError={(e) => {
                            e.currentTarget.src = '/panel_beating_hero_1764692687494.png';
                        }}
                    />
                    {/* Before Label */}
                    <div
                        className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 text-xs md:text-sm font-medium rounded transition-opacity duration-300"
                        style={{ opacity: position > 15 ? 1 : 0 }}
                    >
                        BEFORE
                    </div>
                </div>

                {/* After Label */}
                <div
                    className="absolute top-3 right-3 bg-CPurple/90 text-white px-2 py-1 text-xs md:text-sm font-medium rounded transition-opacity duration-300"
                    style={{ opacity: position < 85 ? 1 : 0 }}
                >
                    AFTER
                </div>

                {/* Slider Handle */}
                <div
                    className="absolute inset-y-0 w-1 bg-CPurple cursor-ew-resize z-20 group-hover:w-1.5 transition-all duration-100"
                    style={{ left: `${position}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-CPurple group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-CPurple">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" transform="rotate(90 12 12)" />
                        </svg>
                    </div>
                </div>

                {/* Range Input for Interaction */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={(e) => setPosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
            </div>
        </motion.div>
    );
}

export default function OurStory() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                    className="absolute inset-0 z-0 opacity-100"
                    style={{
                        backgroundImage: "url('/shop.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        y: useTransform(useScroll().scrollY, [0, 500], [0, 200])
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white z-10" />

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
                        <p className="text-CPurple text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-6 drop-shadow-lg">
                            Est. 1995 • Auckland, NZ
                        </p>
                        <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-8 leading-tight drop-shadow-xl">
                            <span className="text-gray-900">Crafting</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-CPink to-CPurple" style={{ WebkitTextStroke: '1px rgba(120, 62, 108, 0.3)' }}>Perfection</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        style={{ wordSpacing: '-0.08rem' }}
                        className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-center max-w-3xl mx-auto drop-shadow-md"
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
                                <div className="text-4xl md:text-6xl font-['Poppins'] font-bold text-CPurple mb-2">
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
                        <p className="text-CPurple text-sm font-medium uppercase tracking-wide mb-4">Behind the Scenes</p>
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase">
                            Our <span className="text-CPurple">Gallery</span>
                        </h2>
                    </div>

                    <div className="relative h-[500px] md:h-[800px] w-full flex items-center justify-center">
                        {/* Scattered Photos */}
                        {[
                            { src: "/shop.webp", rotate: -6, xMobile: -70, yMobile: -55, xDesktop: -280, yDesktop: -140, caption: "The Early Days" },
                            { src: "/panel-beatt.jpg", rotate: 5, xMobile: 75, yMobile: -60, xDesktop: 290, yDesktop: -150, caption: "Master Craftsmen" },
                            { src: "/car-tune-up.jpg", rotate: -3, xMobile: -65, yMobile: 30, xDesktop: -220, yDesktop: 80, caption: "Precision Tuning" },
                            { src: "/headlight.webp", rotate: 8, xMobile: 70, yMobile: 25, xDesktop: 250, yDesktop: 60, caption: "Attention to Detail" },
                            { src: "/paint.jpg", rotate: -8, xMobile: -72, yMobile: 80, xDesktop: -260, yDesktop: 200, caption: "Paint Perfection" },
                            { src: "/mechanical.jpg", rotate: 7, xMobile: 68, yMobile: 75, xDesktop: 220, yDesktop: 190, caption: "Mechanical Excellence" },
                            { src: "/chassis.jpg", rotate: -5, xMobile: 0, yMobile: -85, xDesktop: 0, yDesktop: -220, caption: "Structural Integrity" },
                            { src: "/shop.webp", rotate: 0, xMobile: 0, yMobile: 0, xDesktop: 0, yDesktop: 0, caption: "Our Workshop", scale: 1.15, z: 10 }
                        ].map((photo, index) => {
                            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                            return (
                                <motion.div
                                    key={index}
                                    className="absolute bg-white p-2 md:p-4 shadow-xl rounded-sm cursor-pointer"
                                    style={{ zIndex: photo.z || 1 }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: photo.scale || 1,
                                        rotate: photo.rotate,
                                        x: isMobile ? photo.xMobile : photo.xDesktop,
                                        y: isMobile ? photo.yMobile : photo.yDesktop
                                    }}
                                    whileHover={{
                                        scale: 1.2,
                                        zIndex: 50,
                                        rotate: 0,
                                        transition: { duration: 0.3 }
                                    }}
                                    drag
                                    dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-32 h-24 md:w-64 md:h-48 overflow-hidden mb-2 md:mb-3 bg-gray-200">
                                        <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover pointer-events-none" onError={(e) => { (e.target as HTMLImageElement).src = '/shop.webp' }} />
                                    </div>
                                    <p className="font-['Caveat'] text-lg md:text-xl text-gray-600 text-center font-handwriting">{photo.caption}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <p className="text-center text-gray-500 mt-8 italic">Drag photos to explore our memories</p>
            </section>

            {/* Transformation Showcase - 4 Before/After Comparisons */}
            < section className="py-24 bg-white text-gray-900" >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-CPurple text-sm font-medium uppercase tracking-wide mb-4">The Magic Touch</p>
                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-medium mb-6">RESTORING GLORY</h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-center max-w-3xl mx-auto mb-6">
                            See the difference our craftsmanship makes. We take damaged vehicles and return them to their showroom condition, often exceeding the original factory finish.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-base md:text-lg text-gray-600">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-gray-400 rounded-full"></span> Before
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 bg-CPurple rounded-full"></span> After
                            </div>
                        </div>
                    </div>

                    {/* Grid of 5 Before/After Sliders */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                before: "/Our stories page images/Picture 1 - Before.jpg",
                                after: "/Our stories page images/Picture 1 - After.jpg",
                                title: "Dent Removal",
                                description: "Complete dent removal and paint restoration"
                            },
                            {
                                before: "/Our stories page images/Pic 2 - Before.jpg",
                                after: "/Our stories page images/Pic 2 - After.jpg",
                                title: "Collision Repair",
                                description: "Full structural repair and refinishing"
                            },
                            {
                                before: "/Our stories page images/Picture 3 - Before.jpg",
                                after: "/Our stories page images/Picture 3 - After.jpg",
                                title: "Panel Beating",
                                description: "Expert panel straightening and alignment"
                            },
                            {
                                before: "/Our stories page images/Pic 4 - Before.jpg",
                                after: "/Our stories page images/Pic 4 - After.jpg",
                                title: "Paint Restoration",
                                description: "Professional color matching and finishing"
                            }
                        ].map((item, index) => (
                            <BeforeAfterSlider key={index} item={item} index={index} />
                        ))}

                        {/* 5th item - centered on its own row */}
                        <div className="md:col-span-2 max-w-2xl mx-auto w-full">
                            <BeforeAfterSlider
                                item={{
                                    before: "public/Our stories page images/Pic 5 - Before.jpg",
                                    after: "public/Our stories page images/Pic 5 - After.jpg",
                                    title: "Side Panel Restoration",
                                    description: "Complete rocker panel repair and refinishing"
                                }}
                                index={4}
                            />
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 italic">Drag the slider to see the transformation</p>
                    </div>
                </div>
            </section >

            {/* Company History */}
            < motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 50 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/shop.webp" alt="CBD Panelbeaters Workshop" className="w-full h-auto shadow-lg" />
                    </div>
                    <div>
                        <p className="text-CPurple text-sm font-medium uppercase tracking-wide mb-4">Our Beginning</p>
                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-medium mb-6">BUILDING TRUST SINCE DAY ONE</h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify md:text-left mb-4">
                            CBD Panel and Paint began with a simple vision: to provide Auckland with honest, high-quality automotive repair services that vehicle owners could trust. What started as a small family operation has grown into one of the region's most respected automotive service centres.
                        </p>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify md:text-left mb-4">
                            With over 30 years of dedication to our craft, we have earned a reputation for integrity, precision, excellence, and exceptional customer care. Every vehicle that enters our workshop receives the same meticulous attention to detail that has defined our service from the very beginning.
                        </p>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify md:text-left">
                            Today, we continue to uphold the values that our founders established: integrity in every repair, Precision with every panel, Excellence without compromise and Care that puts customers first.
                        </p>
                    </div>
                </div>
            </motion.section >

            {/* Our Leadership Section commented out */}

            {/* Milestones - Bento Grid */}
            <section className="px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-CPurple text-sm font-medium uppercase tracking-wide mb-4">Our Journey</p>
                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-medium uppercase text-black">Milestones of Excellence</h2>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-12 gap-3 md:gap-4">
                        {/* 1990s - Large Left Card */}
                        <motion.div
                            className="col-span-12 md:col-span-6 md:row-span-2 p-6 md:p-8 rounded-2xl relative overflow-hidden group"
                            style={{ background: 'linear-gradient(135deg, #E4AEB3 0%, #783E6C 100%)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                            <div className="relative z-10">
                                <div className="inline-block px-3 py-1 rounded-full mb-4" style={{ background: 'rgba(255,255,255,0.2)' }}>
                                    <span className="text-4xl md:text-6xl font-['Poppins'] font-black text-white">1990s</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold text-white mb-3">The Foundation</h3>
                                <p className="text-white/90 leading-relaxed font-medium">
                                    CBD Panel and Paint opens its doors in Auckland's CBD, establishing a reputation for quality panel beating and collision repair work.
                                </p>
                            </div>
                        </motion.div>

                        {/* 2000s - Top Right */}
                        <motion.div
                            className="col-span-12 md:col-span-6 p-5 md:p-6 rounded-2xl relative overflow-hidden group"
                            style={{ background: 'linear-gradient(135deg, #FDDD7F 0%, #14A0B5 100%)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                            <div className="relative z-10">
                                <span className="text-3xl md:text-4xl font-['Poppins'] font-black text-white opacity-90">2000s</span>
                                <h3 className="text-xl md:text-2xl font-['Poppins'] font-bold text-white mt-2 mb-2">Expansion & Growth</h3>
                                <p className="text-white/90 leading-relaxed font-medium text-sm md:text-base">
                                    Expanded our services to include comprehensive mechanical repairs, WOF inspections, and became insurance-approved repairers.
                                </p>
                            </div>
                        </motion.div>

                        {/* 2010s - Middle Right */}
                        <motion.div
                            className="col-span-12 md:col-span-6 p-5 md:p-6 rounded-2xl relative overflow-hidden group"
                            style={{ background: 'linear-gradient(135deg, #14A0B5 0%, #0C55AC 100%)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
                            <div className="relative z-10">
                                <span className="text-3xl md:text-4xl font-['Poppins'] font-black text-white opacity-90">2010s</span>
                                <h3 className="text-xl md:text-2xl font-['Poppins'] font-bold text-white mt-2 mb-2">Modernization</h3>
                                <p className="text-white/90 leading-relaxed font-medium text-sm md:text-base">
                                    Invested in cutting-edge diagnostic equipment and computerized paint matching systems. Introduced specialized services for caravans, boats, and trailers.
                                </p>
                            </div>
                        </motion.div>

                        {/* Today - Large Bottom Card */}
                        <motion.div
                            className="col-span-12 p-6 md:p-8 rounded-2xl relative overflow-hidden group"
                            style={{ background: 'linear-gradient(135deg, #0C55AC 0%, #1F366A 100%)' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-1/4 w-48 h-48 bg-white/5 rounded-full -mt-24" />
                            <div className="absolute bottom-0 right-1/4 w-36 h-36 bg-white/5 rounded-full -mb-18" />

                            <div className="relative z-10 text-center">
                                <div className="inline-block px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(253, 221, 127, 0.2)', border: '2px solid rgba(253, 221, 127, 0.3)' }}>
                                    <span className="text-4xl md:text-6xl font-['Poppins'] font-black text-white">TODAY</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-4">Industry Leaders</h3>
                                <p className="text-white/90 leading-relaxed font-medium md:text-lg max-w-3xl mx-auto">
                                    Now recognized as one of Auckland's premier full-service automotive repair centers, serving thousands of satisfied customers with a team of expert technicians and state-of-the-art facilities.
                                </p>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4 mt-6 max-w-xl mx-auto">
                                    <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="text-2xl font-['Poppins'] font-black text-white mb-1">30+</div>
                                        <div className="text-xs uppercase text-white/80 font-bold">Years</div>
                                    </div>
                                    <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="text-2xl font-['Poppins'] font-black text-white mb-1">5000+</div>
                                        <div className="text-xs uppercase text-white/80 font-bold">Customers</div>
                                    </div>
                                    <div className="p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="text-2xl font-['Poppins'] font-black text-white mb-1">100%</div>
                                        <div className="text-xs uppercase text-white/80 font-bold">Quality</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values - Bold Card Grid Design */}
            <section className="px-4 py-32 relative bg-white">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
                    }} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl md:text-7xl font-['Poppins'] font-black mb-4 uppercase tracking-tight"
                            style={{ color: '#783E6C' }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            OUR CORE <span style={{ color: '#E4AEB3' }}>VALUES</span>
                        </motion.h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                            The principles that drive excellence in everything we do
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Integrity in every repair", description: "We believe in doing things the right way, every time. Honest communication, fair advice, and transparent workmanship guide every project we undertake. Customers trust us because we stand by our word and our work." },
                            { icon: Target, title: "Precision with every panel", description: "Every repair matters, whether it is a small dent or a full structural restoration. We pay attention to detail in shaping, painting, and finishing, ensuring your vehicle looks and performs as it should. Quality is built through accuracy." },
                            { icon: Award, title: "Excellence without compromise", description: "We aim for high standards in everything we do. From modern equipment to skilled hands, we continually strive to deliver results that last. Excellence is our benchmark, not an option." },
                            { icon: Users, title: "Care that puts customers first", description: "People come first. We listen, guide you through repair decisions, and keep the process clear and stress-free. Your satisfaction is at the heart of our service, and we take pride in the relationships we build with every person who walks through our doors." }
                        ].map((value, index) => {
                            const colors = [
                                { bg: 'linear-gradient(135deg, #E4AEB3 0%, #783E6C 100%)', accent: '#fff', text: '#fff' },
                                { bg: 'linear-gradient(135deg, #783E6C 0%, #E4AEB3 100%)', accent: '#fff', text: '#fff' },
                                { bg: 'linear-gradient(135deg, #E4AEB3 0%, #783E6C 100%)', accent: '#fff', text: '#fff' },
                                { bg: 'linear-gradient(135deg, #783E6C 0%, #E4AEB3 100%)', accent: '#fff', text: '#fff' }
                            ];

                            const cardColor = colors[index];

                            return (
                                <motion.div
                                    key={index}
                                    className="relative group cursor-pointer"
                                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                        rotate: 1,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div
                                        className="relative p-8 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px] flex flex-col"
                                        style={{ background: cardColor.bg }}
                                    >
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="absolute inset-0" style={{
                                                backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px)`,
                                                backgroundSize: '30px 30px'
                                            }} />
                                        </div>

                                        {/* Icon */}
                                        <motion.div
                                            className="relative mb-6 p-6 rounded-2xl w-fit mx-auto"
                                            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: [0, -5, 5, -5, 0],
                                                transition: { duration: 0.5 }
                                            }}
                                        >
                                            <value.icon
                                                className="w-12 h-12"
                                                style={{ color: '#fff' }}
                                                strokeWidth={2.5}
                                            />
                                        </motion.div>

                                        {/* Content */}
                                        <div className="relative z-10 flex-1 flex flex-col text-center">
                                            <h3
                                                className="text-2xl md:text-3xl font-['Poppins'] font-black mb-4 leading-tight"
                                                style={{ color: cardColor.text }}
                                            >
                                                {value.title}
                                            </h3>

                                            <p
                                                className="text-base leading-relaxed font-medium text-justify"
                                                style={{ color: 'rgba(255,255,255,0.9)' }}
                                            >
                                                {value.description}
                                            </p>
                                        </div>

                                        {/* Hover Shine Effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                            initial={{ x: '-100%', skewX: -20 }}
                                            whileHover={{ x: '200%' }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

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
                        <p className="text-CPurple text-sm font-medium uppercase tracking-wide mb-4">Our Team</p>
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase text-black mb-4">
                            Together We Deliver Excellence
                        </h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg max-w-3xl mx-auto">
                            Meet the dedicated professionals who make CBD Panel and Paint Ltd your trusted automotive repair partner.
                        </p>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-5xl mx-auto">
                        <img
                            src="/shop.webp"
                            alt="CBD Panelbeaters Team"
                            className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                            <p className="text-white text-lg md:text-xl font-['Poppins'] font-medium text-center">
                                Your trusted team of automotive experts since 1995
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 max-w-5xl mx-auto">
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-justify md:text-center">
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
                    <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase text-black mb-6">
                        Experience The Difference
                    </h2>
                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-8 leading-relaxed font-['Poppins'] font-semibold text-lg">
                        Join thousands of satisfied customers who trust CBD Panelbeaters LTD for all their automotive needs.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="relative group bg-CPink text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-CPurple w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10">BOOK APPOINTMENT</span>
                        </button>
                        <button className="relative group bg-gray-900 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-gray-700 w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10">VIEW SERVICES</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div >
    );
}
