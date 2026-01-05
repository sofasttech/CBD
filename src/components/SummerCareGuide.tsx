import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Droplets, Circle, Wind, Battery, Wrench, Shield, Package } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function SummerCareGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollToSection = (id: string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); };

    const summerCareTips = [
        { icon: '💧', title: 'Check Your Cooling System', description: 'Hot weather makes engines work harder. A healthy cooling system prevents overheating. Make sure the coolant level sits between MIN and MAX, check for leaks around hoses and radiator joints.' },
        { icon: '🛞', title: 'Monitor Tyre Pressure', description: 'Heat increases tyre pressure, which can lead to blowouts on long drives. Check tyre pressure weekly in summer and inspect tread depth and sidewalls for cracks.' },
        { icon: '❄️', title: 'Service Your Air Conditioning', description: 'Comfort is important on hot days. Test AC performance before a long trip, replace cabin filters for better airflow.' },
        { icon: '🔋', title: 'Battery Health Check', description: 'Heat accelerates battery fluid evaporation. Inspect terminals for corrosion and check battery age and voltage.' },
        { icon: '🔧', title: 'Maintain Engine Oil', description: 'Clean oil helps the engine cope with high temperatures. Follow scheduled oil changes and use the recommended oil grade.' },
        { icon: '☀️', title: 'Protect Paint from Sun', description: 'UV exposure can cause paint to fade. Wash and wax to maintain paint shine, use windscreen shades when parked.' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#FDDD7F] via-orange-500 to-[#783E6C] text-white relative" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Sun className="w-10 h-10 text-white animate-pulse" />
                        <p className="text-white text-sm font-medium uppercase tracking-wide drop-shadow-lg">Seasonal Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6 drop-shadow-2xl">
                        Summer Vehicle <span className="text-white">Care Tips</span>
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-['Poppins'] font-extralight drop-shadow-lg">Keep Your Car Running Smoothly in Hot Weather</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#FDDD7F]/10 to-orange-50/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDDD7F]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#FDDD7F]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">Summer in New Zealand brings long road trips, heavy sunlight, and higher temperatures, all of which place extra stress on your vehicle. Heat affects the cooling system, tyres, battery, air conditioning, and even the paint and interior trim. A little preparation goes a long way toward preventing breakdowns, overheating, and unexpected repairs. Here are some practical summer care tips to help your vehicle perform optimally throughout the warmer months.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 bg-gradient-to-r from-[#FDDD7F] to-orange-600 bg-clip-text text-transparent">Essential Summer Care Tips</h2>
                        <p className="text-lg text-gray-600">Follow these key steps to keep your vehicle summer-ready</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {summerCareTips.map((tip, index) => (
                            <motion.div key={index} className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="text-5xl mb-4 text-center">{tip.icon}</div>
                                <h3 className="text-xl font-['Poppins'] font-bold mb-3 text-center bg-gradient-to-r from-[#FDDD7F] to-orange-600 bg-clip-text text-transparent">{tip.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-center">{tip.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="px-4 py-16 bg-gradient-to-br from-[#FDDD7F] to-orange-600 text-white relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">6</div><div className="text-white/90 text-lg">Essential Care Tips</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">100%</div><div className="text-white/90 text-lg">Summer Ready</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">Safe</div><div className="text-white/90 text-lg">Hot Weather Driving</div></div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">CBD Panel and Paint workshop provides summer readiness checks to keep your vehicle performing at its best. We inspect coolant systems, tyres, brakes, air conditioning, filters, and general mechanical components. We also handle panel beating, bumper repair, refinishing, and bodywork if your vehicle needs cosmetic care after a long season on the road.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If you want your vehicle summer-ready or need a full check before your next trip, our expert team at CBD Panel and Paint is ready to assist.</p>
                    <button className="relative group bg-[#FDDD7F] text-black px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#FDDD7F]">BOOK SUMMER SERVICE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
