import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollObserver } from './ScrollObserver';
import clsx from 'clsx';

export default function PanelBeating() {
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

    const services = [
        {
            title: 'Accident Repair',
            shortDesc: 'Comprehensive collision repair to restore your vehicle to pre-accident condition.',
            fullDesc: 'Our accident repair service handles everything from minor fender benders to major collisions. We work directly with insurance companies, provide detailed quotes, and use genuine or quality aftermarket parts. Our computerized frame alignment ensures structural integrity is fully restored.',
            image: '/panel_beating_hero_1764692687494.png'
        },
        {
            title: 'Bumper Repair',
            shortDesc: 'Expert repair and replacement of damaged bumpers for all vehicle makes.',
            fullDesc: 'Whether your bumper has minor scratches, dents, or requires complete replacement, we provide expert service. We repair plastic bumpers using specialized welding techniques and can perfectly match paint finishes. Same-day service available for minor repairs.',
            image: '/car-pieces.png'
        },
        {
            title: 'Chassis & Structural Repair',
            shortDesc: 'Precision structural repairs using advanced frame alignment technology.',
            fullDesc: 'Structural damage compromises vehicle safety. Our state-of-the-art frame straightening equipment and laser measuring systems ensure your vehicle\'s chassis is restored to exact factory specifications. We handle unibody and frame-on-frame construction.',
            image: '/panel_beating_hero_1764692687494.png'
        },
        {
            title: 'Curb Rash Repair',
            shortDesc: 'Restore damaged alloy wheels to showroom condition.',
            fullDesc: 'Curb damage doesn\'t just look bad—it can affect wheel balance and tire wear. We repair gouges, scratches, and dents in alloy wheels, then refinish them to match the original appearance. Available in powder coat or diamond cut finishes.',
            image: '/wheel_repair_1764693107551.png'
        },
        {
            title: 'Dent Repair',
            shortDesc: 'Paintless dent removal and traditional dent repair services.',
            fullDesc: 'Minor dents and dings can often be repaired without repainting using our paintless dent removal (PDR) technique. This cost-effective method maintains your original paint finish. For larger dents, we provide traditional panel beating and refinishing.',
            image: '/dent_repair_1764693039882.png'
        },
        {
            title: 'Exterior Polishing',
            shortDesc: 'Professional paint correction and polishing for a showroom shine.',
            fullDesc: 'Over time, vehicle paint develops swirl marks, oxidation, and fine scratches. Our multi-stage polishing process removes imperfections and restores depth and clarity to your paint. We offer various levels of correction from light enhancement to full paint restoration.',
            image: '/car-polishing-tray.png'
        },
        {
            title: 'Headlight Polishing',
            shortDesc: 'Restore cloudy, yellowed headlights for improved visibility and appearance.',
            fullDesc: 'Oxidized headlights reduce nighttime visibility and diminish your vehicle\'s appearance. Our restoration process removes the damaged outer layer, polishes the lens to clarity, and applies a UV-protective coating. Results look like new headlights at a fraction of the replacement cost.',
            image: '/headlight.webp'
        },
        {
            title: 'Paint & Refinishing',
            shortDesc: 'Expert automotive painting with computerized color matching.',
            fullDesc: 'From single panel refinishing to complete resprays, our modern paint booth and computerized color matching system ensures perfect results. We use premium automotive paints with factory-spec clear coats for lasting durability and gloss. Waterborne paint options available.',
            image: '/paint_booth_1764692971281.png'
        },
        {
            title: 'Panel Repair',
            shortDesc: 'Skilled repair or replacement of body panels for all vehicle types.',
            fullDesc: 'Damaged panels are carefully assessed to determine if repair or replacement is most cost-effective. Our craftsmen can reshape steel and aluminum panels back to original contours. When replacement is necessary, we source high-quality parts and ensure perfect fit and finish.',
            image: '/panel-beatt.jpg'
        },
        {
            title: 'Windscreen Removal & Installation',
            shortDesc: 'Professional windscreen replacement with proper adhesive curing.',
            fullDesc: 'Windscreen replacement requires precision and proper technique. We use OEM-quality glass and adhesives, follow manufacturer-specified curing times, and recalibrate advanced driver assistance systems (ADAS) if equipped. Mobile service available for insurance claims.',
            image: '/windscreen_repair_1764693203572.png'
        }
    ];

    const processSteps = [
        {
            title: "Assessment",
            description: "Detailed inspection and quote generation.",
            icon: "📋"
        },
        {
            title: "Disassembly",
            description: "Removing damaged parts for access.",
            icon: "🔧"
        },
        {
            title: "Repair",
            description: "Panel beating, structural alignment, and welding.",
            icon: "🔨"
        },
        {
            title: "Paint",
            description: "Color matching, painting, and clear coating.",
            icon: "🎨"
        },
        {
            title: "Reassembly",
            description: "Fitting parts and final quality check.",
            icon: "✨"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-white text-black"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Panel Beating Services</p>
                            <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                                Precision <span className="text-blue-400">Body Repair</span> Excellence
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed font-mulish font-extralight mb-8">
                                From minor dents to major collision repairs, our skilled panel beaters restore your vehicle to its original condition with meticulous attention to detail.
                            </p>
                            <div className="flex gap-4">
                                <button className="relative group bg-blue-600 text-white px-8 py-3 font-medium transition">
                                    <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10 group-hover:text-blue-600">GET A QUOTE</span>
                                </button>
                                <button onClick={() => scrollToSection('services-grid')} className="relative group bg-black text-white px-8 py-3 font-medium transition">
                                    <span className="absolute left-0 top-0 h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10 group-hover:text-white">VIEW SERVICES</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <img src="/panel_beating_hero_1764692687494.png" alt="Panel Beating" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services Grid - Scroll Animation */}
            <section id="services-grid" className="px-4 py-16 bg-white text-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Our Services</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-12">Comprehensive Panel Beating</h2>
                        <p className="text-gray-400 text-sm mb-8 hidden md:block">Scroll down to explore</p>
                    </div>

                    <ScrollObserver className="relative grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-32">
                        {(isHidden) => (
                            <>
                                <ScrollObserver.TriggerGroup className="md:py-[50vh]">
                                    {services.map((service, index) => (
                                        <ScrollObserver.Trigger id={`service-${index}`} key={index} className="relative md:scroll-mt-[50vh]">
                                            {(isActive) => (
                                                <div
                                                    className={clsx(
                                                        isActive ? "text-black" : "text-gray-400 md:text-gray-300 md:hover:text-gray-500",
                                                        "relative -mx-4 md:-mx-8 mb-6 md:-mb-4 rounded-2xl p-4 md:p-8 transition duration-300 md:hover:bg-gray-50"
                                                    )}
                                                >
                                                    <div className="text-blue-600 text-sm font-medium mb-2">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>
                                                    <div className="font-['Tomorrow'] text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-3 md:mb-4">
                                                        {service.title}
                                                    </div>
                                                    <div className="text-lg font-semibold leading-relaxed">
                                                        {service.fullDesc}
                                                    </div>
                                                    <a href={`#service-${index}`} className="absolute inset-0"></a>
                                                </div>
                                            )}
                                        </ScrollObserver.Trigger>
                                    ))}
                                </ScrollObserver.TriggerGroup>

                                <div className="sticky top-0 h-[100vh] hidden md:block">
                                    <div className={clsx({ "opacity-0 delay-100": !isHidden }, "absolute inset-0 flex items-center")}>
                                        <div className="aspect-square w-full rounded-3xl bg-gray-100"></div>
                                    </div>

                                    <ScrollObserver.ReactorGroup className="flex items-center justify-center">
                                        {services.map((service, index) => (
                                            <ScrollObserver.Reactor key={index} index={index} className="absolute inset-0 flex items-center justify-center p-8">
                                                {(isActive) => (
                                                    <div
                                                        className={clsx(
                                                            {
                                                                "opacity-0 delay-100": !isActive,
                                                                "opacity-100": isActive,
                                                            },
                                                            "aspect-square w-full rounded-3xl bg-cover bg-center transition-opacity duration-500"
                                                        )}
                                                        style={{ backgroundImage: `url('${service.image}')` }}
                                                    ></div>
                                                )}
                                            </ScrollObserver.Reactor>
                                        ))}
                                    </ScrollObserver.ReactorGroup>
                                </div>
                            </>
                        )}
                    </ScrollObserver>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 py-24 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">How We Work</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-6 text-gray-900">
                            YOUR REPAIR <span className="text-blue-600">PROCESS</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8 relative">
                        {/* Connecting Line with gradient animation */}
                        <motion.div 
                            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 -z-0"
                            initial={{ scaleX: 0, opacity: 0 }}
                            whileInView={{ scaleX: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                        />

                        {processSteps.map((step, index) => (
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
                                    {/* Shine effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <span className="relative z-10">{step.icon}</span>
                                </motion.div>
                                <div className="text-center">
                                    <motion.h3 
                                        className="text-xl font-['Tomorrow'] font-medium text-gray-900 mb-3"
                                        whileHover={{ color: "#2563eb", scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {step.title}
                                    </motion.h3>
                                    <p className="text-lg text-gray-600 leading-relaxed font-semibold group-hover:text-gray-900 transition-colors duration-300">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="/paint_booth_1764692971281.png" alt="Workshop" className="w-full h-auto rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Why Choose Us</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-6">Expert Panel Beating Since 1990</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Insurance Approved</h3>
                                    <p className="text-lg font-semibold text-gray-700">We work with all major insurance companies and handle claims directly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Quality Guaranteed</h3>
                                    <p className="text-lg font-semibold text-gray-700">All panel beating work comes with our comprehensive 12-month warranty.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Modern Equipment</h3>
                                    <p className="text-lg font-semibold text-gray-700">State-of-the-art tools including computerized frame alignment and paint matching.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Experienced Craftsmen</h3>
                                    <p className="text-lg font-semibold text-gray-700">Our team brings decades of combined experience in panel beating and refinishing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-6">What Our Customers Say</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "John D.", text: "Incredible work on my Audi. You can't even tell it was in an accident. Highly recommended!", rating: "⭐⭐⭐⭐⭐" },
                            { name: "Sarah M.", text: "Fast, professional, and they handled all the insurance paperwork. Great service.", rating: "⭐⭐⭐⭐⭐" },
                            { name: "Mike R.", text: "Best panel beaters in town. The paint match was perfect.", rating: "⭐⭐⭐⭐⭐" }
                        ].map((review, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <div className="text-yellow-400 mb-2">{review.rating}</div>
                                <p className="text-lg font-semibold text-gray-700 mb-4 italic">"{review.text}"</p>
                                <p className="font-bold font-['Tomorrow']">- {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="px-4 py-20 bg-blue-600 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Ready To Restore Your Vehicle?
                    </h2>
                    <p className="text-lg font-semibold mb-8 leading-relaxed">
                        Get a free quote today and experience the CBD Panelbeaters difference.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="relative group bg-white text-blue-600 px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">REQUEST QUOTE</span>
                        </button>
                        <button className="relative group bg-black text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-black">CALL US NOW</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
