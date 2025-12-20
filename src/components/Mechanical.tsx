import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, Shield, Settings, Disc, Zap, Activity, Gauge } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';
import { CpuArchitecture } from './ui/cpu-architecture';
import { Spotlight, SpotLightItem } from './ui/spotlight';



export default function Mechanical() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSymptom, setActiveSymptom] = useState<number | null>(null);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
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
            title: 'WOF & Compliance',
            icon: <Shield className="w-8 h-8" />,
            desc: 'Comprehensive Warrant of Fitness inspections and compliance checks. We treat your vehicle like our own, ensuring it meets all safety standards.',
            details: ['Safety Systems Check', 'Structural Inspection', 'Brake Testing', 'Tyre & Light Check'],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'Mechanical & Suspension',
            icon: <Settings className="w-8 h-8" />,
            desc: 'Complete mechanical repairs and suspension tuning. From shock absorbers to control arms, we restore your ride comfort and handling.',
            details: ['Shock Absorbers', 'Suspension Bushes', 'Steering Racks', 'CV Joints'],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'Brake Services',
            icon: <Disc className="w-8 h-8" />,
            desc: 'Your safety is paramount. We provide detailed brake inspections, pad replacement, and disc machining using precision equipment.',
            details: ['Pad Replacement', 'Disc Machining', 'ABS Diagnostics', 'Fluid Flush'],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'Auto Electrical',
            icon: <Zap className="w-8 h-8" />,
            desc: 'Advanced diagnostics for modern vehicle electronics. We solve complex wiring issues, battery drains, and sensor faults.',
            details: ['Battery Testing', 'Alternators', 'Starter Motors', 'Wiring Repairs'],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'Engine Diagnostics',
            icon: <Activity className="w-8 h-8" />,
            desc: 'State-of-the-art scanning tools to identify engine faults accurately. We interpret error codes and perform targeted repairs.',
            details: ['Check Engine Light', 'Performance Tuning', 'Fuel Systems', 'Ignition Systems'],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'General Servicing',
            icon: <Gauge className="w-8 h-8" />,
            desc: 'Logbook servicing that protects your warranty. We use high-quality oils and filters to keep your engine running smoothly.',
            details: ['Oil Change', 'Filter Replacement', 'Fluid Top-ups', 'Safety Inspection'],
            image: '/mechanical_hero_1764692776650.png'
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Parallax Hero */}
            <motion.section
                ref={targetRef}
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{ opacity }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/mechanical_hero_1764692776650.png')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                </div>

                <motion.div
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                    style={{ scale, y }}
                >
                    <ScrollReveal direction="down">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-sm font-medium mb-6 border border-blue-400 backdrop-blur-sm">
                            PREMIUM AUTOMOTIVE CARE
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-8 uppercase leading-tight tracking-tight text-white">
                            ENGINEERING 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> EXCELLENCE</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <p className="text-lg text-gray-200 font-semibold max-w-3xl mx-auto leading-relaxed mb-10">
                            "We treat your car or commercial vehicle like our own." <br />
                            Expert diagnostics, WOFs, and mechanical repairs.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.8}>
                        <div className="flex gap-4 justify-center">
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-red-600 transition-all duration-300 font-medium">
                                Book Now
                            </button>
                            <button className="px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded-md hover:border-gray-400 transition-all duration-300 font-medium">
                                Learn More
                            </button>
                        </div>
                    </ScrollReveal>
                </motion.div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-gray-500 rounded-full" />
                    </div>
                </div>
            </motion.section>

            {/* Services Grid (Holographic HUD Style) */}
            <section id="services-grid" className="py-32 px-4 bg-gray-50 relative z-10 overflow-hidden">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-blue-200 pb-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-4 text-gray-900">
                                    SYSTEM <span className="text-blue-600">MODULES</span>
                                </h2>
                                <p className="text-lg text-black-600 max-w-xl font-semibold">
                                    Comprehensive mechanical repairs and maintenance for all makes and models.
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
                                <SpotLightItem className="h-[450px] border border-gray-200 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] transition-all duration-300 relative">
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
                                        {/* Corner Accents */}
                                        <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />
                                        <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />
                                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />
                                        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} />

                                        {/* Scanline Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none ${hoveredService === index ? 'translate-y-full' : '-translate-y-full'}`} />

                                        {/* Background gradient from logo area to bottom */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black via-black/90 to-transparent transition-opacity duration-500 ${hoveredService === index ? 'opacity-0' : 'opacity-100'}`} />

                                        <div className={`mb-4 transition-all duration-500 relative z-10 ${hoveredService === index ? 'text-blue-600 scale-110' : 'text-white'}`}>
                                            {service.icon}
                                        </div>

                                        <h3 className={`text-2xl font-['Tomorrow'] font-medium mb-4 transition-colors relative z-10 ${hoveredService === index ? 'text-blue-600' : 'text-white'}`}>
                                            {service.title}
                                        </h3>

                                        <div className={`transition-all duration-500 ease-in-out relative z-10 ${hoveredService === index ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
                                            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-semibold">
                                                {service.desc}
                                            </p>

                                            <ul className="space-y-2 border-t border-gray-100 pt-6">
                                                {service.details.map((detail, i) => (
                                                    <li key={i} className="flex items-center text-sm text-gray-500">
                                                        <span className="mr-2 text-blue-600">›</span>
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


            {/* Symptom Checker */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Troubleshooter</p>
                            <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-6 text-gray-900">
                                WHAT'S WRONG WITH <br /> MY CAR?
                            </h2>
                            <p className="text-lg text-black-600 mb-8 font-semibold">
                                Select a symptom to see potential causes and how we can help.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { id: 1, icon: <Activity />, title: "Check Engine Light", cause: "Could be anything from a loose gas cap to a catalytic converter issue.", fix: "We run a full computer diagnostic scan to pinpoint the error code." },
                                    { id: 2, icon: <Disc />, title: "Squealing Brakes", cause: "Worn brake pads or debris caught in the caliper.", fix: "Brake inspection and pad replacement if necessary." },
                                    { id: 3, icon: <Zap />, title: "Car Won't Start", cause: "Dead battery, bad starter, or alternator failure.", fix: "Battery test and charging system analysis." },
                                    { id: 4, icon: <Settings />, title: "Vibration at Speed", cause: "Unbalanced wheels or suspension issues.", fix: "Wheel balancing and suspension check." },
                                ].map((symptom) => (
                                    <div
                                        key={symptom.id}
                                        className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${activeSymptom === symptom.id ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}
                                        onMouseEnter={() => setActiveSymptom(symptom.id)}
                                        onMouseLeave={() => setActiveSymptom(null)}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`p-2 rounded-full ${activeSymptom === symptom.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                                    {symptom.icon}
                                                </div>
                                                <h3 className="text-xl font-medium text-gray-900">{symptom.title}</h3>
                                            </div>
                                            <ChevronRight className={`w-5 h-5 text-gray-500 transition-transform ${activeSymptom === symptom.id ? 'rotate-90' : ''}`} />
                                        </div>
                                        <AnimatePresence>
                                            {activeSymptom === symptom.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 pl-14 text-gray-600">
                                                        <p className="mb-2"><strong className="text-blue-600">Possible Cause:</strong> {symptom.cause}</p>
                                                        <p><strong className="text-green-600">Our Fix:</strong> {symptom.fix}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative hidden md:block h-full min-h-[500px]">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-3xl" />
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeSymptom || 'default'}
                                    src={
                                        activeSymptom === 1 ? "/symptom_engine_light.png" :
                                            activeSymptom === 2 ? "/symptom_brakes.png" :
                                                activeSymptom === 3 ? "/symptom_battery.png" :
                                                    activeSymptom === 4 ? "/symptom_vibration.png" :
                                                        "/mechanical_hero_1764692776650.png"
                                    }
                                    alt="Diagnostic Visualization"
                                    className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process / Philosophy Section */}
            <section className="py-32 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <CpuArchitecture />
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <ScrollReveal>
                                <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-8 leading-tight">
                                    ADVANCED <br />
                                    <span className="text-blue-600">DIAGNOSTICS</span>
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p className="text-lg text-black-600 mb-8 leading-relaxed font-semibold">
                                    Modern vehicles are complex computers on wheels. We use the latest diagnostic scanning tools to communicate directly with your car's onboard systems.
                                </p>
                                <p className="text-lg text-black-600 mb-8 leading-relaxed font-semibold">
                                    Our technicians are trained to interpret complex data streams, allowing us to pinpoint issues with engine management, transmission control, and safety systems that others might miss.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="flex gap-8">
                                    <div>
                                        <div className="text-4xl font-['Tomorrow'] font-medium text-gray-900 mb-2">100%</div>
                                        <div className="text-sm text-black-600 uppercase tracking-wider">Accuracy</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-['Tomorrow'] font-medium text-gray-900 mb-2">Latest</div>
                                        <div className="text-sm text-black-600 uppercase tracking-wider">Software</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="relative">
                            <ScrollReveal direction="left">
                                <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                                    <img src="/mechanical_hero_1764692776650.png" alt="Diagnostics" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
                                </div>
                            </ScrollReveal>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-blue-600/20 rounded-full animate-pulse" />
                            <div className="absolute -top-10 -left-10 w-20 h-20 border border-gray-300 rounded-full" />
                        </div>
                    </div>
                </div>
            </section>



            {/* Service Process Steps */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">How It Works</p>
                        <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium mb-6 text-gray-900">
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
                            { step: "01", title: "Book & Drop-off", desc: "Schedule online or call us. Drop your vehicle at our secure facility." },
                            { step: "02", title: "Diagnosis & Quote", desc: "We inspect the issue and provide a transparent, upfront quote." },
                            { step: "03", title: "Expert Repair", desc: "Our certified technicians perform the repairs using quality parts." },
                            { step: "04", title: "Quality Check", desc: "Final road test and safety inspection before you pick up." }
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
                                    {/* Shine effect on hover */}
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
                                        className="text-xl font-['Tomorrow'] font-medium text-gray-900 mb-3"
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
                </div>
            </section>

            <Footer scrollToSection={scrollToSection} />
        </div >
    );
}
