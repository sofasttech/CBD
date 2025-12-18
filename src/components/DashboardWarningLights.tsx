import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, CheckCircle, XCircle, Wrench, Settings } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function DashboardWarningLights() {
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

    const criticalLights = [
        {
            name: 'Oil Pressure Low',
            image: 'oil-pressure.png',
            meaning: 'Oil is not reaching the internal engine parts. Running without oil can destroy the engine.',
            action: 'Stop immediately. Check oil level. Do not drive if the light stays on. Arrange towing if needed.'
        },
        {
            name: 'Engine/Emissions Warning',
            image: 'engine-warning.png',
            meaning: 'Possible misfire, fuel mixture issue, or faulty sensor. Performance may be reduced.',
            action: 'Book diagnostics soon. If flashing, stop driving to avoid catalytic converter damage.'
        },
        {
            name: 'Battery/Alternator Warning',
            image: 'car-battery.png',
            meaning: 'Vehicle running only on stored battery power. It could stop at any moment.',
            action: 'Drive straight to a workshop if safe. Avoid turning the engine off on stops. Check the charging system.'
        },
        {
            name: 'Brake System/Handbrake Warning',
            image: 'brake.png',
            meaning: 'The handbrake may be on, or the brake fluid level may be low. Pad wear or a hydraulic fault is possible.',
            action: 'First, check the handbrake. If the light remains on, do not continue driving until the vehicle has been inspected and the issue has been resolved.'
        },
        {
            name: 'ABS Warning',
            image: 'abs.png',
            meaning: 'Anti-lock function disabled. The brakes still work, but the wheels may lock up on hard braking.',
            action: 'Drive with caution and book a repair. Avoid emergency stops.'
        },
        {
            name: 'Engine Temperature Overheat',
            image: 'coolant-temp.png',
            meaning: 'Coolant is too hot. The engine can suffer head gasket damage.',
            action: 'Pull over safely. Let the engine cool. Check coolant. Do not open the radiator cap while it is hot.'
        },
        {
            name: 'Catalytic Converter Warning',
            image: 'catalytic-converter.png',
            meaning: 'The emission system is overloaded or damaged. It could overheat or clog.',
            action: 'Schedule diagnostics promptly to prevent costly damage.'
        },
        {
            name: 'DPF (Diesel Particulate Filter) Warning',
            image: 'dpf.png',
            meaning: 'Filter partially blocked. Often from short trips.',
            action: 'Try a longer, steady highway drive. If light remains, workshop regeneration is required.'
        },
        {
            name: 'Airbag Warning/Airbag Deactivated',
            image: 'airbag.png',
            meaning: 'Airbags may not deploy in a crash. Safety compromised.',
            action: 'Get the system checked soon. Avoid driving with the airbag disabled.'
        },
        {
            name: 'Water in Fuel Filter (Diesel)',
            image: 'fuel.png',
            meaning: 'Water contaminated diesel. Can damage injectors.',
            action: 'Visit the workshop promptly to drain the filter.'
        }
    ];

    const importantLights = [
        {
            name: 'Brake Pad Warning',
            image: 'brake.png',
            meaning: 'Pads are wearing thin, and the stopping distance may increase.',
            action: 'Replace pads soon to avoid rotor damage.'
        },
        {
            name: 'Low Washer Fluid',
            image: 'washer-fluid.png',
            meaning: 'Windscreen wash is nearly empty.',
            action: 'Top up the washer fluid for clear visibility.'
        },
        {
            name: 'Tyre Pressure Low',
            image: 'tire-pressure.png',
            meaning: 'Pressure drop or puncture. Increases fuel use and tyre wear.',
            action: 'Inflate to the recommended PSI. If pressure drops again, check the tyre for damage.'
        },
        {
            name: 'Exterior Light Fault',
            image: 'bulb-out.png',
            meaning: 'A bulb may be blown, or the connection may be faulty.',
            action: 'Replace the defective bulb. Keeps the vehicle legal for WOF.'
        },
        {
            name: 'Automatic Gearbox Warning',
            image: 'automatic-gearbox.png',
            meaning: 'Transmission problem or overheating.',
            action: 'Avoid heavy throttle. Book an inspection before long driving.'
        },
        {
            name: 'Service Required',
            image: 'service.png',
            meaning: 'Routine service due or sensor detected maintenance need.',
            action: 'Book a vehicle in for service to prevent worn parts from escalating.'
        }
    ];

    const statusIndicators = [
        { name: 'Front/Rear Fog Lights', image: 'fog-lights.png', meaning: 'Fog lamps in use.', action: 'Use only in heavy fog for safety. Turn off when clear.' },
        { name: 'Cruise Control On', image: 'cruise-control.png', meaning: 'Cruise system active.', action: 'Relaxed driving on the highway. Stay alert.' },
        { name: 'Eco Driving Indicator', image: 'eco-mode.png', meaning: 'Driving efficiently.', action: 'Helps fuel economy.' },
        { name: 'Direction Indicators', image: 'car-indicator.png', meaning: 'Turn signals on.', action: 'Use before lane changes and turns.' },
        { name: 'Main Beam/Dipped Beam', image: 'high-beam.png', meaning: 'Lighting mode active.', action: 'Adjust according to driving conditions.' },
        { name: 'Parking Assist', image: 'parking-sensors.png', meaning: 'Reversing cameras or sensors are active.', action: 'Use to support, not replace driver awareness.' }
    ];

    const accessWarnings = [
        { name: 'Door/Bonnet/Boot Open', image: 'door-open.png', meaning: 'Something is not fully closed.', action: 'Stop and close securely.' },
        { name: 'Key Not in Vehicle', image: 'key1.png', meaning: 'Key missing or range issue.', action: 'Do not drive off. Check the key battery.' },
        { name: 'Key Fob Battery Low', image: 'key.png', meaning: 'The remote battery is weak.', action: 'Replace soon to avoid a lockout.' },
        { name: 'Power Steering Warning', image: 'power.png', meaning: 'Steering assistance is low. Harder to turn.', action: 'Drive carefully. Book a workshop visit.' },
        { name: 'Frost Warning', image: 'frost.png', meaning: 'Road surface may be icy.', action: 'Reduce speed and increase braking distance.' }
    ];

    const whenToVisit = [
        'A red light appears',
        'A warning stays on after startup',
        'The car feels different – rough idle, loss of power, smoke, noise',
        'Lights flash repeatedly',
        'You are unsure of the meaning'
    ];

    const services = [
        'Scan diagnostic codes and interpret warnings',
        'Repair engine, braking, suspension, and electrical issues',
        'Reset warning lights after repair',
        'Fix body, bumper and crash damage affecting sensors',
        'Service vehicles to prevent warning lights from appearing'
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="relative pt-24 md:pt-48 pb-16 px-4 bg-[url('/indi.gif')] bg-cover bg-center bg-no-repeat text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Dark overlay with gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60 backdrop-blur-[2px]"></div>
                
                <div className="relative max-w-4xl mx-auto text-center">
                    <p className="text-yellow-300 text-sm font-medium uppercase tracking-wide mb-4 drop-shadow-lg">Essential Knowledge</p>
                    <h1 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6 drop-shadow-2xl">
                        Dashboard Warning Lights <span className="text-yellow-300">Decoded</span>
                    </h1>
                    <p className="text-xl text-yellow-100 leading-relaxed font-mulish font-extralight drop-shadow-lg">
                        What They Mean and What You Should Do
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
                        Modern vehicles are equipped with advanced dashboard warning systems that monitor various aspects, including engine performance and tyre pressure. These lights appear for a reason. Some are simple reminders, while others are warnings that should never be ignored. Understanding them helps you stay safe, protect your vehicle, and avoid costly repairs.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Below is a comprehensive guide to the most common dashboard symbols New Zealand drivers encounter, along with their meanings and the appropriate action to take.
                    </p>
                </div>
            </motion.section>

            {/* Critical Warning Lights */}
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
                            <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase">
                                Critical Warning Lights
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700">
                            <strong className="text-red-600">Stop the vehicle as soon as it is safe</strong> - These indicate a serious fault or risk of damage. Continuing to drive may be unsafe.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {criticalLights.map((light, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-l-4 border-red-600 p-6 shadow-md hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start gap-4">
                                    <img src={`/Dashboard Icons/${light.image}`} alt={light.name} className="w-12 h-12 flex-shrink-0" />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-['Tomorrow'] font-medium mb-2 text-red-600">
                                            {light.name}
                                        </h3>
                                        <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                                            <strong>Meaning:</strong> {light.meaning}
                                        </p>
                                        <p className="text-gray-900 text-sm leading-relaxed bg-red-50 p-3 rounded border-l-2 border-red-400">
                                            <strong>Action:</strong> {light.action}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Warning Lights */}
            <section className="px-4 py-16 bg-yellow-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-8 h-8 text-yellow-600" />
                            <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase">
                                Important Warning Lights
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700">
                            Check soon to avoid bigger faults - These relate to wear, maintenance, or developing faults.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {importantLights.map((light, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-l-4 border-yellow-600 p-6 shadow-sm hover:shadow-md transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <img src={`/Dashboard Icons/${light.image}`} alt={light.name} className="w-12 h-12 mb-2" />
                                <h3 className="text-lg font-['Tomorrow'] font-medium mb-2 text-yellow-700">
                                    {light.name}
                                </h3>
                                <p className="text-gray-700 mb-2 text-sm">
                                    <strong>Meaning:</strong> {light.meaning}
                                </p>
                                <p className="text-gray-900 text-sm bg-yellow-50 p-3 rounded border-l-2 border-yellow-400">
                                    <strong>Action:</strong> {light.action}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Status / Feature Indicators */}
            <section className="px-4 py-16 bg-blue-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Info className="w-8 h-8 text-blue-600" />
                            <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase">
                                Status / Feature Indicators
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700">
                            Not faults – just information. These lights appear when a driver has activated a setting.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-4">
                        {statusIndicators.map((indicator, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-l-4 border-blue-500 p-5 shadow-sm hover:shadow-md transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <img src={`/Dashboard Icons/${indicator.image}`} alt={indicator.name} className="w-12 h-12 mb-2" />
                                <h3 className="text-base font-['Tomorrow'] font-medium mb-2 text-blue-700">
                                    {indicator.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">{indicator.meaning}</p>
                                <p className="text-gray-800 text-sm">{indicator.action}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Access, Safety and Convenience Warnings */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Settings className="w-8 h-8 text-gray-600" />
                            <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase">
                                Access, Safety and Convenience Warnings
                            </h2>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {accessWarnings.map((warning, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-l-4 border-gray-500 p-5 shadow-sm hover:shadow-md transition"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <img src={`/Dashboard Icons/${warning.image}`} alt={warning.name} className="w-12 h-12 mb-2" />
                                <h3 className="text-base font-['Tomorrow'] font-medium mb-2 text-gray-700">
                                    {warning.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">{warning.meaning}</p>
                                <p className="text-gray-800 text-sm">{warning.action}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Visit */}
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
                        <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium uppercase">
                            When Should You Visit CBD Panel Beating & Mechanical?
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 mb-6">You should book your vehicle when:</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {whenToVisit.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <p className="text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded">
                        <p className="text-gray-800 text-lg">
                            Dashboard lights are your vehicle speaking to you. Early attention prevents breakdowns, improves safety, and saves money long term.
                        </p>
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
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-['Tomorrow'] font-medium uppercase mb-8 text-center">
                        How We Can Help
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white bg-opacity-10 p-5 rounded-lg backdrop-blur">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p className="text-gray-100">{service}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xl text-gray-300 mb-8 text-center font-mulish font-extralight">
                        Whether it's a minor issue or a critical problem, our expert team at CBD Panel Beating & Mechanical will identify the cause and resolve it with care.
                    </p>
                    <div className="text-center">
                        <p className="text-2xl mb-6 font-['Tomorrow'] font-medium">
                            If a warning light has appeared, don't wait.
                        </p>
                        <button className="relative group bg-yellow-600 text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-yellow-600">CONTACT US TODAY</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
