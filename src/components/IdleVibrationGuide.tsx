import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Wrench, CheckCircle, Settings, Radio } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function IdleVibrationGuide() {
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

    const causes = [
        {
            number: '1',
            title: 'Worn or Dirty Spark Plugs',
            description: 'Spark plugs ignite the fuel and air mixture in the engine. When they are worn or dirty, the engine misfires. This creates uneven running and noticeable shaking when the vehicle is at a standstill. Replacing spark plugs is a straightforward fix and often restores smooth idling.'
        },
        {
            number: '2',
            title: 'Blocked Air or Fuel Filters',
            description: 'Engines need clean air and fuel to run properly. A blocked filter reduces the flow, causing the engine to struggle at low speeds. This can lead to rough idling, hesitation, or uneven vibration.'
        },
        {
            number: '3',
            title: 'Engine Mount Problems',
            description: 'Engine mounts hold the engine in place and absorb vibration. When a mount wears out or breaks, the engine moves more than it should. This often manifests as shaking when the car is stopped, especially when in gear.'
        },
        {
            number: '4',
            title: 'Vacuum Leaks',
            description: 'Modern engines rely on a sealed vacuum system. A leaking hose or cracked connection allows extra air to enter. This alters the air-fuel balance, resulting in a rough idle or stalling.'
        },
        {
            number: '5',
            title: 'Faulty Ignition or Fuel System Components',
            description: 'Coils, injectors, and sensors can wear or fail over time. When these parts do not deliver fuel or spark correctly, the engine becomes unstable at idle.'
        },
        {
            number: '6',
            title: 'Low or Old Engine Oil',
            description: 'Thick or dirty oil can affect how the engine runs. If the oil level is low, the engine may work harder and produce vibration. Regular oil changes help avoid this.'
        },
        {
            number: '7',
            title: 'Problems With the Exhaust System',
            description: 'A damaged exhaust manifold or a loose section can create vibration. It may also cause noise, fumes, or reduced performance.'
        }
    ];

    const seriousSigns = [
        'Strong vibration that gets worse over time',
        'Engine warning lights',
        'Strange smells or smoke',
        'Loss of power',
        'Stalling at traffic lights'
    ];

    const diyChecks = [
        'Look at the oil level',
        'Check whether the air filter is dirty',
        'Listen for hissing sounds from hoses',
        'Notice if the vibration happens only in gear or in all conditions'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-purple-900 to-purple-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Activity className="w-8 h-8 text-purple-300" />
                        <p className="text-purple-200 text-sm font-medium uppercase tracking-wide">Diagnostic Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        Why Your Car Vibrates While Idling
                    </h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
                        A Driver's Guide
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
                            A smooth-running engine should stay steady when the car is stopped. If the vehicle begins to shake or vibrate while idling, it indicates that something in the engine or supporting systems is not functioning properly. The cause may be small or more serious, but it is always worth checking before the issue grows.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Common Causes */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Settings className="w-8 h-8 text-purple-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                Common Causes of Shaking at Idle
                            </h2>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        {causes.map((cause, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                                        {cause.number}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 text-gray-900">
                                            {cause.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {cause.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Serious Signs */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            When Shaking Might Be a Sign of a Bigger Issue
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        Some symptoms should be checked right away.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {seriousSigns.map((sign, index) => (
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
                        These signs may indicate electrical faults, internal engine wear, or fuel system issues that should not be overlooked.
                    </p>
                </div>
            </motion.section>

            {/* DIY Checks */}
            <motion.section
                className="px-4 py-16 bg-purple-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Wrench className="w-8 h-8 text-purple-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            What You Can Do First
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        You can carry out a few simple checks before visiting a workshop.
                    </p>
                    <div className="space-y-3">
                        {diyChecks.map((check, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white border border-purple-200">
                                <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-lg">{check}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 mt-6">
                        These observations help identify the cause more quickly.
                    </p>
                </div>
            </motion.section>

            {/* Quick Reference */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-8 text-center">
                        Quick Diagnostic Reference
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white bg-opacity-10 backdrop-blur p-6 text-center">
                            <Radio className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">Minor Shaking</h3>
                            <p className="text-purple-100 text-sm">
                                Often spark plugs, filters, or minor tune-up needed
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur p-6 text-center">
                            <Activity className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">Moderate Vibration</h3>
                            <p className="text-purple-100 text-sm">
                                Engine mounts, vacuum leaks, or fuel system issues
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur p-6 text-center">
                            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-purple-200" />
                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">Severe Shaking</h3>
                            <p className="text-purple-100 text-sm">
                                Requires immediate professional diagnosis and repair
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
                    <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-mulish font-extralight">
                        CBD Panel Beating and Mechanical diagnoses and repairs idle vibration problems for all makes and models. We check the ignition system, mounts, filters, sensors, and engine performance to find the source of the issue. Early inspection prevents further damage and keeps your vehicle running safely and smoothly.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If your car shakes while idling or you are unsure what is causing it, our expert team at CBD Panel Beating and Mechanical is ready to assist.
                    </p>
                    <button className="relative group bg-purple-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-purple-600">BOOK A DIAGNOSTIC CHECK</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
