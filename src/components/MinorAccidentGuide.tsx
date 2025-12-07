import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Users, Camera, Phone as PhoneIcon, Wrench, FileCheck, AlertCircle } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function MinorAccidentGuide() {
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

    const steps = [
        {
            icon: ShieldCheck,
            number: 1,
            title: 'Check for Safety First',
            description: 'Even minor accidents can cause sudden shock. Before anything else:',
            points: [
                'Turn on hazard lights',
                'Ensure everyone is safe',
                'Move the vehicle to a safe place if it is drivable'
            ],
            note: 'If anyone is injured or the location is unsafe, call emergency services immediately.',
            color: 'red'
        },
        {
            icon: Users,
            number: 2,
            title: 'Stay Calm and Avoid Arguments',
            description: 'Accidents can create tension, but remaining calm is important.',
            points: [
                'Do not admit fault on the spot',
                'Speak respectfully and keep communication simple',
                'Let the insurance process determine liability'
            ],
            note: 'A calm approach helps avoid unnecessary complications.',
            color: 'blue'
        },
        {
            icon: FileCheck,
            number: 3,
            title: 'Exchange Details with the Other Driver',
            description: 'This is a legal requirement in New Zealand.',
            points: [
                'Full name and contact number',
                'Vehicle registration number',
                'Insurance provider details',
                'Driver\'s licence if necessary',
                'Photos of the vehicles and the accident scene'
            ],
            note: 'The more information documented, the easier the claim process becomes.',
            color: 'green'
        },
        {
            icon: Camera,
            number: 4,
            title: 'Take Photos and Record Evidence',
            description: 'Visual proof can prevent misunderstandings later.',
            points: [
                'All visible damage',
                'Close and wide-angle shots',
                'Road position and surroundings',
                'Weather and traffic conditions'
            ],
            note: 'Photos support insurance claims and panel repair assessment.',
            color: 'purple'
        },
        {
            icon: PhoneIcon,
            number: 5,
            title: 'Notify Your Insurance Provider',
            description: 'Even if the damage appears small, it is wise to inform your insurer.',
            points: [
                'Provide the details and photos',
                'Explain what happened clearly',
                'Ask about your excess and claim process'
            ],
            note: 'For small repairs below excess, private repairs may be more cost-effective.',
            color: 'orange'
        },
        {
            icon: Wrench,
            number: 6,
            title: 'Book an Inspection with a Panel Beater',
            description: 'Minor damage can conceal underlying structural issues.',
            points: [
                'Cracked bumper tabs',
                'Sensor misalignment',
                'Wheel and suspension knock',
                'Damage under the paint layer',
                'Radiator or support bar shift'
            ],
            note: 'A professional inspection ensures the car remains safe to drive.',
            color: 'indigo'
        },
        {
            icon: FileCheck,
            number: 7,
            title: 'Decide on Repair Method: Insurance or Private',
            description: 'Both options have advantages.',
            points: [
                'Insurance Claim: Best for moderate to high-impact damage or when third-party involvement exists',
                'Private Repair: Ideal for small dents, scratches and bumper repairs that cost less than your insurance excess'
            ],
            note: 'At CBD Panel Beating & Mechanical, we will help you compare both and choose the most practical path.',
            color: 'cyan'
        }
    ];

    const risks = [
        'Paint flaking or rust developing later',
        'Sensors failing to detect obstacles',
        'Misaligned bumper leading to poor fitment',
        'Safety systems not reacting correctly in another crash'
    ];

    const services = [
        'Free visual damage checks and repair advice',
        'Insurance claim support and guidance',
        'Fast quotes from photos or in-person inspection',
        'High-quality panel beating and paint refinishing',
        'Bumper, dent, scratch and body restoration',
        'Structural repair and sensor alignment if needed',
        'Mechanical checks for suspension, cooling and safety components',
        'Towing and recovery options when arranged',
        'Friendly advice on whether private repair may save you money'
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; border: string; icon: string; lightBg: string; number: string } } = {
            red: { bg: 'bg-red-50', border: 'border-red-500', icon: 'text-red-600', lightBg: 'bg-red-100', number: 'bg-red-600' },
            blue: { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600', lightBg: 'bg-blue-100', number: 'bg-blue-600' },
            green: { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600', lightBg: 'bg-green-100', number: 'bg-green-600' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600', lightBg: 'bg-purple-100', number: 'bg-purple-600' },
            orange: { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600', lightBg: 'bg-orange-100', number: 'bg-orange-600' },
            indigo: { bg: 'bg-indigo-50', border: 'border-indigo-500', icon: 'text-indigo-600', lightBg: 'bg-indigo-100', number: 'bg-indigo-600' },
            cyan: { bg: 'bg-cyan-50', border: 'border-cyan-500', icon: 'text-cyan-600', lightBg: 'bg-cyan-100', number: 'bg-cyan-600' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-red-900 via-orange-800 to-red-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <AlertTriangle className="w-8 h-8 text-orange-300" />
                        <p className="text-orange-300 text-sm font-medium uppercase tracking-wide">Accident Response Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Had a Minor <span className="text-orange-300">Car Accident?</span>
                    </h1>
                    <p className="text-xl text-orange-100 leading-relaxed font-mulish font-extralight">
                        How to Respond & Get Repairs in Auckland
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
                        Minor crashes happen more often than we expect. A simple bumper tap in traffic, scraped paint in a parking lot, or a low-speed collision at an intersection can leave vehicle owners unsure about what to do next. Even when damage appears minor, handling the situation correctly protects your safety, maintains the validity of your insurance, and ensures your vehicle is repaired properly.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Here is a clear guide on what to do after a minor accident, especially useful for Auckland drivers navigating the city's heavy traffic.
                    </p>
                </div>
            </motion.section>

            {/* Steps */}
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
                            7 Steps to Follow After a Minor Accident
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {steps.map((step, index) => {
                            const colorClasses = getColorClasses(step.color);
                            return (
                                <motion.div
                                    key={index}
                                    className={`${colorClasses.bg} border-l-4 ${colorClasses.border} p-6 hover:shadow-lg transition-all duration-300`}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`${colorClasses.number} text-white w-12 h-12 rounded-full flex items-center justify-center font-['Tomorrow'] font-bold text-xl flex-shrink-0`}>
                                            {step.number}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <step.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                                                <h3 className="text-2xl font-['Tomorrow'] font-medium text-gray-900">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-2 mb-4 ml-16">
                                        {step.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className={`${colorClasses.icon} mt-1 flex-shrink-0`}>•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={`${colorClasses.lightBg} border-l-2 ${colorClasses.border} p-3 rounded ml-16`}>
                                        <p className="text-gray-800 text-sm italic">
                                            {step.note}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Not to Ignore */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            Why Minor Damage Should Not Be Ignored
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">
                        Even if the car still drives fine, small damage can grow into bigger problems.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 font-medium">Risks include:</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {risks.map((risk, index) => (
                            <div key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-800">{risk}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded">
                        <p className="text-gray-800 text-lg font-medium">
                            Repairing early protects the value and safety of the vehicle.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Services */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-6">
                            How CBD Panel Beating & Mechanical Can Help
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Our team assists customers through the full post-accident process, from assessment to final handover.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3 bg-white p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{service}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-800 text-lg leading-relaxed">
                            We restore your car to a clean and safe condition, matching the paint and finish to make it look as good as new. Whether it is a small scrape or a minor collision, we treat every job with attention to detail.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final Thoughts & CTA */}
            <motion.section
                className="px-4 py-16 bg-black text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Final Thoughts
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-mulish font-extralight">
                        Minor accidents are stressful in the moment, but handling the steps calmly ensures a smooth repair and insurance process. With the right documentation and professional repair, your vehicle can be back on the road looking its best.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If you have had a minor accident and need guidance or a repair quote, CBD Panel Beating & Mechanical is here to help.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="tel:093091906" className="flex items-center gap-2 bg-orange-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg hover:bg-orange-700 transition">
                            <PhoneIcon className="w-5 h-5" />
                            <span>09 309 1906</span>
                        </a>
                        <button 
                            onClick={() => window.location.href = '/contact'}
                            className="relative group bg-white text-black px-8 py-4 font-['Tomorrow'] font-medium text-lg transition"
                        >
                            <span className="absolute left-0 top-0 h-full bg-orange-600 w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">CONTACT US ONLINE</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
