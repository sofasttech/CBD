import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Volume2, Activity, Flame, Navigation2, Droplets, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function BrakeWarningGuide() {
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

    const warningSignsData = [
        {
            icon: AlertTriangle,
            title: 'Warning Light on the Dashboard',
            description: 'Most modern vehicles have a brake warning light. When this light comes on, it typically indicates low brake fluid, worn brake pads, or a problem with the ABS system. Any brake warning light should be checked without delay. Driving with this light on is unsafe.',
            color: '#0C55AC',
            bgColor: 'from-[#0C55AC]/10 to-[#14A0B5]/10'
        },
        {
            icon: Volume2,
            title: 'Squealing or Grinding Sounds',
            description: 'Brakes are designed to make a light squeal when pads are worn. This early alert tells you that it is time for replacement. If the sound changes to grinding or scraping, the pads may be completely worn, and the metal components are now touching. This can damage the discs and increase repair costs.',
            color: '#FDDD7F',
            bgColor: 'from-[#FDDD7F]/20 to-[#783E6C]/10'
        },
        {
            icon: Activity,
            title: 'Soft or Spongy Brake Pedal',
            description: 'A soft pedal typically indicates air or moisture in the brake lines, low fluid levels, or a hydraulic issue. The pedal may sink deeper than usual before the vehicle comes to a complete stop. This reduces stopping power and requires immediate attention.',
            color: '#14A0B5',
            bgColor: 'from-[#14A0B5]/10 to-[#0C55AC]/10'
        },
        {
            icon: Activity,
            title: 'Vibrations When Braking',
            description: 'If the steering wheel or brake pedal shakes when slowing down, the brake discs may be warped or uneven. This often occurs due to heavy braking, worn components, or heat buildup. The sooner this is checked, the safer the vehicle will be.',
            color: '#783E6C',
            bgColor: 'from-[#783E6C]/10 to-[#E4AEB3]/10'
        },
        {
            icon: Navigation2,
            title: 'Car Pulling to One Side',
            description: 'If the vehicle drifts left or right when braking, one side of the braking system may be working harder than the other. This can be caused by seized callipers, uneven pads, or low tyre pressure. Pulling during braking is unsafe and needs quick inspection.',
            color: '#1F366A',
            bgColor: 'from-[#1F366A]/10 to-[#0C55AC]/10'
        },
        {
            icon: Flame,
            title: 'Burning Smell After Braking',
            description: 'A sharp burning smell can indicate overheated brakes, often after long downhill drives or heavy braking. If the smell is strong or continues, stop the vehicle safely and allow the brakes to cool. Overheating can cause brake fade and reduce stopping ability.',
            color: '#047342',
            bgColor: 'from-[#047342]/10 to-[#14A0B5]/10'
        },
        {
            icon: Clock,
            title: 'Increased Stopping Distance',
            description: 'If the vehicle takes longer to stop, even with firm pressure on the pedal, brake pads may be worn or the system may not be applying pressure evenly. This is one of the clearest signs that service is needed.',
            color: '#0C55AC',
            bgColor: 'from-[#0C55AC]/10 to-[#783E6C]/10'
        },
        {
            icon: Droplets,
            title: 'Brake Fluid Leaks',
            description: 'Brake fluid is vital for pressure in the system. Leaks often appear as clear or light brown drops near the wheels or under the engine bay. Low fluid leads to reduced braking power, so any leak should be fixed straight away.',
            color: '#14A0B5',
            bgColor: 'from-[#14A0B5]/10 to-[#047342]/10'
        }
    ];

    const seekHelpSigns = [
        'Warning lights',
        'Unusual noises',
        'Vibrations',
        'Reduced braking power',
        'Burning smells',
        'Leaks'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#1F366A] via-red-700 to-red-800 text-white relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[#FDDD7F] text-sm font-medium uppercase tracking-wide mb-4 drop-shadow-lg">Critical Safety Information</p>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6 drop-shadow-2xl">
                        Brake System <span className="text-[#FDDD7F]">Warning Signs</span>
                    </h1>
                    <p className="text-xl text-gray-200 leading-relaxed font-['Poppins'] font-extralight drop-shadow-lg">
                        What Every Driver Should Know
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-white via-[#0C55AC]/10 to-[#14A0B5]/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0C55AC]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14A0B5]/20 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#0C55AC]/20">
                        <p className="text-xl text-gray-800 leading-relaxed font-medium">
                            Your vehicle's braking system is one of its most important safety features. When something is not right, the brakes usually give early warning signs. Recognising these signals helps prevent expensive repairs and reduces the risk of accidents. Many issues begin small, but they become serious if ignored. Understanding the key signs helps you stay safe on the road and ensures your vehicle performs as it should.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Warning Signs */}
            <section className="px-4 py-20 bg-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#783E6C]/10 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FDDD7F]/10 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase mb-4 bg-gradient-to-r from-[#1F366A] to-[#0C55AC] bg-clip-text text-transparent">
                            Common Warning Signs
                        </h2>
                        <p className="text-lg text-gray-600">
                            Watch for these critical indicators of brake system problems
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {warningSignsData.map((sign, index) => (
                            <motion.div
                                key={index}
                                className="bg-white backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-4 bg-gradient-to-br ${sign.bgColor} rounded-2xl flex-shrink-0 shadow-lg`}>
                                        <sign.icon className="w-7 h-7" style={{ color: sign.color }} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-['Poppins'] font-bold mb-3 text-gray-900">
                                            {sign.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {sign.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Seek Help */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#0C55AC] via-[#1F366A] to-[#783E6C] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-16 left-16 w-72 h-72 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Shield className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            When to Seek Help
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-6">
                        <p className="text-lg text-gray-800 leading-relaxed mb-8 font-medium">
                            Brake problems can develop quickly. If you notice any of the following, your vehicle should be checked as soon as possible:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {seekHelpSigns.map((sign, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-4 bg-gradient-to-r from-[#0C55AC]/10 to-[#14A0B5]/10 p-4 rounded-xl shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <AlertTriangle className="w-6 h-6 text-[#0C55AC] flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-red-100 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-800 text-lg font-bold">
                                Safety Alert: Driving with brake issues puts you and others at risk.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Visual Stats */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Poppins'] font-bold mb-3">8</div>
                            <div className="text-red-100 text-lg">Key Warning Signs</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Poppins'] font-bold mb-3">100%</div>
                            <div className="text-red-100 text-lg">Safety Critical System</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Poppins'] font-bold mb-3">Fast</div>
                            <div className="text-red-100 text-lg">Response Time Needed</div>
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
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-['Poppins'] font-extralight">
                        CBD Panel and Paint carries out full brake inspections and repairs for all makes and models. We check pads, discs, callipers, brake fluid, ABS sensors, and hydraulic systems to find the exact cause of the problem. With proper care, your brakes remain responsive and reliable in all conditions.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If your brakes feel different or you want a safety check, our expert team at CBD Panel and Paint is ready to assist.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="relative group bg-[#0C55AC] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                    >
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#0C55AC]">BOOK A BRAKE INSPECTION</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} topBgColor="bg-black" />
        </div>
    );
}
