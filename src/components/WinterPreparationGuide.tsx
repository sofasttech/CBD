import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Circle, Battery, Wrench, Eye, Droplets, Lightbulb, Package, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function WinterPreparationGuide() {
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

    const preparationSteps = [
        {
            icon: Circle,
            title: 'Check Tyre Condition and Grip',
            description: 'Wet and frosty roads reduce traction. Good tyres make all the difference in stopping distance and control.',
            points: [
                'Ensure tread depth is within legal and safe limits',
                'Check for cracks, uneven wear, or embedded objects',
                'Maintain correct pressure to improve grip and fuel efficiency'
            ],
            note: 'If tyres are worn, replacing them before winter is the smartest choice.',
            color: 'blue'
        },
        {
            icon: Battery,
            title: 'Test Your Battery Health',
            description: 'Car batteries struggle more in cold conditions. A weak battery may work fine in summer but fail on a cold winter morning.',
            points: [
                'Check battery voltage',
                'Look for corrosion around terminals',
                'Replace ageing batteries before they cause trouble'
            ],
            note: 'Regular testing helps avoid unexpected no-start situations.',
            color: 'yellow'
        },
        {
            icon: Wrench,
            title: 'Inspect Brakes and Fluid Levels',
            description: 'Brakes must perform well in slippery conditions.',
            points: [
                'Listen for squealing or grinding',
                'Watch for vibration during braking',
                'Check brake fluid levels and condition'
            ],
            note: 'Any change in braking performance should be checked promptly.',
            color: 'red'
        },
        {
            icon: Eye,
            title: 'Ensure Your Wipers and Washer System Are Ready',
            description: 'Winter brings increased rain and fog, making clear visibility essential.',
            points: [
                'Replace worn or streaky wiper blades',
                'Top up washer fluid with a proper mix to prevent freezing',
                'Keep the windscreen clean inside and out'
            ],
            note: 'Good visibility improves reaction time in wet driving.',
            color: 'cyan'
        },
        {
            icon: Droplets,
            title: 'Check Coolant and Antifreeze Strength',
            description: 'Coolant protects the engine from freezing and overheating.',
            points: [
                'Make sure the level sits between MIN and MAX',
                'Confirm the coolant mix is suitable for winter temperatures',
                'Look for signs of leaks or discolouration'
            ],
            note: 'Coolant maintenance is a key winter preparation step.',
            color: 'green'
        },
        {
            icon: Lightbulb,
            title: 'Inspect Lights and Electrical Systems',
            description: 'Shorter daylight hours mean lights work harder.',
            points: [
                'Check headlights, brake lights, indicators, and fog lamps',
                'Replace dim or faulty bulbs',
                'Clean lenses for better brightness and clarity'
            ],
            note: 'Good lighting keeps you visible and improves road awareness.',
            color: 'orange'
        },
        {
            icon: Package,
            title: 'Keep an Emergency Winter Kit in the Car',
            description: 'A simple kit makes winter travel safer.',
            points: [
                'Torch',
                'Warm blanket',
                'Jumper leads',
                'Basic tools and tyre inflator',
                'First-aid essentials'
            ],
            note: 'Useful for roadside situations and longer trips.',
            color: 'purple'
        },
        {
            icon: Settings,
            title: 'Give Your Vehicle a General Tune-Up',
            description: 'A winter service ensures all systems work at their best.',
            points: [
                'Oil and filter change if due',
                'Air and fuel filters checked',
                'Belts and hoses inspected',
                'Wheel alignment review'
            ],
            note: 'General servicing prevents small issues from becoming expensive repairs.',
            color: 'indigo'
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; border: string; icon: string; lightBg: string } } = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600', lightBg: 'bg-blue-100' },
            yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', icon: 'text-yellow-600', lightBg: 'bg-yellow-100' },
            red: { bg: 'bg-red-50', border: 'border-red-500', icon: 'text-red-600', lightBg: 'bg-red-100' },
            cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', icon: 'text-cyan-600', lightBg: 'bg-cyan-100' },
            green: { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600', lightBg: 'bg-green-100' },
            orange: { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600', lightBg: 'bg-orange-100' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600', lightBg: 'bg-purple-100' },
            indigo: { bg: 'bg-indigo-50', border: 'border-indigo-500', icon: 'text-indigo-600', lightBg: 'bg-indigo-100' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Snowflake className="w-8 h-8 text-cyan-300 animate-pulse" />
                        <p className="text-cyan-300 text-sm font-medium uppercase tracking-wide">Seasonal Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Preparing Your Vehicle <span className="text-cyan-300">for Winter</span>
                    </h1>
                    <p className="text-xl text-cyan-100 leading-relaxed font-mulish font-extralight">
                        A Practical Guide for New Zealand Drivers
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
                        As temperatures drop, vehicles need a little extra care to stay safe, reliable, and efficient. Cold weather affects batteries, tyres, fluids, and visibility, and winter roads can be harsh on both mechanical and exterior components. Preparing early reduces the risk of breakdowns and keeps your car ready for winter travel.
                    </p>
                </div>
            </motion.section>

            {/* Preparation Steps */}
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
                            Essential Winter Preparation Steps
                        </h2>
                        <p className="text-lg text-gray-600">
                            Follow these key steps to keep your vehicle winter-ready
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {preparationSteps.map((step, index) => {
                            const colorClasses = getColorClasses(step.color);
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
                                            <step.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-2 text-gray-900">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mb-4 ml-4">
                                        {step.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className={`${colorClasses.icon} mt-1 flex-shrink-0`}>•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`${colorClasses.lightBg} border-l-2 ${colorClasses.border} p-3 rounded`}>
                                        <p className="text-gray-800 text-sm italic">
                                            {step.note}
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
                className="px-4 py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">8</div>
                            <div className="text-cyan-100 text-lg">Key Preparation Steps</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">100%</div>
                            <div className="text-cyan-100 text-lg">Winter Ready</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">Safe</div>
                            <div className="text-cyan-100 text-lg">Cold Weather Driving</div>
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
                        CBD Panel Beating and Mechanical offers comprehensive winter checks and servicing to ensure your vehicle remains reliable throughout the colder months. Our expert team inspects tyres, brakes, battery, fluids, lights, and mechanical components, making sure everything is winter-ready. We also handle panel repairs, bumper work, and touch-ups to protect your vehicle from winter wear.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If you'd like a winter check or service before the cold weather arrives, CBD Panel Beating and Mechanical are ready to help.
                    </p>
                    <button className="relative group bg-cyan-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-cyan-600">BOOK WINTER SERVICE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
