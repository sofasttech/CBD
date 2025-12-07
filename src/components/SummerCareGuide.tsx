import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplets, Circle, Wind, Battery, Wrench, Shield, Package } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function SummerCareGuide() {
    const [menuOpen, setMenuOpen] = useState(false);

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

    const summerCareTips = [
        {
            icon: Droplets,
            title: 'Check Your Cooling System',
            description: 'Hot weather makes engines work harder. A healthy cooling system prevents overheating.',
            points: [
                'Make sure the coolant level sits between MIN and MAX',
                'Check for leaks around hoses and radiator joints',
                'Ensure the coolant mix is correct and not discoloured'
            ],
            note: 'If your temperature gauge rises more than normal, have the system inspected promptly.',
            color: 'blue'
        },
        {
            icon: Circle,
            title: 'Monitor Tyre Pressure and Condition',
            description: 'Heat increases tyre pressure, which can lead to blowouts on long drives.',
            points: [
                'Check tyre pressure weekly in summer',
                'Inspect tread depth and sidewalls for cracks',
                'Rotate tyres if due, and ensure the spare is ready to use'
            ],
            note: 'Proper tyre care improves grip, fuel efficiency, and safety.',
            color: 'orange'
        },
        {
            icon: Wind,
            title: 'Service Your Air Conditioning',
            description: 'Comfort is just as important as function on hot days.',
            points: [
                'Test AC performance before a long trip',
                'Replace cabin filters for better airflow',
                'Have gas levels checked if the air isn\'t cooling well'
            ],
            note: 'A well-serviced AC keeps the cabin cool and reduces strain on the system.',
            color: 'cyan'
        },
        {
            icon: Battery,
            title: 'Battery Health Check',
            description: 'Heat accelerates battery fluid evaporation and can reduce capacity.',
            points: [
                'Inspect terminals for corrosion',
                'Check battery age and voltage',
                'Replace ageing batteries before they fail'
            ],
            note: 'Hot weather failures are common, especially in older batteries.',
            color: 'yellow'
        },
        {
            icon: Wrench,
            title: 'Maintain Engine Oil and Filters',
            description: 'Clean oil helps the engine cope with high temperatures.',
            points: [
                'Follow scheduled oil changes',
                'Replace air and fuel filters regularly',
                'Use the recommended oil grade for your vehicle'
            ],
            note: 'Fresh oil reduces friction and protects internal parts under heat stress.',
            color: 'green'
        },
        {
            icon: Shield,
            title: 'Keep an Eye on Brake Performance',
            description: 'Summer travel often means heavier braking during holiday traffic and hill journeys.',
            points: [
                'Listen for squeals, grinding, or vibration',
                'Check brake fluid condition and level',
                'Book an inspection if the stopping distance increases'
            ],
            note: 'Safe braking is essential for long-distance road trips.',
            color: 'red'
        },
        {
            icon: Sun,
            title: 'Protect Paint and Interior from Sun Damage',
            description: 'UV exposure can cause paint to fade and crack interior surfaces.',
            points: [
                'Wash and wax to maintain paint shine',
                'Use windscreen shades when parked',
                'Condition leather or interior trim regularly'
            ],
            note: 'Parking in shade extends the life of exterior and interior finishes.',
            color: 'purple'
        },
        {
            icon: Package,
            title: 'Carry a Summer Travel Emergency Kit',
            description: 'Preparedness avoids trouble on long drives.',
            points: [
                'Water for cooling and drinking',
                'Basic tool kit and jumper leads',
                'First-aid kit',
                'Sunscreen and hat',
                'Tyre inflator and puncture repair kit'
            ],
            note: 'A small kit makes roadside situations easier.',
            color: 'indigo'
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; border: string; icon: string; lightBg: string } } = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600', lightBg: 'bg-blue-100' },
            orange: { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600', lightBg: 'bg-orange-100' },
            cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', icon: 'text-cyan-600', lightBg: 'bg-cyan-100' },
            yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', icon: 'text-yellow-600', lightBg: 'bg-yellow-100' },
            green: { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600', lightBg: 'bg-green-100' },
            red: { bg: 'bg-red-50', border: 'border-red-500', icon: 'text-red-600', lightBg: 'bg-red-100' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600', lightBg: 'bg-purple-100' },
            indigo: { bg: 'bg-indigo-50', border: 'border-indigo-500', icon: 'text-indigo-600', lightBg: 'bg-indigo-100' }
        };
        return colors[color] || colors.orange;
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-orange-600 via-yellow-500 to-orange-500 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Sun className="w-8 h-8 text-yellow-200 animate-pulse" />
                        <p className="text-yellow-200 text-sm font-medium uppercase tracking-wide">Seasonal Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Summer Vehicle <span className="text-yellow-200">Care Tips</span>
                    </h1>
                    <p className="text-xl text-yellow-100 leading-relaxed font-mulish font-extralight">
                        Keep Your Car Running Smoothly in Hot Weather
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Summer in New Zealand brings long road trips, heavy sunlight, and higher temperatures, all of which place extra stress on your vehicle. Heat affects the cooling system, tyres, battery, air conditioning, and even the paint and interior trim. A little preparation goes a long way toward preventing breakdowns, overheating, and unexpected repairs. Here are some practical summer care tips to help your vehicle perform optimally throughout the warmer months.
                    </p>
                </div>
            </motion.section>

            {/* Summer Care Tips */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-4">
                            Essential Summer Care Tips
                        </h2>
                        <p className="text-lg text-gray-600">
                            Follow these key steps to keep your vehicle summer-ready
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {summerCareTips.map((tip, index) => {
                            const colorClasses = getColorClasses(tip.color);
                            return (
                                <motion.div
                                    key={index}
                                    className={`${colorClasses.bg} border-l-4 ${colorClasses.border} p-6 hover:shadow-lg transition-all duration-300`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 ${colorClasses.lightBg} rounded-lg flex-shrink-0`}>
                                            <tip.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-2 text-gray-900">
                                                {tip.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {tip.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mb-4 ml-4">
                                        {tip.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className={`${colorClasses.icon} mt-1 flex-shrink-0`}>•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`${colorClasses.lightBg} border-l-2 ${colorClasses.border} p-3 rounded`}>
                                        <p className="text-gray-800 text-sm italic">
                                            {tip.note}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Visual Stats */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-orange-600 to-yellow-500 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">8</div>
                            <div className="text-yellow-100 text-lg">Essential Care Tips</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">100%</div>
                            <div className="text-yellow-100 text-lg">Summer Ready</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">Safe</div>
                            <div className="text-yellow-100 text-lg">Hot Weather Driving</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* How We Can Help */}
            <motion.section
                className="px-4 py-16 bg-black text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-mulish font-extralight">
                        CBD Panel Beating and Mechanical workshop provides summer readiness checks to keep your vehicle performing at its best. We inspect coolant systems, tyres, brakes, air conditioning, filters, and general mechanical components. We also handle panel beating, bumper repair, refinishing, and bodywork if your vehicle needs cosmetic care after a long season on the road.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If you want your vehicle summer-ready or need a full check before your next trip, our expert team at CBD Panel Beating and Mechanical is ready to assist.
                    </p>
                    <button className="relative group bg-orange-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-orange-600">BOOK SUMMER SERVICE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
