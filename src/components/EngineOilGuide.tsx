import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Gauge, AlertTriangle, CheckCircle, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function EngineOilGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
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

    const oilCapacities = [
        {
            type: 'Small Engines',
            capacity: '3-4 litres',
            description: 'Typical for compact cars and small sedans',
            icon: '🚗'
        },
        {
            type: 'Medium Engines',
            capacity: '4-5 litres',
            description: 'Common in mid-size sedans and small SUVs',
            icon: '🚙'
        },
        {
            type: 'Large Engines',
            capacity: '5-8+ litres',
            description: 'Found in larger SUVs, trucks, and performance vehicles',
            icon: '🚐'
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
        'Ask a qualified mechanic at CBD Panel and Paint'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-[url('/engine-oil.avif')] bg-cover bg-center bg-no-repeat text-white relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60 backdrop-blur-[2px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Droplet className="w-10 h-10 text-amber-400" />
                        <p className="text-amber-200 text-sm font-medium uppercase tracking-wide drop-shadow-lg">Essential Maintenance</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        How Much <span className="text-amber-400">Engine Oil</span> Does My Car Need?
                    </h1>
                    <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">
                        A Simple Guide for Drivers
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <section className="px-4 py-16 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-amber-100">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">
                                Engine oil plays a crucial role in maintaining your vehicle's health. It reduces friction, cools engine parts, and carries away dirt and contaminants. When the oil level is too low or too high, it can cause engine wear, overheating, or even complete failure. Knowing how much oil your car needs helps you take proper care of it and avoid costly repairs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why It Matters */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-6 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Gauge className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Why Oil Level Matters
                        </h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl space-y-4">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Oil forms a protective layer between moving engine parts. When there is not enough oil, metal surfaces rub against each other, creating heat and causing damage. Too much oil can also cause problems by increasing pressure and allowing excess oil to reach areas where it should not be.
                        </p>
                        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl">
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                Maintaining the correct level ensures smooth performance, improved fuel economy, and extended engine life.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Oil Capacity */}
            <section className="px-4 py-20 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Your Car's Oil Capacity
                        </h2>
                        <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto text-lg font-medium">
                            Every vehicle has a recommended oil capacity. This varies based on engine size and design. To find the correct amount:
                        </p>
                    </motion.div>

                    <div className="space-y-3 mb-12 max-w-3xl mx-auto">
                        {howToKnow.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl shadow-md"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-800 text-lg font-medium">{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {oilCapacities.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 text-center"
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="text-6xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-['Poppins'] font-bold mb-3 bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                                    {item.type}
                                </h3>
                                <div className="text-3xl font-bold text-amber-600 mb-3">{item.capacity}</div>
                                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-xl">
                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-md">
                        <p className="text-gray-800 text-lg font-bold">
                            ✅ Always follow the manufacturer's guidelines.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Check Oil Level */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-16 left-16 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Gauge className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Check Your Oil Level
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <p className="text-lg text-gray-800 mb-8 font-medium">
                            Checking your oil regularly helps catch problems early.
                        </p>
                        <div className="space-y-4">
                            {checkingSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-800 text-lg pt-1.5 font-medium">{step}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-md">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-800 font-medium">
                                    <strong className="text-blue-700">Important:</strong> If it is below MIN, add oil. If it is above MAX, you may need to drain some or have the engine checked.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* How to Top Up */}
            <section className="px-4 py-16 bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <Wrench className="w-10 h-10 text-amber-600" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                                Top Up Engine Oil
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-amber-100">
                            <p className="text-lg text-gray-800 mb-8 font-medium">
                                Adding oil is simple when done carefully.
                            </p>
                            <div className="space-y-4">
                                {toppingUpSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
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
                                        <strong className="text-orange-700">Warning:</strong> Avoid overfilling, as this can create pressure problems inside the engine.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Oil Type */}
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
                            Oil Type
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl space-y-4">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Engines are designed to work with specific oil grades. These grades are marked on the bottle, such as <strong className="text-purple-700">5W-30</strong> or <strong className="text-purple-700">10W-40</strong>. The grade controls how the oil flows at different temperatures.
                        </p>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                To choose the right type, always follow the manufacturer's recommendation. Using the wrong grade may reduce engine protection or affect performance.
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
                                ⚠️ If you notice any of these issues, check the oil immediately or seek assistance from a mechanic at CBD Panel and Paint.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Oil Change Frequency */}
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
                    <div className="absolute bottom-16 left-16 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <CheckCircle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Change Frequency
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl space-y-4">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Oil breaks down over time and collects dirt. Most cars need an oil change every <strong className="text-green-700">10,000 to 15,000 km</strong>, depending on the vehicle and driving conditions.
                        </p>
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl">
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                Short trips, heavy loads, and frequent start-stop driving may require more frequent changes.
                            </p>
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
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">
                        CBD Panel and Paint offers routine oil changes, filter replacements, and comprehensive engine checks, utilising high-quality oils that meet manufacturer specifications. We ensure your engine has the correct amount of oil and help you maintain a vehicle that runs smoothly.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If your oil light is on or you need a service, our expert team at CBD Panel and Paint is ready to assist.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="relative group bg-amber-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                    >
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-amber-600">BOOK AN OIL CHANGE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} topBgColor="bg-black" />
        </div>
    );
}
