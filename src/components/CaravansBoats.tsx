import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Anchor, Hammer, ShieldCheck, Truck, Droplets, PenTool } from 'lucide-react';
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
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Parallax Hero */}
            <motion.section
                ref={targetRef}
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{ opacity }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/caravan_boat_hero_1764692888890.png')" }}
                >
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                    style={{ scale, y }}
                >
                    <ScrollReveal direction="down">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 text-blue-400 text-sm font-medium mb-6 border border-blue-600/30 backdrop-blur-sm">
                            LEISURE VEHICLE SPECIALISTS
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <h1 className="text-5xl md:text-8xl font-['Tomorrow'] font-bold mb-8 leading-tight">
                            ADVENTURE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">READY</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                            "Is your caravan SAFE for the next trip?" <br />
                            We ensure your holidays are trouble-free with expert repairs and maintenance.
                        </p>
                    </ScrollReveal>
                </motion.div>
            </motion.section>

            {/* Services Grid */}
            <section id="services-grid" className="py-32 px-4 bg-zinc-900 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-800 pb-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-bold mb-4">OUR SERVICES</h2>
                                <p className="text-gray-400 max-w-xl">Specialized care for caravans, motorhomes, and boats.</p>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0">
                                VIEW ALL SERVICES <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="group p-8 bg-black border border-gray-800 hover:border-blue-600/50 transition-all duration-500 hover:bg-gray-900/50 h-full">
                                    <div className="mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-['Tomorrow'] font-bold mb-4 group-hover:text-blue-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <ul className="space-y-2 border-t border-gray-800 pt-6">
                                        {service.details.map((detail, i) => (
                                            <li key={i} className="flex items-center text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Section: Loan Trailer */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <ScrollReveal direction="right">
                                <div className="relative rounded-lg overflow-hidden border border-gray-800">
                                    <img src="/caravan_boat_hero_1764692888890.png" alt="Loan Trailer" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="order-1 md:order-2">
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-bold mb-8 leading-tight">
                                    STAY ON THE <br />
                                    <span className="text-blue-500">WATER</span>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                                    We understand that downtime means missed adventures. That's why we offer a unique service to keep you moving.
                                </p>
                                <div className="p-6 bg-zinc-900 border-l-4 border-blue-600 mb-8">
                                    <p className="text-lg text-white italic">
                                        "We provide you with a free loan boat trailer while we service or repair your current boat trailer, ensuring minimal downtime and convenience for you."
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <button className="px-8 py-3 bg-blue-600 text-white font-bold tracking-wider hover:bg-blue-700 transition-colors">
                                    ENQUIRE NOW
                                </button>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-zinc-900 border-t border-gray-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-7xl font-['Tomorrow'] font-bold mb-8">
                            PLANNING A TRIP?
                        </h2>
                        <p className="text-xl text-gray-400 mb-12 font-light">
                            Don't let a breakdown ruin your holiday. Book a safety check today.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <button className="px-10 py-4 bg-blue-600 text-white font-bold tracking-wider hover:bg-blue-700 transition-colors">
                                BOOK CHECK
                            </button>
                            <button className="px-10 py-4 border border-white text-white font-bold tracking-wider hover:bg-white hover:text-black transition-colors">
                                CALL US
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
