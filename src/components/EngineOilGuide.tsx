import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Gauge, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function EngineOilGuide() {
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

    const oilCapacities = [
        {
            type: 'Small Engines',
            capacity: '3-4 litres',
            description: 'Typical for compact cars and small sedans'
        },
        {
            type: 'Medium Engines',
            capacity: '4-5 litres',
            description: 'Common in mid-size sedans and small SUVs'
        },
        {
            type: 'Large Engines',
            capacity: '5-8+ litres',
            description: 'Found in larger SUVs, trucks, and performance vehicles'
        }
    ];

    const checkingSteps = [
        'Park on a level surface and turn off the engine.',
        'Wait a few minutes so the oil settles.',
        'Pull out the dipstick and wipe it clean.',
        'Insert it again and pull it out to read the level.',
        'The oil should sit between the MIN and MAX marks.'
    ];

    const toppingUpSteps = [
        'Remove the oil cap.',
        'Add a small amount at a time using the correct oil grade.',
        'Check the dipstick after each pour.',
        'Stop once you reach the correct level.',
        'Replace the oil cap securely.'
    ];

    const warningSigns = [
        'Oil warning light on the dashboard',
        'Ticking or knocking sounds from the engine',
        'Overheating',
        'Smoke from the exhaust',
        'Rough running or loss of power'
    ];

    const howToKnow = [
        'Check your owner\'s manual',
        'Look for the specification on the oil cap or under the bonnet',
        'Ask a qualified mechanic at CBD Panel Beating and Mechanical'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-[url('/engine-oil.avif')] bg-cover bg-center bg-no-repeat text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Droplet className="w-8 h-8 text-amber-400" />
                        <p className="text-amber-200 text-sm font-medium uppercase tracking-wide">Essential Maintenance</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        How Much Engine Oil Does My Car Need?
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
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
                            Engine oil plays a crucial role in maintaining your vehicle's health. It reduces friction, cools engine parts, and carries away dirt and contaminants. When the oil level is too low or too high, it can cause engine wear, overheating, or even complete failure. Knowing how much oil your car needs helps you take proper care of it and avoid costly repairs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why It Matters */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Gauge className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Why the Right Oil Level Matters
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Oil forms a protective layer between moving engine parts. When there is not enough oil, metal surfaces rub against each other, creating heat and causing damage. Too much oil can also cause problems by increasing pressure and allowing excess oil to reach areas where it should not be.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Maintaining the correct level ensures smooth performance, improved fuel economy, and extended engine life.
                    </p>
                </div>
            </motion.section>

            {/* Oil Capacity */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-4 text-center">
                            How to Know Your Car's Oil Capacity
                        </h2>
                        <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto text-lg">
                            Every vehicle has a recommended oil capacity. This varies based on engine size and design. To find the correct amount:
                        </p>
                    </motion.div>

                    <div className="space-y-3 mb-12 max-w-3xl mx-auto">
                        {howToKnow.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-lg">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {oilCapacities.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-6 hover:shadow-lg transition text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">{item.type}</h3>
                                <div className="text-3xl font-bold text-blue-600 mb-3">{item.capacity}</div>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-gray-700 mt-8 text-lg font-medium">
                        Always follow the manufacturer's guidelines.
                    </p>
                </div>
            </section>

            {/* How to Check Oil Level */}
            <motion.section
                className="px-4 py-16 bg-blue-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-6">
                        How to Check Your Oil Level
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Checking your oil regularly helps catch problems early.
                    </p>
                    <div className="space-y-4">
                        {checkingSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 text-lg pt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-100 border-l-4 border-blue-600">
                        <p className="text-gray-800">
                            <strong>Important:</strong> If it is below MIN, add oil. If it is above MAX, you may need to drain some or have the engine checked.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* How to Top Up */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Wrench className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                How to Top Up Engine Oil
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Adding oil is simple when done carefully.
                        </p>
                        <div className="space-y-4">
                            {toppingUpSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                            <p className="text-gray-800">
                                <strong>Warning:</strong> Avoid overfilling, as this can create pressure problems inside the engine.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Oil Type */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-6">
                        What Type of Oil Should I Use?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Engines are designed to work with specific oil grades. These grades are marked on the bottle, such as <strong>5W-30</strong> or <strong>10W-40</strong>. The grade controls how the oil flows at different temperatures.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        To choose the right type, always follow the manufacturer's recommendation. Using the wrong grade may reduce engine protection or affect performance.
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
                                Signs Your Car May Be Low on Oil
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
                            If you notice any of these issues, check the oil immediately or seek assistance from a mechanic at CBD Panel Beating and Mechanical.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Oil Change Frequency */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-6">
                        How Often Should I Change My Oil?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Oil breaks down over time and collects dirt. Most cars need an oil change every <strong>10,000 to 15,000 km</strong>, depending on the vehicle and driving conditions.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Short trips, heavy loads, and frequent start-stop driving may require more frequent changes.
                    </p>
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
                        CBD Panel Beating and Mechanical offers routine oil changes, filter replacements, and comprehensive engine checks, utilising high-quality oils that meet manufacturer specifications. We ensure your engine has the correct amount of oil and help you maintain a vehicle that runs smoothly.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If your oil light is on or you need a service, our expert team at CBD Panel Beating and Mechanical is ready to assist.
                    </p>
                    <button className="relative group bg-amber-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-amber-600">BOOK AN OIL CHANGE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
