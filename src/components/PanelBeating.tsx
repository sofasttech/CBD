import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollObserver } from './ScrollObserver';
import { ScrollReveal } from './ScrollReveal';
import clsx from 'clsx';
import { ClipboardList, Wrench, Hammer, Palette, Sparkles, Activity, Gauge, Settings, Zap, Disc, Shield, ChevronRight } from 'lucide-react';
import { ReactLenis } from 'lenis/react';
import { Spotlight, SpotLightItem } from './ui/spotlight';

export default function PanelBeating() {
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
            title: 'Accident Repair',
            icon: <Shield className="w-8 h-8" />,
            shortDesc: 'Comprehensive collision repair to restore your vehicle to pre-accident condition.',
            fullDesc: 'Our accident repair service handles everything from minor fender benders to major collisions. We work directly with insurance companies, provide detailed quotes, and use genuine or quality aftermarket parts. Our computerized frame alignment ensures structural integrity is fully restored.',
            details: ['Insurance Claims Handling', 'Frame Alignment', 'Genuine Parts', 'Structural Integrity'],
            image: '/panel_beating_hero_1764692687494.png'
        },
        {
            title: 'Bumper Repair',
            icon: <Wrench className="w-8 h-8" />,
            shortDesc: 'Expert repair and replacement of damaged bumpers for all vehicle makes.',
            fullDesc: 'Whether your bumper has minor scratches, dents, or requires complete replacement, we provide expert service. We repair plastic bumpers using specialized welding techniques and can perfectly match paint finishes. Same-day service available for minor repairs.',
            details: ['Plastic Welding', 'Perfect Paint Match', 'Same-Day Service', 'All Makes & Models'],
            image: '/car-pieces.png'
        },
        {
            title: 'Chassis & Structural Repair',
            icon: <Settings className="w-8 h-8" />,
            shortDesc: 'Precision structural repairs using advanced frame alignment technology.',
            fullDesc: 'Structural damage compromises vehicle safety. Our state-of-the-art frame straightening equipment and laser measuring systems ensure your vehicle\'s chassis is restored to exact factory specifications. We handle unibody and frame-on-frame construction.',
            details: ['Laser Measuring', 'Frame Straightening', 'Factory Specs', 'Safety Certified'],
            image: '/panel_beating_hero_1764692687494.png'
        },
        {
            title: 'Curb Rash Repair',
            icon: <Disc className="w-8 h-8" />,
            shortDesc: 'Restore damaged alloy wheels to showroom condition.',
            fullDesc: 'Curb damage doesn\'t just look bad—it can affect wheel balance and tire wear. We repair gouges, scratches, and dents in alloy wheels, then refinish them to match the original appearance. Available in powder coat or diamond cut finishes.',
            details: ['Alloy Wheel Repair', 'Powder Coating', 'Diamond Cut Finish', 'Wheel Balance'],
            image: '/wheel_repair_1764693107551.png'
        },
        {
            title: 'Dent Repair',
            icon: <Hammer className="w-8 h-8" />,
            shortDesc: 'Paintless dent removal and traditional dent repair services.',
            fullDesc: 'Minor dents and dings can often be repaired without repainting using our paintless dent removal (PDR) technique. This cost-effective method maintains your original paint finish. For larger dents, we provide traditional panel beating and refinishing.',
            details: ['Paintless Dent Removal', 'No Repainting', 'Panel Beating', 'Cost-Effective'],
            image: '/dent_repair_1764693039882.png'
        },
        {
            title: 'Exterior Polishing',
            icon: <Sparkles className="w-8 h-8" />,
            shortDesc: 'Professional paint correction and polishing for a showroom shine.',
            fullDesc: 'Over time, vehicle paint develops swirl marks, oxidation, and fine scratches. Our multi-stage polishing process removes imperfections and restores depth and clarity to your paint. We offer various levels of correction from light enhancement to full paint restoration.',
            details: ['Paint Correction', 'Swirl Mark Removal', 'Multi-Stage Process', 'Showroom Finish'],
            image: '/car-polishing-tray.png'
        },
        {
            title: 'Headlight Polishing',
            icon: <Zap className="w-8 h-8" />,
            shortDesc: 'Restore cloudy, yellowed headlights for improved visibility and appearance.',
            fullDesc: 'Oxidized headlights reduce nighttime visibility and diminish your vehicle\'s appearance. Our restoration process removes the damaged outer layer, polishes the lens to clarity, and applies a UV-protective coating. Results look like new headlights at a fraction of the replacement cost.',
            details: ['UV Protection', 'Clarity Restoration', 'Cost-Effective', 'Improved Visibility'],
            image: '/headlight.webp'
        },
        {
            title: 'Paint & Refinishing',
            icon: <Palette className="w-8 h-8" />,
            shortDesc: 'Expert automotive painting with computerized color matching.',
            fullDesc: 'From single panel refinishing to complete resprays, our modern paint booth and computerized color matching system ensures perfect results. We use premium automotive paints with factory-spec clear coats for lasting durability and gloss. Waterborne paint options available.',
            details: ['Color Matching', 'Modern Paint Booth', 'Premium Paints', 'Factory Spec Clear Coat'],
            image: '/paint_booth_1764692971281.png'
        },
        {
            title: 'Panel Repair',
            icon: <ClipboardList className="w-8 h-8" />,
            shortDesc: 'Skilled repair or replacement of body panels for all vehicle types.',
            fullDesc: 'Damaged panels are carefully assessed to determine if repair or replacement is most cost-effective. Our craftsmen can reshape steel and aluminum panels back to original contours. When replacement is necessary, we source high-quality parts and ensure perfect fit and finish.',
            details: ['Steel & Aluminum', 'Perfect Fit', 'Quality Parts', 'Expert Craftsmen'],
            image: '/panel-beatt.jpg'
        },
        {
            title: 'Windscreen Removal & Installation',
            icon: <Activity className="w-8 h-8" />,
            shortDesc: 'Professional windscreen replacement with proper adhesive curing.',
            fullDesc: 'Windscreen replacement requires precision and proper technique. We use OEM-quality glass and adhesives, follow manufacturer-specified curing times, and recalibrate advanced driver assistance systems (ADAS) if equipped. Mobile service available for insurance claims.',
            details: ['OEM Quality Glass', 'ADAS Calibration', 'Mobile Service', 'Insurance Claims'],
            image: '/windscreen_repair_1764693203572.png'
        }
    ];

    const processSteps = [
        {
            title: "Assessment",
            description: "Detailed inspection and quote generation.",
            icon: ClipboardList
        },
        {
            title: "Disassembly",
            description: "Removing damaged parts for access.",
            icon: Wrench
        },
        {
            title: "Repair",
            description: "Panel beating, structural alignment, and welding.",
            icon: Hammer
        },
        {
            title: "Paint",
            description: "Color matching, painting, and clear coating.",
            icon: Palette
        },
        {
            title: "Reassembly",
            description: "Fitting parts and final quality check.",
            icon: Sparkles
        }
    ];

    return (
        <ReactLenis root>
            <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
                <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                ref={targetRef}
                className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900"
                style={{ opacity }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                    style={{ backgroundImage: "url('/panel_beating_hero_1764692687494.png')" }}
                />

                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center"
                    style={{ scale, y }}
                >
                    <ScrollReveal direction="down">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-sm font-medium mb-6 border border-blue-400 backdrop-blur-sm text-center mx-auto">
                            PREMIUM PANEL BEATING SERVICES
                        </span>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-8 uppercase leading-tight tracking-tight text-white text-center mx-auto">
                            PRECISION
                            <span className="text-blue-600"> BODY REPAIR</span> EXCELLENCE
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={0.6}>
                        <p className="text-lg text-white font-semibold max-w-3xl mx-auto leading-relaxed mb-10 text-center">
                            From minor dents to major collision repairs, our skilled panel beaters restore your vehicle to its original condition with meticulous attention to detail.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.8}>
                        <div className="flex gap-4 justify-center">
                            <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-red-600 transition-all duration-300 font-medium">
                                GET A QUOTE
                            </button>
                            <button onClick={() => scrollToSection('services-grid')} className="px-8 py-3 bg-white border border-gray-300 text-gray-900 rounded-md hover:border-gray-400 transition-all duration-300 font-medium">
                                VIEW SERVICES
                            </button>
                        </div>
                    </ScrollReveal>
                </motion.div>
            </motion.section>

            {/* Old Services Grid - Keep the scroll observer version */}
            <section className="px-4 py-16 bg-white text-black">

                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Our Services</p>
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-12">Comprehensive Panel Beating</h2>
                        <p className="text-gray-600 text-sm font-semibold mb-8 hidden md:block">Scroll down to explore</p>
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
                                                        "relative -mx-4 md:-mx-8 mb-6 md:-mb-4 rounded-2xl p-4 md:p-8 transition duration-300 md:hover:bg-blue-200"
                                                    )}
                                                >
                                                    <div className="text-blue-600 text-sm font-medium mb-2">
                                                        {String(index + 1).padStart(2, '0')}
                                                    </div>
                                                    <div className="font-['Poppins'] text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-3 md:mb-4">
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

            {/* New Holographic Services Grid */}
            <section id="services-holographic" className="py-32 px-4 bg-gray-50 relative z-10 overflow-hidden">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-blue-200 pb-8">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                    ALL <span className="text-blue-600">SERVICES</span>
                                </h2>
                                <p className="text-lg text-black max-w-xl font-semibold">
                                    Comprehensive panel beating and refinishing for all vehicle types.
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
                                                {service.fullDesc}
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
                            <span className="text-blue-600">Common Issues:</span> <br /> What We Fix Daily 🔧
                        </h1>
                    </section>

                    {/* Sticky Grid with Images */}
                    <section className="bg-white w-full relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Sticky Content Side */}
                            <div className="sticky top-0 h-screen flex items-center justify-center px-8 bg-blue-200">
                                <div className="max-w-lg">
                                    <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Expert Diagnosis</p>
                                    <h2 className="text-4xl md:text-5xl font-['Poppins'] font-semibold mb-6 text-gray-900">
                                        We Fix It Right
                                    </h2>
                                    <p className="text-lg text-gray-700 mb-6 font-semibold leading-relaxed">
                                        Browse common panel beating issues and see how our expert technicians can restore your vehicle.
                                    </p>
                                    <div className="grid gap-3">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Activity className="w-6 h-6 text-blue-600" />
                                            <span className="font-medium">Detailed Inspections</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Gauge className="w-6 h-6 text-blue-600" />
                                            <span className="font-medium">Quality Repairs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Scrolling Symptoms Side */}
                            <div className="grid gap-6 py-8 px-4">
                                {[
                                    { id: 1, icon: <Activity className="w-8 h-8" />, title: "Dents & Dings", cause: "Minor impacts, hail damage, or parking lot incidents.", fix: "Paintless dent removal or traditional panel beating.", image: "/dent_repair_1764693039882.png" },
                                    { id: 2, icon: <Disc className="w-8 h-8" />, title: "Scratches & Scuffs", cause: "Key scratches, brush damage, or contact marks.", fix: "Paint touch-up or full panel respray with color matching.", image: "/paint_booth_1764692971281.png" },
                                    { id: 3, icon: <Zap className="w-8 h-8" />, title: "Collision Damage", cause: "Vehicle accidents affecting body panels and structure.", fix: "Comprehensive repair with frame alignment if needed.", image: "/panel_beating_hero_1764692687494.png" },
                                    { id: 4, icon: <Settings className="w-8 h-8" />, title: "Rust Damage", cause: "Corrosion from moisture, salt, or age.", fix: "Rust removal, panel replacement, and protective coating.", image: "/panel-beatt.jpg" },
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
                                                        e.currentTarget.src = '/panel_beating_hero_1764692687494.png';
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
                            { src: "/paint_booth_1764692971281.png", alt: "Paint Booth" },
                            { src: "/panel_beating_hero_1764692687494.png", alt: "Panel Beating" },
                            { src: "/dent_repair_1764693039882.png", alt: "Dent Repair" },
                            { src: "/wheel_repair_1764693107551.png", alt: "Wheel Repair" }
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
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-sm font-medium mb-6 border border-blue-400 backdrop-blur-sm">State-of-the-Art Facility</span>
                            <h2 className="text-5xl md:text-6xl font-['Poppins'] font-semibold mb-8 leading-tight">
                                MODERN <br />
                                <span className="text-blue-500">EQUIPMENT</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed font-medium">
                                Our facility features the latest panel beating and refinishing equipment, ensuring precision repairs that meet manufacturer specifications.
                            </p>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-medium">
                                From computerized frame alignment to climate-controlled paint booths, we invest in technology that delivers superior results for your vehicle.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 p-6 backdrop-blur rounded-lg border border-white/20">
                                    <div className="text-4xl font-['Poppins'] font-bold mb-2 text-blue-400">30+</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-300">Years Experience</div>
                                </div>
                                <div className="bg-white/10 p-6 backdrop-blur rounded-lg border border-white/20">
                                    <div className="text-4xl font-['Poppins'] font-bold mb-2 text-blue-400">100%</div>
                                    <div className="text-sm uppercase tracking-wider text-gray-300">Guaranteed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="px-4 py-24 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">How We Work</p>
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6 text-gray-900">
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
                                    className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto border-4 border-white shadow-lg shadow-blue-600/30 overflow-hidden"
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
                                    <step.icon className="w-8 h-8 relative z-10" strokeWidth={2} />
                                </motion.div>
                                <div className="text-center">
                                    <motion.h3 
                                        className="text-xl font-['Poppins'] font-medium text-gray-900 mb-3"
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
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6">Expert Panel Beating Since 1990</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Poppins'] font-medium text-lg mb-1">Insurance Approved</h3>
                                    <p className="text-lg font-semibold text-gray-700">We work with all major insurance companies and handle claims directly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Poppins'] font-medium text-lg mb-1">Quality Guaranteed</h3>
                                    <p className="text-lg font-semibold text-gray-700">All panel beating work comes with our comprehensive 12-month warranty.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Poppins'] font-medium text-lg mb-1">Modern Equipment</h3>
                                    <p className="text-lg font-semibold text-gray-700">State-of-the-art tools including computerized frame alignment and paint matching.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-green-600 text-2xl">✓</span>
                                <div>
                                    <h3 className="font-['Poppins'] font-medium text-lg mb-1">Experienced Craftsmen</h3>
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
                        <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6">What Our Customers Say</h2>
                    </div>
                    <div className="max-w-6xl mx-auto">
                        <div className="rounded-lg overflow-hidden shadow-sm">
                            <div id="shapo-widget-65035ad084a4892e58a0"></div>
                        </div>
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
                    <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6">
                        Ready To Restore Your Vehicle?
                    </h2>
                    <p className="text-lg font-semibold mb-8 leading-relaxed">
                        Get a free quote today and experience the CBD Panelbeaters difference.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-all duration-300 font-medium">
                            REQUEST QUOTE
                        </button>
                        <button className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-all duration-300 font-medium border border-white">
                            CALL US NOW
                        </button>
                    </div>
                </div>
            </motion.section>

                <Footer scrollToSection={scrollToSection} />
            </div>
        </ReactLenis>
    );
}
