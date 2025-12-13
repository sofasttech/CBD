import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Gauge, Leaf, AlertTriangle, CheckCircle, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function HybridCarsGuide() {
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

    const mainParts = [
        'Petrol engine',
        'Electric motor',
        'High voltage battery pack',
        'Inverter and power control unit',
        'Regenerative braking system',
        'Transmission designed for hybrid use'
    ];

    const benefits = [
        'Lower fuel consumption',
        'Reduced exhaust emissions',
        'Smooth and quiet operation',
        'Less wear on mechanical components due to electric assistance',
        'Strong resale value as demand for hybrid vehicles increases'
    ];

    const warningSigns = [
        'Reduced fuel economy',
        'Warning lights on the dashboard',
        'Unusual engine noise during changeover',
        'Weak acceleration',
        'Irregular charging behaviour'
    ];

    const powerSteps = [
        {
            title: 'Energy Capture',
            description: 'During driving, braking, and coasting, the system captures energy that would normally be lost and sends it back to the battery through regenerative braking.'
        },
        {
            title: 'Electric Mode',
            description: 'When the battery has enough charge, the electric motor can run the car on its own for short distances, especially at low speeds.'
        },
        {
            title: 'Hybrid Mode',
            description: 'At higher speeds or under heavy load, the petrol engine starts to support the electric motor. The system chooses the most efficient option at each moment.'
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-emerald-900 to-emerald-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Leaf className="w-8 h-8 text-emerald-300" />
                        <p className="text-emerald-200 text-sm font-medium uppercase tracking-wide">Modern Technology</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        How Hybrid Cars Work
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
                        A Practical Guide for New Zealand Drivers
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
                            Hybrid vehicles have become a familiar sight on New Zealand roads. They offer quieter driving, lower fuel use, and reduced emissions. Many drivers choose them for daily commuting, while others appreciate the long-term savings. Understanding how a hybrid works also helps when it comes to servicing, repairs, and maintaining safety systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Makes a Car Hybrid */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            What Makes a Car a Hybrid
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        A hybrid car uses two power sources. One is a petrol engine, and the other is an electric motor. These work together to move the vehicle. The electric motor helps at low speeds, while the petrol engine takes over when more power is needed. A hybrid switches between both systems automatically.
                    </p>
                </div>
            </motion.section>

            {/* How Power System Works */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Battery className="w-8 h-8 text-emerald-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                How the Power System Works
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Hybrid vehicles store electrical energy in a high-voltage battery. The system intelligently manages power flow to maximize efficiency.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {powerSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 p-6 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 text-emerald-900">{step.title}</h3>
                                <p className="text-gray-700">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Parts */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Settings className="w-8 h-8 text-emerald-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Main Parts of a Hybrid Vehicle
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        Hybrid cars have several important components that work together.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {mainParts.map((part, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-200">
                                <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-lg">{part}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 mt-6 font-medium">
                        All these parts must stay in good working order to maintain performance and efficiency.
                    </p>
                </div>
            </motion.section>

            {/* Benefits */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Leaf className="w-8 h-8 text-emerald-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                Benefits of Driving a Hybrid
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Hybrid vehicles appeal to many New Zealand drivers for clear reasons.
                        </p>
                        <div className="space-y-3">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 border-l-4 border-emerald-500">
                                    <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700 text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-700 mt-6">
                            These features make hybrids a practical choice for city driving and long-distance travel.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Maintenance */}
            <motion.section
                className="px-4 py-16 bg-blue-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Gauge className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Hybrid Maintenance and Repairs
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        While hybrid vehicles are reliable, they have specialised systems that require proper care. The battery, inverter, sensors, and cooling systems need regular inspection. Collision damage or electrical issues can impact the performance of the hybrid system.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Panel beating, structural repairs, and bumper repairs must be carried out carefully, as many hybrid components are located close to the front structure. Sensors for safety features are also mounted near bumper areas and must be recalibrated after repairs.
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
                                Signs Your Hybrid May Need Attention
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
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
                        <p className="text-lg text-gray-700 font-medium">
                            These signs should be checked by a technician experienced with hybrid systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">50%</div>
                            <div className="text-emerald-100 text-lg">Lower Emissions</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">30%</div>
                            <div className="text-emerald-100 text-lg">Fuel Savings</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">Expert</div>
                            <div className="text-emerald-100 text-lg">Hybrid Specialists</div>
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
                        CBD Panel and Paint repairs and services hybrid vehicles with attention to safety and manufacturer requirements. We handle structural repairs, bumper work, sensor alignment, and panel repairs for all major hybrid models. We understand the extra care needed around high-voltage components and modern safety systems.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If your hybrid needs repairs or you want a professional inspection, our expert team at CBD Panel and Paint is here to assist.
                    </p>
                    <button className="relative group bg-emerald-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-emerald-600">BOOK A HYBRID SERVICE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
