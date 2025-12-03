import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function FAQs() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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

    const faqs = [
        {
            category: "Panel Beating",
            questions: [
                {
                    q: "What is panel beating?",
                    a: "Panel beating is the process of repairing vehicle body damage caused by collisions, dents, or other impacts. Our skilled technicians use specialized tools and techniques to restore your vehicle's panels to their original shape and condition."
                },
                {
                    q: "How long does panel beating repair take?",
                    a: "The duration depends on the extent of the damage. Minor dent repairs can take 1-2 days, while major collision repairs may require 5-10 days. We provide detailed timelines after assessing your vehicle."
                },
                {
                    q: "Will my insurance cover panel beating repairs?",
                    a: "Most comprehensive insurance policies cover collision and accident damage. We work directly with all major insurance companies and can help you with the claims process."
                },
                {
                    q: "Can you match my car's paint color exactly?",
                    a: "Yes! We use computerized color matching technology to ensure a perfect match with your vehicle's original paint, including metallic and pearl finishes."
                }
            ]
        },
        {
            category: "Mechanical Services",
            questions: [
                {
                    q: "How often should I service my vehicle?",
                    a: "We recommend servicing your vehicle every 10,000-15,000 km or every 6-12 months, whichever comes first. Regular maintenance extends your vehicle's life and prevents costly repairs."
                },
                {
                    q: "What's included in a WOF inspection?",
                    a: "A Warrant of Fitness (WOF) inspection checks your vehicle's safety features including brakes, lights, tires, windscreen, seatbelts, steering, and structural integrity. We provide a detailed report and can perform any necessary repairs."
                },
                {
                    q: "Why is my check engine light on?",
                    a: "The check engine light can indicate various issues from a loose gas cap to serious engine problems. We use advanced diagnostic equipment to identify the exact cause and recommend appropriate solutions."
                },
                {
                    q: "How do I know if my brakes need replacing?",
                    a: "Warning signs include squealing or grinding noises, vibrations when braking, soft brake pedal, or pulling to one side. We offer free brake checks to assess their condition."
                },
                {
                    q: "What is a timing belt and when should it be replaced?",
                    a: "A timing belt synchronizes your engine's components. Most manufacturers recommend replacement every 80,000-160,000 km. Failure can cause severe engine damage, so timely replacement is crucial."
                }
            ]
        },
        {
            category: "Caravans & Boats",
            questions: [
                {
                    q: "Do you repair boat trailers?",
                    a: "Yes, we provide comprehensive boat trailer repairs including axle replacement, bearing services, brake repairs, and corrosion treatment. We also perform WOF checks for trailers."
                },
                {
                    q: "Can you build custom trailers?",
                    a: "Absolutely! We design and fabricate custom trailers to your exact specifications, from utility trailers to specialized car haulers. Our experienced team can bring your vision to life."
                },
                {
                    q: "What caravan repairs do you offer?",
                    a: "We handle all aspects of caravan repair including structural damage, chassis repairs, panel replacement, water damage restoration, and refurbishment work."
                },
                {
                    q: "Do you offer welding services?",
                    a: "Yes, we provide expert welding services for steel, aluminum, and stainless steel. From minor repairs to major fabrication projects, our certified welders deliver quality results."
                }
            ]
        },
        {
            category: "General",
            questions: [
                {
                    q: "Do you provide courtesy vehicles?",
                    a: "Yes, we offer courtesy vehicles for major repairs subject to availability. Please ask when booking your appointment."
                },
                {
                    q: "Can I get a quote before bringing my vehicle in?",
                    a: "For accurate quotes, we prefer to inspect your vehicle in person. However, if you send clear photos of the damage, we can provide an estimated quote."
                },
                {
                    q: "What payment methods do you accept?",
                    a: "We accept cash, EFTPOS, credit cards, and direct bank transfers. For insurance work, we can invoice your insurance company directly."
                },
                {
                    q: "Do you offer warranties on your work?",
                    a: "Yes, all our repairs come with a comprehensive warranty. Panel beating work is typically warranted for 12 months, and mechanical repairs vary by service type."
                },
                {
                    q: "Are you open on weekends?",
                    a: "We're open Monday to Friday, 7:30 AM - 5:30 PM. Emergency services can be arranged by appointment. Please contact us for weekend availability."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-black text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-400 text-sm font-medium uppercase tracking-wide mb-4">Got Questions?</p>
                    <h1 className="text-4xl md:text-7xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Frequently Asked <span className="text-blue-400">Questions</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-mulish font-extralight">
                        Find answers to common questions about our services, processes, and policies. Can't find what you're looking for? Contact us directly.
                    </p>
                </div>
            </motion.section>

            {/* FAQs by Category */}
            <section className="px-4 py-16 bg-white">
                <div className="max-w-5xl mx-auto space-y-12">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-['Tomorrow'] font-medium text-blue-600 mb-6 uppercase">
                                {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.questions.map((faq, faqIndex) => {
                                    const globalIndex = categoryIndex * 100 + faqIndex;
                                    const isOpen = openIndex === globalIndex;

                                    return (
                                        <motion.div
                                            key={faqIndex}
                                            className="border border-gray-300 hover:border-blue-600 transition"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                                            viewport={{ once: true }}
                                        >
                                            <button
                                                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
                                                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                            >
                                                <span className="font-['Tomorrow'] font-medium text-lg pr-4">{faq.q}</span>
                                                {isOpen ? (
                                                    <Minus className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                                ) : (
                                                    <Plus className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                                )}
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? 'auto' : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="px-4 py-20 bg-blue-600 text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-['Tomorrow'] font-medium uppercase mb-6">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed font-mulish font-extralight">
                        Our friendly team is here to help. Contact us today for personalized assistance.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="relative group bg-white text-blue-600 px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-white">CONTACT US</span>
                        </button>
                        <button className="relative group bg-black text-white px-8 py-4 font-['Tomorrow'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-black">BOOK NOW</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
