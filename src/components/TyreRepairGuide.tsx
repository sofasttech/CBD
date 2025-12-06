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
            description: 'This is the most reliable method. The technician seals the hole from the inside and reinforces it from the outside. This restores the tyre\'s strength and protects against air leaks.'
        },
        {
            title: 'Puncture Patch',
            description: 'Used for small nail holes in the tread. The area is cleaned, sealed, and reinforced from the inside.'
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
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-indigo-900 to-indigo-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <CircleDot className="w-8 h-8 text-indigo-300" />
                        <p className="text-indigo-200 text-sm font-medium uppercase tracking-wide">Safety Information</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        Can Car Tyres Be Repaired?
                    </h1>
                    <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
                        A Simple Guide for New Zealand Drivers
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
                            A flat or damaged tyre is a common inconvenience, but not every tyre needs to be replaced. In many cases, a safe and proper repair can restore the tyre and get you back on the road. The key is to understand when a tyre can be repaired and when replacement is the safer choice. Knowing the difference helps protect your safety and saves unnecessary costs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* When Can Be Repaired */}
            <motion.section
                className="px-4 py-16 bg-green-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            When a Tyre Can Be Repaired
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        Tyre repair is possible when the damage meets specific safety conditions. A tyre can usually be repaired if:
                    </p>
                    <div className="space-y-3 mb-6">
                        {canRepair.map((condition, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white border-l-4 border-green-500">
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-lg">{condition}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-600">
                        <p className="text-gray-800">
                            <strong>Important:</strong> A qualified technician will inspect the inside of the tyre to confirm it is safe for repair. A visual check from the outside is not always enough.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* When Cannot Be Repaired */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-8 h-8 text-red-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                When a Tyre Should Not Be Repaired
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 mb-6">
                            Some types of damage cannot be safely fixed. The tyre must be replaced when:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {cannotRepair.map((condition, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500"
                                >
                                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800">{condition}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-red-100 border-l-4 border-red-600">
                            <p className="text-gray-800 font-medium">
                                <strong>Warning:</strong> Repairing a tyre that is structurally weak can lead to sudden failure, which is particularly dangerous at high speeds.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Types of Repairs */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Wrench className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Types of Safe Tyre Repairs
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-8">
                        Professional repairs follow strict safety methods.
                    </p>
                    <div className="space-y-6">
                        {repairTypes.map((type, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition">
                                <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 text-indigo-600 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6" />
                                    {type.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {type.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 mt-6 font-medium">
                        These repairs must be done by trained technicians using proper equipment.
                    </p>
                </div>
            </motion.section>

            {/* Temporary Sealants Warning */}
            <motion.section
                className="px-4 py-16 bg-yellow-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-yellow-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Why You Should Not Use Temporary Sealants
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Aerosol sealants or DIY plugs can provide a short-term solution, but they are not a reliable long-term option. They may hide internal damage and weaken the tyre.
                    </p>
                    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-600">
                        <p className="text-gray-800">
                            <strong>Recommendation:</strong> Temporary sealants should be used only to safely transport the car to a workshop.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Warning Signs */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                                Signs Your Tyre Needs Immediate Attention
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {warningSigns.map((sign, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 bg-red-50 border-l-4 border-red-500"
                                >
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                                    <p className="text-gray-800">{sign}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-gray-700 font-medium">
                            Driving with these signs can be unsafe, especially at highway speeds.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Prevention Tips */}
            <motion.section
                className="px-4 py-16 bg-indigo-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-indigo-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            How to Reduce the Risk of Tyre Damage
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {preventionTips.map((tip, index) => (
                            <div key={index} className="flex items-start gap-3 p-4 bg-white border border-indigo-200">
                                <CheckCircle className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-700 text-lg">{tip}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 mt-6">
                        Good tyre care helps prevent punctures and extends tyre life.
                    </p>
                </div>
            </motion.section>

            {/* Visual Stats */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">6mm</div>
                            <div className="text-indigo-100 text-lg">Max Repairable Puncture Size</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">100%</div>
                            <div className="text-indigo-100 text-lg">Safety Assessment Required</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">Expert</div>
                            <div className="text-indigo-100 text-lg">Professional Inspection</div>
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
                        CBD Panel Beating and Mechanical offers professional tyre inspections, puncture repairs, replacements, and wheel alignment to keep your vehicle safe on New Zealand roads. We carefully assess the damage and recommend the safest option, whether it is repair or replacement.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If you have a flat tyre or suspect damage, our expert team at CBD Panel Beating and Mechanical is ready to assist.
                    </p>
                    <button className="relative group bg-indigo-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-indigo-600">BOOK A TYRE INSPECTION</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
