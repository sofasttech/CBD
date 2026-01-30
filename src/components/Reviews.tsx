import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Duncan Harris",
        date: "Dec 15, 2024",
        rating: 5,
        text: "My ute needed some work and Tyrone's team did a great job - all too easy. Definitely recommend them if you are looking for a great panel beater or mechanic .they also do WOF",
        initial: "D",
        color: "bg-blue-500"
    },
    {
        id: 2,
        name: "MARIA TAUASA",
        date: "Dec 15, 2024",
        rating: 5,
        text: "Tyrone the owner, is an incredibly kind and professional man. It’s very obvious how much care he puts into his work which sadly, seems to be rare these days. He understands that excellent customer support is everything, and I suspect is the reason his business is thriving. Tyrone’s team also sorted a few other things at no additional cost. I appreciate you guys so much and would highly recommend my family and friends to you for any insurance work. Thanks again Maria",
        initial: "M",
        color: "bg-green-500"
    },
    {
        id: 3,
        name: "Donna Rae",
        date: "Dec 15, 2024",
        rating: 5,
        text: "Once again the team at CBD Panel and Mechanical have come to my rescue!!! When my car was hit whilst parked at work in the middle of an extremely busy month for me, the guys really made the process quick and easy. I got a courtesy car which was very similar to what I drive already and it was a nice car- not your usual rough courtesy car!!! And... when I picked up my baby not only did she have a pretty new butt but she was sparkly and clean inside and out!!! Thanks again team for the impeccable service!!!",
        initial: "D",
        color: "bg-pink-500"
    },
    {
        id: 4,
        name: "gabrielle turner",
        date: "Dec 15, 2024",
        rating: 5,
        text: "Second time using Tyrone and his team at CBD. They are super friendly; they are great at communicating where they are at in the process. Sometimes parts take longer than expected and they let you know timings etc. I'm so stoked to have had such amazing service. Highly recommend them and this is only my third google review ever. I need to take them some scones or baking to them to thank them!",
        initial: "G",
        color: "bg-purple-500"
    },
    {
        id: 5,
        name: "Ashley Witheford",
        date: "Dec 15, 2024",
        rating: 5,
        text: "I have had work vehicles and personal vehicles that have needed panel work or paint upgrades over the years. Tyrone has always been upfront and given great advice and their work is always top-notch. I will always recommend their service and finishing and appreciate how they've helped me out. Awesome",
        initial: "A",
        color: "bg-indigo-500"
    },
    {
        id: 6,
        name: "Opinderjit singh",
        date: "Dec 15, 2024",
        rating: 5,
        text: "Great communication, great experience. Helpful folks sorted us out with our needs asap. Definite recommendation.",
        initial: "O",
        color: "bg-orange-500"
    },
    {
        id: 7,
        name: "Jude McNamara",
        date: "Jan 19, 2025",
        rating: 5,
        text: "I was parked in a small crowded car park and sure enough someone had scratched the side rear bumper. Now you’d never know. Such a good job thanks to owner Tyrone Hale who gave me options and I took the cheapest as a first option. So pleased and he saved me mega bucks. Highly recommend Tyrone, thanks mate",
        initial: "J",
        color: "bg-purple-500"
    },
    {
        id: 8,
        name: "Grant McAllum",
        date: "Dec 15, 2024",
        rating: 5,
        text: "'It looks like a new car!' was my first thought when I picked up my vehicle once Tyrone and his team had repaired and painted some bad scratches, and refurbished all four mag wheels. As always, excellent service and an excellent job.",
        initial: "G",
        color: "bg-teal-500"
    },
    {
        id: 9,
        name: "Archie Brown",
        date: "Sep 16, 2025",
        rating: 5,
        text: "Phenomenal team, work was done to a high standard and always friendly service. Transparent and trustworthy, 10/10.",
        initial: "A",
        color: "bg-red-500"
    },
    {
        id: 10,
        name: "Velma McDermott",
        date: "Sep 16, 2025",
        rating: 5,
        text: "I had an excellent experience with CBD Panel and Mechanical. The service was outstanding from start to finish. Communication was clear and timely, I always knew what was happening with my car and what to expect. They were professional, efficient, and went above and beyond to make sure everything was fixed properly. My car is running perfectly now and I couldn’t be happier with the result. Highly recommend Tyrone to anyone looking for great service and a trustworthy mechanic.",
        initial: "V",
        color: "bg-cyan-500"
    }
];

export default function Reviews() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const next = () => {
        setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    return (
        <div className="w-full bg-white py-12">
            <div className="max-w-4xl mx-auto px-4 relative">
                <div className="flex justify-center mb-8">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                </div>

                <div className="relative overflow-hidden min-h-[300px]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center text-center"
                        >
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-12 font-['Poppins']">
                                "{reviews[current].text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${reviews[current].color} flex items-center justify-center text-white font-bold text-xl relative`}>
                                    {reviews[current].initial}
                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                        <img src="/google-icon.png" alt="Google" className="w-4 h-4" onError={(e) => e.currentTarget.style.display = 'none'} />
                                        {/* Fallback if no google icon, maybe just a G text or hide it */}
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-gray-900 font-['Poppins']">{reviews[current].name}</h4>
                                    <p className="text-gray-500 text-sm">{reviews[current].date}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Previous review"
                >
                    <ChevronLeft className="w-8 h-8 text-gray-400" />
                </button>

                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Next review"
                >
                    <ChevronRight className="w-8 h-8 text-gray-400" />
                </button>
            </div>
        </div>
    );
}
