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
            image: '/car-tune-up.jpg',
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
            image: '/tyer.png',
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
            image: '/breaks.png',
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
            image: '/car-pieces.png',
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
            image: '/panel-beatt.jpg',
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
            image: '/headlight.webp',
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
            image: '/car-polishing-tray.png',
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
            title: 'Can Car Tyres Be Repaired? A Simple Guide for New Zealand Drivers',
            excerpt: 'A flat or damaged tyre is common, but not every tyre needs replacing. Understanding when repair is safe helps protect your safety and saves costs.',
            image: '/shop.webp',
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
            category: 'Maintenance',
            title: 'Extending Your Vehicle\'s Lifespan',
            excerpt: 'Simple habits that can add years to your vehicle\'s life and save you thousands in repairs.',
            image: '/tesla.jpg',
            tips: [
                'Follow manufacturer\'s service schedule religiously',
                'Warm up and cool down your engine (30 seconds each)',
                'Avoid short trips that prevent engine from reaching optimal temperature',
                'Keep your vehicle clean inside and out to prevent rust and wear'
            ]
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
                className="pt-24 md:pt-32 pb-16 px-4 bg-black text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Expert Guidance</p>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Tips & <span className="text-blue-400">Advice</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight">
                        Professional automotive advice to help you maintain your vehicle, stay safe on the road, and save money on repairs.
                    </p>
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
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={tip.image}
                                        alt={tip.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-blue-600 text-xs font-medium uppercase mb-2">{tip.category}</div>
                                    <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 group-hover:text-blue-600 transition">
                                        {tip.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {tip.excerpt}
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        {tip.tips.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="text-green-600 mt-1">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button 
                                        onClick={() => tip.hasDetailPage && tip.detailPageRoute && navigate(tip.detailPageRoute)}
                                        className="flex items-center text-blue-600 hover:text-blue-800 transition font-medium text-sm"
                                    >
                                        Learn More <ChevronRight className="w-4 h-4 ml-1" />
                                    </button>
                                </div>
                            </motion.div>
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
                            <div className="text-4xl font-['Tomorrow'] font-bold mb-2">25+</div>
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
