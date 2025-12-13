import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Volume2, Activity, Flame, Navigation2, Droplets, Clock, Shield } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function BrakeWarningGuide() {
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

    const warningSignsData = [
        {
            icon: AlertTriangle,
            title: 'Warning Light on the Dashboard',
            description: 'Most modern vehicles have a brake warning light. When this light comes on, it typically indicates low brake fluid, worn brake pads, or a problem with the ABS system. Any brake warning light should be checked without delay. Driving with this light on is unsafe.',
            color: 'red'
        },
        {
            icon: Volume2,
            title: 'Squealing or Grinding Sounds',
            description: 'Brakes are designed to make a light squeal when pads are worn. This early alert tells you that it is time for replacement. If the sound changes to grinding or scraping, the pads may be completely worn, and the metal components are now touching. This can damage the discs and increase repair costs.',
            color: 'orange'
        },
        {
            icon: Activity,
            title: 'Soft or Spongy Brake Pedal',
            description: 'A soft pedal typically indicates air or moisture in the brake lines, low fluid levels, or a hydraulic issue. The pedal may sink deeper than usual before the vehicle comes to a complete stop. This reduces stopping power and requires immediate attention.',
            color: 'yellow'
        },
        {
            icon: Activity,
            title: 'Vibrations When Braking',
            description: 'If the steering wheel or brake pedal shakes when slowing down, the brake discs may be warped or uneven. This often occurs due to heavy braking, worn components, or heat buildup. The sooner this is checked, the safer the vehicle will be.',
            color: 'purple'
        },
        {
            icon: Navigation2,
            title: 'Car Pulling to One Side',
            description: 'If the vehicle drifts left or right when braking, one side of the braking system may be working harder than the other. This can be caused by seized callipers, uneven pads, or low tyre pressure. Pulling during braking is unsafe and needs quick inspection.',
            color: 'blue'
        },
        {
            icon: Flame,
            title: 'Burning Smell After Braking',
            description: 'A sharp burning smell can indicate overheated brakes, often after long downhill drives or heavy braking. If the smell is strong or continues, stop the vehicle safely and allow the brakes to cool. Overheating can cause brake fade and reduce stopping ability.',
            color: 'red'
        },
        {
            icon: Clock,
            title: 'Increased Stopping Distance',
            description: 'If the vehicle takes longer to stop, even with firm pressure on the pedal, brake pads may be worn or the system may not be applying pressure evenly. This is one of the clearest signs that service is needed.',
            color: 'orange'
        },
        {
            icon: Droplets,
            title: 'Brake Fluid Leaks',
            description: 'Brake fluid is vital for pressure in the system. Leaks often appear as clear or light brown drops near the wheels or under the engine bay. Low fluid leads to reduced braking power, so any leak should be fixed straight away.',
            color: 'red'
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

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; border: string; icon: string; lightBg: string } } = {
            red: { bg: 'bg-red-50', border: 'border-red-500', icon: 'text-red-600', lightBg: 'bg-red-100' },
            orange: { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600', lightBg: 'bg-orange-100' },
            yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', icon: 'text-yellow-600', lightBg: 'bg-yellow-100' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600', lightBg: 'bg-purple-100' },
            blue: { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600', lightBg: 'bg-blue-100' }
        };
        return colors[color] || colors.red;
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-red-900 to-red-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-red-300 text-sm font-medium uppercase tracking-wide mb-4">Critical Safety Information</p>
                    <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Brake System <span className="text-red-300">Warning Signs</span>
                    </h1>
                    <p className="text-xl text-red-100 leading-relaxed font-mulish font-extralight">
                        What Every Driver Should Know
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
                        Your vehicle's braking system is one of its most important safety features. When something is not right, the brakes usually give early warning signs. Recognising these signals helps prevent expensive repairs and reduces the risk of accidents. Many issues begin small, but they become serious if ignored. Understanding the key signs helps you stay safe on the road and ensures your vehicle performs as it should.
                    </p>
                </div>
            </motion.section>

            {/* Warning Signs */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-4">
                            Common Warning Signs
                        </h2>
                        <p className="text-lg text-gray-600">
                            Watch for these critical indicators of brake system problems
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {warningSignsData.map((sign, index) => {
                            const colorClasses = getColorClasses(sign.color);
                            return (
                                <motion.div
                                    key={index}
                                    className={`${colorClasses.bg} border-l-4 ${colorClasses.border} p-6 hover:shadow-lg transition-all duration-300`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 ${colorClasses.lightBg} rounded-lg flex-shrink-0`}>
                                            <sign.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 text-gray-900">
                                                {sign.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                {sign.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* When to Seek Help */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="w-8 h-8 text-red-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            When to Seek Professional Help
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Brake problems can develop quickly. If you notice any of the following, your vehicle should be checked as soon as possible:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {seekHelpSigns.map((sign, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                <p className="text-gray-800 font-medium">{sign}</p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="bg-red-100 border-l-4 border-red-600 p-6 rounded">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <p className="text-gray-800 text-lg font-medium">
                                <strong>Safety Alert:</strong> Driving with brake issues puts you and others at risk.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Visual Stats */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-red-600 to-red-800 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">8</div>
                            <div className="text-red-100 text-lg">Key Warning Signs</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">100%</div>
                            <div className="text-red-100 text-lg">Safety Critical System</div>
                        </div>
                        <div>
                            <div className="text-5xl font-['Tomorrow'] font-bold mb-3">Fast</div>
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
                    <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-6">
                        How We Can Help
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6 font-mulish font-extralight">
                        CBD Panel and Paint carries out full brake inspections and repairs for all makes and models. We check pads, discs, callipers, brake fluid, ABS sensors, and hydraulic systems to find the exact cause of the problem. With proper care, your brakes remain responsive and reliable in all conditions.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If your brakes feel different or you want a safety check, our expert team at CBD Panel and Paint is ready to assist.
                    </p>
                    <button className="relative group bg-red-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-red-600">BOOK A BRAKE INSPECTION</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
