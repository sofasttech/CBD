import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import { ScrollObserver } from './ScrollObserver';
import { ScrollReveal } from './ScrollReveal';
import clsx from 'clsx';
import { ClipboardList, Wrench, Hammer, Palette, Sparkles, Activity, Gauge, Settings, Zap, Disc, Shield, ChevronRight } from 'lucide-react';
import { ReactLenis } from 'lenis/react';


export default function PanelBeating() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<number | null>(null);
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

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (activeModal !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    // Inject Shapo widget script dynamically
    // Force reload/re-execution of the script to ensure it finds the new DOM element on route changes
    useEffect(() => {
        const existingScript = document.getElementById('shapo-embed-js');
        if (existingScript) {
            existingScript.remove();
        }

        const s = document.createElement('script');
        s.id = 'shapo-embed-js';
        s.type = 'text/javascript';
        s.src = 'https://cdn.shapo.io/js/embed.js';
        s.defer = true;
        document.body.appendChild(s);
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
            details: ['Structural and chassis realignment', 'Panel straightening and replacement', 'Bumper, guard, door, and side-impact repairs', 'Sensor and safety system checks and recalibration', 'High-quality paint refinishing and blending', 'Insurance-approved repair processes'],
            image: 'public/Home Page Images/Accident repair.jpg',
            learnMore: 'Our accident repair service is designed to restore your vehicle safely, accurately, and efficiently after any type of collision. From minor fender benders to major structural damage, our team has the expertise and equipment to bring your car back to its best condition.\n\nWe work directly with insurance companies to streamline the process and reduce stress for our customers. Our team provides clear, detailed quotes and explains repair options so you understand exactly what your vehicle needs. Depending on the job, we use either genuine manufacturer parts or high-quality aftermarket components that meet strict safety and performance standards.\n\nTo ensure your vehicle\'s safety is never compromised, we use computerised frame and chassis alignment systems. This technology allows us to measure and correct even the slightest structural deviations, ensuring the vehicle is restored to factory specifications. Our certified panel beaters then carry out precise body repairs, followed by professional refinishing to achieve a seamless paint match.\n\nNo matter the extent of the damage, we focus on quality, safety, and long-lasting results. Your vehicle will leave our workshop looking great and performing the way it should, giving you confidence every time you get back on the road.'
        },
        {
            title: 'Bumper Repair',
            icon: <Wrench className="w-8 h-8" />,
            shortDesc: 'Expert repair and replacement of damaged bumpers for all vehicle makes.',
            fullDesc: 'Whether your bumper has minor scratches, dents, or requires complete replacement, we provide expert service. We repair plastic bumpers using specialised welding techniques and can perfectly match paint finishes. Same-day service available for minor repairs.',
            details: ['Scratch, Dent, and Scuff Removal', 'Plastic Bumper Welding and Reshaping', 'Corner and Split Repairs', 'Full Bumper Replacement', 'High-Quality Paint Refinishing', 'Same-Day Turnaround Available'],
            image: 'public/Home Page Images/Bumper Repair.jpg',
            learnMore: 'Your vehicle\'s bumper is one of the most common areas to suffer damage, whether from a small parking scrape or a more noticeable impact. Our bumper repair service covers everything from light cosmetic touch-ups to full bumper replacement, ensuring your vehicle looks clean, sharp, and professionally restored.\n\nWe handle all types of bumper damage, including scratches, dents, cracks, scuffs, and paint imperfections. For plastic bumpers, our team uses specialised plastic welding and reshaping techniques to restore the original form without compromising strength. This approach often saves time and cost compared to full replacement.\n\nOnce the bumper is structurally sound, our painters complete the job with precise colour matching using advanced paint-matching technology. This allows us to blend new paint seamlessly with your existing finish, ensuring the repaired area is virtually undetectable.\n\nWhether you need a quick tidy-up or a complete bumper restoration, we focus on delivering a smooth, strong, and flawless finish that keeps your vehicle looking its best.'
        },
        {
            title: 'Chassis & Structural Repair',
            icon: <Settings className="w-8 h-8" />,
            shortDesc: 'Precision structural repairs using advanced frame alignment technology.',
            fullDesc: 'Structural damage compromises vehicle safety. Our state-of-the-art frame straightening equipment and laser measuring systems ensure your vehicle\'s chassis is restored to exact factory specifications. We handle unibody and frame-on-frame construction.',
            details: ['Laser Measuring Technology', 'Computerised Frame Straightening', 'Unibody and Frame-on-Frame Repair', 'Suspension Mounting Point Verification', 'Post-Repair Alignment Checks', 'Safety and Body Fitment Verification'],
            image: 'public/Home Page Images/Chassis and structural repair.jpg',
            learnMore: 'Structural damage affects far more than a vehicle\'s appearance — it directly impacts safety, stability, and long-term performance. Our chassis and structural repair service is designed to restore your vehicle\'s strength and alignment with absolute accuracy after an accident.\n\nWe use state-of-the-art frame straightening equipment and advanced laser measuring systems to assess and realign the chassis to exact factory specifications. These tools allow us to detect even the smallest deviations that may not be visible to the eye but can significantly affect safety systems, wheel alignment, panel fitment, and overall drivability.\n\nOur technicians are trained to work with both unibody and frame-on-frame vehicle constructions, ensuring the right method is applied for each repair. Whether your vehicle has sustained front-end, side-impact, rear, or underbody structural damage, we follow strict repair procedures to return its integrity and strength.\n\nOnce the structural work is complete, we coordinate with our panel, painting, and mechanical teams to ensure the vehicle is fully restored in terms of appearance, performance, and safety.\n\nWhen your vehicle\'s structure is compromised, precision repair is critical. Our goal is to ensure your car is solid, safe, and ready for the road with complete confidence.'
        },
        {
            title: 'Curb Rash Repair',
            icon: <Disc className="w-8 h-8" />,
            shortDesc: 'Restore damaged alloy wheels to showroom condition.',
            fullDesc: 'Curb damage doesn\'t just look bad — it can affect wheel balance and tyre wear. We repair gouges, scratches, and dents in alloy wheels, then refinish them to match the original appearance. Available in powder coat or diamond cut finishes.',
            details: ['Scratch and Gouge Removal', 'Wheel Edge Reshaping', 'Cosmetic Restoration for Alloy Wheels', 'Colour Matching to Original Finish', 'Powder Coating or Diamond-Cut Options', 'Final Balancing for Smooth Driving'],
            image: '/wheel_repair_1764693107551.png',
            learnMore: 'Curb rash may seem like a minor cosmetic issue, but damage to your wheels can affect more than just appearance. Scratches, gouges, and edge damage can lead to wheel imbalance, uneven tyre wear, vibration while driving, and long-term weakening of the rim. Our curb rash repair service restores both the look and the performance of your alloy wheels with professional precision.\n\nWe repair all types of curb damage, including scuffs, dents, deep scratches, chipped edges, and minor deformation. Our technicians reshape the damaged area, smooth imperfections, and rebuild the wheel\'s surface to ensure proper balance and structural integrity. Once the wheel is restored, we refinish it to match the original style and colour, creating a seamless factory-quality appearance.\n\nYou can choose from powder coat, standard painted, or diamond-cut finishes, depending on your wheel type and preferred look. Each option is applied using controlled processes that ensure durability, shine, and long-lasting protection.\n\nWhether your wheel has suffered a light scuff or a deeper scrape, we bring it back to a clean, sharp finish while maintaining safe performance. Your wheels will look new again, and your vehicle will drive better as well.'
        },
        {
            title: 'Dent Repair',
            icon: <Hammer className="w-8 h-8" />,
            shortDesc: 'Paintless dent removal and traditional dent repair services.',
            fullDesc: 'Minor dents and dings can often be repaired without repainting using our paintless dent removal (PDR) technique. This cost-effective method maintains your original paint finish. For larger dents, we offer traditional panel beating and refinishing services.',
            details: ['Paintless Dent Removal (PDR)', 'Traditional Panel Beating', 'Colour-Matched Refinishing', 'Hail Damage Repair', 'Car-Park Dent and Door-Ding Repair', 'Panel Reshaping and Surface Correction'],
            image: '/dent_repair_1764693039882.png',
            learnMore: 'Even small dents and dings can take away from the appearance of your vehicle. Our dent repair service is designed to restore your panels quickly, cleanly, and with the right method for each type of damage.\n\nFor minor dents, we use Paintless Dent Removal (PDR), a specialised technique that allows our technicians to massage the dent out from behind the panel without disturbing the paint. This method is ideal for car-park dents, hail damage, and small impacts where the paint surface is still intact. PDR is fast, cost-effective, and maintains your original factory finish, making it one of the best solutions for light cosmetic damage.\n\nWhen dents are deeper, creased, or have cracked paint, our team offers traditional panel beating and refinishing. This involves reshaping the metal, preparing the surface, and repainting the affected area using high-quality colour-matching systems. We ensure that the new finish blends seamlessly with the surrounding panels for a smooth, unified result.\n\nWhether the damage is small or more noticeable, we choose the right approach to restore your vehicle\'s appearance and value. Your car is returned looking smooth, clean, and professionally finished.'
        },
        {
            title: 'Exterior Polishing',
            icon: <Sparkles className="w-8 h-8" />,
            shortDesc: 'Professional paint correction and polishing for a showroom shine.',
            fullDesc: 'Over time, vehicle paint develops swirl marks, oxidation, and fine scratches. Our multi-stage polishing process removes imperfections and restores depth and clarity to your paint. We offer a range of correction services, from light enhancement to full paint restoration.',
            details: ['Swirl Mark and Oxidation Removal', 'Multi-Stage Machine Polishing', 'Paint Decontamination', 'Gloss Enhancement', 'Heavy Correction for Ageing Paint', 'Optional Wax, Sealant, or Ceramic Protection'],
            image: '/car-polishing-tray.png',
            learnMore: 'Your vehicle\'s paint is constantly exposed to the sun, weather, dust, and everyday wear. Over time, this leads to swirl marks, dull patches, oxidation, and fine scratches that reduce the shine and clarity of your paint. Our exterior polishing service is designed to rejuvenate your vehicle\'s finish and restore a deep, glossy appearance.\n\nWe use a multi-stage polishing process that safely removes surface imperfections while enhancing the overall condition of the paint. Our technicians carefully assess the paintwork before selecting the appropriate polishing compounds, pads, and machine techniques. This ensures the best possible result without compromising the integrity of the clear coat.\n\nWhether your car needs a light enhancement or a full paint correction, we tailor the service to suit the level of restoration required.\n\nThe result is a smoother, brighter, and more polished surface that not only looks great but also helps protect your paint from future wear. Whether preparing your vehicle for sale or simply wanting it to look its best, our polishing service brings out a crisp, like-new shine.'
        },
        {
            title: 'Headlight Polishing',
            icon: <Zap className="w-8 h-8" />,
            shortDesc: 'Restore cloudy, yellowed headlights for improved visibility and appearance.',
            fullDesc: 'Oxidised headlights reduce nighttime visibility and diminish your vehicle\'s appearance. Our restoration process involves removing the damaged outer layer, polishing the lens to a high level of clarity, and applying a UV-protective coating. Results look like new headlights at a fraction of the replacement cost.',
            details: ['Oxidation and Yellowing Removal', 'Multi-Stage Sanding and Polishing', 'Brightness and Beam Restoration', 'UV-Protective Sealant Application', 'Cost-Effective Alternative to Replacement', 'Brand-New Appearance'],
            image: '/headlight.webp',
            learnMore: 'Cloudy or oxidised headlights do more than affect the look of your vehicle — they significantly reduce nighttime visibility and compromise safety. Sun exposure, road debris, and ageing cause the outer layer of the headlight lens to become dull, yellowed, or hazy. Our headlight polishing service restores clarity, brightness, and a clean, modern appearance without the cost of replacing the entire unit.\n\nWe use a professional multi-step restoration process that carefully removes the damaged outer layer, smooths the lens, and polishes it to a clear finish. This restores sharp light output and enhances visibility, both in terms of distance and clarity, on the road.\n\nTo ensure long-lasting results, we apply a UV-protective coating that shields the lens from future sun damage and slows down the oxidation process.\n\nClear, bright headlights are essential for safety and appearance. Our restoration service brings your headlights back to life, improving visibility, enhancing your vehicle\'s look, and saving you money compared to full replacement.'
        },
        {
            title: 'Paint & Refinishing',
            icon: <Palette className="w-8 h-8" />,
            shortDesc: 'Expert automotive painting with computerised colour matching.',
            fullDesc: 'From single panel refinishing to complete resprays, our modern paint booth and computerised colour matching system ensure perfect results. We use premium automotive paints with factory-spec clear coats for lasting durability and gloss. Waterborne paint options are available.',
            details: ['Single-Panel Repainting and Blending', 'Full Vehicle Resprays', 'Computerised Colour Matching', 'High-Quality Base and Clear Coat', 'Waterborne Paint Options', 'Final Polishing for Smooth Finish'],
            image: '/paint_booth_1764692971281.png',
            learnMore: 'A flawless paint finish brings your vehicle back to life, whether you\'re refreshing a single panel or completing a full respray. Our paint and refinishing service combines skilled craftsmanship with modern technology to deliver smooth, accurate, and long-lasting results.\n\nWe operate a fully equipped modern paint booth designed to keep dust, moisture, and contaminants away from your vehicle during the painting process. This controlled environment, combined with our computerised colour-matching system, allows us to match your original paint with exceptional accuracy, ensuring repaired panels blend seamlessly with the rest of the car.\n\nWe use premium automotive paints and factory-spec clear coats that provide strong protection against UV rays, weather, and everyday wear. These products are chosen for their durability, gloss retention, and ability to maintain a fresh, high-quality finish over time. For customers who prefer environmentally friendly options, we also offer waterborne paint systems that meet modern standards without compromising on finish quality.\n\nWhether you\'re repairing accident damage, refreshing an ageing finish, or changing the look of your car, our team delivers a clean, durable, showroom-quality result every time.'
        },
        {
            title: 'Panel Repair',
            icon: <ClipboardList className="w-8 h-8" />,
            shortDesc: 'Skilled repair or replacement of body panels for all vehicle types.',
            fullDesc: 'Damaged panels are carefully assessed to determine whether repair or replacement is the most cost-effective option. Our craftsmen can reshape steel and aluminium panels back to their original contours. When replacement is necessary, we source high-quality parts and ensure a perfect fit and finish.',
            details: ['Repair vs Replacement Assessment', 'Steel and Aluminium Panel Reshaping', 'Dent Removal and Surface Correction', 'Quality Replacement Panels', 'Precision Fitting and Alignment', 'Professional Refinishing and Paint Blending'],
            image: '/panel-beatt.jpg',
            learnMore: 'When a vehicle panel is damaged, it needs precise attention to restore both appearance and safety. Our panel repair service begins with a thorough assessment to determine whether repairing or replacing the panel is the most practical and cost-effective option. We always choose the approach that offers the best value without compromising strength, alignment, or finish.\n\nOur skilled technicians specialise in reshaping both steel and aluminium panels, using advanced tools and proven techniques to return each panel to its original contours. We carefully remove dents, correct distortions, and restore smooth surfaces before preparing the panel for refinishing. This craftsmanship allows many panels to be repaired rather than replaced, saving time and cost while maintaining factory integrity.\n\nWhen a panel is too damaged or structurally compromised to repair, we source high-quality new or OEM-equivalent replacement parts. Every replacement panel is fitted with precision, ensuring correct alignment, smooth gaps, and a perfect match with surrounding bodywork. Once installed, the panel is refinished using our colour-matching technology for a seamless result.\n\nRegardless of the level of damage, our goal is to restore your vehicle\'s panels to a clean, accurate, and factory-quality finish that enhances both its appearance and value.'
        },
        {
            title: 'Windscreen Removal & Installation',
            icon: <Activity className="w-8 h-8" />,
            shortDesc: 'Professional windscreen replacement with proper adhesive curing.',
            fullDesc: 'Windscreen replacement requires precision and proper technique. We use OEM-quality glass and adhesives, follow the manufacturer-specified curing times, and recalibrate advanced driver assistance systems (ADAS) if equipped. Mobile service available for insurance claims.',
            details: ['OEM-Quality Windscreen Replacement', 'Manufacturer-Specified Curing Times', 'Full ADAS Recalibration', 'Weatherproof Sealing', 'Mobile Service Available', 'Insurance Claim Support'],
            image: '/windscreen_repair_1764693203572.png',
            learnMore: 'Your windscreen is a critical safety component of your vehicle, contributing to structural strength, visibility, and the proper operation of modern safety systems. Proper removal and installation are essential to ensure long-lasting performance and compliance with safety standards. Our windscreen service combines precision workmanship, high-quality materials, and strict adherence to manufacturer guidelines to protect both you and your vehicle.\n\nWe supply and install OEM-quality windscreens, ensuring the glass meets the same safety, clarity, and durability standards as the original. Our technicians use premium automotive adhesives applied with exacting technique, followed by manufacturer-specified curing times to guarantee secure bonding. This ensures the windscreen performs correctly in all conditions, including during airbag deployment and when providing structural support during a collision.\n\nFor vehicles equipped with Advanced Driver Assistance Systems (ADAS) — such as lane-departure warning, forward collision alerts, and rain/light sensors — accurate recalibration is essential after windscreen replacement. We perform a full recalibration using specialised equipment to restore sensor accuracy and ensure your safety features function as intended.\n\nWe also offer a mobile windscreen replacement service, making the process more convenient and helping customers complete repairs quickly for insurance claims. Our team can liaise directly with your insurance provider, simplifying paperwork and ensuring the job proceeds smoothly.\n\nWhether your windscreen is cracked, chipped beyond repair, or requires replacement due to accident damage, we deliver a safe, accurate, and hassle-free service that keeps your vehicle road-ready and fully protected.'
        }
    ];

    const processSteps = [
        {
            title: "Initial Assessment",
            description: "Full visual and structural check to identify visible and hidden damage. Photos and documentation prepared for insurance if required.",
            icon: ClipboardList
        },
        {
            title: "Insurance Approval",
            description: "We work directly with your insurer and schedule your repair immediately once approved.",
            icon: Shield
        },
        {
            title: "Disassembly & Review",
            description: "Panels, bumpers, lights, or trims are removed to check for internal or structural damage.",
            icon: Wrench
        },
        {
            title: "Repair",
            description: "Structural, chassis, and panel repairs using computerised straightening, laser measurement, and skilled restoration.",
            icon: Hammer
        },
        {
            title: "Painting & Refinishing",
            description: "Your vehicle is refinished in our controlled paint booth for a smooth, even, long-lasting surface.",
            icon: Palette
        },
        {
            title: "Reassembly & Checks",
            description: "All components are refitted with precision. Quality checks ensure your vehicle is safe and roadworthy.",
            icon: Settings
        },
        {
            title: "Quality Control & Testing",
            description: "Comprehensive final inspection including test drive, system checks, and verification of all repairs meet our strict standards.",
            icon: Activity
        },
        {
            title: "Final Clean & Handover",
            description: "Your vehicle is returned in top condition, fully restored and ready for the road.",
            icon: Sparkles
        }
    ];

    return (
        <ReactLenis root>
            <div className="panel-beating-page min-h-screen font-sans" style={{ background: 'linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%)', color: '#1F366A' }}>
                <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

                {/* Hero Section Container */}
                <div className="relative">
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
                                <span className="inline-block py-1 px-3 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm text-center mx-auto" style={{ backgroundColor: '#0C55AC', borderColor: '#14A0B5', borderWidth: '1px' }}>
                                    PREMIUM PANEL BEATING SERVICES
                                </span>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-8 uppercase leading-tight tracking-tight text-white text-center mx-auto">
                                    PRECISION
                                    <span style={{ color: '#0C55AC' }}> BODY REPAIR</span> EXCELLENCE
                                </h1>
                            </ScrollReveal>

                            <ScrollReveal delay={0.6}>
                                <p className="text-lg text-white font-semibold max-w-3xl mx-auto leading-relaxed mb-10 text-center">
                                    From minor dents to major collision repairs, our skilled panel beaters restore your vehicle to its original condition with meticulous attention to detail.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.8}>
                                <div className="flex gap-4 justify-center">
                                    <button className="px-8 py-3 text-white rounded-md hover:opacity-90 transition-all duration-300 font-medium" style={{ backgroundColor: '#0C55AC' }}>
                                        GET A QUOTE
                                    </button>
                                    <button onClick={() => scrollToSection('services-grid')} className="px-8 py-3 bg-white border rounded-md hover:opacity-80 transition-all duration-300 font-medium" style={{ borderColor: '#B5B5B5', color: '#1F366A' }}>
                                        VIEW SERVICES
                                    </button>
                                </div>
                            </ScrollReveal>
                        </motion.div>
                    </motion.section>

                    {/* Wave Separator - positioned at bottom of hero container, outside motion.section */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30">
                        <svg
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className="relative block w-full h-[60px] md:h-[100px]"
                        >
                            <path
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
                                fill="#1F366A"
                            />
                        </svg>
                    </div>
                </div>

                {/* Old Services Grid - Keep the scroll observer version */}
                <section className="px-4 py-16" style={{ background: 'linear-gradient(180deg, #1F366A 0%, #0C55AC 100%)' }}>

                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#FDDD7F' }}>Our Services</p>
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-12 text-white">Comprehensive Panel Beating</h2>
                            <p className="text-sm font-semibold mb-8 hidden md:block" style={{ color: '#E4AEB3' }}>Scroll down to explore</p>
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
                                                            isActive ? "" : "md:hover:opacity-70",
                                                            "relative -mx-4 md:-mx-8 mb-6 md:-mb-4 rounded-2xl p-4 md:p-8 transition duration-300"
                                                        )}
                                                        style={{
                                                            color: isActive ? 'white' : '#B5B5B5',
                                                            backgroundColor: isActive ? 'rgba(20, 160, 181, 0.1)' : 'transparent',
                                                            borderLeft: isActive ? '4px solid #14A0B5' : '4px solid transparent'
                                                        }}
                                                    >
                                                        <div className="text-sm font-medium mb-2" style={{ color: '#FDDD7F' }}>
                                                            {String(index + 1).padStart(2, '0')}
                                                        </div>
                                                        <div className="font-['Poppins'] text-2xl md:text-3xl lg:text-4xl font-medium uppercase mb-3 md:mb-4">
                                                            {service.title}
                                                        </div>
                                                        <div className="text-lg font-semibold leading-relaxed mb-4">
                                                            {service.fullDesc}
                                                        </div>
                                                        <button
                                                            onClick={() => setActiveModal(index)}
                                                            className="mt-4 px-6 py-2 rounded-md font-medium transition-all duration-300 hover:opacity-90"
                                                            style={{ backgroundColor: '#0C55AC', color: 'white' }}
                                                        >
                                                            Learn More
                                                        </button>
                                                        <a href={`#service-${index}`} className="absolute inset-0 pointer-events-none"></a>
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




                {/* Troubleshooter - Sticky Scroll Pattern */}
                <section style={{ backgroundColor: '#E4AEB3' }}>
                    <div className="wrapper">
                        {/* Intro Section */}
                        <section className="h-screen w-full grid place-content-center sticky top-0 z-0 relative" style={{ background: 'linear-gradient(180deg, #E4AEB3 0%, #FDDD7F 100%)', color: '#1F366A' }}>
                            {/* Flipped Wave at top - blue */}
                            <div className="absolute top-0 left-0 w-full overflow-hidden z-20">
                                <svg
                                    viewBox="0 0 1200 120"
                                    preserveAspectRatio="none"
                                    className="relative block w-full h-[80px] md:h-[100px]"
                                    style={{ transform: 'rotate(180deg)' }}
                                >
                                    <path
                                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
                                        fill="#0C55AC"
                                    />
                                </svg>
                            </div>
                            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
                            <h1 className='2xl:text-7xl md:text-5xl text-3xl px-8 font-["Poppins"] font-semibold text-center tracking-tight leading-[120%] relative z-10'>
                                <span style={{ color: '#0C55AC' }}>Common Issues:</span> <br /> What We Fix Daily 🔧
                            </h1>
                        </section>

                        {/* Sticky Grid with Images */}
                        <section className="w-full relative z-10" style={{ background: 'linear-gradient(to bottom, #0C55AC, white)' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Sticky Content Side */}
                                <div className="sticky top-0 h-screen flex items-center justify-center px-8" style={{ background: 'linear-gradient(135deg, #14A0B5 0%, #0C55AC 100%)' }}>
                                    <div className="max-w-lg">
                                        <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#FDDD7F' }}>Expert Diagnosis</p>
                                        <h2 className="text-4xl md:text-5xl font-['Poppins'] font-semibold mb-6 text-white">
                                            We Fix It Right
                                        </h2>
                                        <p className="text-lg mb-6 font-semibold leading-relaxed text-white">
                                            Browse common panel beating issues and see how our expert technicians can restore your vehicle.
                                        </p>
                                        <div className="grid gap-3">
                                            <div className="flex items-center gap-3 text-white">
                                                <Activity className="w-6 h-6" style={{ color: '#FDDD7F' }} />
                                                <span className="font-medium">Detailed Inspections</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-white">
                                                <Gauge className="w-6 h-6" style={{ color: '#FDDD7F' }} />
                                                <span className="font-medium">Quality Repairs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Scrolling Symptoms Side */}
                                <div className="grid gap-6 py-8 px-4">
                                    {[
                                        { id: 1, icon: <Activity className="w-8 h-8" />, title: "Dents & Dings", cause: "Minor impacts, hail damage, or parking lot incidents.", fix: "Paintless dent removal or traditional panel beating.", image: "/dent_repair_1764693039882.png" },
                                        { id: 2, icon: <Disc className="w-8 h-8" />, title: "Scratches & Scuffs", cause: "Key scratches, brush damage, or contact marks.", fix: "Paint touch-up or full panel respray with color matching.", image: "public/Home Page Images/panel-beatt.jpg" },
                                        { id: 3, icon: <Zap className="w-8 h-8" />, title: "Collision Damage", cause: "Vehicle accidents affecting body panels and structure.", fix: "Comprehensive repair with frame alignment if needed.", image: "public/Home Page Images/Accident repair.jpg" },
                                        { id: 4, icon: <Settings className="w-8 h-8" />, title: "Rust Damage", cause: "Corrosion from moisture, salt, or age.", fix: "Rust removal, panel replacement, and protective coating.", image: "public/Home Page Images/Paint and Refinishing.jpg" },
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
                                                            e.currentTarget.src = '/panel_beating_hero_1764692687494.png';
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

                {/* Modern Equipment - Bento Grid Layout */}
                <section className="py-32 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F366A 0%, #0C55AC 100%)' }}>
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
                                    style={{ backgroundColor: '#14A0B5', color: '#1F366A' }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                >
                                    State-of-the-Art Facility
                                </motion.span>
                                <h2 className="text-5xl md:text-7xl font-['Poppins'] font-black mb-6 text-white uppercase tracking-tight">
                                    MODERN <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #14A0B5, #FDDD7F)' }}>EQUIPMENT</span>
                                </h2>
                                <p className="text-xl text-white/80 max-w-3xl mx-auto font-medium">
                                    Precision technology and expert craftsmanship for exceptional results
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
                                        src="/paint_booth_1764692971281.png"
                                        alt="Modern Paint Booth"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#14A0B5', color: '#1F366A' }}>
                                            PREMIUM FEATURE
                                        </div>
                                        <h3 className="text-3xl font-['Poppins'] font-black text-white mb-3">
                                            Climate-Controlled Paint Booth
                                        </h3>
                                        <p className="text-white/90 font-medium leading-relaxed">
                                            Our state-of-the-art paint booth ensures perfect finishes with controlled temperature, humidity, and air filtration for flawless results.
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
                                <div className="text-5xl font-['Poppins'] font-black mb-2 text-white">30+</div>
                                <div className="text-sm uppercase tracking-wider font-bold" style={{ color: '#14A0B5' }}>Years Experience</div>
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
                                <Shield className="w-12 h-12 mb-4" style={{ color: '#FDDD7F' }} />
                                <div className="text-5xl font-['Poppins'] font-black mb-2 text-white">100%</div>
                                <div className="text-sm uppercase tracking-wider font-bold" style={{ color: '#14A0B5' }}>Guaranteed</div>
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
                                        src="/panel_beating_hero_1764692687494.png"
                                        alt="Panel Beating Equipment"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-['Poppins'] font-bold text-white">Panel Beating Tech</h4>
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
                                        src="/dent_repair_1764693039882.png"
                                        alt="Dent Repair Tools"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-xl font-['Poppins'] font-bold text-white">Precision Repair</h4>
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
                                        src="/public/Panel Beating images/Computer-Diagnostics.jpeg"
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

                            {/* Image Card 4 - Wheel Restoration - Spans 2 columns */}
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
                                        src="/wheel_repair_1764693107551.png"
                                        alt="Wheel Repair Equipment"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex items-center">
                                        <div className="max-w-md">
                                            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-4" style={{ backgroundColor: '#FDDD7F', color: '#1F366A' }}>
                                                SPECIALIZED
                                            </div>
                                            <h4 className="text-2xl font-['Poppins'] font-black text-white mb-3">Wheel Restoration</h4>
                                            <p className="text-white/90 font-medium">Advanced equipment for alloy wheel repair and refinishing</p>
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
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Computerized Frame Alignment</h4>
                                    <p className="text-white/70 text-sm">Laser-precise measurements for perfect structural restoration</p>
                                </motion.div>
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Palette className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Advanced Color Matching</h4>
                                    <p className="text-white/70 text-sm">Spectrophotometer technology for seamless paint blending</p>
                                </motion.div>
                                <motion.div
                                    className="p-6 rounded-2xl border-2 border-white/20 backdrop-blur-sm"
                                    style={{ background: 'rgba(255,255,255,0.05)' }}
                                    whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
                                >
                                    <Settings className="w-10 h-10 mb-4" style={{ color: '#14A0B5' }} />
                                    <h4 className="text-xl font-['Poppins'] font-bold text-white mb-2">Modern Workshop Tools</h4>
                                    <p className="text-white/70 text-sm">Industry-leading equipment for all repair types</p>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Process Section - Bold Card Grid Design */}
                <section className="px-4 py-32 relative" style={{ backgroundColor: '#1F366A' }}>
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
                        }} />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        {/* Header */}
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <motion.h2
                                    className="text-5xl md:text-7xl font-['Poppins'] font-black mb-4 uppercase tracking-tight"
                                    style={{ color: '#FDDD7F' }}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    HOW WE <span className="text-white">WORK</span>
                                </motion.h2>
                                <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium">
                                    Eight steps to perfection, every single time
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Process Grid - Staggered Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {processSteps.map((step, index) => {
                                const colors = [
                                    { bg: 'linear-gradient(135deg, #0C55AC 0%, #1F366A 100%)', accent: '#FDDD7F', text: '#fff' },
                                    { bg: 'linear-gradient(135deg, #FDDD7F 0%, #E4AEB3 100%)', accent: '#1F366A', text: '#1F366A' },
                                    { bg: 'linear-gradient(135deg, #14A0B5 0%, #0C55AC 100%)', accent: '#FDDD7F', text: '#fff' },
                                    { bg: 'linear-gradient(135deg, #E4AEB3 0%, #783E6C 100%)', accent: '#FDDD7F', text: '#fff' },
                                    { bg: 'linear-gradient(135deg, #1F366A 0%, #0C55AC 100%)', accent: '#14A0B5', text: '#fff' },
                                    { bg: 'linear-gradient(135deg, #FDDD7F 0%, #14A0B5 100%)', accent: '#1F366A', text: '#1F366A' },
                                    { bg: 'linear-gradient(135deg, #0C55AC 0%, #14A0B5 100%)', accent: '#FDDD7F', text: '#fff' }
                                ];

                                const cardColor = colors[index % colors.length];
                                const isLarge = index === 0 || index === 4; // Make certain cards larger

                                return (
                                    <motion.div
                                        key={index}
                                        className={`relative group cursor-pointer ${isLarge ? 'md:col-span-2 lg:col-span-1' : ''}`}
                                        initial={{ opacity: 0, y: 50, rotate: -2 }}
                                        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.08,
                                            ease: [0.25, 0.46, 0.45, 0.94]
                                        }}
                                        whileHover={{
                                            scale: 1.03,
                                            rotate: 1,
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <div
                                            className="relative p-8 rounded-3xl overflow-hidden shadow-2xl h-full min-h-[320px] flex flex-col"
                                            style={{ background: cardColor.bg }}
                                        >
                                            {/* Background Pattern */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="absolute inset-0" style={{
                                                    backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 1px, transparent 1px)`,
                                                    backgroundSize: '30px 30px'
                                                }} />
                                            </div>

                                            {/* Large Step Number */}
                                            <motion.div
                                                className="absolute top-4 right-4 text-[120px] font-black leading-none opacity-20"
                                                style={{ color: cardColor.accent }}
                                                whileHover={{ opacity: 0.3 }}
                                            >
                                                {index + 1}
                                            </motion.div>

                                            {/* Badge */}
                                            <div
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit shadow-lg"
                                                style={{ backgroundColor: cardColor.accent, color: cardColor.text === '#fff' ? '#1F366A' : '#fff' }}
                                            >
                                                <span>Step {index + 1}</span>
                                            </div>

                                            {/* Icon */}
                                            <motion.div
                                                className="relative mb-6 p-6 rounded-2xl w-fit"
                                                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: [0, -5, 5, -5, 0],
                                                    transition: { duration: 0.5 }
                                                }}
                                            >
                                                <step.icon
                                                    className="w-12 h-12"
                                                    style={{ color: cardColor.accent }}
                                                    strokeWidth={2}
                                                />
                                            </motion.div>

                                            {/* Content */}
                                            <div className="relative z-10 flex-1 flex flex-col">
                                                <h3
                                                    className="text-2xl md:text-3xl font-['Poppins'] font-black mb-4 leading-tight"
                                                    style={{ color: cardColor.text }}
                                                >
                                                    {step.title}
                                                </h3>

                                                <p
                                                    className="text-base leading-relaxed font-medium mb-6"
                                                    style={{ color: cardColor.text === '#fff' ? 'rgba(255,255,255,0.9)' : 'rgba(31,54,106,0.9)' }}
                                                >
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Hover Shine Effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                initial={{ x: '-100%', skewX: -20 }}
                                                whileHover={{ x: '200%' }}
                                                transition={{ duration: 0.8 }}
                                            />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Bottom Stats/CTA */}
                        <ScrollReveal delay={0.6}>
                            <motion.div
                                className="mt-16 p-10 rounded-3xl relative overflow-hidden"
                                style={{ background: 'linear-gradient(135deg, #FDDD7F 0%, #E4AEB3 100%)' }}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                {/* Pattern Background */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `repeating-linear-gradient(90deg, #1F366A, #1F366A 2px, transparent 2px, transparent 40px)`
                                    }} />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-3xl md:text-4xl font-['Poppins'] font-black mb-3" style={{ color: '#1F366A' }}>
                                            Ready to Get Started?
                                        </h3>
                                        <p className="text-lg font-semibold" style={{ color: '#1F366A', opacity: 0.8 }}>
                                            Our team is standing by to restore your vehicle to perfection
                                        </p>
                                    </div>
                                    <button
                                        className="px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 whitespace-nowrap"
                                        style={{ backgroundColor: '#1F366A', color: '#FDDD7F' }}
                                    >
                                        BOOK NOW
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Why Choose Us */}
                <motion.section
                    className="px-4 py-16"
                    style={{ background: 'linear-gradient(135deg, #E4AEB3 10%, #FDDD7F 100%)' }}
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
                            <p className="text-sm font-medium uppercase tracking-wide mb-4" style={{ color: '#0C55AC' }}>Why Choose Us</p>
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6" style={{ color: '#1F366A' }}>Expert Panel Beating Since 1995</h2>
                            <p className="text-lg font-semibold mb-6 leading-relaxed" style={{ color: '#1F366A' }}>
                                With decades of hands-on experience, we've built a strong reputation for quality, reliability, and genuine care. Here's what sets us apart:
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl" style={{ color: '#047342' }}>✓</span>
                                    <div>
                                        <h3 className="font-['Poppins'] font-semibold text-lg mb-1" style={{ color: '#1F366A' }}>Insurance Approved</h3>
                                        <p className="text-lg " style={{ color: '#1F366A' }}>We work with all major insurance providers and handle the entire process for you, making claims simple and stress-free.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl" style={{ color: '#047342' }}>✓</span>
                                    <div>
                                        <h3 className="font-['Poppins'] font-semibold text-lg mb-1" style={{ color: '#1F366A' }}>Fast Service</h3>
                                        <p className="text-lg " style={{ color: '#1F366A' }}>Our efficient workflow and modern equipment allow us to complete repairs quickly without compromising on quality.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl" style={{ color: '#047342' }}>✓</span>
                                    <div>
                                        <h3 className="font-['Poppins'] font-semibold text-lg mb-1" style={{ color: '#1F366A' }}>Fair Pricing</h3>
                                        <p className="text-lg " style={{ color: '#1F366A' }}>We provide honest, transparent quotes and cost-effective repair options suited to your budget and needs.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl" style={{ color: '#047342' }}>✓</span>
                                    <div>
                                        <h3 className="font-['Poppins'] font-semibold text-lg mb-1" style={{ color: '#1F366A' }}>Family-Run</h3>
                                        <p className="text-lg " style={{ color: '#1F366A' }}>As a family-owned and operated workshop, we take pride in offering friendly service, personal attention, and a commitment to doing the job right.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl" style={{ color: '#047342' }}>✓</span>
                                    <div>
                                        <h3 className="font-['Poppins'] font-semibold text-lg mb-1" style={{ color: '#1F366A' }}>Expert Workmanship</h3>
                                        <p className="text-lg " style={{ color: '#1F366A' }}>Our certified technicians, precision painters, and skilled mechanics deliver repairs that meet strict safety and factory-quality standards.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-2xl" style={{ color: '#047342' }}>✓</span>
                                    <div>
                                        <h3 className="font-['Poppins'] font-semibold text-lg mb-1" style={{ color: '#1F366A' }}>All Services Under One Roof</h3>
                                        <p className="text-lg " style={{ color: '#1F366A' }}>From panel beating and painting to mechanical repairs, WOFs, ADAS calibration, and towing, we provide everything you need in one place for a smooth and convenient experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Testimonials */}
                <section className="px-4 py-16" style={{ background: 'linear-gradient(to bottom, white, #f8f9fa)' }}>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium mb-6" style={{ color: '#1F366A' }}>What Our Customers Say</h2>
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
                    className="px-4 py-20 text-white"
                    style={{ backgroundColor: '#0C55AC' }}
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
                            <button className="px-8 py-3 bg-white rounded-md hover:opacity-90 transition-all duration-300 font-medium" style={{ color: '#0C55AC' }}>
                                REQUEST QUOTE
                            </button>
                            <button className="px-8 py-3 text-white rounded-md hover:opacity-90 transition-all duration-300 font-medium border" style={{ backgroundColor: '#1F366A', borderColor: 'white' }}>
                                CALL US NOW
                            </button>
                        </div>
                    </div>
                </motion.section>

                {/* Modal for Learn More */}
                {activeModal !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
                        onClick={() => setActiveModal(null)}
                        onWheel={(e) => e.stopPropagation()}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl my-8"
                            onClick={(e) => e.stopPropagation()}
                            onWheel={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveModal(null)}
                                className="sticky top-4 right-4 float-right z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
                                style={{ backgroundColor: '#0C55AC', color: 'white' }}
                            >
                                ✕
                            </button>

                            {/* Modal Content */}
                            <div className="p-8 md:p-12">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-4 rounded-full" style={{ backgroundColor: '#0C55AC', color: 'white' }}>
                                        {services[activeModal].icon}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-['Poppins'] font-semibold" style={{ color: '#1F366A' }}>
                                        {services[activeModal].title}
                                    </h3>
                                </div>

                                {/* Image */}
                                <div className="mb-6 rounded-xl overflow-hidden">
                                    <img
                                        src={services[activeModal].image}
                                        alt={services[activeModal].title}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>

                                {/* Short Description */}
                                <p className="text-xl font-semibold mb-4" style={{ color: '#0C55AC' }}>
                                    {services[activeModal].shortDesc}
                                </p>

                                {/* Full Description */}
                                <p className="text-lg mb-6 leading-relaxed" style={{ color: '#1F366A' }}>
                                    {services[activeModal].fullDesc}
                                </p>

                                {/* Learn More Content */}
                                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                    <h4 className="text-2xl font-['Poppins'] font-semibold mb-4" style={{ color: '#0C55AC' }}>
                                        In-Depth Information
                                    </h4>
                                    <p className="text-base leading-relaxed" style={{ color: '#1F366A' }}>
                                        {services[activeModal].learnMore}
                                    </p>
                                </div>

                                {/* Details List */}
                                <div className="border-t pt-6" style={{ borderColor: '#B5B5B5' }}>
                                    <h4 className="text-xl font-['Poppins'] font-semibold mb-4" style={{ color: '#1F366A' }}>
                                        Key Features
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {services[activeModal].details.map((detail, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0C55AC' }} />
                                                <span className="font-medium" style={{ color: '#1F366A' }}>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="mt-8">
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="px-8 py-3 rounded-md font-medium transition-all duration-300 hover:opacity-90 border"
                                        style={{ borderColor: '#B5B5B5', color: '#1F366A' }}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}

                <Footer scrollToSection={scrollToSection} />
            </div>

            {/* Custom CSS for PanelBeating page only - Override only wave separator to blue */}
            <style>{`
                .panel-beating-page footer > div:first-child {
                    background-color: #0C55AC !important;
                }
                .panel-beating-page footer > div:first-child.bg-white {
                    background-color: #0C55AC !important;
                }
            `}</style>
        </ReactLenis>
    );
}
