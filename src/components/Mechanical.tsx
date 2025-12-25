'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Shield, Settings, Disc, Zap, Activity, Gauge } from 'lucide-react';
import { ReactLenis } from 'lenis/react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';
import { Spotlight, SpotLightItem } from './ui/spotlight';



export default function Mechanical() {
    const [menuOpen, setMenuOpen] = useState(false);
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
            title: 'Warrant Of Fitness',
            icon: <Shield className="w-8 h-8" />,
            desc: 'Its a legal requirement to have your vehicle inspected for WOF.',
            details: ['All makes and models', 'We can collect and deliver your vehicle for you whether it is running or not', 'Loan cars available', 'We handle any type of WOF insurance claim',],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'Mechanical & Suspension',
            icon: <Settings className="w-8 h-8" />,
            desc: 'We strive to provide professional automotive Petrol & Diesel services to the commercial and private sectors Auckland Central and Wide.',
            details: ['We can perform car servicing to your  requirements', 'Auto Electrical Servic', 'Brake & Clutch Service', 'Electronic Fuel Injection (EFI)', 'Engine Diagnostics & Tune-Ups', 'Engine Repair & Rebuilding', 'Exhaust Fitting & Service', 'Fleet Servicing & Fleet Solutions'],
            image: '/mechanical_hero_1764692776650.png'
        },
        {
            title: 'Compliance Centre',
            icon: <Disc className="w-8 h-8" />,
            desc: 'We help with all vehicle compliance needs. We are 100% New Zealand owned and work with VTNZ to certify vehicles to current NZTA standards.',
            details: ['Compliance services for all cars and light commercials', 'Experienced and reliable staff', 'Same Day Service', 'Undercover and secure parking with 7 day access', 'Modern, clean workshop and equipment', 'Certificate of compliance for imported vehicles', 'AA inspections welcomed'],
            image: '/mechanical_hero_1764692776650.png'
        },
    ];

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white font-sans" style={{ color: '#B48A00' }}>
                <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

                {/* Parallax Hero */}
                <motion.section
                    ref={targetRef}
                    className="relative h-screen flex items-center justify-center overflow-hidden bg-white"
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
                            <span className="inline-block py-1 px-3 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm text-center mx-auto" style={{ backgroundColor: '#FDDD7F', borderColor: '#FDDD7F', borderWidth: '1px', color: '#B48A00' }}>
                                PREMIUM AUTOMOTIVE CARE
                            </span>
                        </ScrollReveal>

                        <ScrollReveal delay={0.4}>
                            <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-8 uppercase leading-tight tracking-tight text-white text-center mx-auto">
                                ENGINEERING
                                <span style={{ color: '#FDDD7F' }}> EXCELLENCE</span>
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
                                <button className="px-8 py-3 text-white rounded-md hover:opacity-90 transition-all duration-300 font-medium" style={{ backgroundColor: '#FDDD7F', color: '#B48A00' }}>
                                    Book Now
                                </button>
                                <button className="px-8 py-3 bg-white border rounded-md hover:opacity-80 transition-all duration-300 font-medium" style={{ borderColor: '#FDDD7F', color: '#B48A00' }}>
                                    Learn More
                                </button>
                            </div>
                        </ScrollReveal>
                    </motion.div>
                </motion.section>

                {/* Services Grid (Holographic HUD Style) */}
                <section id="services-grid" className="py-32 px-4 bg-white relative z-10 overflow-hidden">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8" style={{ borderBottom: '1px solid #FDDD7F' }}>
                                <div>
                                    <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-4" style={{ color: '#B48A00' }}>
                                        SERVICES <span style={{ color: '#FDDD7F' }}></span>
                                    </h2>
                                    <p className="text-lg max-w-xl font-semibold" style={{ color: '#B48A00' }}>
                                        Comprehensive mechanical repairs and maintenance for all makes and models.
                                    </p>
                                </div>
                                <button className="hidden md:flex items-center gap-2 hover:opacity-80 transition-colors mt-4 md:mt-0 font-medium text-sm border px-4 py-2 rounded" style={{ color: '#FDDD7F', borderColor: '#FDDD7F' }}>
                                    VIEW ALL <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </ScrollReveal>

                        <Spotlight className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <SpotLightItem className="h-[570px] rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 relative border border-[#FDDD7F]">
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
                                            <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} style={{ borderColor: '#FDDD7F' }} />
                                            <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} style={{ borderColor: '#FDDD7F' }} />
                                            <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} style={{ borderColor: '#FDDD7F' }} />
                                            <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 transition-opacity ${hoveredService === index ? 'opacity-100' : 'opacity-50'}`} style={{ borderColor: '#FDDD7F' }} />

                                            {/* Scanline Effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-[#FDDD7F]/5 to-transparent transition-transform duration-1000 ease-in-out pointer-events-none ${hoveredService === index ? 'translate-y-full' : '-translate-y-full'}`} />

                                            {/* Background gradient from logo area to bottom */}
                                            <div className={`absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-black via-black/90 to-transparent transition-opacity duration-500 ${hoveredService === index ? 'opacity-0' : 'opacity-100'}`} />

                                            <div className={`mb-4 transition-all duration-500 relative z-10 ${hoveredService === index ? 'scale-110' : ''}`} style={{ color: hoveredService === index ? '#FDDD7F' : 'white' }}>
                                                {service.icon}
                                            </div>

                                            <h3 className={`text-2xl font-['Poppins'] font-medium mb-4 transition-colors relative z-10`} style={{ color: hoveredService === index ? '#FDDD7F' : 'white' }}>
                                                {service.title}
                                            </h3>

                                            <div className={`transition-all duration-500 ease-in-out relative z-10 ${hoveredService === index ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}>
                                                <p className="text-lg mb-6 leading-relaxed font-semibold" style={{ color: '#B48A00' }}>
                                                    {service.desc}
                                                </p>

                                                <ul className="space-y-2 pt-6" style={{ borderTop: '1px solid #FDDD7F' }}>
                                                    {service.details.map((detail, i) => (
                                                        <li key={i} className="flex items-center text-sm" style={{ color: '#B48A00' }}>
                                                            <span className="mr-2" style={{ color: '#FDDD7F' }}>›</span>
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
                        <section className="h-screen w-full bg-white grid place-content-center sticky top-0 z-0" style={{ color: '#B48A00' }}>
                            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                            <h1 className='2xl:text-7xl md:text-5xl text-3xl px-8 font-["Poppins"] font-semibold text-center tracking-tight leading-[120%] relative z-10'>
                                <span style={{ color: '#FDDD7F' }}>Troubleshooter:</span> <br /> What's Wrong With My Car? 🔍
                            </h1>
                        </section>

                        {/* Sticky Grid with Images - This will cover the intro section */}
                        <section className="bg-white w-full relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Sticky Content Side */}
                                <div className="sticky top-0 h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#FDDD7F' }}>
                                    <div className="max-w-lg">
                                        <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#FDDD7F' }}>Interactive Diagnosis</p>
                                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-semibold mb-6" style={{ color: '#B48A00' }}>
                                            We Pinpoint The Problem
                                        </h2>
                                        <p className="text-lg mb-6 font-semibold leading-relaxed" style={{ color: '#B48A00' }}>
                                            Select a symptom to see potential causes and how our expert technicians can help diagnose and fix the issue.
                                        </p>
                                        <div className="grid gap-3">
                                            <div className="flex items-center gap-3" style={{ color: '#B48A00' }}>
                                                <Activity className="w-6 h-6" style={{ color: '#FDDD7F' }} />
                                                <span className="font-medium">Real-time Diagnostics</span>
                                            </div>
                                            <div className="flex items-center gap-3" style={{ color: '#B48A00' }}>
                                                <Gauge className="w-6 h-6" style={{ color: '#FDDD7F' }} />
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
                                            <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl bg-white border-2 transition-all duration-500 hover:shadow-2xl group" style={{ borderColor: '#B5B5B5' }}>
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
                                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent flex flex-col justify-end p-6">
                                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                                        <div className="mb-3 p-2 rounded-full w-fit" style={{ backgroundColor: '#FDDD7F' }}>
                                                            <div className="text-white">{symptom.icon}</div>
                                                        </div>
                                                        <h3 className="text-2xl font-['Poppins'] font-semibold text-white mb-2">{symptom.title}</h3>
                                                        <p className="text-sm mb-2" style={{ color: '#FDDD7F' }}><strong>Cause:</strong> {symptom.cause}</p>
                                                        <p className="text-sm" style={{ color: '#B48A00' }}><strong>Our Fix:</strong> {symptom.fix}</p>
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
                <section className="bg-white text-white w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-8">
                        {/* Sticky Stacking Images */}
                        <div className="grid gap-2">
                            {[
                                { src: "/mechanical_hero_1764692776650.png", alt: "Computer Diagnostics" },
                                { src: "/mechanical_hero_1764692776650.png", alt: "Engine Analysis" },
                                { src: "/mechanical_hero_1764692776650.png", alt: "Sensor Testing" },
                                { src: "/mechanical_hero_1764692776650.png", alt: "System Calibration" }
                            ].map((image, index) => (
                                <figure key={index} className="sticky top-0 h-screen grid place-content-center">
                                    <div className="relative group">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="transition-all duration-500 w-96 h-96 align-bottom object-cover rounded-md shadow-2xl border-2 border-[#FDDD7F]/30 group-hover:border-[#FDDD7F] group-hover:scale-105 group-hover:shadow-[#FDDD7F]/50"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#FDDD7F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                                    </div>
                                </figure>
                            ))}
                        </div>

                        {/* Sticky Content */}
                        <div className="sticky top-0 h-screen grid place-content-center">
                            <div className="max-w-xl">
                                <span className="inline-block py-1 px-3 rounded-full text-white text-sm font-medium mb-6 border backdrop-blur-sm" style={{ backgroundColor: '#FDDD7F', borderColor: '#FDDD7F', color: '#B48A00' }}>Advanced Technology</span>
                                <h2 className="text-5xl md:text-6xl font-['Poppins'] font-semibold mb-8 leading-tight">
                                    ADVANCED <br />
                                    <span style={{ color: '#FDDD7F' }}>DIAGNOSTICS</span>
                                </h2>
                                <p className="text-lg text-black mb-6 leading-relaxed font-medium">
                                    Modern vehicles are complex computers on wheels. We use the latest diagnostic scanning tools to communicate directly with your car's onboard systems.
                                </p>
                                <p className="text-lg text-black mb-8 leading-relaxed font-medium">
                                    Our technicians are trained to interpret complex data streams, allowing us to pinpoint issues with engine management, transmission control, and safety systems that others might miss.
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white/10 p-6 backdrop-blur rounded-lg border border-white/20">
                                        <div className="text-4xl font-['Poppins'] font-bold mb-2" style={{ color: '#FDDD7F' }}>100%</div>
                                        <div className="text-sm uppercase tracking-wider text-black">Accuracy</div>
                                    </div>
                                    <div className="bg-white/10 p-6 backdrop-blur rounded-lg border border-white/20">
                                        <div className="text-4xl font-['Poppins'] font-bold mb-2" style={{ color: '#FDDD7F' }}>Latest</div>
                                        <div className="text-sm uppercase tracking-wider text-black">Software</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Service Process Steps */}
                <section className="py-24 bg-white border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#FDDD7F' }}>How It Works</p>
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6" style={{ color: '#B48A00' }}>
                                YOUR SERVICE <span style={{ color: '#FDDD7F' }}>JOURNEY</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line with gradient animation */}
                            <motion.div
                                className="hidden md:block absolute top-12 left-0 w-full h-0.5 -z-0"
                                style={{ background: 'linear-gradient(to right, #FDDD7F, #B48A00, #FDDD7F)' }}
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
                                        style={{ background: 'linear-gradient(to bottom right, #FDDD7F, #B48A00)', boxShadow: '0 10px 30px rgba(244, 221, 127, 0.3)' }}
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
                                            style={{ color: '#B48A00' }}
                                            whileHover={{ color: "#FDDD7F", scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <p className="text-lg leading-relaxed font-semibold transition-colors duration-300" style={{ color: '#B48A00' }}>
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
