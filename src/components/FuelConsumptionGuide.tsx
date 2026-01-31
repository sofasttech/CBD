import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fuel, TrendingUp, AlertTriangle, CheckCircle, Gauge, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function FuelConsumptionGuide() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

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

    const fuelFactors = [
        { icon: TrendingUp, title: 'Hard Acceleration and Heavy Braking', description: 'Fast take-offs burn more fuel because the engine needs extra power to push the vehicle forward. Heavy braking that follows wastes the energy already used. Smooth and steady acceleration helps keep fuel use under control.', emoji: '⚡' },
        { icon: Gauge, title: 'Driving at High Speeds', description: 'Engines work harder at higher speeds. Once the vehicle reaches a certain speed, typically around 90 to 100 km/h, fuel consumption increases sharply. Keeping a steady speed and avoiding unnecessary overtaking makes a noticeable difference.', emoji: '🏎️' },
        { icon: Fuel, title: 'Short Trips and Stop–Start Driving', description: 'Short trips do not allow the engine to warm up properly. A cold engine uses more fuel. Stop-and-start traffic also increases consumption because the engine continues to use power without covering much distance.', emoji: '🚦' },
        { icon: Settings, title: 'Extra Weight in the Vehicle', description: 'Carrying tools, equipment, or other heavy items can increase fuel consumption. Roof racks and loaded boot areas create extra drag or weight that the engine must overcome.', emoji: '📦' }
    ];

    const additionalFactors = [
        { title: 'Incorrect Tyre Pressure', description: 'Underinflated tyres increase rolling resistance. This forces the engine to work harder. Checking tyre pressure regularly is an easy way to improve fuel economy and maintain safe handling.' },
        { title: 'Poor Vehicle Maintenance', description: 'Several maintenance issues can lead to increased fuel consumption.', issues: ['Dirty air filter', 'Old spark plugs', 'Low engine oil or old oil', 'Blocked fuel filter', 'Misfiring engine components'], note: 'Regular servicing helps keep the engine running smoothly and reduces fuel consumption.' },
        { title: 'Air Conditioning and Electrical Load', description: 'Air conditioning places an extra load on the engine. Using it constantly on full power increases fuel use. Electrical accessories such as lights, heaters, and charging devices also draw energy.' },
        { title: 'Driving Uphill or Towing', description: 'Climbing steep hills or towing heavy loads requires more engine power. This naturally increases fuel use. Choosing lower gears and maintaining a steady speed helps manage consumption.' },
        { title: 'Wrong Wheel Alignment', description: 'If the wheels are not aligned correctly, the car does not roll smoothly. The added resistance makes the engine work harder. Proper alignment supports good fuel economy and extends tyre life.' }
    ];

    const checkSigns = ['Sudden jump in fuel consumption', 'Engine running rough', 'Strong fuel smell', 'Reduced power', 'Warning lights on the dashboard'];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            <motion.section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#783E6C] via-[#FDDD7F] to-orange-600 text-white relative" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Fuel className="w-10 h-10 text-[#FDDD7F]" />
                        <p className="text-[#FDDD7F] text-sm font-medium uppercase tracking-wide drop-shadow-lg">Efficiency Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        Car Using Too Much <span className="text-[#FDDD7F]">Fuel?</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">Key Reasons and What To Do</p>
                </div>
            </motion.section>

            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#FDDD7F]/10 to-[#783E6C]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDDD7F]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#783E6C]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#FDDD7F]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">Fuel costs add up quickly, especially when your vehicle starts using more petrol than usual. Many factors influence fuel consumption, and understanding them helps you drive more efficiently, reduce running costs, and identify early signs of mechanical issues. Some reasons are related to driving habits, while others come from maintenance or road conditions.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 py-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#FDDD7F]/10 rounded-full blur-3xl opacity-10"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-8 text-center bg-gradient-to-r from-[#783E6C] to-[#FDDD7F] bg-clip-text text-transparent">Primary Fuel Factors</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {fuelFactors.map((factor, index) => (
                            <motion.div key={index} className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-gradient-to-br from-[#FDDD7F]/20 to-[#783E6C]/10 rounded-2xl flex-shrink-0 shadow-lg text-3xl">{factor.emoji}</div>
                                    <div>
                                        <h3 className="text-xl font-['Poppins'] font-bold mb-3 text-gray-900">{factor.title}</h3>
                                        <p className="text-gray-700 leading-relaxed">{factor.description}</p>
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
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <AlertTriangle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">When to Check</h2>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-4">
                            {checkSigns.map((sign, index) => (
                                <motion.div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#FDDD7F]/10 to-orange-100/20 rounded-xl shadow-md" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                                    <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section className="px-4 py-16 bg-black text-white" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">How We Can Help</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">CBD Panel and Paint offers comprehensive mechanical checks, servicing, wheel alignment, and diagnostic services to pinpoint the cause of high fuel consumption. We examine filters, plugs, sensors, tyres, and all systems that impact fuel efficiency. With correct maintenance, your vehicle runs cleaner, smoother, and more economically.</p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">If your car is using more fuel than normal, our expert team at CBD Panel and Paint is ready to help.</p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="relative group bg-[#FDDD7F] text-black px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                    >
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#FDDD7F]">BOOK A FUEL EFFICIENCY CHECK</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
