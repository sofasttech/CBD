import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryCharging, AlertTriangle, CheckCircle, Zap, Clock } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function BatteryChargingGuide() {
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

    const whatYouNeed = [
        'A suitable battery charger or jump starter',
        'Safety gloves and eye protection',
        'A clean, dry area to work',
        'Access to the battery terminals'
    ];

    const chargingSteps = [
        'Turn off the engine and remove the key.',
        'Locate the battery and check for any leaks or damage.',
        'Connect the positive charger lead to the positive battery terminal.',
        'Connect the negative lead to the negative terminal.',
        'Set the charger to the correct mode and amperage.',
        'Switch on the charger and allow it to run until the battery reaches full charge.'
    ];

    const jumpStartSteps = [
        'Park the assisting vehicle close, but do not let the cars touch.',
        'Turn off both engines.',
        'Connect the positive jumper lead to the flat battery\'s positive terminal.',
        'Connect the other end to the donor vehicle\'s positive terminal.',
        'Connect the negative lead to the donor vehicle\'s negative terminal.',
        'Attach the final negative clamp to a metal surface on the flat-battery car, away from the battery.',
        'Start the donor vehicle, then start the flat-battery vehicle.'
    ];

    const warningSigns = [
        'Slow or weak engine crank',
        'Dimming headlights',
        'Clicking noise when turning the key',
        'Electrical issues inside the car',
        'Battery warning light on the dashboard'
    ];

    const reasons = [
        { title: 'Short Trips', description: 'Insufficient time for battery to fully recharge', icon: '🚗' },
        { title: 'Cold Weather', description: 'Reduces battery capacity and cranking power', icon: '❄️' },
        { title: 'Lights Left On', description: 'Drains battery when engine is not running', icon: '💡' },
        { title: 'Ageing Battery', description: 'Natural degradation over time reduces charge capacity', icon: '⏰' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="min-h-[70vh] pb-16 px-4 bg-[url('/battary.webp')] bg-[size:150%] bg-center bg-no-repeat text-white relative flex flex-col justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60 backdrop-blur-[2px]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <BatteryCharging className="w-10 h-10 text-[#047342]" />
                        <p className="text-[#047342] text-sm font-medium uppercase tracking-wide drop-shadow-lg">Essential Knowledge</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        How to Charge a <span className="text-[#047342]">Car Battery</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">
                        A Simple Guide for Everyday Drivers
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#047342]/10 to-[#14A0B5]/10 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#047342]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14A0B5]/20 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#047342]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">
                                A flat or weak battery is one of the most common reasons a car refuses to start. Knowing how to charge a car battery safely can save time, prevent breakdowns, and keep your vehicle ready for daily use. Whether you use a portable charger or need to understand the basics of jump-starting, the steps are straightforward when done correctly.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Batteries Lose Charge */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#047342] via-[#14A0B5] to-[#0C55AC] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Battery className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Why Batteries Lose Charge
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            Car batteries weaken for several reasons. Short trips, cold weather, leaving lights on, or an ageing battery can all drain power. When the charge drops too low, the engine may crank slowly or not start at all. Understanding how to recharge the battery helps you avoid being stranded.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50 text-center"
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-5xl mb-4">{reason.icon}</div>
                                <h3 className="text-lg font-['Poppins'] font-bold mb-3 bg-gradient-to-r from-[#047342] to-[#14A0B5] bg-clip-text text-transparent">
                                    {reason.title}
                                </h3>
                                <div className="bg-gradient-to-r from-[#047342]/10 to-[#14A0B5]/10 p-3 rounded-xl">
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* What You Need */}
            <section className="px-4 py-16 bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0C55AC]/10 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#783E6C]/10 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold uppercase mb-6 bg-gradient-to-r from-[#0C55AC] to-[#14A0B5] bg-clip-text text-transparent">
                            What You Need Before Charging
                        </h2>
                        <div className="bg-gradient-to-br from-[#0C55AC]/5 to-[#14A0B5]/5 rounded-3xl p-8 shadow-xl border border-[#0C55AC]/20">
                            <p className="text-lg text-gray-800 mb-6 font-medium">
                                Before you begin, make sure you have:
                            </p>
                            <div className="space-y-4 mb-6">
                                {whatYouNeed.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-[#047342] mt-1 flex-shrink-0" />
                                        <p className="text-gray-800 text-lg font-medium">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="p-6 bg-gradient-to-r from-[#0C55AC]/10 to-[#14A0B5]/10 rounded-2xl shadow-md">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-[#0C55AC] flex-shrink-0 mt-1" />
                                    <p className="text-gray-800 font-medium">
                                        <strong className="text-[#0C55AC]">Tip:</strong> Always refer to the owner's manual if you are unsure about the battery location or specifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How to Charge Using a Charger */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#0C55AC] via-[#1F366A] to-[#783E6C] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-16 left-16 w-72 h-72 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <BatteryCharging className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Using a Charger
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <p className="text-lg text-gray-800 mb-8 font-medium">
                            A battery charger restores power slowly and safely. It is the best method when the battery is flat but still in good condition.
                        </p>
                        <div className="space-y-4">
                            {chargingSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 bg-gradient-to-r from-[#0C55AC]/10 to-[#14A0B5]/10 p-4 rounded-xl shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#047342] to-[#14A0B5] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-800 text-lg pt-1.5 font-medium">{step}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-gradient-to-r from-[#047342]/10 to-[#14A0B5]/10 rounded-2xl shadow-md">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-[#047342] flex-shrink-0 mt-1" />
                                <p className="text-gray-800 font-medium">
                                    <strong className="text-[#047342]">Important:</strong> Charging can take several hours, depending on the battery size and its initial charge level. Do not disconnect the charger early unless you need a quick top-up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Jump-Starting */}
            <section className="px-4 py-16 bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDDD7F]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#783E6C]/20 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <Zap className="w-10 h-10 text-[#FDDD7F]" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase bg-gradient-to-r from-[#FDDD7F] to-[#783E6C] bg-clip-text text-transparent">
                                Jump-Start a Car
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-[#FDDD7F]/10 to-[#783E6C]/10 rounded-3xl p-8 shadow-xl border border-[#FDDD7F]/30">
                            <p className="text-lg text-gray-800 mb-8 font-medium">
                                Jump-starting provides enough power to get the engine running. It is useful when you are on the road and need a quick solution.
                            </p>
                            <div className="space-y-4">
                                {jumpStartSteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FDDD7F] to-[#783E6C] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-800 text-lg pt-1.5 font-medium">{step}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-gradient-to-r from-[#FDDD7F]/20 to-[#783E6C]/20 rounded-2xl shadow-md">
                                <div className="flex items-start gap-3">
                                    <Zap className="w-6 h-6 text-[#783E6C] flex-shrink-0 mt-1" />
                                    <p className="text-gray-800 font-medium">
                                        <strong className="text-[#783E6C]">Remember:</strong> Let the engine run for at least fifteen minutes to help the alternator recharge the battery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Charging Time */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#14A0B5] via-[#0C55AC] to-[#1F366A] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-12 left-12 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-12 right-12 w-72 h-72 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Clock className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Charging Time
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl space-y-4">
                        <p className="text-lg text-gray-800 leading-relaxed font-medium">
                            A healthy battery on a standard charger may take <strong className="text-[#14A0B5]">four to twelve hours</strong>. Fast chargers reduce this time, but slow charging is usually gentler and better for long-term battery life.
                        </p>
                        <div className="bg-gradient-to-r from-[#14A0B5]/10 to-[#0C55AC]/10 p-6 rounded-2xl">
                            <p className="text-lg text-gray-800 leading-relaxed font-medium">
                                If the battery does not hold a charge even after proper charging, it may be time to replace it.
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
                                ⚠️ These signs often point to a failing battery or charging system.
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
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">
                        CBD Panelbeaters and Mechanical performs battery testing, charging, and replacements for all vehicle makes and models. We inspect the charging system, look for hidden faults, and install the correct battery according to your vehicle's requirements.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If your car is struggling to start or you suspect a battery issue, our team is ready to assist.
                    </p>
                    <button className="relative group bg-[#047342] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#047342]">BOOK A BATTERY CHECK</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
