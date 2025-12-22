import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Anchor, Hammer, ShieldCheck, Truck, Droplets, PenTool, ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';

export default function CaravansBoats() {
    const CARAVAN_IMAGES_PATH = '/Caravan Images';

    const [menuOpen, setMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
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
            details: ['Axle Repairs', 'Brake Systems', 'Drawbar Repairs', 'Chassis Replacements']
        },
        {
            title: 'Boat Trailer Repairs',
            icon: <Droplets className="w-8 h-8" />,
            desc: 'Make sure your boat trailer is a safe trailer. Regular servicing ensures your trailer is safe to tow. We repair and service all commercial and domestic boat trailers.',
            details: ['WOF Inspections', 'Wheel Bearings', 'Brake Servicing', 'Rust Treatment']
        },
        {
            title: 'Trailer Modifications',
            icon: <PenTool className="w-8 h-8" />,
            desc: 'Modifying is a great way to have your trailer suit your needs. From simple upgrades to complex custom builds, we bring your ideas to life with quality workmanship.',
            details: ['Custom Designs', 'Structural Mods', 'Capacity Upgrades', 'Specialized Builds']
        },
        {
            title: 'Custom Built Trailers',
            icon: <Hammer className="w-8 h-8" />,
            desc: 'We custom build trailers to suit your requirements. Whether for commercial or personal use, we design and fabricate trailers tailored to your specific needs.',
            details: ['Custom Design', 'Commercial Trailers', 'Domestic Trailers', 'Specialized Solutions']
        },
        {
            title: 'Trailer Deck Replacements',
            icon: <Truck className="w-8 h-8" />,
            desc: 'We can replace your trailer deck with plywood or truck decking. Choose from various materials to ensure durability and longevity for your trailer deck.',
            details: ['Plywood Decking', 'Truck Decking', 'Marine Grade Options', 'Weather Protection']
        },
        {
            title: 'General Welding',
            icon: <ShieldCheck className="w-8 h-8" />,
            desc: 'General welding is part of our daily routine. If it\'s aluminum, steel or stainless then we can weld it! Expert welding services for all your repair needs.',
            details: ['Aluminum Welding', 'Steel Welding', 'Stainless Steel', 'Structural Repairs']
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
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

            {/* Services Grid */}
            <section id="services-grid" className="py-24 px-4 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="mb-16 flex flex-col items-center w-full">
                            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4 text-center w-full">Check Out Our Services Below</p>
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase text-black mb-4 text-center w-full">OUR SERVICES</h2>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg w-full text-center">Full range of services for all things trailer and caravan related. Simple or very complex, we pride ourselves on quality workmanship, safety, and good old fashioned service.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    className="group p-8 bg-white border-2 border-blue-600 hover:bg-blue-600 transition-all duration-150 cursor-pointer flex flex-col min-h-[480px]"
                                    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
                                >
                                    <div className="mb-6 text-blue-600 group-hover:text-white transition-colors duration-150">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-['Poppins'] font-medium mb-4 text-black group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black group-hover:text-white mb-6 leading-relaxed font-['Poppins'] font-semibold text-lg flex-grow">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-2 border-t border-gray-200 group-hover:border-white/30 pt-6">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-600 group-hover:text-white/90">
                                                <div className="w-1.5 h-1.5 bg-blue-600 group-hover:bg-white rounded-full mr-3" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </ScrollReveal>
                        ))}
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

            {/* CTA */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase text-black mb-8">
                            READY FOR YOUR NEXT ADVENTURE?
                        </h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-12 leading-relaxed font-['Poppins'] font-semibold text-lg">
                            Our vision is to be the leader in caravan and trailer repairs and servicing. Don't let a breakdown ruin your holiday - book your repair or get a free estimate today.
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
            </section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
