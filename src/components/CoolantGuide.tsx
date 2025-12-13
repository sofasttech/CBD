import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Droplet, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function CoolantGuide() {
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

    const coolantTypes = [
        {
            color: 'Green',
            description: 'Used mostly in older vehicles. It protects metal parts but requires more frequent replacement, typically every two years or approximately 40,000 km.',
            icon: '🟢'
        },
        {
            color: 'Red or Pink',
            description: 'Common in newer models. It lasts longer and offers strong corrosion resistance.',
            icon: '🔴'
        },
        {
            color: 'Blue',
            description: 'Popular with many Japanese and some European cars. It works well with aluminium components and usually has a long service life.',
            icon: '🔵'
        },
        {
            color: 'Yellow or Orange',
            description: 'A hybrid formula is used in selected newer vehicles. Replacement periods vary by brand.',
            icon: '🟡'
        }
    ];

    const warningSigns = [
        'Temperature gauge rising higher than normal',
        'Sweet smell around the engine bay',
        'Coolant colour turning brown or cloudy',
        'Frequent drops in coolant level',
        'Visible puddles under the car'
    ];

    const howToCheck = [
        'Your owner\'s manual',
        'The label on the coolant reservoir',
        'Professional advice from a trusted mechanic at CBD Panel Beating and Mechanical'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-[url('/heat.jpg')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center min-h-[80vh]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Droplet className="w-8 h-8 text-blue-300" />
                        <p className="text-blue-200 text-sm font-medium uppercase tracking-wide">Essential Maintenance</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        Best Coolant for Your Car
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
                        A Simple Guide for Drivers
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Choosing the right coolant protects your engine, prevents overheating, and ensures your car runs smoothly throughout the year. Coolant controls engine temperature and also guards the inside of the radiator, water pump, and other metal parts from corrosion. Using the wrong type can create leaks or damage the cooling system; therefore, it is essential to know what type suits your vehicle.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Coolant Matters */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Thermometer className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Why Coolant Matters
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Engines reach very high temperatures during normal use. Coolant absorbs this heat and releases it through the radiator. It also contains additives that slow rust and scale. When the coolant breaks down or is of the incorrect type, these parts can wear out more quickly, leading to costly repairs.
                    </p>
                </div>
            </motion.section>

            {/* Main Types of Coolant */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-4 text-center">
                            Main Types of Coolant
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            Different coolant colours represent different formulas. Always choose options that match your vehicle's specifications.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {coolantTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">{type.icon}</span>
                                    <h3 className="text-xl font-['Tomorrow'] font-medium">{type.color} Coolant</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Know Which Coolant */}
            <motion.section
                className="px-4 py-16 bg-blue-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-6">
                        How to Know Which Coolant Is Right for Your Car
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        The best way to confirm the right coolant is to check:
                    </p>
                    <div className="space-y-3 mb-6">
                        {howToCheck.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Each car brand sets specific requirements for the type of coolant and the change intervals. Using the incorrect one may void the warranty and compromise performance.
                    </p>
                </div>
            </motion.section>

            {/* How to Add Coolant */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-6">
                            How to Add Coolant to the Radiator
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Filling coolant correctly is important for a safe and healthy cooling system.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Make sure the engine is completely cool.',
                                'Open the bonnet and locate the radiator cap.',
                                'Slowly open the cap to release any remaining pressure.',
                                'Add the recommended coolant until it reaches the very top of the radiator.',
                                'Close the cap firmly.'
                            ].map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                            <p className="text-gray-800">
                                <strong>Important:</strong> If the radiator continues to lose coolant, have the system checked for leaks by CBD Panel Beating and Mechanical.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coolant Reservoir Level */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-6">
                        What is the proper level for my coolant reservoir?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        The coolant reservoir has two marks: <strong>MIN</strong> and <strong>MAX</strong>.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        The level should sit between these lines when the engine is cold. If it drops below MIN, top it up with the correct coolant mix. If it rises above the maximum, there may be pressure or overheating issues that require professional attention.
                    </p>
                </div>
            </motion.section>

            {/* Warning Signs */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                Signs That Your Coolant Needs Inspection
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {warningSigns.map((sign, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500"
                                >
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800">{sign}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-700 mt-6 font-medium">
                            These signs should not be ignored, as they often indicate leaks or ageing coolant.
                        </p>
                    </motion.div>
                </div>
            </section>

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
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-mulish font-extralight">
                        CBD Panel Beating and Mechanical provides coolant checks, flushes, and replacements for all makes and models. We use the correct coolant types recommended by manufacturers and make sure your cooling system is clean and free of blockages. A healthy cooling system protects your engine and helps you avoid unexpected breakdowns.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If you need your coolant inspected or replaced, our expert team at CBD Panel Beating and Mechanical is ready to assist you.
                    </p>
                    <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-blue-600">BOOK AN APPOINTMENT</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
