import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CircleDot, AlertTriangle, CheckCircle, XCircle, Wrench, Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function TyreRepairGuide() {
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

    const canRepair = [
        'The puncture is in the tread area',
        'The hole is caused by a nail or similar object',
        'The puncture is small, usually up to 6 mm',
        'The tyre has not been driven too long while flat',
        'There is no internal damage or sidewall cracking'
    ];

    const cannotRepair = [
        'The puncture is in the sidewall',
        'The hole is too large or irregular',
        'The tyre has been driven while flat, and the internal structure is damaged',
        'There are bulges, cuts, or exposed cords',
        'The tread is too worn or below legal limits'
    ];

    const repairTypes = [
        {
            title: 'Plug and Patch Repair',
            description: 'This is the most reliable method. The technician seals the hole from the inside and reinforces it from the outside. This restores the tyre\'s strength and protects against air leaks.',
            icon: '🔧'
        },
        {
            title: 'Puncture Patch',
            description: 'Used for small nail holes in the tread. The area is cleaned, sealed, and reinforced from the inside.',
            icon: '✓'
        }
    ];

    const warningSigns = [
        'Sudden loss of pressure',
        'A thumping or vibrating noise',
        'Visible object stuck in the tread',
        'Cracks, bulges, or cuts',
        'Uneven tyre wear'
    ];

    const preventionTips = [
        'Check tyre pressure regularly',
        'Avoid potholes and debris when possible',
        'Rotate tyres as recommended',
        'Keep wheels aligned',
        'Replace tyres before they become too worn'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-[#1F366A] via-[#0C55AC] to-[#14A0B5] text-white relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/40"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <CircleDot className="w-10 h-10 text-[#FDDD7F]" />
                        <p className="text-[#FDDD7F] text-sm font-medium uppercase tracking-wide drop-shadow-lg">Safety Information</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Poppins'] font-medium uppercase mb-6 text-center drop-shadow-2xl">
                        Can Car <span className="text-[#FDDD7F]">Tyres</span> Be Repaired?
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-['Poppins'] font-extralight text-center drop-shadow-lg">
                        A Simple Guide for New Zealand Drivers
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <section className="px-4 py-16 bg-gradient-to-br from-white via-[#0C55AC]/10 to-[#14A0B5]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#0C55AC]/20 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#14A0B5]/20 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#0C55AC]/20">
                            <p className="text-xl text-gray-800 leading-relaxed font-medium">
                                A flat or damaged tyre is a common inconvenience, but not every tyre needs to be replaced. In many cases, a safe and proper repair can restore the tyre and get you back on the road. The key is to understand when a tyre can be repaired and when replacement is the safer choice. Knowing the difference helps protect your safety and saves unnecessary costs.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* When Can Be Repaired */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#047342] via-[#14A0B5] to-[#0C55AC] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <CheckCircle className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            When Repairable
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-6">
                        <p className="text-lg text-gray-800 mb-6 font-medium">
                            Tyre repair is possible when the damage meets specific safety conditions. A tyre can usually be repaired if:
                        </p>
                        <div className="space-y-4">
                            {canRepair.map((condition, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 bg-gradient-to-r from-[#047342]/10 to-[#14A0B5]/10 p-4 rounded-xl shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle className="w-6 h-6 text-[#047342] mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 text-lg font-medium">{condition}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-[#0C55AC] flex-shrink-0 mt-1" />
                            <p className="text-gray-800 font-medium">
                                <strong className="text-[#0C55AC]">Important:</strong> A qualified technician will inspect the inside of the tyre to confirm it is safe for repair. A visual check from the outside is not always enough.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* When Cannot Be Repaired */}
            <section className="px-4 py-16 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#783E6C]/10 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl opacity-10"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8 justify-center">
                            <XCircle className="w-10 h-10 text-red-600" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase bg-gradient-to-r from-red-600 to-[#783E6C] bg-clip-text text-transparent">
                                Not Repairable
                            </h2>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-[#E4AEB3]/20 rounded-3xl p-8 shadow-xl border border-red-100">
                            <p className="text-lg text-gray-800 mb-6 font-medium">
                                Some types of damage cannot be safely fixed. The tyre must be replaced when:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                {cannotRepair.map((condition, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-800 font-medium">{condition}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="p-6 bg-red-100 rounded-2xl shadow-md">
                                <p className="text-gray-800 font-bold">
                                    <strong className="text-red-700">⚠️ Warning:</strong> Repairing a tyre that is structurally weak can lead to sudden failure, which is particularly dangerous at high speeds.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Types of Repairs */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#0C55AC] via-[#1F366A] to-[#783E6C] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0">
                    <div className="absolute top-16 right-16 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-16 left-16 w-72 h-72 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Wrench className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Safe Repairs
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <p className="text-lg text-gray-800 mb-8 font-medium">
                            Professional repairs follow strict safety methods.
                        </p>
                        <div className="space-y-6">
                            {repairTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-r from-[#0C55AC]/10 to-[#14A0B5]/10 rounded-2xl p-6 shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-3xl">{type.icon}</span>
                                        <h3 className="text-xl font-['Poppins'] font-bold bg-gradient-to-r from-[#0C55AC] to-[#14A0B5] bg-clip-text text-transparent">
                                            {type.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {type.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-800 mt-6 font-bold text-center">
                            ✅ These repairs must be done by trained technicians using proper equipment.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Warning Signs */}
            <section className="px-4 py-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                            <AlertTriangle className="w-10 h-10 text-white" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                                Warning Signs
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {warningSigns.map((sign, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-3 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                            <p className="text-lg text-gray-800 font-bold text-center">
                                ⚠️ Driving with these signs can be unsafe, especially at highway speeds.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prevention Tips */}
            <motion.section
                className="px-4 py-20 bg-gradient-to-br from-[#047342] via-[#14A0B5] to-[#0C55AC] relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0">
                    <div className="absolute top-12 left-12 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-12 right-12 w-72 h-72 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-4 mb-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-full border-2 border-white/30">
                        <Shield className="w-10 h-10 text-white" />
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold uppercase text-white">
                            Prevention Tips
                        </h2>
                    </div>

                    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                        <div className="space-y-4">
                            {preventionTips.map((tip, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 bg-gradient-to-r from-[#047342]/10 to-[#14A0B5]/10 p-4 rounded-xl shadow-md"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle className="w-6 h-6 text-[#047342] mt-1 flex-shrink-0" />
                                    <p className="text-gray-800 text-lg font-medium">{tip}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-800 mt-6 text-center font-bold">
                            ✅ Good tyre care helps prevent punctures and extends tyre life.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Visual Stats */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-[#1F366A] to-[#0C55AC] text-white relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FDDD7F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Poppins'] font-bold mb-3">6mm</div>
                            <div className="text-[#FDDD7F] text-lg">Max Repairable Puncture Size</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Poppins'] font-bold mb-3">100%</div>
                            <div className="text-[#FDDD7F] text-lg">Safety Assessment Required</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Poppins'] font-bold mb-3">Expert</div>
                            <div className="text-[#FDDD7F] text-lg">Professional Inspection</div>
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
                        CBD Panel and Paint offers professional tyre inspections, puncture repairs, replacements, and wheel alignment to keep your vehicle safe on New Zealand roads. We carefully assess the damage and recommend the safest option, whether it is repair or replacement.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If you have a flat tyre or suspect damage, our expert team at CBD Panel and Paint is ready to assist.
                    </p>
                    <button className="relative group bg-[#0C55AC] text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-[#0C55AC]">BOOK A TYRE INSPECTION</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
