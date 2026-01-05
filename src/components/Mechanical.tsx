'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Shield, Settings, Disc, Zap, Activity, Gauge } from 'lucide-react';
import { ReactLenis } from 'lenis/react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';



export default function Mechanical() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredService, setHoveredService] = useState<number | null>(null);
    const [selectedService, setSelectedService] = useState<number | null>(null);
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

    useEffect(() => {
        if (selectedService !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedService]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const services = [
        {
            title: 'WOF Inspections',
            icon: <Shield className="w-8 h-8" />,
            desc: 'Keeping your vehicle roadworthy is essential. Our Warrant of Fitness service makes the process simple, fast, and affordable with thorough safety checks on all makes and models, ensuring your vehicle meets NZ legal standards.',
            details: [
                '$70 all-inclusive WOF checks',
                'All makes and models welcome',
                'Pickup and delivery available (running or not)',
                'Friendly and qualified inspectors',
                'Full WOF repairs completed in-house',
                'We manage WOF-related insurance claims',
                'Vehicles 2000+ registered: annual WOF',
                'Brand-new vehicles: initial at registration, next in 3 years',
                'Pre-2000 vehicles: 6-month WOF',
                'Light trailers & commercial: 12 months (or 6 months if 10+ years old)'
            ],
            image: '/Mechanical%20page%20images/wof.png'
        },
        {
            title: 'Mechanical Services',
            icon: <Settings className="w-8 h-8" />,
            desc: 'Professional petrol and diesel mechanical services for both private and commercial vehicles. Our fully qualified mechanics deliver reliable servicing and repairs for all makes and models with modern diagnostics and quality parts.',
            details: [
                'Full mechanical servicing (minor, major, logbook)',
                'Auto electrical services (alternators, starters, batteries)',
                'Brake and clutch services (inspection, replacement, hydraulics)',
                'Electronic Fuel Injection (EFI) diagnostics and servicing',
                'Engine diagnostics and tune-ups with 62-point safety check',
                'Engine repair and rebuilding',
                'Exhaust fitting and servicing',
                'Gearbox and transmission services',
                'Steering system services',
                'Tyre, wheel alignment and balancing',
                'Windscreen and glass services',
                'Fleet servicing and fleet solutions',
                'Pre-purchase vehicle inspections',
                'Roadside assistance and breakdown support'
            ],
            image: '/Mechanical%20page%20images/Mechanical%20Services.jpg'
        },
        {
            title: 'Compliance Centre',
            icon: <Disc className="w-8 h-8" />,
            desc: 'We assist with all vehicle compliance requirements, providing reliable and professional certification services. Working with VTNZ, we ensure vehicles meet current NZTA compliance standards for imported, lapsed, or de-registered vehicles.',
            details: [
                'Certificate of Compliance for imported vehicles',
                'Compliance inspections for lapsed or de-registered vehicles',
                'Support for NZTA and VTNZ compliance requirements',
                'AA inspections welcomed',
                'Compliance services for cars and light commercial vehicles',
                'Assistance with compliance-related documentation',
                'Experienced, reliable, and knowledgeable staff',
                'Same-day service available where possible',
                'Modern, clean workshop with up-to-date equipment',
                'Undercover, secure parking with 7-day access',
                'Vehicle pickup and delivery available'
            ],
            image: '/Mechanical%20page%20images/Compliance%20Centre.jpg'
        },
    ];

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white font-sans" style={{ color: '#1F366A' }}>
                <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

                {/* Service Detail Modal */}
                {selectedService !== null && (
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={() => setSelectedService(null)}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl flex flex-col relative"
                            style={{ maxHeight: 'calc(100vh - 4rem)' }}
                            onClick={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Modal Header */}
                            <div className="bg-gradient-to-br from-[#0C55AC] to-[#1F366A] text-white p-8 rounded-t-2xl flex-shrink-0">
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                            {services[selectedService].icon}
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-['Poppins'] font-semibold mb-2">
                                                {services[selectedService].title}
                                            </h2>
                                            <p className="text-white/90">
                                                {services[selectedService].desc}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedService(null)}
                                        className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="p-8 overflow-y-auto overflow-x-hidden flex-1">
                                <h3 className="text-xl font-['Poppins'] font-semibold mb-6" style={{ color: '#1F366A' }}>
                                    What We Offer
                                </h3>
                                <ul className="space-y-4">
                                    {services[selectedService].details.map((detail, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: i * 0.05 }}
                                        >
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5" style={{ backgroundColor: '#0C55AC' }}>
                                                ✓
                                            </span>
                                            <span className="text-base leading-relaxed" style={{ color: '#1F366A' }}>
                                                {detail}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Buttons */}
                                <div className="flex gap-4 mt-8 pt-8 border-t" style={{ borderColor: '#B5B5B5' }}>
                                    <button className="flex-1 px-6 py-3 text-white rounded-lg hover:opacity-90 transition-all duration-300 font-medium" style={{ backgroundColor: '#0C55AC' }}>
                                        Book Now
                                    </button>
                                    <button className="flex-1 px-6 py-3 bg-white border rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium" style={{ borderColor: '#B5B5B5', color: '#1F366A' }}>
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                {/* Hero Section Container */}
                <div className="relative">
                    <motion.section
                        ref={targetRef}
                        className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
                        style={{ opacity }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                            style={{ backgroundImage: "url('/mechanic-servicing-car.jpg')" }}
                        />

                        <motion.div
                            className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
                            style={{ scale, y }}
                        >

                            <ScrollReveal direction="down">
                                <span className="inline-block py-1 px-3 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm text-center mx-auto" style={{ backgroundColor: '#0C55AC', borderColor: '#14A0B5', borderWidth: '1px' }}>
                                    PREMIUM AUTOMOTIVE CARE
                                </span>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-8 uppercase leading-tight tracking-tight text-white text-center mx-auto">
                                    ENGINEERING
                                    <span style={{ color: '#0C55AC' }}> EXCELLENCE</span>
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.6}>
                                <p className="text-lg text-white font-semibold max-w-3xl mx-auto leading-relaxed mb-10 text-center">
                                    "We treat your car or commercial vehicle like our own." <br />
                                    Expert diagnostics, WOFs, and mechanical repairs.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.8}>
                                <div className="flex gap-4 justify-center">
                                    <button className="px-8 py-3 text-white rounded-md hover:opacity-90 transition-all duration-300 font-medium" style={{ backgroundColor: '#0C55AC' }}>
                                        Book Now
                                    </button>
                                    <button className="px-8 py-3 bg-white border rounded-md hover:opacity-80 transition-all duration-300 font-medium" style={{ borderColor: '#B5B5B5', color: '#1F366A' }}>
                                        Learn More
                                    </button>
                                </div>
                            </ScrollReveal>
                        </motion.div>
                    </motion.section>

                    {/* Wave Separator - positioned at bottom of hero container */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
                        <svg
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="relative block w-full h-[60px] md:h-[100px]"
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
                                fill="#f9fafb"
                            />
                        </svg>
                    </div>
                </div>

                {/* Services Grid (Modern Card Design) */}
                <section id="services-grid" className="py-32 px-4 relative z-10 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)' }}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full" style={{
                            backgroundImage: `radial-gradient(circle at 20% 50%, #0C55AC 2px, transparent 2px), radial-gradient(circle at 80% 80%, #14A0B5 2px, transparent 2px)`,
                            backgroundSize: '100px 100px'
                        }} />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="inline-block py-2 px-6 rounded-full text-white text-sm font-medium mb-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #0C55AC 0%, #1F366A 100%)' }}>
                                        OUR EXPERTISE
                                    </span>
                                    <h2 className="text-5xl md:text-7xl font-['Poppins'] font-bold mb-6 tracking-tight" style={{ color: '#1F366A' }}>
                                        PREMIUM <span style={{ background: 'linear-gradient(135deg, #0C55AC, #14A0B5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SERVICES</span>
                                    </h2>
                                    <p className="text-xl max-w-2xl mx-auto font-medium leading-relaxed" style={{ color: '#1F366A' }}>
                                        Comprehensive mechanical solutions with cutting-edge technology and expert craftsmanship
                                    </p>
                                </motion.div>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ScrollReveal key={index} delay={index * 0.15}>
                                    <motion.div
                                        className="group relative h-[600px] rounded-2xl overflow-hidden cursor-pointer"
                                        onMouseEnter={() => setHoveredService(index)}
                                        onMouseLeave={() => setHoveredService(null)}
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Card Container with 3D Transform */}
                                        <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>

                                            {/* Background Image Layer */}
                                            <motion.div
                                                className="absolute inset-0 bg-cover bg-center"
                                                style={{ backgroundImage: `url(${service.image})` }}
                                                animate={{
                                                    scale: hoveredService === index ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.6 }}
                                            />

                                            {/* Dynamic Gradient Overlay */}
                                            <motion.div
                                                className="absolute inset-0"
                                                style={{ background: 'linear-gradient(180deg, rgba(12, 85, 172, 0.4) 0%, rgba(31, 54, 106, 0.95) 100%)' }}
                                                animate={{
                                                    background: hoveredService === index
                                                        ? 'linear-gradient(180deg, rgba(12, 85, 172, 0.1) 0%, rgba(255, 255, 255, 0.98) 100%)'
                                                        : 'linear-gradient(180deg, rgba(12, 85, 172, 0.4) 0%, rgba(31, 54, 106, 0.95) 100%)'
                                                }}
                                                transition={{ duration: 0.5 }}
                                            />

                                            {/* Content Container */}
                                            <div className="relative h-full flex flex-col p-8">

                                                {/* Icon Badge - Floating Effect */}
                                                <motion.div
                                                    className="mb-auto"
                                                    animate={{
                                                        y: hoveredService === index ? -5 : 0,
                                                        rotate: hoveredService === index ? 360 : 0,
                                                    }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <div
                                                        className="inline-flex p-4 rounded-xl shadow-lg backdrop-blur-sm"
                                                        style={{
                                                            background: hoveredService === index
                                                                ? 'linear-gradient(135deg, #0C55AC, #14A0B5)'
                                                                : 'rgba(255, 255, 255, 0.2)',
                                                            border: '2px solid rgba(255, 255, 255, 0.3)'
                                                        }}
                                                    >
                                                        <div style={{ color: 'white' }}>
                                                            {service.icon}
                                                        </div>
                                                    </div>
                                                </motion.div>

                                                {/* Title & Description Section */}
                                                <div className="mt-auto">
                                                    <motion.div
                                                        className="mb-4"
                                                        animate={{
                                                            y: hoveredService === index ? -10 : 0,
                                                        }}
                                                        transition={{ duration: 0.4 }}
                                                    >
                                                        <h3
                                                            className="text-3xl font-['Poppins'] font-bold mb-3 leading-tight"
                                                            style={{
                                                                color: hoveredService === index ? '#0C55AC' : 'white',
                                                                textShadow: hoveredService === index ? 'none' : '0 2px 10px rgba(0,0,0,0.3)'
                                                            }}
                                                        >
                                                            {service.title}
                                                        </h3>

                                                        {/* Animated Underline */}
                                                        <motion.div
                                                            className="h-1 rounded-full"
                                                            style={{ background: 'linear-gradient(90deg, #14A0B5, #0C55AC)' }}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: hoveredService === index ? '100%' : '60px' }}
                                                            transition={{ duration: 0.4 }}
                                                        />
                                                    </motion.div>

                                                    {/* Expandable Content */}
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{
                                                            opacity: hoveredService === index ? 1 : 0,
                                                            height: hoveredService === index ? 'auto' : 0,
                                                        }}
                                                        transition={{ duration: 0.4 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="text-base mb-4 leading-relaxed font-medium" style={{ color: '#1F366A' }}>
                                                            {service.desc}
                                                        </p>

                                                        {/* Feature List */}
                                                        <div className="space-y-2 mb-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(12, 85, 172, 0.05)' }}>
                                                            {service.details.slice(0, 3).map((detail, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    className="flex items-start gap-2"
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                                >
                                                                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ background: 'linear-gradient(135deg, #0C55AC, #14A0B5)' }}>
                                                                        ✓
                                                                    </span>
                                                                    <span className="text-sm font-medium leading-tight" style={{ color: '#1F366A' }}>
                                                                        {detail}
                                                                    </span>
                                                                </motion.div>
                                                            ))}
                                                        </div>

                                                        {/* CTA Button */}
                                                        <button
                                                            onClick={() => setSelectedService(index)}
                                                            className="w-full px-6 py-3 text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                                                            style={{ background: 'linear-gradient(135deg, #0C55AC, #1F366A)' }}
                                                        >
                                                            Explore Service
                                                            <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                                        </button>
                                                    </motion.div>

                                                    {/* Hover Indicator (when not hovered) */}
                                                    {hoveredService !== index && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="flex items-center gap-2 mt-4 text-white/80 text-sm font-medium"
                                                        >
                                                            <span>Hover to explore</span>
                                                            <motion.div
                                                                animate={{ x: [0, 5, 0] }}
                                                                transition={{ repeat: Infinity, duration: 1.5 }}
                                                            >
                                                                <ChevronRight className="w-4 h-4" />
                                                            </motion.div>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Decorative Corner Elements */}
                                            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: hoveredService === index ? '#14A0B5' : 'rgba(255,255,255,0.3)' }} />
                                            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: hoveredService === index ? '#14A0B5' : 'rgba(255,255,255,0.3)' }} />
                                            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: hoveredService === index ? '#14A0B5' : 'rgba(255,255,255,0.3)' }} />
                                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: hoveredService === index ? '#14A0B5' : 'rgba(255,255,255,0.3)' }} />
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Troubleshooter - Sticky Scroll Pattern */}
                <section className="bg-white">
                    <div className="wrapper">
                        {/* Intro Section */}
                        <section className="h-screen w-full bg-white grid place-content-center sticky top-0 z-0" style={{ color: '#1F366A' }}>
                            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                            <h1 className='2xl:text-7xl md:text-5xl text-3xl px-8 font-["Poppins"] font-semibold text-center tracking-tight leading-[120%] relative z-10'>
                                <span style={{ color: '#0C55AC' }}>Troubleshooter:</span> <br /> What's Wrong With My Car? 🔍
                            </h1>
                        </section>

                        {/* Sticky Grid with Images - This will cover the intro section */}
                        <section className="bg-white w-full relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Sticky Content Side */}
                                <div className="sticky top-0 h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#FDDD7F' }}>
                                    <div className="max-w-lg">
                                        <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#0C55AC' }}>Interactive Diagnosis</p>
                                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-semibold mb-6" style={{ color: '#1F366A' }}>
                                            We Pinpoint The Problem
                                        </h2>
                                        <p className="text-lg mb-6 font-semibold leading-relaxed" style={{ color: '#1F366A' }}>
                                            Select a symptom to see potential causes and how our expert technicians can help diagnose and fix the issue.
                                        </p>
                                        <div className="grid gap-3">
                                            <div className="flex items-center gap-3" style={{ color: '#1F366A' }}>
                                                <Activity className="w-6 h-6" style={{ color: '#0C55AC' }} />
                                                <span className="font-medium">Real-time Diagnostics</span>
                                            </div>
                                            <div className="flex items-center gap-3" style={{ color: '#1F366A' }}>
                                                <Gauge className="w-6 h-6" style={{ color: '#0C55AC' }} />
                                                <span className="font-medium">Advanced Scanning Tools</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scrolling Symptoms Side */}
                                <div className="grid gap-6 py-8 px-4">
                                    {[
                                        { id: 1, icon: <Activity className="w-8 h-8" />, title: "Check Engine Light", cause: "Could be anything from a loose gas cap to a catalytic converter issue.", fix: "We run a full computer diagnostic scan to pinpoint the error code.", image: "/symptom_engine_light.png" },
                                        { id: 2, icon: <Disc className="w-8 h-8" />, title: "Squealing Brakes", cause: "Worn brake pads or debris caught in the caliper.", fix: "Brake inspection and pad replacement if necessary.", image: "/symptom_brakes.png" },
                                        { id: 3, icon: <Zap className="w-8 h-8" />, title: "Car Won't Start", cause: "Dead battery, bad starter, or alternator failure.", fix: "Battery test and charging system analysis.", image: "/symptom_battery.png" },
                                        { id: 4, icon: <Settings className="w-8 h-8" />, title: "Vibration at Speed", cause: "Unbalanced wheels or suspension issues.", fix: "Wheel balancing and suspension check.", image: "/symptom_vibration.png" },
                                    ].map((symptom, index) => (
                                        <div
                                            key={symptom.id}
                                            className={`flex justify-center ${index % 2 === 0 ? '-skew-x-3' : 'skew-x-3'}`}
                                        >
                                            <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl bg-gray-900 border-2 transition-all duration-500 hover:shadow-2xl group" style={{ borderColor: '#B5B5B5' }}>
                                                {/* Image */}
                                                <div className="relative h-80 w-full overflow-hidden">
                                                    <img
                                                        src={symptom.image}
                                                        alt={symptom.title}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        onError={(e) => {
                                                            // Fallback to default image if symptom image fails
                                                            e.currentTarget.src = '/mechanical_hero_1764692776650.png';
                                                        }}
                                                    />
                                                </div>

                                                {/* Overlay Content */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6">
                                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                                        <div className="mb-3 p-2 rounded-full w-fit" style={{ backgroundColor: '#0C55AC' }}>
                                                            <div className="text-white">{symptom.icon}</div>
                                                        </div>
                                                        <h3 className="text-2xl font-['Poppins'] font-semibold text-white mb-2">{symptom.title}</h3>
                                                        <p className="text-sm mb-2" style={{ color: '#14A0B5' }}><strong>Cause:</strong> {symptom.cause}</p>
                                                        <p className="text-sm" style={{ color: '#047342' }}><strong>Our Fix:</strong> {symptom.fix}</p>
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

                {/* Advanced Diagnostics - Bento Grid Layout */}
                <section className="py-32 px-4 relative overflow-hidden bg-slate-950">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 51px)`
                        }} />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Header */}
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <motion.span
                                    className="inline-block py-2 px-6 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg"
                                    style={{ backgroundColor: '#14A0B5', color: '#000' }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    Advanced Technology
                                </motion.span>
                                <h2 className="text-5xl md:text-7xl font-['Poppins'] font-black mb-6 text-white uppercase tracking-tight">
                                    ADVANCED <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #14A0B5, #FDDD7F)' }}>DIAGNOSTICS</span>
                                </h2>
                                <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium">
                                    State-of-the-art diagnostic technology for precise vehicle analysis
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Bento Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            {/* Large Feature Card - Spans 2 columns */}
                            <motion.div
                                className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20 backdrop-blur-sm"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.02, borderColor: 'rgba(20, 160, 181, 0.8)' }}
                            >
                                <div className="relative h-full min-h-[500px] overflow-hidden">
                                    <img
                                        src="/mechanical_hero_1764692776650.png"
                                        alt="Computer Diagnostics"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#14A0B5', color: '#000' }}>
                                            PREMIUM FEATURE
                                        </div>
                                        <h3 className="text-3xl font-['Poppins'] font-black text-white mb-3">
                                            Computer Diagnostic Scanning
                                        </h3>
                                        <p className="text-white/90 font-medium leading-relaxed">
                                            Our advanced diagnostic equipment communicates directly with your vehicle's onboard computer systems for accurate fault detection.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Stats Card 1 */}
                            <motion.div
                                className="relative group overflow-hidden rounded-3xl p-8 border-2 border-white/20"
                                style={{ background: 'linear-gradient(135deg, rgba(20, 160, 181, 0.2), rgba(12, 85, 172, 0.2))' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: 'rgba(253, 221, 127, 0.8)' }}
                            >
                                <Activity className="w-12 h-12 mb-4" style={{ color: '#FDDD7F' }} />
                                <div className="text-5xl font-['Poppins'] font-black mb-2 text-white">100%</div>
                                <div className="text-sm uppercase tracking-wider font-bold" style={{ color: '#14A0B5' }}>Accuracy</div>
                            </motion.div>

                            {/* Stats Card 2 */}
                            <motion.div
                                className="relative group overflow-hidden rounded-3xl p-8 border-2 border-white/20"
                                style={{ background: 'linear-gradient(135deg, rgba(253, 221, 127, 0.2), rgba(228, 174, 179, 0.2))' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.05, borderColor: 'rgba(20, 160, 181, 0.8)' }}
                            >
                                <Gauge className="w-12 h-12 mb-4" style={{ color: '#FDDD7F' }} />
                                <div className="text-5xl font-['Poppins'] font-black mb-2 text-white">Latest</div>
                                <div className="text-sm uppercase tracking-wider font-bold" style={{ color: '#14A0B5' }}>Software</div>
                            </motion.div>

                            {/* Image Card 1 */}
                            <motion.div
                                className="relative group overflow-hidden rounded-3xl border-2 border-white/20"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative h-full min-h-[280px] overflow-hidden">
                                    <img
                                        src="/Mechanical page images/Mechanical Services.jpg"
                                        alt="Engine Analysis"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-['Poppins'] font-bold text-white">Engine Analysis</h4>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Card 2 */}
                            <motion.div
                                className="relative group overflow-hidden rounded-3xl border-2 border-white/20"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative h-full min-h-[280px] overflow-hidden">
                                    <img
                                        src="/Mechanical page images/Sensor Testing.jpg"
                                        alt="Sensor Testing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-['Poppins'] font-bold text-white">Sensor Testing</h4>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Card 3 - Computerized Diagnostics - Spans 2 columns */}
                            <motion.div
                                className="md:col-span-2 relative group overflow-hidden rounded-3xl border-2 border-white/20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full min-h-[280px] overflow-hidden">
                                    <img
                                        src="/Mechanical page images/Compliance Centre.jpg"
                                        alt="Computerized Diagnostics"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex items-center">
                                        <div className="max-w-md">
                                            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#14A0B5', color: '#fff' }}>
                                                TECHNOLOGY
                                            </div>
                                            <h4 className="text-2xl font-['Poppins'] font-black text-white mb-3">Computerized Diagnostics</h4>
                                            <p className="text-white/90 font-medium">Advanced scanning tools for accurate vehicle assessment</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Card 4 - System Calibration - Spans 2 columns */}
                            <motion.div
                                className="md:col-span-2 relative group overflow-hidden rounded-3xl border-2 border-white/20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full min-h-[280px] overflow-hidden">
                                    <img
                                        src="/Mechanical page images/System Calibration.jpg"
                                        alt="System Calibration"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex items-center">
                                        <div className="max-w-md">
                                            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#FDDD7F', color: '#000' }}>
                                                SPECIALIZED
                                            </div>
                                            <h4 className="text-2xl font-['Poppins'] font-black text-white mb-3">System Calibration</h4>
                                            <p className="text-white/90 font-medium">Precision calibration for engine management and safety systems</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Features */}
                        <ScrollReveal delay={0.6}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Zap className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Live Data Streaming</h4>
                                    <p className="text-white/70 text-sm">Real-time monitoring of engine parameters and sensors</p>
                                </motion.div>
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Settings className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Multi-Brand Coverage</h4>
                                    <p className="text-white/70 text-sm">Compatible with all major vehicle manufacturers</p>
                                </motion.div>
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Shield className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Safety System Checks</h4>
                                    <p className="text-white/70 text-sm">Comprehensive diagnostics for ABS, airbags, and more</p>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>



                {/* Service Process Steps */}
                <section className="py-24 bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#0C55AC' }}>How It Works</p>
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6" style={{ color: '#1F366A' }}>
                                YOUR SERVICE <span style={{ color: '#0C55AC' }}>JOURNEY</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line with gradient animation */}
                            <motion.div
                                className="hidden md:block absolute top-12 left-0 w-full h-0.5 -z-0"
                                style={{ background: 'linear-gradient(to right, #0C55AC, #783E6C, #0C55AC)' }}
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
                                        className="relative w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto border-4 border-white shadow-lg overflow-hidden"
                                        style={{ background: 'linear-gradient(to bottom right, #0C55AC, #1F366A)', boxShadow: '0 10px 30px rgba(12, 85, 172, 0.3)' }}
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
                                            className="text-xl font-['Poppins'] font-medium mb-3"
                                            style={{ color: '#1F366A' }}
                                            whileHover={{ color: "#0C55AC", scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <p className="text-lg leading-relaxed font-semibold transition-colors duration-300" style={{ color: '#1F366A' }}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer scrollToSection={scrollToSection} />
            </div>
        </ReactLenis>
    );
}

