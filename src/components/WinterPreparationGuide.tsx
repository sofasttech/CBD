import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Circle, Battery, Wrench, Eye, Droplets, Lightbulb, Package } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function WinterPreparationGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollToSection = (id: string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); };

    const preparationSteps = [
        { icon: '🛞', title: 'Check Tyre Condition', description: 'Wet and frosty roads reduce traction. Ensure tread depth is safe and maintain correct pressure.' },
        { icon: '🔋', title: 'Test Battery Health', description: 'Car batteries struggle in cold. Check voltage and replace ageing batteries before they fail.' },
        { icon: '🔧', title: 'Inspect Brakes', description: 'Brakes must perform well in slippery conditions. Check for squealing or grinding.' },
        { icon: '👁️', title: 'Ready Wipers & Washer', description: 'Replace worn wiper blades and top up washer fluid to prevent freezing.' },
        { icon: '💧', title: 'Check Coolant', description: 'Coolant protects the engine from freezing. Confirm the mix is suitable for winter.' },
        { icon: '💡', title: 'Inspect Lights', description: 'Shorter daylight means lights work harder. Replace dim bulbs and clean lenses.' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#1F366A] via-[#0C55AC] to-[#14A0B5] text-white relative" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Snowflake className="w-10 h-10 text-[#14A0B5] animate-pulse" />
                        <p className="text-[#14A0B5] text-sm font-medium uppercase tracking-wide drop-shadow-lg">Seasonal Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6 drop-shadow-2xl">
                        Preparing for <span className="text-[#14A0B5]">Winter</span>
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-['Poppins'] font-extralight drop-shadow-lg">A Practical Guide for New Zealand Drivers</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#0C55AC]/10 to-[#14A0B5]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#14A0B5]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#0C55AC]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">As temperatures drop, vehicles need extra care to stay safe, reliable, and efficient. Cold weather affects batteries, tyres, fluids, and visibility, and winter roads can be harsh on both mechanical and exterior components. Preparing early reduces the risk of breakdowns and keeps your car ready for winter travel.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 bg-gradient-to-r from-[#0C55AC] to-[#14A0B5] bg-clip-text text-transparent">Winter Preparation Steps</h2>
                        <p className="text-lg text-gray-600">Keep your vehicle winter-ready</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {preparationSteps.map((step, index) => (
                            <motion.div key={index} className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#14A0B5]/20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="text-5xl mb-4 text-center">{step.icon}</div>
                                <h3 className="text-xl font-['Poppins'] font-bold mb-3 text-center bg-gradient-to-r from-[#0C55AC] to-[#14A0B5] bg-clip-text text-transparent">{step.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-center">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="px-4 py-16 bg-gradient-to-br from-[#0C55AC] to-[#14A0B5] text-white relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">6</div><div className="text-white/90 text-lg">Key Preparation Steps</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">100%</div><div className="text-white/90 text-lg">Winter Ready</div></div>
                        <div><div className="text-5xl font-['Poppins'] font-bold mb-3">Safe</div><div className="text-white/90 text-lg">Cold Weather Driving</div></div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">CBD Panel and Paint offers comprehensive winter checks and servicing to ensure your vehicle remains reliable throughout the colder months. Our expert team inspects tyres, brakes, battery, fluids, lights, and mechanical components, making sure everything is winter-ready.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If you'd like a winter check or service before the cold weather arrives, CBD Panel and Paint are ready to help.</p>
                    <button className="relative group bg-[#14A0B5] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#14A0B5]">BOOK WINTER SERVICE</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
