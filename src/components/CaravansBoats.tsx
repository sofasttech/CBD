import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Anchor, Hammer, ShieldCheck, Truck, Droplets, PenTool, ChevronLeft, ChevronRight, Activity, Gauge, Settings, Zap, Disc } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollReveal } from './ScrollReveal';
import { ReactLenis } from 'lenis/react';
import { Carousel, Card } from './ui/apple-cards-carousel';

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
            subtitle: 'Certified Trailer & Caravan Specialists',
            title: 'TRAVEL WITH',
            titleHighlight: 'CONFIDENCE',
            description: 'Our comprehensive safety inspections cover every critical component - from brake systems to electrical wiring. With over 20 years of experience, we ensure your caravan and trailer meet the highest safety standards for worry-free adventures across New Zealand.'
        },
        {
            image: `${CARAVAN_IMAGES_PATH}/camper-6728942_1920.jpg`,
            subtitle: '100% NZ Owned & Operated Since 2003',
            title: 'PRECISION',
            titleHighlight: 'CRAFTSMANSHIP',
            description: 'From minor adjustments to major rebuilds, our certified technicians deliver exceptional results. We specialize in WOF certifications, structural repairs, custom modifications, and complete chassis replacements using premium materials and advanced welding techniques.'
        },
        {
            image: `${CARAVAN_IMAGES_PATH}/Land Rover.jpg`,
            subtitle: 'Customer-Focused Service',
            title: 'YOUR ADVENTURE',
            titleHighlight: 'CONTINUES',
            description: 'Don\'t let repairs stop your plans! We offer complimentary loan boat trailers during servicing, fast turnaround times, and flexible scheduling. Our mobile inspection service can come to you, making professional trailer care convenient and hassle-free.'
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
            title: 'Caravan Repairs & Maintenance',
            icon: <Anchor className="w-8 h-8" />,
            desc: 'Comprehensive caravan repair services covering all components from axles to electrical systems. Our certified technicians use OEM-quality parts and follow manufacturer specifications to ensure your caravan remains safe, reliable, and roadworthy for all your adventures.',
            details: ['Complete Axle Overhaul & Replacement', 'Advanced Brake System Diagnostics', 'Drawbar Structural Repairs', 'Full Chassis Rebuilds & Reinforcement', 'Suspension Upgrades', 'Safety Chain Installation'],
            image: 'public/Caravan Images/Caravan Repairs & Maintenance.jpg'
        },
        {
            title: 'Boat Trailer Services',
            icon: <Droplets className="w-8 h-8" />,
            desc: 'Specialized boat trailer servicing designed for marine environments. We understand the unique challenges of saltwater exposure and provide corrosion-resistant solutions, comprehensive WOF inspections, and preventative maintenance to extend your trailer\'s lifespan.',
            details: ['Marine-Grade WOF Certifications', 'Wheel Bearing Repack & Replacement', 'Hydraulic Brake System Service', 'Galvanizing & Rust Prevention', 'Roller & Skid Repairs', 'Submersion-Ready Modifications'],
            image: 'public/Caravan Images/Trailer-service.webp'
        },
        {
            title: 'Custom Modifications',
            icon: <PenTool className="w-8 h-8" />,
            desc: 'Transform your trailer to perfectly match your requirements. Whether you need increased load capacity, specialized storage solutions, or unique features, our design team works with you to create practical, durable modifications that enhance functionality and value.',
            details: ['CAD Design & Engineering', 'Load Capacity Enhancement', 'Custom Storage Solutions', 'Height & Width Adjustments', 'Specialized Equipment Mounts', 'Aerodynamic Improvements'],
            image: 'public/Caravan Images/Caravan-mod.webp'
        },
        {
            title: 'Custom Trailer Fabrication',
            icon: <Hammer className="w-8 h-8" />,
            desc: 'Built from the ground up to your exact specifications. We fabricate commercial-grade and specialty trailers for unique applications - from heavy machinery transport to motorsport equipment. Every build is engineered for maximum durability and compliance.',
            details: ['Engineered Custom Designs', 'Heavy-Duty Commercial Units', 'Specialty Application Trailers', 'Multi-Axle Configurations', 'Certified Load Ratings', 'Full Compliance Documentation'],
            image: 'public/Caravan Images/trailerfab.jpg'
        },
        {
            title: 'Deck Replacement & Upgrades',
            icon: <Truck className="w-8 h-8" />,
            desc: 'Premium decking solutions using marine-grade plywood, heavy-duty truck flooring, or composite materials. We ensure proper drainage, anti-slip surfaces, and long-term protection against weather and load stresses for commercial and recreational use.',
            details: ['Marine-Grade Plywood Installation', 'Heavy-Duty Truck Decking', 'Anti-Slip Surface Treatment', 'Weather-Sealed Edge Protection', 'Load Distribution Engineering', 'Composite Deck Options'],
            image: 'public/Caravan Images/deck.webp'
        },
        {
            title: 'Professional Welding Services',
            icon: <ShieldCheck className="w-8 h-8" />,
            desc: 'Expert MIG, TIG, and arc welding for aluminum, steel, and stainless steel applications. Our certified welders deliver precision structural repairs, custom fabrication, and code-compliant welds with full penetration and proper heat treatment for maximum strength.',
            details: ['MIG & TIG Aluminum Welding', 'Structural Steel Fabrication', 'Marine-Grade Stainless Work', 'Crack Repair & Reinforcement', 'Code-Compliant Welds', 'Heat Treatment Services'],
            image: '/caravan_boat_hero_1764692888890.png'
        }
    ];

    return (
        <ReactLenis root>
            {/* Brand Colors: Primary #0C55AC, Dark #1F366A, Teal #14A0B5, Grey #B5B5B5 */}
            <div className="min-h-screen bg-white text-[#1F366A] font-['Poppins'] selection:bg-[#0C55AC] selection:text-white">
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
                                    <p className="text-[#14A0B5] text-sm font-bold uppercase tracking-[0.3em] text-center drop-shadow-lg">
                                        {heroSlides[currentSlide].subtitle}
                                    </p>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-8 leading-tight text-center">
                                    <span className="text-white drop-shadow-lg">{heroSlides[currentSlide].title}</span> <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14A0B5] to-[#0C55AC] drop-shadow-lg">{heroSlides[currentSlide].titleHighlight}</span>
                                </h1>

                                <div className="hidden md:flex justify-center">
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-white leading-relaxed font-['Poppins'] font-semibold text-lg text-center max-w-3xl drop-shadow-lg">
                                        {heroSlides[currentSlide].description}
                                    </p>
                                </div>

                                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                                    <button className="relative group bg-[#0C55AC] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition shadow-lg rounded-md">
                                        <span className="absolute left-0 top-0 h-full bg-[#1F366A] w-0 group-hover:w-full transition-all duration-300 rounded-md"></span>
                                        <span className="relative z-10">BOOK YOUR REPAIR</span>
                                    </button>
                                    <button className="relative group bg-[#1F366A] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition hover:bg-[#0C55AC] shadow-lg rounded-md border-2 border-[#14A0B5]">
                                        <span className="relative z-10">GET FREE ESTIMATE</span>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#0C55AC] hover:bg-[#1F366A] text-white p-3 rounded-full transition shadow-lg"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#0C55AC] hover:bg-[#1F366A] text-white p-3 rounded-full transition shadow-lg"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-12 bg-[#0C55AC]' : 'w-2 bg-[#B5B5B5] hover:bg-[#14A0B5]'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.section>

                {/* Services Carousel - Apple Cards */}
                <section id="services-grid" className="py-20 bg-white relative z-40 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 relative z-10 mb-16">
                        <ScrollReveal width="100%">
                            <div className="text-center flex flex-col items-center">
                                {/* Modern Badge */}
                                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#E8F4F8] border border-[#0C55AC]/20 mb-6">
                                    <span className="text-[#0C55AC] text-xs font-bold uppercase tracking-widest">EXPERT SOLUTIONS</span>
                                </div>

                                {/* Heading */}
                                <h2 className="text-5xl md:text-7xl font-['Poppins'] font-bold mb-6 text-center">
                                    <span className="text-[#1F366A]">Our </span>
                                    <span className="text-[#0C55AC]">Services</span>
                                </h2>

                                {/* Description */}
                                <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto font-normal leading-relaxed mb-3 text-center">
                                    From precision repairs to custom fabrication—delivering comprehensive solutions for{' '}
                                    <span className="text-[#0C55AC] font-semibold">trailers</span>,{' '}
                                    <span className="text-[#0C55AC] font-semibold">caravans</span>, and{' '}
                                    <span className="text-[#0C55AC] font-semibold">boat trailers</span>{' '}
                                    with certified expertise.
                                </p>

                                {/* Subtitle */}
                                <p className="text-sm text-gray-500 mt-3 font-normal text-center">
                                    ✨ Swipe through our services • Click to explore details
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <Carousel items={services.map((service, index) => (
                        <Card
                            key={index}
                            card={{
                                src: service.image,
                                title: service.title,
                                category: "",
                                content: (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-3 rounded-full bg-[#0C55AC]/10 text-[#0C55AC]">
                                                {service.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-[#14A0B5] font-bold uppercase tracking-widest">Certified Service Specialist</p>
                                            </div>
                                        </div>

                                        <p className="text-lg text-gray-700 leading-relaxed font-['Poppins']">
                                            {service.desc}
                                        </p>

                                        <div className="border-t border-gray-200 pt-6">
                                            <h4 className="text-lg font-['Poppins'] font-semibold text-[#1F366A] mb-4">What We Offer:</h4>
                                            <ul className="grid md:grid-cols-2 gap-3">
                                                {service.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start text-gray-700">
                                                        <div className="w-2 h-2 bg-[#14A0B5] rounded-full mt-2 mr-3 flex-shrink-0" />
                                                        <span className="text-sm">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-r from-[#0C55AC]/10 to-[#14A0B5]/10 p-6 rounded-lg mt-6">
                                            <p className="text-[#1F366A] font-['Poppins'] font-semibold text-center">
                                                🔧 Expert technicians with 20+ years of experience
                                            </p>
                                        </div>
                                    </div>
                                ),
                            }}
                            index={index}
                        />
                    ))} />
                </section>

                {/* Statistics & Trust Section */}
                <section className="py-20 bg-[#1F366A] relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0C55AC] via-[#14A0B5] to-[#0C55AC]"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNEEwQjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02em0xMi0xMnY2aDZ2LTZoLTZ6bTAtMTJ2Nmg2VjEwaC02em0wIDEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <ScrollReveal delay={0}>
                                <div className="p-6">
                                    <div className="text-5xl md:text-6xl font-['Poppins'] font-bold text-[#14A0B5] mb-2">20+</div>
                                    <div className="text-white font-medium uppercase tracking-wider text-sm">Years Experience</div>
                                    <p className="text-[#B5B5B5] text-xs mt-2">Serving NZ since 2003</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <div className="p-6">
                                    <div className="text-5xl md:text-6xl font-['Poppins'] font-bold text-[#14A0B5] mb-2">5000+</div>
                                    <div className="text-white font-medium uppercase tracking-wider text-sm">Trailers Serviced</div>
                                    <p className="text-[#B5B5B5] text-xs mt-2">Commercial & domestic</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <div className="p-6">
                                    <div className="text-5xl md:text-6xl font-['Poppins'] font-bold text-[#14A0B5] mb-2">100%</div>
                                    <div className="text-white font-medium uppercase tracking-wider text-sm">NZ Owned</div>
                                    <p className="text-[#B5B5B5] text-xs mt-2">Local family business</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <div className="p-6">
                                    <div className="text-5xl md:text-6xl font-['Poppins'] font-bold text-[#14A0B5] mb-2">4.9★</div>
                                    <div className="text-white font-medium uppercase tracking-wider text-sm">Customer Rating</div>
                                    <p className="text-[#B5B5B5] text-xs mt-2">Based on 200+ reviews</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 pt-8 border-t border-[#14A0B5]/30">
                            <div className="flex flex-wrap justify-center items-center gap-8 text-[#B5B5B5]">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#14A0B5]" />
                                    <span className="text-sm font-medium">WOF Certified</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#14A0B5]" />
                                    <span className="text-sm font-medium">Fully Insured</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#14A0B5]" />
                                    <span className="text-sm font-medium">Warranty Backed</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#14A0B5]" />
                                    <span className="text-sm font-medium">Free Quotes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Troubleshooter - Sticky Scroll Pattern */}
                <section className="bg-white">
                    <div className="wrapper">
                        {/* Intro Section */}
                        <section className="text-[#1F366A] h-screen w-full bg-white grid place-content-center sticky top-0 z-0">
                            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#B5B5B5_1px,transparent_1px),linear-gradient(to_bottom,#B5B5B5_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40'></div>
                            <h1 className='2xl:text-7xl md:text-5xl text-3xl px-8 font-["Poppins"] font-semibold text-center tracking-tight leading-[120%] relative z-10'>
                                <span className="text-[#0C55AC]">Troubleshooter:</span> <br /> Common Trailer & Caravan Issues 🔍
                            </h1>
                        </section>

                        {/* Sticky Grid with Images */}
                        <section className="bg-white w-full relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Sticky Content Side */}
                                <div className="sticky top-0 h-screen flex items-center justify-center px-8 bg-gradient-to-br from-[#14A0B5]/20 to-[#0C55AC]/10">
                                    <div className="max-w-lg">
                                        <p className="text-[#14A0B5] text-sm font-medium uppercase tracking-wide mb-4">Interactive Diagnosis</p>
                                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-semibold mb-6 text-[#1F366A]">
                                            We Identify The Issue
                                        </h2>
                                        <p className="text-lg text-[#1F366A] mb-6 font-semibold leading-relaxed">
                                            Select a symptom to see potential causes and how our expert technicians can help diagnose and fix the issue.
                                        </p>
                                        <div className="grid gap-3">
                                            <div className="flex items-center gap-3 text-[#1F366A]">
                                                <Activity className="w-6 h-6 text-[#0C55AC]" />
                                                <span className="font-medium">Comprehensive Safety Inspections</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-[#1F366A]">
                                                <Gauge className="w-6 h-6 text-[#0C55AC]" />
                                                <span className="font-medium">Expert Repair Solutions</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scrolling Symptoms Side */}
                                <div className="grid gap-6 py-8 px-4">
                                    {[
                                        { id: 1, icon: <Activity className="w-8 h-8" />, title: "Brake Problems", cause: "Worn brake pads, rusted drums, air in hydraulic lines, or corroded calipers from saltwater exposure.", fix: "Complete brake system overhaul including pad/shoe replacement, drum resurfacing, hydraulic line bleeding, caliper rebuild, and corrosion treatment with marine-grade protection.", image: "public/Caravan Images/Braking-Issues.jpg" },
                                        { id: 2, icon: <Disc className="w-8 h-8" />, title: "Bearing Failure", cause: "Inadequate lubrication, water ingress from boat ramp submersion, excessive loads, or wear from high mileage.", fix: "Professional bearing removal, inspection of races and hubs, repacking with marine-grade grease, seal replacement, and proper torque specification to manufacturer standards.", image: "public/Caravan Images/bearing.jpg" },
                                        { id: 3, icon: <Zap className="w-8 h-8" />, title: "Electrical Faults", cause: "Corroded connectors, damaged wiring harness, blown fuses, faulty LED lights, or grounding issues.", fix: "Comprehensive electrical diagnostics using multimeter testing, wiring harness replacement, connector cleaning and sealing, light fixture upgrades, and proper ground connection establishment.", image: "public/Caravan Images/feature-image-car-electrical-issues.jpg" },
                                        { id: 4, icon: <Settings className="w-8 h-8" />, title: "Coupling Wear", cause: "Worn coupling ball, stretched safety chains, damaged jockey wheel, or deteriorated handbrake mechanism.", fix: "Coupling ball replacement to correct size specification, safety chain inspection and renewal, jockey wheel bearing service, handbrake cable adjustment or replacement, and full hitch mechanism lubrication.", image: "public/Caravan Images/coupling.webp" },
                                    ].map((symptom, index) => (
                                        <div
                                            key={symptom.id}
                                            className={`flex justify-center ${index % 2 === 0 ? '-skew-x-3' : 'skew-x-3'}`}
                                        >
                                            <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-xl bg-[#1F366A] border-2 border-[#B5B5B5]/30 hover:border-[#14A0B5] transition-all duration-500 hover:shadow-2xl group">
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
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1F366A] via-[#1F366A]/70 to-transparent flex flex-col justify-end p-6">
                                                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                                        <div className="mb-3 p-2 bg-[#0C55AC] rounded-full w-fit">
                                                            <div className="text-white">{symptom.icon}</div>
                                                        </div>
                                                        <h3 className="text-2xl font-['Poppins'] font-semibold text-white mb-2">{symptom.title}</h3>
                                                        <p className="text-sm text-[#14A0B5] mb-2"><strong>Cause:</strong> {symptom.cause}</p>
                                                        <p className="text-sm text-[#B5B5B5]"><strong className="text-[#14A0B5]">Our Fix:</strong> {symptom.fix}</p>
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

                {/* Thorough Safety Checks - Bento Grid Layout */}
                <section className="py-32 px-4 relative overflow-hidden bg-[#1F366A]">
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
                                    Expert Inspection
                                </motion.span>
                                <h2 className="text-5xl md:text-7xl font-['Poppins'] font-black mb-6 text-white uppercase tracking-tight">
                                    THOROUGH <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #14A0B5, #FDDD7F)' }}>SAFETY CHECKS</span>
                                </h2>
                                <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium">
                                    Comprehensive 50-point inspections for complete peace of mind
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
                                        src="public/Caravan Images/50.jpg"
                                        alt="Trailer Inspection"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#14A0B5', color: '#000' }}>
                                            PREMIUM FEATURE
                                        </div>
                                        <h3 className="text-3xl font-['Poppins'] font-black text-white mb-3">
                                            50-Point Safety Inspection
                                        </h3>
                                        <p className="text-white/90 font-medium leading-relaxed">
                                            Comprehensive inspection covering structural integrity, brake systems, electrical wiring, suspension, wheel bearings, and more.
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
                                <ShieldCheck className="w-12 h-12 mb-4" style={{ color: '#FDDD7F' }} />
                                <div className="text-5xl font-['Poppins'] font-black mb-2 text-white">100%</div>
                                <div className="text-sm uppercase tracking-wider font-bold" style={{ color: '#14A0B5' }}>Safety First</div>
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
                                <Activity className="w-12 h-12 mb-4" style={{ color: '#FDDD7F' }} />
                                <div className="text-5xl font-['Poppins'] font-black mb-2 text-white">Expert</div>
                                <div className="text-sm uppercase tracking-wider font-bold" style={{ color: '#14A0B5' }}>Technicians</div>
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
                                        src="public/Caravan Images/StructuralAnalysis.jpg"
                                        alt="Structural Analysis"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-['Poppins'] font-bold text-white">Structural Analysis</h4>
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
                                        src="public/Caravan Images/Safety Testing.jpg"
                                        alt="Safety Testing"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-['Poppins'] font-bold text-white">Safety Testing</h4>
                                    </div>
                                </div>
                            </motion.div>

                            {/* New Card - Custom Fabrication */}
                            <motion.div
                                className="md:col-span-2 relative group overflow-hidden rounded-3xl border-2 border-white/20"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.45 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-full min-h-[280px] overflow-hidden">
                                    <img
                                        src="/public/Caravan Images/trailerfab.jpg"
                                        alt="Custom Fabrication"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => { (e.target as HTMLImageElement).src = '/caravan_boat_hero_1764692888890.png' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex items-center">
                                        <div className="max-w-md">
                                            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#14A0B5', color: '#000' }}>
                                                BESPOKE BUILD
                                            </div>
                                            <h4 className="text-2xl font-['Poppins'] font-black text-white mb-3">Custom Trailer Fabrication</h4>
                                            <p className="text-white/90 font-medium">Built from the ground up to your exact specifications. We fabricate commercial-grade and specialty trailers.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Image Card 3 - Spans 2 columns */}
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
                                        src="public/Caravan Images/hands-pointing-bar-chart-close-up.jpg"
                                        alt="Component Calibration"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex items-center">
                                        <div className="max-w-md">
                                            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#FDDD7F', color: '#000' }}>
                                                SPECIALIZED
                                            </div>
                                            <h4 className="text-2xl font-['Poppins'] font-black text-white mb-3">Component Calibration</h4>
                                            <p className="text-white/90 font-medium">Advanced diagnostics with photo documentation and detailed reports</p>
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
                                    <Gauge className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Brake System Analysis</h4>
                                    <p className="text-white/70 text-sm">Comprehensive testing of hydraulic and mechanical brake components</p>
                                </motion.div>
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Zap className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Electrical Diagnostics</h4>
                                    <p className="text-white/70 text-sm">Full wiring inspection and electrical system testing</p>
                                </motion.div>
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Settings className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Structural Integrity</h4>
                                    <p className="text-white/70 text-sm">Detailed chassis, suspension, and coupling inspections</p>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Feature Section: Loan Trailer */}
                <section className="py-24 bg-gradient-to-br from-[#14A0B5]/10 via-white to-[#0C55AC]/5 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#14A0B5]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0C55AC]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1 relative">
                                <ScrollReveal direction="right">
                                    <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-[#14A0B5]/20">
                                        <img src="public/Caravan Images/boats.webp" alt="Loan Trailer" className="w-full h-auto hover:scale-105 transition-all duration-500" />
                                        {/* Overlay Badge */}
                                        <div className="absolute top-4 left-4 bg-[#0C55AC] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            FREE SERVICE
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="order-1 md:order-2">
                                <ScrollReveal>
                                    <p className="text-[#14A0B5] text-sm font-medium uppercase tracking-wide mb-4 text-center md:text-left">Trailer Inspection, Repairs & Servicing</p>
                                    <h2 className="text-4xl md:text-5xl font-['Poppins'] font-medium mb-8 leading-tight text-[#1F366A] text-center md:text-left">
                                        FREE LOAN <br />
                                        <span className="text-[#0C55AC]">BOAT TRAILER</span>
                                    </h2>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2}>
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-[#1F366A] leading-relaxed font-['Poppins'] font-semibold text-lg text-center md:text-left mb-6">
                                        We understand that downtime means missed fishing trips, delayed deliveries, or postponed family adventures. That's why we prioritize fast turnaround times without compromising on quality workmanship or safety standards.
                                    </p>
                                    <div className="p-6 bg-white border-l-4 border-[#0C55AC] mb-6 shadow-md">
                                        <p style={{ wordSpacing: '-0.08rem' }} className="text-[#1F366A] leading-relaxed font-['Poppins'] font-semibold text-lg italic text-center md:text-left">
                                            "We provide complimentary loan boat trailers (subject to availability) while we service or repair yours. Our courtesy trailers are regularly maintained, WOF certified, and suitable for most standard boat configurations up to 6 meters."
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#14A0B5] rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-[#1F366A] mb-1">Fast Service</h4>
                                                <p className="text-sm text-[#B5B5B5]">Most repairs completed within 24-48 hours</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#14A0B5] rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-[#1F366A] mb-1">Mobile Service</h4>
                                                <p className="text-sm text-[#B5B5B5]">On-site inspections available in Auckland region</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#14A0B5] rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-[#1F366A] mb-1">After-Hours Drop-off</h4>
                                                <p className="text-sm text-[#B5B5B5]">Secure drop-off area for your convenience</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#14A0B5] rounded-full mt-2"></div>
                                            <div>
                                                <h4 className="font-semibold text-[#1F366A] mb-1">Warranty Backed</h4>
                                                <p className="text-sm text-[#B5B5B5]">All repairs covered by comprehensive warranty</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.4}>
                                    <div className="flex justify-center md:justify-start">
                                        <button className="relative group bg-[#0C55AC] text-white px-8 py-3 font-['Poppins'] font-medium transition rounded-md">
                                            <span className="absolute left-0 top-0 h-full bg-[#1F366A] w-0 group-hover:w-full transition-all duration-300 rounded-md"></span>
                                            <span className="relative z-10">ENQUIRE NOW</span>
                                        </button>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Process Steps */}
                <section className="py-24 bg-gradient-to-b from-white via-[#14A0B5]/5 to-white border-t border-[#B5B5B5]/30 relative overflow-hidden">
                    {/* Decorative Element */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#0C55AC]/5 rounded-full blur-3xl"></div>
                    <div className="absolute left-0 bottom-0 w-48 h-48 bg-[#14A0B5]/5 rounded-full blur-2xl"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <p className="text-[#14A0B5] text-sm font-medium uppercase tracking-wide mb-4">How It Works</p>
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6 text-[#1F366A]">
                                YOUR SERVICE <span className="text-[#0C55AC]">JOURNEY</span>
                            </h2>
                            <p className="text-[#B5B5B5] max-w-2xl mx-auto text-lg">
                                From first contact to final inspection, we make the repair process simple, transparent, and stress-free.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line with gradient animation */}
                            <motion.div
                                className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[#0C55AC] via-[#14A0B5] to-[#0C55AC] -z-0"
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileInView={{ scaleX: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                            />

                            {[
                                { step: "01", title: "Contact & Inspect", desc: "Call, email, or visit us for a free initial consultation. Our technicians conduct a thorough visual and mechanical inspection." },
                                { step: "02", title: "Detailed Quote", desc: "Receive a comprehensive, itemized quote with no hidden costs. We explain each repair and answer all your questions." },
                                { step: "03", title: "Expert Repair", desc: "Our certified technicians use premium OEM-quality parts and advanced equipment for quality repairs." },
                                { step: "04", title: "Quality Assurance", desc: "Every completed job undergoes rigorous safety testing and road-readiness verification." }
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
                                        className="relative w-16 h-16 bg-gradient-to-br from-[#0C55AC] to-[#1F366A] rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6 mx-auto border-4 border-white shadow-lg shadow-[#0C55AC]/30 overflow-hidden"
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
                                            boxShadow: "0 20px 60px rgba(12, 85, 172, 0.4)",
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
                                            className="text-xl font-['Poppins'] font-medium text-[#1F366A] mb-3"
                                            whileHover={{ color: "#0C55AC", scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {item.title}
                                        </motion.h3>
                                        <p className="text-lg text-[#B5B5B5] leading-relaxed font-semibold group-hover:text-[#1F366A] transition-colors duration-300">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-16 w-full flex flex-col items-center justify-center">
                            <ScrollReveal>
                                {/* Why Choose Us Grid */}
                                <div className="grid md:grid-cols-3 gap-8 mb-16 w-full max-w-6xl mx-auto px-4">
                                    {[
                                        {
                                            title: "Expert Technicians",
                                            desc: "Certified professionals with 20+ years of hands-on trailer and caravan experience.",
                                            Icon: Anchor,
                                            gradient: "from-[#0C55AC] to-[#1F366A]",
                                            iconColor: "text-[#0C55AC]"
                                        },
                                        {
                                            title: "Quality Guaranteed",
                                            desc: "All repairs backed by comprehensive warranty using OEM-quality parts.",
                                            Icon: ShieldCheck,
                                            gradient: "from-[#14A0B5] to-[#0C55AC]",
                                            iconColor: "text-[#14A0B5]"
                                        },
                                        {
                                            title: "Fast Turnaround",
                                            desc: "Most repairs completed within 24-48 hours with free loan trailers available.",
                                            Icon: Truck,
                                            gradient: "from-[#1F366A] to-[#14A0B5]",
                                            iconColor: "text-[#1F366A]"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="group relative p-8 rounded-3xl bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-15px_rgba(12,85,172,0.3)] border border-gray-100 overflow-hidden transition-all duration-500"
                                            whileHover={{ y: -5 }}
                                        >
                                            {/* Permanent Gradient Background */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                                            <div className="relative z-10 flex flex-col items-center">
                                                {/* Icon Container - Always White */}
                                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110">
                                                    <item.Icon className={`w-8 h-8 ${item.iconColor}`} />
                                                </div>

                                                <h4 className="text-xl font-['Poppins'] font-bold text-white mb-3">
                                                    {item.title}
                                                </h4>

                                                <p className="text-white/90 text-center text-sm leading-relaxed font-medium">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="w-full flex flex-col items-center justify-center text-center px-4">
                                    <h3 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase text-[#1F366A] mb-6">
                                        READY FOR YOUR NEXT ADVENTURE?
                                    </h3>
                                    <p style={{ wordSpacing: '-0.08rem' }} className="text-[#1F366A] mb-10 leading-relaxed font-['Poppins'] font-semibold text-lg max-w-3xl">
                                        Don't risk safety or miss out on precious travel time. Get your trailer or caravan professionally serviced before your next journey. Contact us today for expert advice and transparent pricing.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                        <button className="relative group bg-[#0C55AC] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition rounded-md overflow-hidden">
                                            <span className="absolute left-0 top-0 h-full bg-[#1F366A] w-0 group-hover:w-full transition-all duration-300"></span>
                                            <span className="relative z-10">BOOK YOUR REPAIR</span>
                                        </button>
                                        <button className="relative group bg-[#1F366A] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition rounded-md border-2 border-[#14A0B5] overflow-hidden">
                                            <span className="absolute left-0 top-0 h-full bg-[#0C55AC] w-0 group-hover:w-full transition-all duration-300"></span>
                                            <span className="relative z-10">GET FREE ESTIMATE</span>
                                        </button>
                                    </div>
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
