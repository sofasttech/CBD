import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Phone as PhoneIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function MinorAccidentGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const scrollToSection = (id: string) => { const element = document.getElementById(id); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } setMenuOpen(false); };

    const steps = [
        { icon: '🛡️', number: 1, title: 'Check for Safety First', description: 'Turn on hazard lights, ensure everyone is safe, move vehicle to safety if drivable.' },
        { icon: '🤝', number: 2, title: 'Stay Calm', description: 'Do not admit fault on the spot. Speak respectfully and let insurance determine liability.' },
        { icon: '📋', number: 3, title: 'Exchange Details', description: 'Full name, contact, vehicle registration, insurance details, driver\'s licence, photos.' },
        { icon: '📸', number: 4, title: 'Take Photos', description: 'Document all visible damage, road position, and surroundings from multiple angles.' },
        { icon: '☎️', number: 5, title: 'Notify Insurance', description: 'Inform your insurer even for small damage. Provide details and photos.' },
        { icon: '🔧', number: 6, title: 'Book Inspection', description: 'Professional inspection ensures the car remains safe. Check for hidden damage.' },
        { icon: '✅', number: 7, title: 'Choose Repair Method', description: 'Insurance claim for major damage or private repair for small issues below excess.' }
    ];

    const risks = ['Paint flaking or rust later', 'Sensors failing', 'Misaligned bumper', 'Safety systems not reacting'];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-red-900 via-orange-600 to-red-700 text-white relative" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <AlertTriangle className="w-10 h-10 text-[#FDDD7F]" />
                        <p className="text-[#FDDD7F] text-sm font-medium uppercase tracking-wide drop-shadow-lg">Accident Response Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6 drop-shadow-2xl">
                        Had a Minor <span className="text-[#FDDD7F]">Car Accident?</span>
                    </h1>
                    <p className="text-xl text-gray-100 leading-relaxed font-['Poppins'] font-extralight drop-shadow-lg">How to Respond & Get Repairs</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-orange-50/20 to-red-50/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-orange-200/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">Minor crashes happen more often than we expect. A simple bumper tap, scraped paint, or low-speed collision can leave vehicle owners unsure about what to do next. Even when damage appears minor, handling the situation correctly protects your safety, maintains insurance validity, and ensures proper repairs.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">7 Steps to Follow</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {steps.map((step, index) => (
                            <motion.div key={index} className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">{step.number}</div>
                                <div className="text-5xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-['Poppins'] font-bold mb-3 text-gray-900">{step.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section className="px-4 py-20 bg-gradient-to-br from-red-600 via-orange-500 to-red-600 relative overflow-hidden" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <AlertTriangle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">Don't Ignore Damage</h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-4">
                            {risks.map((risk, index) => (
                                <motion.div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-md" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{risk}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-['Poppins'] font-extralight">CBD Panel and Paint assists through the full post-accident process. We provide free damage checks, insurance claim support, fast quotes, and high-quality panel beating and paint refinishing.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If you have had a minor accident and need guidance or a repair quote, CBD Panel and Paint is here to help.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="tel:(09) 360 5023" className="flex items-center gap-2 bg-[#FDDD7F] text-black px-8 py-4 font-['Poppins'] font-medium text-lg hover:bg-[#FDDD7F]/90 transition">
                            <PhoneIcon className="w-5 h-5" />
                            <span>09 360 5023</span>
                        </a>
                        <button onClick={() => navigate('/contact')} className="relative group bg-white text-black px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-[#FDDD7F] w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10">CONTACT US ONLINE</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
