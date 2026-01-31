import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Layers, Wrench, Shield, CloudSnow, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

// Skeleton Card Component
const SkeletonCard = () => (
    <div className="relative h-[450px] overflow-hidden bg-gray-100 border border-gray-200 rounded-md animate-pulse">
        <div className="w-full h-full bg-gray-200" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-300 to-transparent h-[25%]">
            <div className="h-3 bg-gray-300 rounded w-20 mb-2" />
            <div className="h-5 bg-gray-300 rounded w-3/4" />
        </div>
    </div>
);

// Lazy Image Card Component with Intersection Observer
const LazyTipCard = ({ tip, index, onClick }: any) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '100px', // Start loading earlier for smoother UX
                threshold: 0.05 // Trigger earlier
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative h-[450px] overflow-hidden group bg-white border border-gray-200 rounded-md flex flex-col"
        >
            {!isVisible || !imageLoaded ? (
                // Show skeleton while loading
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10">
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-300 to-transparent h-[25%]">
                        <div className="h-3 bg-gray-300 rounded w-20 mb-2" />
                        <div className="h-5 bg-gray-300 rounded w-3/4" />
                    </div>
                </div>
            ) : null}

            <div className="w-full h-full relative bg-gray-200">
                {/* Blur placeholder */}
                {isVisible && !imageLoaded && (
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
                        style={{
                            backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjwvc3ZnPg==)',
                            backgroundSize: 'cover'
                        }}
                    />
                )}
                {isVisible && (
                    <img
                        src={tip.image}
                        alt={tip.title}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => setImageLoaded(true)}
                        className={`h-full w-full scale-100 group-hover:scale-100 object-cover transition-all duration-500 rounded-md ${imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            willChange: imageLoaded ? 'auto' : 'opacity'
                        }}
                    />
                )}
            </div>
            <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#783E6C] opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2 text-white">
                    <div className="text-white text-xs font-medium uppercase mb-2">{tip.category}</div>
                    <h1 className="text-2xl font-['Poppins'] font-semibold">{tip.title}</h1>
                    <p className="text-sm leading-relaxed">
                        {tip.excerpt}
                    </p>
                    <button
                        onClick={onClick}
                        className="p-2 bg-black flex items-center gap-1 rounded-md text-white font-medium text-sm w-fit"
                    >
                        Learn More <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </article>
            <article className="p-4 w-full h-[25%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#783E6C] to-transparent opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300 text-white">
                <div className="text-white text-xs font-medium uppercase mb-1">{tip.category}</div>
                <h1 className="text-xl font-['Poppins'] font-semibold line-clamp-2">{tip.title}</h1>
            </article>
        </motion.div>
    );
};

export default function TipsAdvice() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [isFiltering, setIsFiltering] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Simulate initial load time
        const timer = setTimeout(() => {
            setIsInitialLoad(false);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleImageLoad = (imageUrl: string) => {
        setLoadedImages(prev => new Set(prev).add(imageUrl));
    };

    const handleCategoryChange = (category: string) => {
        setIsFiltering(true);
        setActiveCategory(category);

        // Add small delay for smooth transition
        setTimeout(() => {
            setIsFiltering(false);
        }, 300);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const tips = [
        {
            category: 'Maintenance',
            title: 'Best Coolant for Your Car: A Simple Guide for Drivers',
            excerpt: 'Choosing the right coolant protects your engine, prevents overheating, and ensures your car runs smoothly throughout the year.',
            image: '/coolent.jpg',
            tips: [
                'Green coolant for older vehicles - replace every 2 years or 40,000 km',
                'Red/Pink coolant for newer models with long-lasting protection',
                'Blue coolant popular with Japanese cars - works well with aluminium',
                'Always check your owner\'s manual for the correct coolant type'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/coolant-guide'
        },
        {
            category: 'Maintenance',
            title: 'How Much Engine Oil Does My Car Need? A Simple Guide for Drivers',
            excerpt: 'Engine oil plays a crucial role in maintaining your vehicle\'s health. It reduces friction, cools engine parts, and carries away dirt and contaminants.',
            image: '/engineoil.jpg',
            tips: [
                'Small engines typically need 3-4 litres, larger engines 5-8 litres or more',
                'Check oil level between MIN and MAX marks on dipstick regularly',
                'Use the correct oil grade specified in your owner\'s manual',
                'Change oil every 10,000-15,000 km depending on driving conditions'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/engine-oil-guide'
        },
        {
            category: 'Maintenance',
            title: 'How to Charge a Car Battery: A Simple Guide for Everyday Drivers',
            excerpt: 'A flat or weak battery is one of the most common reasons a car refuses to start. Knowing how to charge a car battery safely can save time and prevent breakdowns.',
            image: '/carbattry.jpg',
            tips: [
                'Use a suitable battery charger - charging can take 4-12 hours',
                'Always connect positive terminal first, then negative',
                'Jump-starting provides quick power to get the engine running',
                'Let engine run 15+ minutes after jump-start to recharge'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/battery-charging-guide'
        },
        {
            category: 'Safety',
            title: 'Why Front Bumper Repair Matters: A Practical Guide for Drivers',
            excerpt: 'The front bumper plays a bigger role in vehicle safety and performance than many drivers realise. It absorbs impact during collisions and protects key components.',
            image: '/frontbumper.webp',
            tips: [
                'Modern bumpers work with airbags, sensors, and crumple zones',
                'Damaged bumpers expose radiators, headlights, and sensors to harm',
                'Professional repairs restore strength, alignment, and finish',
                'Insurance often requires repairs to maintain coverage'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/bumper-repair-guide'
        },
        {
            category: 'Maintenance',
            title: 'How Hybrid Cars Work: A Practical Guide for New Zealand Drivers',
            excerpt: 'Hybrid vehicles offer quieter driving, lower fuel use, and reduced emissions. Understanding how they work helps with servicing, repairs, and maintaining safety systems.',
            image: '/TipM4.jpg',
            tips: [
                'Combines petrol engine with electric motor for efficiency',
                'Regenerative braking captures energy and recharges the battery',
                'Lower fuel consumption and reduced exhaust emissions',
                'Requires specialized care for battery, inverter, and sensors'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/hybrid-cars-guide'
        },
        {
            category: 'Maintenance',
            title: 'Why Your Car Vibrates While Idling: A Driver\'s Guide',
            excerpt: 'A smooth-running engine should stay steady when the car is stopped. If your vehicle shakes or vibrates while idling, it indicates something needs attention.',
            image: '/tips_m5.webp',
            tips: [
                'Worn or dirty spark plugs cause engine misfires and shaking',
                'Blocked air or fuel filters reduce flow and create rough idling',
                'Damaged engine mounts allow excessive engine movement',
                'Vacuum leaks alter air-fuel balance causing unstable idle'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/idle-vibration-guide'
        },
        {
            category: 'Maintenance',
            title: 'Car Using Too Much Fuel? Key Reasons and What To Do',
            excerpt: 'Fuel costs add up quickly when your vehicle uses more petrol than usual. Understanding the factors helps you drive efficiently and identify mechanical issues.',
            image: '/tips_m6.png',
            tips: [
                'Smooth acceleration and steady speeds improve fuel economy',
                'Underinflated tyres increase rolling resistance and fuel use',
                'Poor maintenance like dirty filters and old spark plugs waste fuel',
                'Short trips and stop-start traffic prevent proper engine warm-up'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/fuel-consumption-guide'
        },
        {
            category: 'Safety',
            title: 'Brake System Warning Signs: What Every Driver Should Know',
            excerpt: 'Your vehicle\'s braking system is one of its most important safety features. Recognising warning signs helps prevent expensive repairs and reduces accident risk.',
            image: '/breaks.png',
            tips: [
                'Dashboard warning lights indicate low fluid, worn pads, or ABS issues',
                'Squealing or grinding sounds mean brake pads need replacement',
                'Soft or spongy pedal suggests air in lines or low fluid levels',
                'Vibrations, pulling, or increased stopping distance require immediate attention'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/brake-warning-signs'
        },
        {
            category: 'Safety',
            title: 'Dashboard Warning Lights Decoded: What They Mean and What You Should Do',
            excerpt: 'Modern vehicles monitor engine performance, tyre pressure, and more. Understanding dashboard warning lights helps you stay safe and avoid costly repairs.',
            image: '/TipS3.webp',
            tips: [
                'Red warning lights (oil, engine temp, brakes) require immediate action',
                'Amber lights indicate developing issues - book service soon',
                'Blue/green lights are status indicators for features like cruise control',
                'Flashing engine light means stop immediately to prevent damage'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/dashboard-warning-lights'
        },
        {
            category: 'Safety',
            title: 'Can Car Tyres Be Repaired? A Simple Guide for New Zealand Drivers',
            excerpt: 'A flat or damaged tyre is common, but not every tyre needs replacing. Understanding when repair is safe helps protect your safety and saves costs.',
            image: '/Tips_s4.png',
            tips: [
                'Punctures in the tread area up to 6mm can usually be repaired',
                'Sidewall damage, bulges, or large holes require replacement',
                'Professional plug and patch repair is the most reliable method',
                'Temporary sealants should only be used to reach a workshop'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/tyre-repair-guide'
        },
        {
            category: 'Seasonal',
            title: 'Preparing Your Vehicle for Winter: A Practical Guide for New Zealand Drivers',
            excerpt: 'Cold weather affects batteries, tyres, fluids, and visibility. Preparing early reduces breakdown risk and keeps your car ready for winter travel.',
            image: '/Tips_seasonal_1.png',
            tips: [
                'Check tyre condition, tread depth, and pressure for wet roads',
                'Test battery health - cold weather can cause weak batteries to fail',
                'Inspect brakes, fluids, wipers, and lights for winter performance',
                'Keep an emergency winter kit with torch, blanket, and jumper leads'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/winter-preparation-guide'
        },
        {
            category: 'Seasonal',
            title: 'Summer Vehicle Care Tips: Keep Your Car Running Smoothly in Hot Weather',
            excerpt: 'Summer brings long road trips, heavy sunlight, and higher temperatures. Heat affects cooling systems, tyres, battery, and AC - preparation prevents breakdowns.',
            image: '/Tips_seasonal_2.png',
            tips: [
                'Check cooling system and coolant levels to prevent overheating',
                'Monitor tyre pressure weekly - heat increases pressure and blowout risk',
                'Service air conditioning and check battery health in hot weather',
                'Protect paint and interior from UV damage with regular washing and waxing'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/summer-care-guide'
        },
        {
            category: 'Maintenance',
            title: 'Panel Beating Repair Costs Explained – From Small Dents to Major Damage',
            excerpt: 'Understanding panel beating costs helps you make informed decisions. Prices vary based on damage severity, parts, labour, paint type, and insurance coverage.',
            image: '/TipM7.jpg',
            tips: [
                'Minor dents cost less than structural collision repairs - complexity affects price',
                'OEM parts cost more than aftermarket, luxury vehicles need specialized items',
                'Labour includes dent removal, painting, colour matching, and reassembly',
                'Quality repairs protect appearance, integrity, and long-term vehicle value'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/panel-beating-costs'
        },
        {
            category: 'Safety',
            title: 'Had a Minor Car Accident? How to Respond & Get Repairs in Auckland',
            excerpt: 'Minor crashes happen often. Handling the situation correctly protects your safety, maintains insurance validity, and ensures proper repairs.',
            image: '/Tips_S5.jpg',
            tips: [
                'Check safety first, turn on hazards, move to safe place if drivable',
                'Exchange details, take photos of damage and scene for evidence',
                'Notify insurance provider even for small damage - assess claim vs private repair',
                'Book inspection - minor damage can hide structural issues and sensor problems'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/minor-accident-guide'
        },
        {
            category: 'Maintenance',
            title: 'Repair or Replace? How to Know When a Panel Should Be Replaced',
            excerpt: 'Should a damaged panel be repaired or replaced? Understanding the difference helps you make informed decisions and avoid paying for the wrong repair.',
            image: '/TipM8.webp',
            tips: [
                'Small to medium dents, scratches, and bumper scrapes can usually be repaired',
                'Replace when panel is badly crushed, metal stretched, or rust penetrated deeply',
                'Repair costs less but replacement may be better for severe structural damage',
                'Professional inspection reveals hidden damage beneath the surface'
            ],
            hasDetailPage: true,
            detailPageRoute: '/tips-advice/repair-or-replace'
        }
    ];

    const filteredTips = activeCategory === 'All'
        ? tips
        : tips.filter(tip => tip.category === activeCategory);

    return (
        <div className="tips-advice-page min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-0 md:pb-16 px-4 bg-[#fcf6ff] overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-end">
                    <div className="text-left">
                        <p className="mb-auto mt-auto text-[#783E6C] text-sm font-medium uppercase tracking-wide">Expert Guidance</p>
                        <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-5 mt-10">
                            Tips & <span className="text-[#783E6C]">Advice</span>
                        </h1>
                        <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg mb-6">
                            Professional automotive advice to help you maintain your vehicle, stay safe on the road, and save money on repairs.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end md:-mr-8 md:-mb-16 mt- md:mt-0">
                        <img
                            src="/IMG_9029-removebg-preview.png"
                            alt="Automotive advice"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="w-full max-w-xl h-auto object-contain scale-110"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Category Filter - Floating Dock Style */}
            <section className="px-4 py-12 bg-white">
                <div className="max-w-7xl mx-auto flex justify-center">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 shadow-lg border border-gray-200">
                        {[
                            { name: 'All', icon: Layers },
                            { name: 'Maintenance', icon: Wrench },
                            { name: 'Safety', icon: Shield },
                            { name: 'Seasonal', icon: CloudSnow },
                            { name: 'DIY', icon: Home }
                        ].map((category) => (
                            <button
                                key={category.name}
                                onClick={() => handleCategoryChange(category.name)}
                                className={`group relative flex items-center gap-2 px-4 py-2 rounded-full font-['Poppins'] font-medium transition-all duration-300 ${activeCategory === category.name
                                    ? 'bg-[#783E6C] text-white shadow-md scale-105'
                                    : 'bg-transparent text-gray-700 hover:bg-[#A259B7]/20 hover:scale-105'
                                    }`}
                            >
                                <category.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${activeCategory === category.name ? 'text-white' : 'text-[#A259B7]'
                                    }`} />
                                <span className="text-sm hidden md:inline">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tips Grid */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    {/* Loading Overlay */}
                    <AnimatePresence>
                        {isFiltering && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center"
                            >
                                <div className="text-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="w-12 h-12 border-4 border-[#783E6C] border-t-transparent rounded-full mx-auto mb-4"
                                    />
                                    <p className="text-gray-900 font-['Poppins'] font-medium">Filtering...</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Show skeletons during initial load */}
                    {isInitialLoad ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {filteredTips.map((tip, index) => (
                                <LazyTipCard
                                    key={`${tip.title}-${index}`}
                                    tip={tip}
                                    index={index}
                                    onClick={() => tip.hasDetailPage && tip.detailPageRoute && navigate(tip.detailPageRoute)}
                                />
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>



            {/* Service CTA */}
            <motion.section
                className="px-4 py-16 bg-[#783E6C] text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-4">
                            Need Professional Help?
                        </h2>
                        <p className="text-lg leading-relaxed font-['Poppins'] font-extralight mb-6">
                            While DIY maintenance is great, some jobs require professional expertise. Our team is ready to help with all your automotive needs.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="relative group bg-white text-[#783E6C] px-8 py-4 font-['Poppins'] font-medium text-lg transition inline-block"
                        >
                            <span className="absolute left-0 top-0 h-full bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">BOOK SERVICE</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Poppins'] font-bold mb-2">30+</div>
                            <div className="text-sm">Years in Business</div>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Poppins'] font-bold mb-2">10+</div>
                            <div className="text-sm">Expert Technicians</div>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Poppins'] font-bold mb-2">10K+</div>
                            <div className="text-sm">Happy Customers</div>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Poppins'] font-bold mb-2">100%</div>
                            <div className="text-sm">Guaranteed Work</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />

            {/* Custom CSS for TipsAdvice page only - Override wave separator to purple */}
            <style>{`
                .tips-advice-page footer > div:first-child {
                    background-color: #783E6C !important;
                }
                .tips-advice-page footer > div:first-child.bg-white {
                    background-color: #783E6C !important;
                }
            `}</style>
        </div>
    );
}
