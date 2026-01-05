import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Wrench, CheckCircle, Car, FileCheck } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function BumperRepairGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollToSection = (id: string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); };

    const benefits = [
        { icon: Shield, title: 'Protecting Safety Systems', description: 'Modern bumpers are designed to work with safety features such as airbags, sensors, and crumple zones. Damage to the bumper can interrupt how these systems function. Even a small crack may affect the way the bumper absorbs force in a collision. Proper repair ensures the front of the vehicle responds as intended during an impact.', emoji: '🛡️' },
        { icon: AlertTriangle, title: 'Preventing Further Damage', description: 'A damaged bumper leaves other parts exposed. Radiators, headlights, sensors, and internal mounts can be damaged if the bumper is not repaired promptly. What starts as a minor dent may turn into a larger mechanical or electrical issue, especially when water and road debris get inside.', emoji: '⚠️' },
        { icon: Car, title: 'Improving Vehicle Appearance', description: 'The bumper is one of the first parts people notice. Scratches, dents, or cracks can make a car look older than it is. Professional repairs restore the original fit and finish, which improves the vehicle\'s value and presentation.', emoji: '🚗' }
    ];

    const checkSigns = ['Cracks or splits in the plastic', 'Loose or misaligned bumper corners', 'Scratches or scuffs from minor impacts', 'Gaps between the bumper and body panels', 'Unusual noises when driving over bumps'];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#1F366A] via-[#0C55AC] to-[#14A0B5] text-white relative" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Shield className="w-10 h-10 text-[#14A0B5]" />
                        <p className="text-[#14A0B5] text-sm font-medium uppercase tracking-wide drop-shadow-lg">Safety & Protection</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        Why <span className="text-[#14A0B5]">Bumper Repair</span> Matters
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">A Practical Guide for Drivers</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#0C55AC]/10 to-[#14A0B5]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0C55AC]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#0C55AC]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">The front bumper plays a bigger role in vehicle safety and performance than many drivers realise. It absorbs impact during collisions, protects key components, and helps maintain the car's structural strength. When the bumper is cracked, dented, or loose, it should be repaired promptly to avoid further damage and safety risks. A well-maintained bumper also keeps the vehicle looking clean and professional on the road.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-8">
                        {benefits.map((benefit, index) => (
                            <motion.div key={index} className="bg-white backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#0C55AC]/20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="flex items-start gap-6">
                                    <div className="text-5xl">{benefit.emoji}</div>
                                    <div>
                                        <h3 className="text-2xl font-['Poppins'] font-bold mb-4 bg-gradient-to-r from-[#0C55AC] to-[#14A0B5] bg-clip-text text-transparent">{benefit.title}</h3>
                                        <p className="text-lg text-gray-700 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="px-4 py-20 bg-gradient-to-br from-[#FDDD7F] via-[#783E6C] to-orange-600 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <AlertTriangle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">When to Check</h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-4">
                            {checkSigns.map((sign, index) => (
                                <motion.div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-[#FDDD7F]/10 rounded-xl shadow-md" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-gradient-to-br from-[#0C55AC] to-[#14A0B5] text-white relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">100%</div><div className="text-[#FDDD7F] text-lg">Safety Compliance</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">24/7</div><div className="text-[#FDDD7F] text-lg">Protection Restored</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">Expert</div><div className="text-[#FDDD7F] text-lg">Precision Repairs</div></div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">Our expert team at CBD Panel and Paint repairs front bumper damage for all vehicle makes and models. We restore the strength, alignment, and finish while ensuring the safety systems behind the bumper work as intended. Whether it is a minor scrape or a complete structural repair, we carry out the job with care and precision.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If your front bumper is damaged or you want an inspection, our expert team at CBD Panel and Paint are ready to assist.</p>
                    <button className="relative group bg-[#0C55AC] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#0C55AC]">BOOK A BUMPER INSPECTION</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
