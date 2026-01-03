import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function FAQs() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);

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
                    a: "Panel beating refers to the repair of vehicle body damage resulting from accidents, dents, rust, or wear. It involves reshaping or replacing damaged panels, preparing surfaces, and restoring the vehicle to a safe, road-ready condition."
                },
                {
                    q: "Do you work with insurance companies?",
                    a: "Yes. We work with all major New Zealand insurance providers. We can assist with quotations, assessments, and communication with your insurer to make the process straightforward."
                },
                {
                    q: "Can I choose my own panel beater for an insurance claim?",
                    a: "Yes. In New Zealand, you have the right to choose your preferred repairer, even if your insurer suggests another workshop."
                },
                {
                    q: "Do you offer free quotes?",
                    a: "Yes. We provide free, no-obligation quotes after assessing the vehicle. Quotes can be done in person and, in some cases, using photos."
                },
                {
                    q: "I’ve damaged my car. Should I contact the repairer or my insurer first?",
                    a: "If you are unsure whether an insurance claim is required, you are welcome to contact or visit CBD Panel & Paint first. We can inspect the damage and provide clear advice to help you decide the best course of action.\n\nIf you are making an insurance claim, notify your insurer and let them know that you would like CBD Panel & Paint to carry out the repairs. We work with all major New Zealand insurance companies, and you have the legal right to choose your preferred repairer."
                },
                {
                    q: "How long does an assessment take, and do I need to leave my car with you?",
                    a: "An initial assessment at CBD Panel & Paint usually takes around 10 to 15 minutes. If our estimator confirms that your vehicle is safe to drive, you will not need to leave it with us.\n\nIf minor adjustments are required to make the vehicle safe, this may take a little extra time. We will always explain what is needed before carrying out any work."
                },
                {
                    q: "What happens after the assessment?",
                    a: "Once the damage has been assessed, CBD Panel & Paint will check parts availability and pricing and prepare a detailed estimate.\n\nFor private repairs, the quote will be emailed directly to you. For insurance claims, we submit the estimate and supporting photos to your insurer and keep you informed once approval is received. After approval, we will contact you to arrange a suitable time for your vehicle repairs."
                },
                {
                    q: "How long does it take to receive insurance approval?",
                    a: "Approval time depends on the insurer and the extent of the damage. In many cases, approval is provided within a few working days after the estimate and photos are submitted.\n\nFor some insurers, CBD Panel & Paint is authorised to carry out accident-related repairs up to a specified value without prior approval. This can significantly reduce waiting time and allow repairs to begin sooner.\n\nWe deal directly with your insurer, keep you informed at every stage, and work to progress your repair as efficiently as possible."
                },
                {
                    q: "How long will repairs take?",
                    a: "Repair time depends on the extent of the damage and the availability of parts. Minor repairs may take a few days, while larger structural repairs can take several days or even weeks. We provide a realistic timeframe after inspection."
                },
                {
                    q: "Can I have extra work done while my car is in for an insurance repair?",
                    a: "Yes. This is often a good opportunity to carry out additional work while your vehicle is already in the workshop. In some cases, it can be more cost-effective, as certain parts may already be removed, which can reduce labour time.\n\nPlease let us know when you bring your vehicle in, and CBD Panel & Paint will provide a separate quote for any additional work you would like completed."
                },
                {
                    q: "How will I know when my vehicle is ready for collection?",
                    a: "Once repairs are complete, a member of our team will contact you to let you know your vehicle is ready. Before collection, our trained staff carry out a final quality check to ensure all work has been completed to a high standard and your vehicle is ready to drive."
                },
                {
                    q: "Who do I pay the insurance excess to?",
                    a: "Your insurance excess is paid directly to us when you collect your vehicle. We invoice the insurance company for the total repair cost, with the excess deducted from the final amount."
                },
                {
                    q: "Will the paint colour match my car?",
                    a: "Yes. We use professional colour-matching systems to ensure the repaired area blends seamlessly with the original paintwork."
                },
                {
                    q: "Do you repair minor dents and scratches?",
                    a: "Yes. We handle everything from small dents and scratches to full accident repairs. No job is too small."
                },
                {
                    q: "Is your work guaranteed?",
                    a: "Yes. All repairs are backed by a workmanship guarantee. Paint and materials are covered in line with manufacturer standards and insurance requirements."
                },
                {
                    q: "Can you repair vehicles of all makes and models?",
                    a: "Yes. We repair all makes and models, including cars, SUVs, vans, and light commercial vehicles."
                },
                {
                    q: "What if my car is not insured?",
                    a: "We also carry out private repairs for uninsured vehicles. We will explain the repair options and costs clearly before starting any work."
                },
                {
                    q: "Will my vehicle be safe after the repairs are made?",
                    a: "Yes. Safety is our priority. Repairs are completed to manufacturer specifications and New Zealand safety standards."
                },
                {
                    q: "How do I book an inspection or repair?",
                    a: "You can contact us by phone, email, or through our online booking form on our website. Our team will guide you through the next steps."
                },
            ]
        },
        {
            category: "Mechanical",
            questions: [
                {
                    q: "What mechanical services do you provide?",
                    a: "We offer comprehensive mechanical servicing and repairs, including engine diagnostics, brake, suspension, steering, battery, cooling system, and routine maintenance for all makes and models."
                },
                {
                    q: "Do you carry out Warrant of Fitness (WOF) inspections?",
                    a: "Yes. We conduct WOF inspections in accordance with NZTA requirements. If your vehicle does not pass, we can clearly explain the reasons and carry out the required repairs, as approved."
                },
                {
                    q: "What's included in a WOF inspection?",
                    a: "A Warrant of Fitness (WOF) inspection checks your vehicle's safety features, including brakes, lights, tyres, windscreen, seatbelts, steering, and structural integrity. We provide a detailed report and can perform any necessary repairs."
                },
                {
                    q: "How long does a WOF inspection take?",
                    a: "A WOF inspection usually takes around 30 to 45 minutes. This may vary depending on the vehicle type and condition."
                },
                {
                    q: "Can you repair my vehicle if it fails its WOF?",
                    a: "Yes. If your vehicle fails its WOF, we can provide a clear quote for the required repairs and recheck the vehicle once the work is completed."
                },
                {
                    q: "What suspension services do you offer?",
                    a: "We repair and replace shocks, struts, bushes, control arms, ball joints, and other suspension components. Proper suspension ensures safe handling, tyre wear control, and driving comfort."
                },
                {
                    q: "How do I know if my suspension needs attention?",
                    a: "Common signs include uneven tyre wear, knocking noises, poor handling, excessive bouncing, or the vehicle pulling to one side. If you notice any of these, we recommend that you have an inspection."
                },
                {
                    q: "What is vehicle compliance, and when is it required?",
                    a: "Vehicle compliance is required for imported vehicles, vehicles with lapsed or cancelled registration, and certain modified vehicles. Compliance ensures your vehicle meets New Zealand safety and legal standards."
                },
                {
                    q: "Do you assist with imported vehicle compliance?",
                    a: "Yes. We assist with compliance inspections and work alongside approved compliance and certification agents to help your vehicle meet NZTA requirements."
                },
                {
                    q: "Can you handle compliance repairs if my vehicle fails?",
                    a: "Yes. If compliance repairs are required, we can carry out the necessary work and guide you through the next steps until your vehicle meets compliance standards."
                },
                {
                    q: "Do I need an appointment for mechanical or WOF services?",
                    a: "Appointments are recommended to avoid waiting, especially for WOF inspections and compliance-related work. Walk-ins may be accepted depending on availability."
                },
                {
                    q: "Do you service all makes and models?",
                    a: "Yes. We service and repair all makes and models, including petrol, diesel, hybrid, and light commercial vehicles."
                },
                {
                    q: "How will I know what work is required on my vehicle?",
                    a: "We explain all findings clearly and provide a quote before starting any work. No repairs are carried out without your approval."
                },
                {
                    q: "How often should I have my vehicle serviced?",
                    a: "We recommend servicing your vehicle every 10,000-15,000 km or every 6-12 months, whichever comes first. Regular maintenance helps extend the life of your vehicle and prevent costly repairs."
                },
                {
                    q: "Why is my check engine light on?",
                    a: "The check engine light can indicate a range of issues, from a loose gas cap to serious engine problems. We use advanced diagnostic equipment to identify the exact cause and recommend appropriate solutions"
                },
                {
                    q: "How do I know if my brakes need replacing?",
                    a: "Warning signs include squealing or grinding noises, vibrations when braking, a soft brake pedal, or pulling to one side. We offer free brake checks to assess the condition of your brakes."
                },
                {
                    q: "What is a timing belt, and when should it be replaced?",
                    a: "A timing belt synchronises your engine's components. Most manufacturers recommend replacement every 80,000-160,000 km. Failure can cause severe engine damage, so timely replacement is crucial."
                },
                {
                    q: "Do you perform transmission repairs?",
                    a: "Yes, we handle both automatic and manual transmission repairs, including fluid changes, filter replacements, and complete rebuilds. We also offer transmission diagnostics."
                },
                {
                    q: "What causes engine overheating?",
                    a: "Common causes include low coolant levels, a faulty radiator, water pump failure, or thermostat issues. We diagnose and repair all components of the cooling system."
                },
                {
                    q: "Is your work guaranteed?",
                    a: "Yes. All mechanical and suspension work is covered by a workmanship guarantee, with parts covered under manufacturer warranties where applicable."
                },
                {
                    q: "How do I book a service or inspection?",
                    a: "You can book by phone, email, or through our website. Our team will help you choose a suitable time and explain what to bring with you."
                },
            ]
        },
        {
            category: "General",
            questions: [
                {
                    q: "Do you offer courtesy cars or towing services?",
                    a: "Courtesy cars and towing can be arranged, subject to availability. Please notify us at the time of booking if you require a courtesy car or towing service, and we will arrange it for you."
                },
                {
                    q: "What payment methods do you accept?",
                    a: "We accept cash, EFTPOS, credit cards, and direct bank transfers. For insurance work, we can invoice your insurance company directly."
                },
                {
                    q: "Are you open on weekends?",
                    a: "We're open Monday through Friday, 8:00 AM – 4:30 PM. Emergency services can be arranged by appointment. Please contact us for weekend availability."
                },
                {
                    q: "Do you offer emergency repairs?",
                    a: "Yes, we provide 24/7 emergency roadside assistance and can arrange urgent repairs for breakdowns, accidents, or safety issues."
                },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans scroll-smooth">
            <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />

            {/* Hero Section */}
            <motion.section
                className="pt-24 md:pt-32 pb-16 px-4 bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-4">Got Questions?</p>
                    <h1 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6">
                        Frequently Asked <span className="text-blue-600">Questions</span>
                    </h1>
                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black leading-relaxed font-['Poppins'] font-semibold text-lg max-w-3xl mx-auto">
                        Find answers to common questions about our services, processes, and policies. Can't find what you're looking for? Contact us directly.
                    </p>
                </div>
            </motion.section>

            {/* FAQs by Category */}
            <section className="px-4 py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto space-y-12">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-medium text-blue-600 mb-6 uppercase">
                                {category.category}
                            </h2>

                            <div className="space-y-4">
                                {category.questions.map((faq, faqIndex) => {
                                    const globalIndex = categoryIndex * 100 + faqIndex;
                                    const isOpen = hoveredIndex === globalIndex || pinnedIndex === globalIndex;

                                    return (
                                        <motion.div
                                            key={faqIndex}
                                            className="border border-gray-300 hover:border-blue-600 transition bg-white"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            onMouseEnter={() => setHoveredIndex(globalIndex)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <button
                                                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition"
                                                onClick={() => setPinnedIndex(pinnedIndex === globalIndex ? null : globalIndex)}
                                            >
                                                <span className="font-['Poppins'] font-medium text-lg pr-4">{faq.q}</span>
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
                className="px-4 py-20 bg-white border-t border-gray-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-['Poppins'] font-medium uppercase mb-6 text-black">
                        Still Have Questions?
                    </h2>
                    <p style={{ wordSpacing: '-0.08rem' }} className="text-black mb-12 leading-relaxed font-['Poppins'] font-semibold text-lg">
                        Our friendly team is here to help. Contact us today for personalized assistance.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="relative group bg-blue-600 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition">
                            <span className="absolute left-0 top-0 h-full bg-red-600 w-0 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10">CONTACT US</span>
                        </button>
                        <button className="relative group bg-gray-900 text-white px-8 py-4 font-['Poppins'] font-medium text-lg transition hover:bg-gray-800">
                            <span className="relative z-10">BOOK NOW</span>
                        </button>
                    </div>
                </div>
            </motion.section>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}
