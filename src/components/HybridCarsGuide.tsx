import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Gauge, Leaf, AlertTriangle, CheckCircle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function HybridCarsGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollToSection = (id: string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); };

    const mainParts = ['Petrol engine', 'Electric motor', 'High voltage battery pack', 'Inverter and power control unit', 'Regenerative braking system', 'Transmission designed for hybrid use'];
    const benefits = ['Lower fuel consumption', 'Reduced exhaust emissions', 'Smooth and quiet operation', 'Less wear on mechanical components', 'Strong resale value'];
    const warningSigns = ['Reduced fuel economy', 'Warning lights on the dashboard', 'Unusual engine noise', 'Weak acceleration', 'Irregular charging behaviour'];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#047342] via-[#14A0B5] to-[#0C55AC] text-white relative" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Leaf className="w-10 h-10 text-[#047342]" />
                        <p className="text-white text-sm font-medium uppercase tracking-wide drop-shadow-lg">Modern Technology</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        How <span className="text-[#FDDD7F]">Hybrid Cars</span> Work
                    </h1>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">A Practical Guide for New Zealand Drivers</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#047342]/10 to-[#14A0B5]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#047342]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#047342]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">Hybrid vehicles have become a familiar sight on New Zealand roads. They offer quieter driving, lower fuel use, and reduced emissions. Many drivers choose them for daily commuting, while others appreciate the long-term savings. Understanding how a hybrid works also helps when it comes to servicing, repairs, and maintaining safety systems.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 bg-gradient-to-r from-[#047342] to-[#14A0B5] bg-clip-text text-transparent">Main Parts of a Hybrid</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mainParts.map((part, index) => (
                            <motion.div key={index} className="flex items-start gap-3 p-6 bg-white backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-[#047342]/20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <CheckCircle className="w-6 h-6 text-[#047342] mt-1 flex-shrink-0" />
                                <p className="text-gray-800 font-medium">{part}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="px-4 py-20 bg-gradient-to-br from-[#047342] via-[#14A0B5] to-[#0C55AC] relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Leaf className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">Benefits</h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#047342]/10 to-[#14A0B5]/10 rounded-xl shadow-md" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <CheckCircle className="w-6 h-6 text-[#047342] mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <section className="px-4 py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                            <AlertTriangle className="w-10 h-10 text-white" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">Warning Signs</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {warningSigns.map((sign, index) => (
                                <motion.div key={index} className="flex items-start gap-3 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.section className="px-4 py-16 bg-gradient-to-br from-[#047342] to-[#14A0B5] text-white relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">50%</div><div className="text-white/90 text-lg">Lower Emissions</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">30%</div><div className="text-white/90 text-lg">Fuel Savings</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">Expert</div><div className="text-white/90 text-lg">Hybrid Specialists</div></div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">CBD Panel and Paint repairs and services hybrid vehicles with attention to safety and manufacturer requirements. We handle structural repairs, bumper work, sensor alignment, and panel repairs for all major hybrid models.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If your hybrid needs repairs or you want a professional inspection, our expert team at CBD Panel and Paint is here to assist.</p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="relative group bg-[#047342] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                    >
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#047342]">BOOK A HYBRID SERVICE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
