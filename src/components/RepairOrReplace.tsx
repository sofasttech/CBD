import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, DollarSign, Wrench, AlertTriangle, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function RepairOrReplace() {
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

    const repairSuitable = [
        'Damage is small or moderate',
        'Metal hasn\'t torn or stretched too much',
        'Paint damage is shallow and fixable',
        'No structural components are affected',
        'The inner frame remains straight and strong'
    ];

    const repairExamples = [
        'Small to medium dents',
        'Scratches and scuffs',
        'Parking damage',
        'Minor hail dents',
        'Bumper scrapes and corner cracks'
    ];

    const replacementNeeded = [
        'The panel is badly crushed or folded',
        'Metal is stretched beyond shape recovery',
        'Rust has penetrated deeply',
        'Large cracks or holes are present',
        'Safety or structural strength is compromised',
        'Collision affects alignment or sensor mounts'
    ];

    const replacementExamples = [
        'Major impact accidents',
        'Severe panel distortion',
        'Rust spread across large areas',
        'Damage affecting airbags or crumple zones'
    ];

    const costFactors = [
        'Availability of parts',
        'Vehicle make and model',
        'Labour required for removal and refit',
        'Paint and blending area required'
    ];

    const pdrIdeal = [
        'Small dents with no paint damage',
        'Hail dents',
        'Single-panel depressions'
    ];

    const hiddenDamage = [
        'Bent brackets behind the panel',
        'Damaged sensor mounts',
        'Misalignment of doors or guards',
        'Early rust forming under cracked paint',
        'Safety structure compromise'
    ];

    const services = [
        'Honest guidance on repair vs replacement',
        'Full panel beating, dent removal & refinishing',
        'Precision colour matching and paintwork',
        'Panel replacement using quality parts',
        'Repair options for insurance & private work',
        'Structural checks to ensure the vehicle is safe',
        'Fast quotes from photos or in-person assessment',
        'Mechanical support if suspension or alignment is affected'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-indigo-900 to-purple-800 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Wrench className="w-8 h-8 text-purple-300" />
                        <p className="text-purple-300 text-sm font-medium uppercase tracking-wide">Decision Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6">
                        Repair or <span className="text-purple-300">Replace?</span>
                    </h1>
                    <p className="text-xl text-purple-100 leading-relaxed font-['Poppins'] font-extralight">
                        How to Know When a Panel Should Be Replaced
                    </p>
                </div>
            </motion.section>

            {/* Introduction */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        After an accident or even a minor scrape in a parking lot, one question often arises: Should the damaged panel be repaired, or is replacement a better option? In many cases, dents and scrapes can be repaired to look new again, but some damage is too severe for a safe and lasting fix. Knowing the difference helps you make informed decisions and avoid paying for the wrong type of repair.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Here is a clear guide to help vehicle owners understand when panel repair is suitable and when full panel replacement is the better choice.
                    </p>
                </div>
            </motion.section>

            {/* When Panel Can Be Repaired */}
            <section className="px-4 py-16 bg-green-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase">
                                When a Panel Can Be Repaired
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700">
                            Not all damage requires a new panel. In many cases, a skilled panel beater can restore the original shape and finish.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                Repair is usually suitable when:
                            </h3>
                            <div className="space-y-3">
                                {repairSuitable.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-green-500">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                Common repair-friendly damage includes:
                            </h3>
                            <div className="space-y-3">
                                {repairExamples.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-green-400">
                                        <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-8 bg-green-100 border-l-4 border-green-600 p-6 rounded"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-800 text-lg font-medium">
                            Professional repair keeps costs lower than replacement and preserves original factory alignment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* When Panel Should Be Replaced */}
            <section className="px-4 py-16 bg-red-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600" />
                            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase">
                                When a Panel Should Be Replaced
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700">
                            Replacement becomes the safer and more practical option when damage is too serious or structural. In some cases, repairing may cost more than replacing.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                A replacement is recommended when:
                            </h3>
                            <div className="space-y-3">
                                {replacementNeeded.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-red-500">
                                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                Examples of replacement-worthy damage:
                            </h3>
                            <div className="space-y-3">
                                {replacementExamples.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-red-400">
                                        <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-8 bg-red-100 border-l-4 border-red-600 p-6 rounded"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-800 text-lg font-medium">
                            If the repair would take extensive time and materials, replacement is often more cost-effective.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Cost Consideration */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <DollarSign className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            Cost Consideration: Repair vs Replace
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        Repair is usually cheaper, but not always. Panel replacement cost varies depending on:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {costFactors.map((factor, index) => (
                            <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                                <p className="text-gray-700">{factor}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
                        <p className="text-gray-800 text-lg">
                            Imported or late-model parts can increase cost, while common models may be more affordable to replace.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* PDR Section */}
            <motion.section
                className="px-4 py-16 bg-purple-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase mb-6">
                        What About Paintless Dent Removal (PDR)?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-['Poppins'] font-medium mb-4 text-gray-900">
                                PDR is ideal for:
                            </h3>
                            <div className="space-y-3">
                                {pdrIdeal.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-purple-500">
                                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600">
                            <p className="text-gray-800 text-lg leading-relaxed mb-4">
                                It is fast, cost-effective, and keeps the original paint intact.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                However, it is not suitable for cracked paint or sharp creases.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Hidden Damage */}
            <motion.section
                className="px-4 py-16 bg-yellow-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Search className="w-8 h-8 text-yellow-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            The Hidden Damage Most Drivers Don't See
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        Even small hits can cause damage beneath the surface.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 font-medium">Unseen issues may include:</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {hiddenDamage.map((issue, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{issue}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-yellow-100 border-l-4 border-yellow-600 p-6 rounded">
                        <p className="text-gray-800 text-lg font-medium">
                            This is why a professional inspection matters — visible damage is only part of the picture.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* How We Help */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                            How CBD Panel Beating & Mechanical Helps You Decide
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We carefully assess damage to recommend the most suitable repair option, not just the most expensive one. Our goal is to keep your vehicle safe, looking great, and cost-efficient to repair.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg border-l-4 border-indigo-500 hover:shadow-md transition"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{service}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-800 text-lg leading-relaxed">
                            Whether it's a minor dent or a damaged door after a collision, we take the time to inspect the vehicle, discuss your options, and recommend the best solution for your budget and safety.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final Thoughts */}
            <motion.section
                className="px-4 py-16 bg-black text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                        Final Thoughts
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-['Poppins'] font-extralight">
                        Choosing between repair and replacement depends on the severity of the damage, cost, safety, and long-term durability. Small dents and scratches are often repairable. Severe damage, structural weakness, or advanced rust usually indicates replacement. A quick assessment by a professional panel beater will give you a clear direction.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-['Poppins'] font-extralight">
                        If you're unsure whether your panel should be repaired or replaced, bring your vehicle to CBD Panel Beating & Mechanical or send us photos for a quote. We'll guide you through your best option with transparency and care.
                    </p>
                    <button
                        onClick={() => navigate('/contact')}
                        className="relative group bg-indigo-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                    >
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-indigo-600">GET YOUR ASSESSMENT</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} topBgColor="bg-black" />
        </div>
    );
}
