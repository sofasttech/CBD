import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function TipsAdvice() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');

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
            title: 'Regular Oil Changes: The Lifeblood of Your Engine',
            excerpt: 'Learn why regular oil changes are crucial for engine longevity and how to choose the right oil for your vehicle.',
            image: '/car-tune-up.jpg',
            tips: [
                'Change oil every 5,000-10,000 km depending on your vehicle',
                'Use manufacturer-recommended oil grade',
                'Check oil level monthly between changes',
                'Watch for dark or gritty oil indicating needed change'
            ]
        },
        {
            category: 'Maintenance',
            title: 'Tire Maintenance 101',
            excerpt: 'Proper tire care improves safety, fuel efficiency, and extends tire life. Here\'s what you need to know.',
            image: '/tyer.png',
            tips: [
                'Check tire pressure monthly when tires are cold',
                'Rotate tires every 10,000 km for even wear',
                'Replace tires when tread depth reaches 1.5mm',
                'Look for uneven wear patterns indicating alignment issues'
            ]
        },
        {
            category: 'Safety',
            title: 'Brake System Warning Signs',
            excerpt: 'Recognizing brake problems early can prevent accidents and expensive repairs. Know what to listen and feel for.',
            image: '/breaks.png',
            tips: [
                'Squealing or grinding noises when braking',
                'Soft or spongy brake pedal feel',
                'Vehicle pulls to one side when braking',
                'Vibrations through brake pedal or steering wheel'
            ]
        },
        {
            category: 'Safety',
            title: 'Dashboard Warning Lights Decoded',
            excerpt: 'Understanding your dashboard warning lights helps you respond appropriately to potential vehicle issues.',
            image: '/car-pieces.png',
            tips: [
                'Engine light: Get diagnostics run immediately',
                'Oil pressure warning: Stop driving and check oil level',
                'Battery light: Charging system issue, have checked soon',
                'Brake warning: Check brake fluid and have brakes inspected'
            ]
        },
        {
            category: 'Seasonal',
            title: 'Preparing Your Vehicle for Winter',
            excerpt: 'Winter weather demands extra vehicle care. Follow these tips to stay safe on the roads.',
            image: '/panel-beatt.jpg',
            tips: [
                'Check battery health and terminals before cold weather',
                'Ensure coolant is at proper concentration for freezing protection',
                'Test heater and defroster operation',
                'Keep windscreen washer fluid topped up with winter formula'
            ]
        },
        {
            category: 'Seasonal',
            title: 'Summer Vehicle Care Tips',
            excerpt: 'Hot weather can take a toll on your vehicle. Protect it with these summer maintenance tips.',
            image: '/headlight.webp',
            tips: [
                'Check air conditioning system performance',
                'Inspect coolant level and condition',
                'Verify tire pressure (increases in heat)',
                'Test battery (heat accelerates battery failure)'
            ]
        },
        {
            category: 'DIY',
            title: 'Simple Checks You Can Do at Home',
            excerpt: 'Save money and catch problems early with these simple DIY vehicle checks.',
            image: '/car-polishing-tray.png',
            tips: [
                'Check all lights monthly (headlights, brake lights, indicators)',
                'Inspect windscreen wipers for cracks or streaking',
                'Look under vehicle for fluid leaks',
                'Check tire tread depth with a coin'
            ]
        },
        {
            category: 'DIY',
            title: 'How to Check Your Fluid Levels',
            excerpt: 'Maintaining proper fluid levels is essential for vehicle health. Here\'s how to check them yourself.',
            image: '/shop.webp',
            tips: [
                'Engine oil: Check with dipstick when engine is cold',
                'Coolant: Check reservoir when cool, between min/max marks',
                'Brake fluid: Should be clear, replace if dark or low',
                'Power steering fluid: Check reservoir with engine running'
            ]
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

    const categories = ['All', 'Maintenance', 'Safety', 'Seasonal', 'DIY'];

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

            {/* Category Filter */}
            <section className="px-4 py-8 bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 font-['Tomorrow'] font-medium transition ${activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-blue-100'
                                    }`}
                            >
                                {category}
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
                                    <button className="flex items-center text-blue-600 hover:text-blue-800 transition font-medium text-sm">
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
