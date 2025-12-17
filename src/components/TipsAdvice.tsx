import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Layers, Wrench, Shield, CloudSnow, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function TipsAdvice() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const navigate = useNavigate();

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
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-0 md:pb-16 px-4 bg-black text-white overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-end">
                    <div className="text-left">
                        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Expert Guidance</p>
                        <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6">
                            Tips & <span className="text-blue-400">Advice</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed font-mulish font-extralight">
                            Professional automotive advice to help you maintain your vehicle, stay safe on the road, and save money on repairs.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end md:-mr-8 md:-mb-16 mt- md:mt-0">
                        <img 
                            src="/advice.png" 
                            alt="Automotive advice" 
                            className="w-full max-w-xl h-auto object-contain scale-110"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Category Filter - Floating Dock Style */}
            <section className="px-4 py-12 bg-gray-100">
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
                                onClick={() => setActiveCategory(category.name)}
                                className={`group relative flex items-center gap-2 px-4 py-2 rounded-full font-['Tomorrow'] font-medium transition-all duration-300 ${
                                    activeCategory === category.name
                                        ? 'bg-blue-600 text-white shadow-md scale-105'
                                        : 'bg-transparent text-gray-700 hover:bg-blue-50 hover:scale-105'
                                }`}
                            >
                                <category.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                                    activeCategory === category.name ? 'text-white' : 'text-blue-600'
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTips.map((tip, index) => (
                            <div
                                key={index}
                                className="relative h-[450px] overflow-hidden group bg-white border border-gray-200 rounded-md flex flex-col"
                            >
                                <div className="w-full h-full">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="h-full w-full scale-100 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
                                    />
                                </div>
                                <article className="p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2 text-white">
                                        <div className="text-white text-xs font-medium uppercase mb-2">{tip.category}</div>
                                        <h1 className="text-2xl font-['Tomorrow'] font-semibold">{tip.title}</h1>
                                        <p className="text-sm leading-relaxed">
                                            {tip.excerpt}
                                        </p>
                                        <button 
                                            onClick={() => tip.hasDetailPage && tip.detailPageRoute && navigate(tip.detailPageRoute)}
                                            className="p-2 bg-black flex items-center gap-1 rounded-md text-white font-medium text-sm w-fit"
                                        >
                                            Learn More <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </article>
                                <article className="p-4 w-full h-[25%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-blue-600 to-transparent opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300 text-white">
                                    <div className="text-white text-xs font-medium uppercase mb-1">{tip.category}</div>
                                    <h1 className="text-xl font-['Tomorrow'] font-semibold line-clamp-2">{tip.title}</h1>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <motion.section
                className="px-4 py-20 bg-black text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Get More Expert Tips
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed font-mulish font-extralight">
                        Subscribe to our newsletter for monthly automotive tips, seasonal maintenance reminders, and exclusive offers.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full md:flex-1 px-6 py-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button className="w-full md:w-auto relative group bg-blue-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-blue-600">SUBSCRIBE</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            {/* Service CTA */}
            <motion.section
                className="px-4 py-16 bg-blue-600 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-4">
                            Need Professional Help?
                        </h2>
                        <p className="text-lg leading-relaxed font-mulish font-extralight mb-6">
                            While DIY maintenance is great, some jobs require professional expertise. Our team is ready to help with all your automotive needs.
                        </p>
                        <button className="relative group bg-white text-blue-600 px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">BOOK SERVICE</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Tomorrow'] font-bold mb-2">30+</div>
                            <div className="text-sm">Years Experience</div>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Tomorrow'] font-bold mb-2">600+</div>
                            <div className="text-sm">Expert Technicians</div>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Tomorrow'] font-bold mb-2">9.9K+</div>
                            <div className="text-sm">Happy Customers</div>
                        </div>
                        <div className="bg-white bg-opacity-10 p-6 backdrop-blur">
                            <div className="text-4xl font-['Tomorrow'] font-bold mb-2">100%</div>
                            <div className="text-sm">Guaranteed Work</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
