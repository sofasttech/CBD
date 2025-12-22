import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="text-center">
                {/* Animated Logo/Icon */}
                <motion.div
                    className="mb-8 flex justify-center"
                    animate={{
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="relative">
                        <Wrench className="w-16 h-16 text-blue-600" />
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Wrench className="w-16 h-16 text-blue-400" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Brand Name */}
                <motion.h1
                    className="text-3xl md:text-4xl font-['Poppins'] font-bold uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-gray-900">CBD</span>{' '}
                    <span className="text-blue-600">Panelbeating</span>
                </motion.h1>

                {/* Loading Text */}
                <motion.p
                    className="text-gray-600 font-['Poppins'] text-lg mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Loading...
                </motion.p>

                {/* Loading Bar */}
                <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Dots Animation */}
                <div className="flex justify-center gap-2 mt-8">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="w-3 h-3 bg-blue-600 rounded-full"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: index * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
