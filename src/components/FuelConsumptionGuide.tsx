import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fuel, TrendingUp, AlertTriangle, CheckCircle, Gauge, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function FuelConsumptionGuide() {
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

    const fuelFactors = [
        {
            icon: TrendingUp,
            title: 'Hard Acceleration and Heavy Braking',
            description: 'Fast take-offs burn more fuel because the engine needs extra power to push the vehicle forward. Heavy braking that follows wastes the energy already used. Smooth and steady acceleration helps keep fuel use under control.'
        },
        {
            icon: Gauge,
            title: 'Driving at High Speeds',
            description: 'Engines work harder at higher speeds. Once the vehicle reaches a certain speed, typically around 90 to 100 km/h, fuel consumption increases sharply. Keeping a steady speed and avoiding unnecessary overtaking makes a noticeable difference.'
        },
        {
            icon: Fuel,
            title: 'Short Trips and Stop–Start Driving',
            description: 'Short trips do not allow the engine to warm up properly. A cold engine uses more fuel. Stop-and-start traffic also increases consumption because the engine continues to use power without covering much distance.'
        },
        {
            icon: Settings,
            title: 'Extra Weight in the Vehicle',
            description: 'Carrying tools, equipment, or other heavy items can increase fuel consumption. Roof racks and loaded boot areas create extra drag or weight that the engine must overcome.'
        }
    ];

    const additionalFactors = [
        {
            title: 'Incorrect Tyre Pressure',
            description: 'Underinflated tyres increase rolling resistance. This forces the engine to work harder. Checking tyre pressure regularly is an easy way to improve fuel economy and maintain safe handling.'
        },
        {
            title: 'Poor Vehicle Maintenance',
            description: 'Several maintenance issues can lead to increased fuel consumption.',
            issues: [
                'Dirty air filter',
                'Old spark plugs',
                'Low engine oil or old oil',
                'Blocked fuel filter',
                'Misfiring engine components'
            ],
            note: 'Regular servicing helps keep the engine running smoothly and reduces fuel consumption.'
        },
        {
            title: 'Air Conditioning and Electrical Load',
            description: 'Air conditioning places an extra load on the engine. Using it constantly on full power increases fuel use. Electrical accessories such as lights, heaters, and charging devices also draw energy.'
        },
        {
            title: 'Driving Uphill or Towing',
            description: 'Climbing steep hills or towing heavy loads requires more engine power. This naturally increases fuel use. Choosing lower gears and maintaining a steady speed helps manage consumption.'
        },
        {
            title: 'Wrong Wheel Alignment',
            description: 'If the wheels are not aligned correctly, the car does not roll smoothly. The added resistance makes the engine work harder. Proper alignment supports good fuel economy and extends tyre life.'
        }
    ];

    const checkSigns = [
        'Sudden jump in fuel consumption',
        'Engine running rough',
        'Strong fuel smell',
        'Reduced power',
        'Warning lights on the dashboard'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-orange-900 to-orange-700 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <Fuel className="w-8 h-8 text-orange-300" />
                        <p className="text-orange-200 text-sm font-medium uppercase tracking-wide">Efficiency Guide</p>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6 text-center">
                        Car Using Too Much Fuel?
                    </h1>
                    <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight text-center">
                        Key Reasons and What To Do
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
                            Fuel costs add up quickly, especially when your vehicle starts using more petrol than usual. Many factors influence fuel consumption, and understanding them helps you drive more efficiently, reduce running costs, and identify early signs of mechanical issues. Some reasons are related to driving habits, while others come from maintenance or road conditions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Factors */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-8 text-center">
                            Primary Fuel Consumption Factors
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {fuelFactors.map((factor, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                                        <factor.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 text-gray-900">
                                            {factor.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {factor.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Factors */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-8 text-center">
                            Additional Contributing Factors
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {additionalFactors.map((factor, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 border border-gray-200 p-6"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-['Tomorrow'] font-medium mb-3 text-orange-600 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6" />
                                    {factor.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {factor.description}
                                </p>
                                {factor.issues && (
                                    <div className="ml-8">
                                        <ul className="space-y-2 mb-3">
                                            {factor.issues.map((issue, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                                    <span className="text-orange-600">•</span>
                                                    {issue}
                                                </li>
                                            ))}
                                        </ul>
                                        {factor.note && (
                                            <p className="text-gray-700 italic">{factor.note}</p>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Check */}
            <motion.section
                className="px-4 py-16 bg-orange-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-orange-600" />
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            When to Have Your Vehicle Checked
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {checkSigns.map((sign, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 bg-white border-l-4 border-orange-500"
                            >
                                <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                                <p className="text-gray-800">{sign}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-lg text-gray-700 font-medium">
                        These signs may indicate a mechanical issue that needs attention.
                    </p>
                </div>
            </motion.section>

            {/* Fuel Saving Tips */}
            <motion.section
                className="px-4 py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase mb-8 text-center">
                        Quick Fuel-Saving Tips
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white bg-opacity-10 backdrop-blur p-6">
                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">Drive Smoothly</h3>
                            <p className="text-orange-100 text-sm">
                                Gentle acceleration and braking saves fuel and reduces wear on components
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur p-6">
                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">Regular Maintenance</h3>
                            <p className="text-orange-100 text-sm">
                                Keep filters, plugs, and oil fresh for optimal engine efficiency
                            </p>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur p-6">
                            <h3 className="text-xl font-['Tomorrow'] font-medium mb-3">Check Tyres Weekly</h3>
                            <p className="text-orange-100 text-sm">
                                Proper tyre pressure reduces resistance and improves fuel economy
                            </p>
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
                        CBD Panel and Paint offers comprehensive mechanical checks, servicing, wheel alignment, and diagnostic services to pinpoint the cause of high fuel consumption. We examine filters, plugs, sensors, tyres, and all systems that impact fuel efficiency. With correct maintenance, your vehicle runs cleaner, smoother, and more economically.
                    </p>
                    <p className="text-xl text-gray-300 mb-8 font-mulish font-extralight">
                        If your car is using more fuel than normal, our expert team at CBD Panel and Paint is ready to help.
                    </p>
                    <button className="relative group bg-orange-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                        <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                        <span className="relative z-10 group-hover:text-orange-600">BOOK A FUEL EFFICIENCY CHECK</span>
                    </button>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
