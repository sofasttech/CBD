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
        { title: 'Short Trips', description: 'Insufficient time for battery to fully recharge' },
        { title: 'Cold Weather', description: 'Reduces battery capacity and cranking power' },
        { title: 'Lights Left On', description: 'Drains battery when engine is not running' },
        { title: 'Ageing Battery', description: 'Natural degradation over time reduces charge capacity' }
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
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <BatteryCharging className="w-8 h-8 text-green-300" />
                        <p className="text-green-200 text-sm font-medium uppercase tracking-wide">Essential Knowledge</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center">
                        How to Charge a Car Battery
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center">
                        A Simple Guide for Everyday Drivers
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <section className="px-4 py-0 md:py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            A flat or weak battery is one of the most common reasons a car refuses to start. Knowing how to charge a car battery safely can save time, prevent breakdowns, and keep your vehicle ready for daily use. Whether you use a portable charger or need to understand the basics of jump-starting, the steps are straightforward when done correctly.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Why Batteries Lose Charge */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Battery className="w-8 h-8 text-green-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            Why Car Batteries Lose Charge
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Car batteries weaken for several reasons. Short trips, cold weather, leaving lights on, or an ageing battery can all drain power. When the charge drops too low, the engine may crank slowly or not start at all. Understanding how to recharge the battery helps you avoid being stranded.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-['Poppins'] font-medium mb-3 text-green-600">{reason.title}</h3>
                                <p className="text-gray-600 text-sm">{reason.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* What You Need */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase mb-6">
                            What You Need Before Charging
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Before you begin, make sure you have:
                        </p>
                        <div className="space-y-3 mb-6">
                            {whatYouNeed.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700 text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-blue-50 border-l-4 border-blue-600">
                            <p className="text-gray-800">
                                <strong>Tip:</strong> Always refer to the owner's manual if you are unsure about the battery location or specifications.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* How to Charge Using a Charger */}
            <motion.section
                className="px-4 py-16 bg-green-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <BatteryCharging className="w-8 h-8 text-green-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            How to Charge a Car Battery Using a Charger
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        A battery charger restores power slowly and safely. It is the best method when the battery is flat but still in good condition.
                    </p>
                    <div className="space-y-4 mb-6">
                        {chargingSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                </div>
                                <p className="text-gray-700 text-lg pt-1">{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-green-100 border-l-4 border-green-600">
                        <p className="text-gray-800 mb-2">
                            <strong>Important:</strong> Charging can take several hours, depending on the battery size and its initial charge level. Do not disconnect the charger early unless you need a quick top-up.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Jump-Starting */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-8 h-8 text-yellow-600" />
                            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                                How to Jump-Start a Car
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Jump-starting provides enough power to get the engine running. It is useful when you are on the road and need a quick solution.
                        </p>
                        <div className="space-y-4 mb-6">
                            {jumpStartSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-700 text-lg pt-1">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600">
                            <p className="text-gray-800">
                                <strong>Remember:</strong> Let the engine run for at least fifteen minutes to help the alternator recharge the battery.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Charging Time */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            How Long Should a Car Battery Take to Charge?
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        A healthy battery on a standard charger may take <strong>four to twelve hours</strong>. Fast chargers reduce this time, but slow charging is usually gentler and better for long-term battery life.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        If the battery does not hold a charge even after proper charging, it may be time to replace it.
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
                            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                                Signs Your Battery Needs Attention
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
                            These signs often point to a failing battery or charging system.
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
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">
                        CBD Panelbeaters and Mechanical performs battery testing, charging, and replacements for all vehicle makes and models. We inspect the charging system, look for hidden faults, and install the correct battery according to your vehicle's requirements.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If your car is struggling to start or you suspect a battery issue, our team is ready to assist.
                    </p>
                    <button className="relative group bg-green-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-green-600">BOOK A BATTERY CHECK</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
