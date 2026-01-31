import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, AlertCircle, Wrench, Paintbrush, Clock, Shield, CheckCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PanelBeatingCosts() {
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

    const costFactors = [
        {
            icon: AlertCircle,
            title: 'Type and Severity of Damage',
            description: 'Minor damage requires less time and material compared to heavy collision repairs.',
            examples: [
                'Small dents and dings',
                'Scratches or scuffs',
                'Bumper cracks',
                'Rust patches',
                'Structural repair after accidents'
            ],
            note: 'The more complex the repair, the more labour and skill are involved.',
            color: 'red'
        },
        {
            icon: Shield,
            title: 'Parts and Materials',
            description: 'Some repairs need only reshaping, while others require replacement panels or specialised materials.',
            examples: [
                'New bumper, guard, bonnet or door',
                'Paint and clearcoat',
                'Filler, primer, consumables',
                'Plastic welding or metal straightening'
            ],
            note: 'OEM parts cost more than aftermarket alternatives, and luxury vehicles may require specialised items.',
            color: 'blue'
        },
        {
            icon: Clock,
            title: 'Labour and Repair Time',
            description: 'Panel beating is skilled, detailed work. Labour time is one of the largest cost factors.',
            examples: [
                'Dent removal and metal finishing',
                'Sanding and preparation',
                'Painting and colour matching',
                'Drying and polishing',
                'Reassembly and alignment'
            ],
            note: 'Precision takes time, especially when matching colour and texture to the original finish.',
            color: 'orange'
        },
        {
            icon: Paintbrush,
            title: 'Paint Type and Colour',
            description: 'Not all paint is equal.',
            examples: [
                'Standard colours are usually cheaper',
                'Pearl, metallic or special finishes cost more',
                'Multi-stage paint systems increase labour and coating layers'
            ],
            note: 'A perfect paint match is one of the most valuable parts of the process.',
            color: 'purple'
        },
        {
            icon: DollarSign,
            title: 'Insurance vs Private Work',
            description: 'Insurance repairs must meet strict standards set by insurers and manufacturers.',
            examples: [
                'Private repairs can offer more flexibility in pricing, finish level and timeframes',
                'If the damage cost is near or below your excess, private repair may be more economical'
            ],
            note: 'Insurance vs private work can significantly affect the final cost and process.',
            color: 'green'
        }
    ];

    const quoteRequirements = [
        'Photos of the damage from different angles',
        'Make, model and year of vehicle',
        'Whether the repair is insurance or private',
        'Any previous repair history, if known'
    ];

    const qualityIssues = [
        'Paint mismatch and visible blend lines',
        'Peeling clear coat later on',
        'Rust forming beneath poorly treated areas',
        'Lower resale value',
        'Safety risks after structural impacts'
    ];

    const services = [
        'Skilled panel beaters experienced in modern vehicle body structures',
        'Precision colour matching with professional spray booth facilities',
        'Fast bumper repairs, dent removal, and tidy-up work',
        'Full accident repair, including chassis alignment and structural correction',
        'Plastic welding, sanding, refinishing and polishing',
        'Mechanical support on-site for repairs involving suspension, cooling, brakes, etc.',
        'WOF-related damage fixes and rust repairs',
        '24/7 towing assistance available when arranged',
        'Honest advice on whether repair or replacement is smarter for your budget'
    ];

    const getColorClasses = (color: string) => {
        const colors: { [key: string]: { bg: string; border: string; icon: string; lightBg: string } } = {
            red: { bg: 'bg-red-50', border: 'border-red-500', icon: 'text-red-600', lightBg: 'bg-red-100' },
            blue: { bg: 'bg-blue-50', border: 'border-blue-500', icon: 'text-blue-600', lightBg: 'bg-blue-100' },
            orange: { bg: 'bg-orange-50', border: 'border-orange-500', icon: 'text-orange-600', lightBg: 'bg-orange-100' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-500', icon: 'text-purple-600', lightBg: 'bg-purple-100' },
            green: { bg: 'bg-green-50', border: 'border-green-500', icon: 'text-green-600', lightBg: 'bg-green-100' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-gray-900 to-gray-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <DollarSign className="w-8 h-8 text-blue-400" />
                        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">Pricing Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6">
                        Panel Beating Repair <span className="text-blue-400">Costs Explained</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed font-['Poppins'] font-extralight">
                        From Small Dents to Major Damage
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
                        When your vehicle has damage from an accident, a scrape in a car park, or needs a cosmetic touch-up, cost becomes one of the first questions. Panel beating prices can vary depending on the vehicle, type of damage, repair method, parts used, and the desired finish. Knowing how pricing works helps you make informed decisions and understand what you are paying for.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Below is a clear breakdown of the factors that influence the cost of panel beating in New Zealand and where your money is spent during the repair process.
                    </p>
                </div>
            </motion.section>

            {/* Cost Factors */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-4 text-center">
                            What Affects the Cost of Panel Beating?
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {costFactors.map((factor, index) => {
                            const colorClasses = getColorClasses(factor.color);
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
                                        <div className={`p-3 ${colorClasses.lightBg} rounded-lg flex-shrink-0`}>
                                            <factor.icon className={`w-6 h-6 ${colorClasses.icon}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-['Poppins'] font-medium mb-2 text-gray-900">
                                                {index + 1}. {factor.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                {factor.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-gray-700 font-medium mb-3">
                                            {factor.title === 'Type and Severity of Damage' ? 'Common examples include:' :
                                                factor.title === 'Parts and Materials' ? 'Costs may include:' :
                                                    factor.title === 'Labour and Repair Time' ? 'This often includes:' :
                                                        factor.title === 'Paint Type and Colour' ? 'Key points:' :
                                                            'Considerations:'}
                                        </p>
                                        <ul className="space-y-2 mb-4">
                                            {factor.examples.map((example, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-700">
                                                    <span className={`${colorClasses.icon} mt-1 flex-shrink-0`}>•</span>
                                                    <span>{example}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={`${colorClasses.lightBg} border-l-2 ${colorClasses.border} p-3 rounded`}>
                                            <p className="text-gray-800 text-sm italic">
                                                {factor.note}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How to Get a Quote */}
            <motion.section
                className="px-4 py-16 bg-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Wrench className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            How to Get an Accurate Quote
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">To speed up quoting, provide:</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {quoteRequirements.map((req, index) => (
                            <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-800">{req}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
                        <p className="text-gray-800 text-lg">
                            <strong>Important:</strong> An in-person inspection at CBD Panel and Paint's premises always provides the most accurate price, as hidden damage and structural alignment cannot be accurately assessed by photos alone.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Why Quality Matters */}
            <motion.section
                className="px-4 py-16 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Shield className="w-8 h-8 text-red-600" />
                        <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium uppercase">
                            Why Choosing Quality Matters
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">Cheaper repairs may look fine at first, but they can result in:</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {qualityIssues.map((issue, index) => (
                            <div key={index} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-800">{issue}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded">
                        <p className="text-gray-800 text-lg font-medium">
                            Good panel beating protects the appearance, integrity and long-term value of your vehicle.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Services Offered */}
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
                            How We Can Help
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            At CBD Panel Beating & Mechanical, we focus on quality workmanship, clear communication, and fair pricing. Our expert team repairs everything from minor dents to full accident damage, offering both insurance-approved repairs and private, cost-effective alternatives.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3 bg-gray-50 p-5 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition"
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
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="px-4 py-16 bg-black text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-['Poppins'] font-medium uppercase mb-6">
                        Get Your Quote Today
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8 font-['Poppins'] font-extralight">
                        We take the time to explain repair options, costs, and timelines so you know exactly what you're getting. Whether you are restoring a car after a collision or simply fixing a scrape that ruins the vehicle's appearance, we ensure a clean, strong finish that lasts.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a href="tel:(09) 360 5023" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg hover:bg-blue-700 transition">
                            <Phone className="w-5 h-5" />
                            <span>09 360 5023</span>
                        </a>
                        <button
                            onClick={() => navigate('/contact')}
                            className="relative group bg-white text-black px-8 py-4 font-['Poppins'] font-medium text-lg transition"
                        >
                            <span className="absolute left-0 top-0 h-full bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">CONTACT US ONLINE</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
