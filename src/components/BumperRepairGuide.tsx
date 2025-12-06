import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Wrench, CheckCircle, Car, FileCheck } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function BumperRepairGuide() {
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

    const benefits = [
        {
            icon: Shield,
            title: 'Protecting Safety Systems',
            description: 'Modern bumpers are designed to work with safety features such as airbags, sensors, and crumple zones. Damage to the bumper can interrupt how these systems function. Even a small crack may affect the way the bumper absorbs force in a collision. Proper repair ensures the front of the vehicle responds as intended during an impact.'
        },
        {
            icon: AlertTriangle,
            title: 'Preventing Further Damage',
            description: 'A damaged bumper leaves other parts exposed. Radiators, headlights, sensors, and internal mounts can be damaged if the bumper is not repaired promptly. What starts as a minor dent may turn into a larger mechanical or electrical issue, especially when water and road debris get inside.'
        },
        {
            icon: Wrench,
            title: 'Supporting Structural Strength',
            description: 'The bumper is part of the vehicle\'s front structure. It helps distribute force in a way that protects the cabin. When it is damaged, the car may not hold its original alignment. Repairs restore the bumper\'s fit and help maintain the overall shape and balance of the front end.'
        },
        {
            icon: Car,
            title: 'Improving Vehicle Appearance',
            description: 'The bumper is one of the first parts people notice. Scratches, dents, or cracks can make a car look older than it is. Professional repairs restore the original fit and finish, which improves the vehicle\'s value and presentation.'
        },
        {
            icon: FileCheck,
            title: 'Maintaining Insurance and Compliance',
            description: 'Insurance companies often require damaged bumpers to be repaired to keep coverage active. A bumper left unrepaired after an accident may cause issues during claims or future inspections. Repairs also ensure the vehicle meets safety inspection standards.'
        }
    ];

    const checkSigns = [
        'Cracks or splits in the plastic',
        'Loose or misaligned bumper corners',
        'Scratches or scuffs from minor impacts',
        'Gaps between the bumper and body panels',
        'Unusual noises when driving over bumps'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 to-slate-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Shield className="w-8 h-8 text-blue-400" />
                        <p className="text-blue-300 text-sm font-medium uppercase tracking-wide">Safety & Protection</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        Why Front Bumper Repair Matters
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
                        A Practical Guide for Drivers
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
                            The front bumper plays a bigger role in vehicle safety and performance than many drivers realise. It absorbs impact during collisions, protects key components, and helps maintain the car's structural strength. When the bumper is cracked, dented, or loose, it should be repaired promptly to avoid further damage and safety risks. A well-maintained bumper also keeps the vehicle looking clean and professional on the road.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Sections */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-12">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-8 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                                            <benefit.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-['Tomorrow'] font-medium mb-4 text-gray-900">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Get Checked */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-orange-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            When to Get Your Bumper Checked
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {checkSigns.map((sign, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-orange-50 border-l-4 border-orange-500"
                            >
                                <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-800">{sign}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 font-medium">
                        These signs indicate that the bumper may not be protecting your vehicle correctly.
                    </p>
                </div>
            </motion.section>

            {/* Visual Impact Section */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">100%</div>
                            <div className="text-blue-100 text-lg">Safety Compliance</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">24/7</div>
                            <div className="text-blue-100 text-lg">Protection Restored</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">Expert</div>
                            <div className="text-blue-100 text-lg">Precision Repairs</div>
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
                        Our expert team at CBD Panel Beating and Mechanical repairs front bumper damage for all vehicle makes and models. We restore the strength, alignment, and finish while ensuring the safety systems behind the bumper work as intended. Whether it is a minor scrape or a complete structural repair, we carry out the job with care and precision.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If your front bumper is damaged or you want an inspection, our expert team at CBD Panel Beating and Mechanical are ready to assist.
                    </p>
                    <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-blue-600">BOOK A BUMPER INSPECTION</span>
                    </button>
                </div>
            </motion.section>

            {/* Additional Benefits Section */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-8 text-center">
                        Why Choose Professional Bumper Repair?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Safety First', description: 'Ensures all safety systems function correctly' },
                            { title: 'OEM Standards', description: 'Repairs meet manufacturer specifications' },
                            { title: 'Insurance Approved', description: 'Work meets insurance requirements' },
                            { title: 'Value Protection', description: 'Maintains your vehicle\'s resale value' },
                            { title: 'Quality Materials', description: 'Using premium parts and finishes' },
                            { title: 'Expert Technicians', description: 'Experienced professionals handle every repair' }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 hover:shadow-lg transition">
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <h3 className="text-lg font-['Tomorrow'] font-medium">{item.title}</h3>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
