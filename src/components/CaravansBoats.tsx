import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Anchor, Hammer, ShieldCheck, Truck, Droplets, PenTool } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';

export default function CaravansBoats() {
    const [menuOpen, setMenuOpen] = useState(false);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

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

    const services = [
        {
            title: 'Collision Repair',
            icon: <Hammer className="w-8 h-8" />,
            desc: 'Expert structural and cosmetic repairs for caravans and motorhomes. We handle insurance claims and restore your vehicle to factory standards.',
            details: ['Fiberglass Repair', 'Panel Replacement', 'Insurance Work', 'Structural Alignment']
        },
        {
            title: 'Water Tightness',
            icon: <Droplets className="w-8 h-8" />,
            desc: 'Water ingress is the enemy. We use advanced moisture detection to find leaks and reseal roofs, windows, and seams with marine-grade sealants.',
            details: ['Leak Detection', 'Resealing', 'Mold Remediation', 'Roof Repair']
        },
        {
            title: 'Boat Hull Repairs',
            icon: <Anchor className="w-8 h-8" />,
            desc: 'Professional gelcoat and fiberglass repairs for marine craft. From dock rash to impact damage, we ensure a seamless, watertight finish.',
            details: ['Gelcoat Refinishing', 'Fiberglass Structural', 'Transom Repair', 'Polishing']
        },
        {
            title: 'Custom Fabrication',
            icon: <PenTool className="w-8 h-8" />,
            desc: 'Need something unique? Our fabrication shop builds custom toolboxes, bike racks, and structural modifications for trailers and RVs.',
            details: ['Aluminum Welding', 'Custom Racks', 'Chassis Mods', 'Toolboxes']
        },
        {
            title: 'Trailer Safety',
            icon: <Truck className="w-8 h-8" />,
            desc: 'Is your trailer safe for the next trip? We provide comprehensive WOF checks, bearing services, and brake repairs for boat and utility trailers.',
            details: ['WOF Inspections', 'Wheel Bearings', 'Brake Systems', 'Rust Treatment']
        },
        {
            title: 'Interior Refit',
            icon: <ShieldCheck className="w-8 h-8" />,
            desc: 'Modernize your living space. We offer cabinetry repairs, upholstery updates, and layout modifications to breathe new life into your caravan.',
            details: ['Cabinetry', 'Upholstery', 'Flooring', 'Layout Changes']
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Parallax Hero */}
            <motion.section
                ref={targetRef}
                className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-white"
                style={{ opacity }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
                    style={{ backgroundImage: "url('/caravan_boat_hero_1764692888890.png')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                    style={{ scale, y }}
                >
                    <ScrollReveal direction="down">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-6 text-center">
                            LEISURE VEHICLE SPECIALISTS
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <h1 className="text-5xl md:text-8xl font-['Tomorrow'] font-bold uppercase mb-8 leading-tight text-center">
                            <span className="text-gray-900">ADVENTURE</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">READY</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-center max-w-2xl mx-auto">
                            Is your caravan safe for the next trip? We ensure your holidays are trouble-free with expert repairs and maintenance.
                        </p>
                    </ScrollReveal>
                </motion.div>
            </motion.section>

            {/* Services Grid */}
            <section id="services-grid" className="py-24 px-4 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">What We Offer</p>
                            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black mb-4">OUR SERVICES</h2>
                            <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg max-w-3xl mx-auto">Specialized care for caravans, motorhomes, and boats.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div 
                                    className="group p-8 bg-white border-2 border-blue-600 hover:bg-blue-600 transition-all duration-150 h-full cursor-pointer"
                                    whileHover={{ scale: 1.05, y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.15 } }}
                                >
                                    <div className="mb-6 text-blue-600 group-hover:text-white transition-colors duration-150">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4 text-black group-hover:text-white transition-colors">
                                        {service.title}
                                    </h3>
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black group-hover:text-white mb-6 leading-relaxed font-mulish font-semibold text-lg">
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
                                <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Free Loan Service</p>
                                <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-8 leading-tight text-black">
                                    STAY ON THE <br />
                                    <span className="text-blue-600">WATER</span>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg text-center md:text-left mb-8">
                                    We understand that downtime means missed adventures. That's why we offer a unique service to keep you moving.
                                </p>
                                <div className="p-6 bg-white border-l-4 border-blue-600 mb-8 shadow-md">
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-mulish font-semibold text-lg italic text-center md:text-left">
                                        "We provide you with a free loan boat trailer while we service or repair your current boat trailer, ensuring minimal downtime and convenience for you."
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <button className="relative group bg-blue-600 text-white px-8 py-3 font-medium transition">
                                    <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10">ENQUIRE NOW</span>
                                </button>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase text-black mb-8">
                            PLANNING A TRIP?
                        </h2>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-12 leading-relaxed font-mulish font-semibold text-lg">
                            Don't let a breakdown ruin your holiday. Book a safety check today.
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                                <span className="absolute left-0 top-0 h-full bg-blue-800 w-0 group-hover:w-full transition-all duration-300"></span>
                                <span className="relative z-10">BOOK CHECK</span>
                            </button>
                            <button className="relative group bg-gray-900 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                                <span className="absolute left-0 top-0 h-full bg-gray-700 w-0 group-hover:w-full transition-all duration-300"></span>
                                <span className="relative z-10">CALL US</span>
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
