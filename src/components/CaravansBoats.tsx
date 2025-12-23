import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Anchor, Hammer, ShieldCheck, Truck, Droplets, PenTool, ChevronLeft, ChevronRight, Activity, Gauge, Settings, Zap, Disc } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';
import { ReactLenis } from 'lenis/react';
import { Spotlight, SpotLightItem } from './ui/spotlight';

export default function CaravansBoats() {
    const CARAVAN_IMAGES_PATH = '/Caravan Images';

    const [menuOpen, setMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    const heroSlides = [
        {
            image: `${CARAVAN_IMAGES_PATH}/alaska-2178312_1920.jpg`,
            subtitle: 'Trailer & Caravan Specialists',
            title: 'IS YOUR CARAVAN',
            titleHighlight: 'SAFE?',
            description: 'Let the experts inspect your trailer and caravan to ensure your holidays are trouble-free with quality workmanship, safety, and good old fashioned service.'
        },
        {
            image: `${CARAVAN_IMAGES_PATH}/camper-6728942_1920.jpg`,
            subtitle: '100% NZ Owned & Operated',
            title: 'EXPERT TRAILER',
            titleHighlight: 'REPAIRS',
            description: 'We repair and service all commercial and domestic trailers. From WOF inspections to complete chassis replacements, we\'ve got you covered.'
        },
        {
            image: `${CARAVAN_IMAGES_PATH}/Land Rover.jpg`,
            subtitle: 'Free Loan Boat Trailer',
            title: 'MINIMAL',
            titleHighlight: 'DOWNTIME',
            description: 'We provide you with a free loan boat trailer while we service or repair your current boat trailer, ensuring minimal downtime and convenience for you.'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const services = [
        {
            title: 'Caravan Repairs',
            icon: <Anchor className="w-8 h-8" />,
            desc: 'We repair all caravan components including axles, brakes, drawbars and full chassis replacements. Our expert team ensures your caravan is safe and roadworthy for your next adventure.',
            details: ['Axle Repairs', 'Brake Systems', 'Drawbar Repairs', 'Chassis Replacements'],
            image: '/caravan_boat_hero_1764692888890.png'
        },
        {
            title: 'Boat Trailer Repairs',
            icon: <Droplets className="w-8 h-8" />,
            desc: 'Make sure your boat trailer is a safe trailer. Regular servicing ensures your trailer is safe to tow. We repair and service all commercial and domestic boat trailers.',
            details: ['WOF Inspections', 'Wheel Bearings', 'Brake Servicing', 'Rust Treatment'],
            image: '/caravan_boat_hero_1764692888890.png'
        },
        {
            title: 'Trailer Modifications',
            icon: <PenTool className="w-8 h-8" />,
            desc: 'Modifying is a great way to have your trailer suit your needs. From simple upgrades to complex custom builds, we bring your ideas to life with quality workmanship.',
            details: ['Custom Designs', 'Structural Mods', 'Capacity Upgrades', 'Specialized Builds'],
            image: '/caravan_boat_hero_1764692888890.png'
        },
        {
            title: 'Custom Built Trailers',
            icon: <Hammer className="w-8 h-8" />,
            desc: 'We custom build trailers to suit your requirements. Whether for commercial or personal use, we design and fabricate trailers tailored to your specific needs.',
            details: ['Custom Design', 'Commercial Trailers', 'Domestic Trailers', 'Specialized Solutions'],
            image: '/caravan_boat_hero_1764692888890.png'
        },
        {
            title: 'Trailer Deck Replacements',
            icon: <Truck className="w-8 h-8" />,
            desc: 'We can replace your trailer deck with plywood or truck decking. Choose from various materials to ensure durability and longevity for your trailer deck.',
            details: ['Plywood Decking', 'Truck Decking', 'Marine Grade Options', 'Weather Protection'],
            image: '/caravan_boat_hero_1764692888890.png'
        },
        {
            title: 'General Welding',
            icon: <ShieldCheck className="w-8 h-8" />,
            desc: 'General welding is part of our daily routine. If it\'s aluminum, steel or stainless then we can weld it! Expert welding services for all your repair needs.',
            details: ['Aluminum Welding', 'Steel Welding', 'Stainless Steel', 'Structural Repairs'],
            image: '/caravan_boat_hero_1764692888890.png'
        }
    ];

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
                <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Slideshow */}
            <motion.section
                ref={targetRef}
                className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white"
                style={{ opacity }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="absolute inset-0 z-0 opacity-100"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
                        />
                    </motion.div>
                </AnimatePresence>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                <motion.div
                    className="relative z-10 px-4 mx-auto max-w-6xl"
                    style={{ scale, y }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <p className="text-blue-400 text-sm font-bold uppercase tracking-[0.3em] text-center drop-shadow-lg">
                                    {heroSlides[currentSlide].subtitle}
                                </p>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-8 leading-tight text-center">
                                <span className="text-white drop-shadow-lg">{heroSlides[currentSlide].title}</span> <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500 drop-shadow-lg">{heroSlides[currentSlide].titleHighlight}</span>
                            </h1>

                            <div className="flex justify-center">
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-white leading-relaxed font-['Poppins'] font-semibold text-lg text-center max-w-3xl drop-shadow-lg">
                                    {heroSlides[currentSlide].description}
                                </p>
                            </div>

                            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                                <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition shadow-lg">
                                    <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10">BOOK YOUR REPAIR</span>
                                </button>
                                <button className="relative group bg-gray-900 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition hover:bg-gray-800 shadow-lg">
                                    <span className="relative z-10">GET FREE ESTIMATE</span>
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-lg"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition shadow-lg"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12 bg-blue-600' : 'w-2 bg-gray-400 hover:bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
            </motion.section>

            {/* Services Grid - Holographic HUD Style */}
            <section id="services-grid" className="py-32 px-4 bg-gray-50 relative z-10 overflow-hidden">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-blue-200 pb-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                    OUR <span className="text-blue-600">SERVICES</span>
                                </h2>
                                <p className="text-lg text-black max-w-xl font-semibold">
                                    Full range of services for all things trailer and caravan related.
                                </p>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-blue-600 hover:text-red-600 transition-colors mt-4 md:mt-0 font-medium text-sm border border-blue-500/30 px-4 py-2 rounded hover:bg-blue-500/10">
                                VIEW ALL <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </ScrollReveal>

                    <Spotlight className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <SpotLightItem className="h-[570px] border border-gray-200 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all duration-300 relative">
                                    {/* Background Image */}
                                    <div
                                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${hoveredService === index ? 'opacity-0' : 'opacity-100'}`}
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />

                                    <div
                                        className={`relative p-8 h-full flex flex-col transition-all duration-500 ${hoveredService === index ? 'justify-start bg-white' : 'justify-end'}`}
                                        onMouseEnter={() => setHoveredService(index)}
                                        onMouseLeave={() => setHoveredService(null)}
                                    >
                                        {/* Corner Brackets */}
                                        <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />
                                        <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />
                                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />
                                        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />

                                        {/* Scan Line Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none ${hoveredService === index ? 'translate-y-full' : '-translate-y-full'}`} />

                                        {/* Dark Gradient Overlay */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black via-black/90 to-transparent transition-opacity duration-500 ${hoveredService === index ? 'opacity-0' : 'opacity-100'}`} />

                                        <div className={`mb-4 transition-all duration-500 relative z-10 ${hoveredService === index ? 'text-blue-600 scale-110' : 'text-white'}`}>
                                            {service.icon}
                                        </div>

                                        <h3 className={`text-2xl font-['Poppins'] font-medium mb-4 transition-colors relative z-10 ${hoveredService === index ? 'text-blue-600' : 'text-white'}`}>
                                            {service.title}
                                        </h3>

                                        <div className={`transition-all duration-500 ease-in-out relative z-10 ${hoveredService === index ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
                                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-6 leading-relaxed font-['Poppins'] font-semibold text-lg">
                                                {service.desc}
                                            </p>

                                            <ul className="space-y-2 border-t border-gray-200 pt-6">
                                                {service.details.map((detail, i) => (
                                                    <li key={i} className="flex items-center text-sm text-gray-600">
                                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </SpotLightItem>
                            </ScrollReveal>
                        ))}
                    </Spotlight>
                </div>
            </section>

            {/* Troubleshooter - Sticky Scroll Pattern */}
            <section className="bg-white">
                <div className="wrapper">
                    {/* Intro Section */}
                    <section className="text-gray-900 h-screen w-full bg-white grid place-content-center sticky top-0 z-0">
                        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                        <h1 className='2xl:text-7xl md:text-5xl text-3xl px-8 font-["Poppins"] font-semibold text-center tracking-tight leading-[120%] relative z-10'>
                            <span className="text-blue-600">Troubleshooter:</span> <br /> Common Trailer & Caravan Issues 🔍
                        </h1>
                    </section>

                    {/* Sticky Grid with Images */}
                    <section className="bg-white w-full relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Sticky Content Side */}
                            <div className="sticky top-0 h-screen flex items-center justify-center px-8 bg-blue-200">
                                <div className="max-w-lg">
                                    <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Interactive Diagnosis</p>
                                    <h2 className="text-4xl md:text-5xl font-['Poppins'] font-semibold mb-6 text-gray-900">
                                        We Identify The Issue
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-6 font-semibold leading-relaxed">
                                        Select a symptom to see potential causes and how our expert technicians can help diagnose and fix the issue.
                                    </p>
                                    <div className="grid gap-3">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Activity className="w-6 h-6 text-blue-600" />
                                            <span className="font-medium">Comprehensive Safety Inspections</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Gauge className="w-6 h-6 text-blue-600" />
                                            <span className="font-medium">Expert Repair Solutions</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scrolling Symptoms Side */}
                            <div className="grid gap-6 py-8 px-4">
                                {[
                                    { id: 1, icon: <Activity className="w-8 h-8" />, title: "Brake Problems", cause: "Worn brake pads, rusted drums, or air in brake lines.", fix: "Complete brake system inspection and component replacement.", image: "/caravan_boat_hero_1764692888890.png" },
                                    { id: 2, icon: <Disc className="w-8 h-8" />, title: "Bearing Noise", cause: "Worn or damaged wheel bearings, lack of lubrication.", fix: "Bearing inspection, repacking, or replacement.", image: "/caravan_boat_hero_1764692888890.png" },
                                    { id: 3, icon: <Zap className="w-8 h-8" />, title: "Electrical Issues", cause: "Faulty wiring, corroded connections, or blown fuses.", fix: "Complete electrical system diagnosis and repair.", image: "/caravan_boat_hero_1764692888890.png" },
                                    { id: 4, icon: <Settings className="w-8 h-8" />, title: "Coupling Problems", cause: "Worn coupling ball, damaged safety chains.", fix: "Coupling inspection and replacement if necessary.", image: "/caravan_boat_hero_1764692888890.png" },
                                ].map((symptom, index) => (
                                    <div
                                        key={symptom.id}
                                        className={`flex justify-center ${index % 2 === 0 ? '-skew-x-3' : 'skew-x-3'}`}
                                    >
                                        <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl bg-gray-900 border-2 border-gray-200 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl group">
                                            {/* Image */}
                                            <div className="relative h-80 w-full overflow-hidden">
                                                <img
                                                    src={symptom.image}
                                                    alt={symptom.title}
                                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => {
                                                        // Fallback to default image if symptom image fails
                                                        e.currentTarget.src = '/caravan_boat_hero_1764692888890.png';
                                                    }}
                                                />
                                            </div>

                                            {/* Overlay Content */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6">
                                                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                                    <div className="mb-3 p-2 bg-blue-600 rounded-full w-fit">
                                                        <div className="text-white">{symptom.icon}</div>
                                                    </div>
                                                    <h3 className="text-2xl font-['Poppins'] font-semibold text-white mb-2">{symptom.title}</h3>
                                                    <p className="text-sm text-blue-200 mb-2"><strong>Cause:</strong> {symptom.cause}</p>
                                                    <p className="text-sm text-green-300"><strong>Our Fix:</strong> {symptom.fix}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Advanced Diagnostics - Sticky Images Pattern */}
            <section className="bg-slate-950 text-white w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 px-8">
                    {/* Sticky Stacking Images */}
                    <div className="grid gap-2">
                        {[
                            { src: "/caravan_boat_hero_1764692888890.png", alt: "Trailer Inspection" },
                            { src: "/caravan_boat_hero_1764692888890.png", alt: "Structural Analysis" },
                            { src: "/caravan_boat_hero_1764692888890.png", alt: "Safety Testing" },
                            { src: "/caravan_boat_hero_1764692888890.png", alt: "Component Calibration" }
                        ].map((image, index) => (
                            <figure key={index} className="sticky top-0 h-screen grid place-content-center">
                                <div className="relative group">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="transition-all duration-500 w-96 h-96 align-bottom object-cover rounded-md shadow-2xl border-2 border-blue-500/30 group-hover:border-blue-500 group-hover:scale-105 group-hover:shadow-blue-500/50"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                                </div>
                            </figure>
                        ))}
                    </div>

                    {/* Sticky Content */}
                    <div className="sticky top-0 h-screen grid place-content-center">
                        <div className="max-w-xl">
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-sm font-medium mb-6 border border-blue-400 backdrop-blur-sm">Expert Inspection</span>
                            <h2 className="text-5xl md:text-6xl font-['Poppins'] font-semibold mb-8 leading-tight">
                                THOROUGH <br />
                                <span className="text-blue-500">SAFETY CHECKS</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-medium">
                                Every caravan and trailer deserves a comprehensive safety inspection. We meticulously check every component to ensure your vehicle is roadworthy.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
                                From brake systems to electrical wiring, our technicians are trained to identify potential issues before they become safety hazards, giving you peace of mind on the road.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 p-6 backdrop-blur rounded-lg border border-white/20">
                                    <div className="text-4xl font-['Poppins'] font-bold mb-2 text-blue-400">100%</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-300">Safety First</div>
                                </div>
                                <div className="bg-white/10 p-6 backdrop-blur rounded-lg border border-white/20">
                                    <div className="text-4xl font-['Poppins'] font-bold mb-2 text-blue-400">Expert</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-300">Technicians</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section: Loan Trailer */}
            <section className="py-24 bg-neutral-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <ScrollReveal direction="right">
                                <div className="relative rounded-xl overflow-hidden shadow-lg">
                                    <img src="/caravan_boat_hero_1764692888890.png" alt="Loan Trailer" className="w-full h-auto hover:scale-105 transition-all duration-500" />
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="order-1 md:order-2">
                            <ScrollReveal>
                                <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4 text-center md:text-left">Trailer Inspection, Repairs & Servicing</p>
                                <h2 className="text-4xl md:text-5xl font-['Poppins'] font-medium mb-8 leading-tight text-black text-center md:text-left">
                                    FREE LOAN <br />
                                    <span className="text-blue-600">BOAT TRAILER</span>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg text-center md:text-left mb-8">
                                    We understand that downtime means missed adventures. Trailer and caravan safety and customer service are our top priorities and we're dedicated to getting each job right.
                                </p>
                                <div className="p-6 bg-white border-l-4 border-blue-600 mb-8 shadow-md">
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg italic text-center md:text-left">
                                        "We provide you with a free loan boat trailer while we service or repair your current boat trailer, ensuring minimal downtime and convenience for you."
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="flex justify-center md:justify-start">
                                    <button className="relative group bg-blue-600 text-white px-8 py-3 font-['Poppins'] font-medium transition">
                                        <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                                        <span className="relative z-10">ENQUIRE NOW</span>
                                    </button>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Process Steps */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">How It Works</p>
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6 text-gray-900">
                            YOUR SERVICE <span className="text-blue-600">JOURNEY</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line with gradient animation */}
                        <motion.div
                            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 -z-0"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                        />

                        {[
                            { step: "01", title: "Contact & Inspect", desc: "Call us or drop by. We'll inspect your trailer or caravan." },
                            { step: "02", title: "Quote & Approve", desc: "Receive a transparent quote and approve the work." },
                            { step: "03", title: "Expert Repair", desc: "Our skilled team performs quality repairs and servicing." },
                            { step: "04", title: "Safety Check", desc: "Final inspection and safety check before handover." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative z-10 bg-white pt-4 group cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: [0.25, 0.4, 0.25, 1]
                                }}
                                whileHover={{
                                    y: -15,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                            >
                                <motion.div
                                    className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto border-4 border-white shadow-lg shadow-blue-600/30 overflow-hidden"
                                    initial={{ scale: 0, rotate: -90 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.7,
                                        delay: index * 0.15 + 0.3,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        boxShadow: "0 20px 60px rgba(37, 99, 235, 0.4)",
                                        transition: { duration: 0.6 }
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <span className="relative z-10">{item.step}</span>
                                </motion.div>
                                <div className="text-center">
                                    <motion.h3
                                        className="text-xl font-['Poppins'] font-medium text-gray-900 mb-3"
                                        whileHover={{ color: "#2563eb", scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.title}
                                    </motion.h3>
                                    <p className="text-lg text-black-600 leading-relaxed font-semibold group-hover:text-gray-900 transition-colors duration-300">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-16 text-center">
                        <ScrollReveal>
                            <h3 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase text-black mb-6">
                                READY FOR YOUR NEXT ADVENTURE?
                            </h3>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-10 leading-relaxed font-['Poppins'] font-semibold text-lg max-w-3xl mx-auto">
                                Don't let a breakdown ruin your holiday - book your repair or get a free estimate today.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                                    <span className="absolute left-0 top-0 h-full bg-blue-800 w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10">BOOK YOUR REPAIR</span>
                                </button>
                                <button className="relative group bg-gray-900 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                                    <span className="absolute left-0 top-0 h-full bg-gray-700 w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10">GET FREE ESTIMATE</span>
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

                <Footer scrollToSection={scrollToSection} />
            </div>
        </ReactLenis>
    );
}
