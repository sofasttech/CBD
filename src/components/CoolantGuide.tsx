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
        'Professional advice from a trusted mechanic at CBD Panel and Paint'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-[url('/heat.jpg')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center min-h-[80vh] relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60 backdrop-blur-[2px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Droplet className="w-10 h-10 text-blue-300" />
                        <p className="text-blue-200 text-sm font-medium uppercase tracking-wide drop-shadow-lg">Essential Maintenance</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        Best <span className="text-blue-300">Coolant</span> for Your Car
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">
                        A Simple Guide for Drivers
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <section className="px-4 py-16 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">
                                Choosing the right coolant protects your engine, prevents overheating, and ensures your car runs smoothly throughout the year. Coolant controls engine temperature and also guards the inside of the radiator, water pump, and other metal parts from corrosion. Using the wrong type can create leaks or damage the cooling system; therefore, it is essential to know what type suits your vehicle.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Coolant Matters */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-6 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Thermometer className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Why Coolant Matters
                        </h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Engines reach very high temperatures during normal use. Coolant absorbs this heat and releases it through the radiator. It also contains additives that slow rust and scale. When the coolant breaks down or is of the incorrect type, these parts can wear out more quickly, leading to costly repairs.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Main Types of Coolant */}
            <section className="px-4 py-20 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Main Types of Coolant
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
                            Different coolant colours represent different formulas. Always choose options that match your vehicle's specifications.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {coolantTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-lg">
                                        <span className="text-5xl">{type.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-['Poppins'] font-bold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                                        {type.color} Coolant
                                    </h3>
                                </div>
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl">
                                    <p className="text-gray-700 leading-relaxed">{type.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Know Which Coolant */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-16 left-16 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <CheckCircle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Which Coolant Is Right?
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-6">
                        <p className="text-lg text-gray-800 mb-6 font-medium">
                            The best way to confirm the right coolant is to check:
                        </p>
                        <div className="space-y-4">
                            {howToCheck.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl">
                                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 text-lg font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Each car brand sets specific requirements for the type of coolant and the change intervals. Using the incorrect one may void the warranty and compromise performance.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* How to Add Coolant */}
            <section className="px-4 py-16 bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold uppercase mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            How to Add Coolant to the Radiator
                        </h2>
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-100">
                            <p className="text-lg text-gray-800 mb-8 font-medium">
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
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-800 text-lg pt-1.5 font-medium">{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-md">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                                    <p className="text-gray-800 font-medium">
                                        <strong className="text-orange-700">Important:</strong> If the radiator continues to lose coolant, have the system checked for leaks by CBD Panel and Paint.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Coolant Reservoir Level */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-12 left-12 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-12 right-12 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Droplet className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Proper Reservoir Level
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <p className="text-lg text-gray-800 leading-relaxed mb-6 font-medium">
                            The coolant reservoir has two marks: <strong className="text-purple-700">MIN</strong> and <strong className="text-purple-700">MAX</strong>.
                        </p>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                The level should sit between these lines when the engine is cold. If it drops below MIN, top it up with the correct coolant mix. If it rises above the maximum, there may be pressure or overheating issues that require professional attention.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Warning Signs */}
            <section className="px-4 py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                            <AlertTriangle className="w-10 h-10 text-white" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                                Warning Signs
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {warningSigns.map((sign, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                            <p className="text-lg text-gray-800 font-bold text-center">
                                ⚠️ These signs should not be ignored, as they often indicate leaks or ageing coolant.
                            </p>
                        </div>
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
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-['Poppins'] font-extralight">
                        CBD Panel and Paint provides coolant checks, flushes, and replacements for all makes and models. We use the correct coolant types recommended by manufacturers and make sure your cooling system is clean and free of blockages. A healthy cooling system protects your engine and helps you avoid unexpected breakdowns.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If you need your coolant inspected or replaced, our expert team at CBD Panel and Paint is ready to assist you.
                    </p>
                    <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-blue-600">BOOK AN APPOINTMENT</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
