import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PanelBeating() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState<number | null>(null);

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
            image: '/dent_repair_1764693039882.png'
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
            image: '/paint_booth_1764692971281.png'
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
            image: '/panel_beating_hero_1764692687494.png'
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
                className="pt-24 md:pt-32 pb-16 px-4 bg-black text-white"
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
                            <p className="text-xl text-gray-300 leading-relaxed font-mulish font-extralight mb-8">
                                From minor dents to major collision repairs, our skilled panel beaters restore your vehicle to its original condition with meticulous attention to detail.
                            </p>
                            <div className="flex gap-4">
                                <button className="relative group bg-blue-600 text-white px-8 py-3 font-medium transition">
                                    <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                                    <span className="relative z-10 group-hover:text-blue-600">GET A QUOTE</span>
                                </button>
                                <button onClick={() => scrollToSection('services-grid')} className="relative group bg-white text-black px-8 py-3 font-medium transition">
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

            {/* Services Grid */}
            <section id="services-grid" className="px-4 py-16 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Our Services</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase">Comprehensive Panel Beating</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden h-96 flex flex-col justify-end p-6 bg-cover bg-center border border-white group"
                                style={{ backgroundImage: `url('${service.image}')` }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setHoveredService(index)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                                {/* Number Badge */}
                                <div className="absolute top-4 left-4 text-white text-2xl font-['Tomorrow'] z-10 group-hover:opacity-0 transition-opacity duration-300">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Default Content */}
                                <div className="relative z-10 text-left group-hover:hidden transition-opacity duration-300">
                                    <h3 className="text-2xl font-['Tomorrow'] font-bold uppercase mb-2">{service.title}</h3>
                                    <p className="text-sm mb-4">{service.shortDesc}</p>
                                    <button className="flex items-center text-white hover:text-blue-400 transition uppercase text-sm font-medium">
                                        LEARN MORE <ChevronRight className="w-4 h-4 ml-2" />
                                    </button>
                                </div>

                                {/* Corner Brackets */}
                                <div className="absolute -top-2 -left-2 w-0 h-0 border-l-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                                <div className="absolute -top-2 -right-2 w-0 h-0 border-r-4 border-t-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                                <div className="absolute -bottom-2 -left-2 w-0 h-0 border-l-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>
                                <div className="absolute -bottom-2 -right-2 w-0 h-0 border-r-4 border-b-4 border-white group-hover:w-8 group-hover:h-8 transition-all duration-300 z-20"></div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center text-white p-6 opacity-0 translate-x-32 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-in-out z-30">
                                    <div className="text-left">
                                        <h3 className="text-2xl font-['Tomorrow'] font-bold uppercase mb-4">{service.title}</h3>
                                        <p className="text-sm leading-relaxed">{service.fullDesc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">How We Work</p>
                        <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-6">Our Repair Process</h2>
                    </div>
                    <div className="grid md:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-lg z-10 relative">
                                    {step.icon}
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
                                )}
                                <h3 className="font-['Tomorrow'] font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
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
                        <h2 className="text-4xl md:text-5xl font-['Tomorrow'] font-medium mb-6">Expert Panel Beating Since 1990</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Insurance Approved</h3>
                                    <p className="text-gray-700">We work with all major insurance companies and handle claims directly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Quality Guaranteed</h3>
                                    <p className="text-gray-700">All panel beating work comes with our comprehensive 12-month warranty.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Modern Equipment</h3>
                                    <p className="text-gray-700">State-of-the-art tools including computerized frame alignment and paint matching.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Tomorrow'] font-medium text-lg mb-1">Experienced Craftsmen</h3>
                                    <p className="text-gray-700">Our team brings decades of combined experience in panel beating and refinishing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium mb-6">What Our Customers Say</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "John D.", text: "Incredible work on my Audi. You can't even tell it was in an accident. Highly recommended!", rating: "⭐⭐⭐⭐⭐" },
                            { name: "Sarah M.", text: "Fast, professional, and they handled all the insurance paperwork. Great service.", rating: "⭐⭐⭐⭐⭐" },
                            { name: "Mike R.", text: "Best panel beaters in town. The paint match was perfect.", rating: "⭐⭐⭐⭐⭐" }
                        ].map((review, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                                <div className="text-yellow-400 mb-2">{review.rating}</div>
                                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
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
                    <p className="text-xl mb-8 leading-relaxed font-mulish font-extralight">
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
