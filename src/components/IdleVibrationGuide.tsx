import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, Wrench, CheckCircle, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function IdleVibrationGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollToSection = (id: string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); };

    const causes = [
        { icon: '🔌', title: 'Worn Spark Plugs', description: 'Spark plugs ignite fuel. When worn, the engine misfires and shakes.' },
        { icon: '🔧', title: 'Engine Mount Problems', description: 'Mounts absorb vibration. When worn, the engine moves more than it should.' },
        { icon: '💨', title: 'Vacuum Leaks', description: 'Leaking hoses alter air-fuel balance, causing rough idle.' },
        { icon: '🛢️', title: 'Low Engine Oil', description: 'Low or dirty oil affects engine running and creates vibration.' }
    ];

    const seriousSigns = ['Strong vibration getting worse', 'Engine warning lights', 'Strange smells or smoke', 'Loss of power', 'Stalling at traffic lights'];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#783E6C] via-[#E4AEB3] to-[#783E6C] text-white relative" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Activity className="w-10 h-10 text-white" />
                        <p className="text-white text-sm font-medium uppercase tracking-wide drop-shadow-lg">Diagnostic Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        Why Your Car <span className="text-white">Vibrates</span> at Idle
                    </h1>
                    <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">A Driver's Guide</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#E4AEB3]/10 to-[#783E6C]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#783E6C]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#783E6C]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">A smooth-running engine should stay steady when the car is stopped. If the vehicle begins to shake or vibrate while idling, it indicates that something in the engine or supporting systems is not functioning properly. The cause may be small or more serious, but it is always worth checking before the issue grows.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 bg-gradient-to-r from-[#783E6C] to-[#E4AEB3] bg-clip-text text-transparent">Common Causes</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {causes.map((cause, index) => (
                            <motion.div key={index} className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#783E6C]/20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="flex items-start gap-4">
                                    <div className="text-5xl">{cause.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-['Poppins'] font-bold mb-3 bg-gradient-to-r from-[#783E6C] to-[#E4AEB3] bg-clip-text text-transparent">{cause.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{cause.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="px-4 py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <AlertTriangle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">Serious Signs</h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-4">
                            {seriousSigns.map((sign, index) => (
                                <motion.div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-md" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-gradient-to-br from-[#783E6C] to-[#E4AEB3] text-white relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><Activity className="w-12 h-12 mx-auto mb-4" /><h3 className="text-xl font-['Poppins'] font-medium mb-3">Minor Shaking</h3><p className="text-white/90 text-sm">Often spark plugs or filters</p></div>
                        <div><Settings className="w-12 h-12 mx-auto mb-4" /><h3 className="text-xl font-['Poppins'] font-medium mb-3">Moderate</h3><p className="text-white/90 text-sm">Engine mounts or leaks</p></div>
                        <div><AlertTriangle className="w-12 h-12 mx-auto mb-4" /><h3 className="text-xl font-['Poppins'] font-medium mb-3">Severe</h3><p className="text-white/90 text-sm">Immediate diagnosis needed</p></div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">CBD Panel and Paint diagnoses and repairs idle vibration problems for all makes and models. We check the ignition system, mounts, filters, sensors, and engine performance to find the source of the issue.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If your car shakes while idling or you are unsure what is causing it, our expert team at CBD Panel and Paint is ready to assist.</p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="relative group bg-[#783E6C] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                    >
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#783E6C]">BOOK A DIAGNOSTIC CHECK</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} topBgColor="bg-black" />
        </div>
    );
}
