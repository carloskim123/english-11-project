import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function IntroBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const DEV_MODE = true;

    const introText = "Welcome to the Frederick Douglass Digital Archive. This project is a curated response to historical erasure, utilizing primary evidence to reconstruct his intellectual authority. Listen to the evidence.";

    useEffect(() => {
        const hasSeenIntro = localStorage.getItem("hasSeenDouglassIntro");
        if (!hasSeenIntro || DEV_MODE) {
            setIsVisible(true);

            // Function to handle the voice selection
            const speak = () => {
                const utterance = new SpeechSynthesisUtterance(introText);
                const voices = window.speechSynthesis.getVoices();

                // Try to find a deep, mature-sounding voice
                // 'Google US English' is usually the most natural/deep on Chrome
                const preferredVoice = voices.find(v =>
                    v.name.includes("Google US English") ||
                    v.name.includes("Male") ||
                    v.name.includes("Premium")
                );

                if (preferredVoice) utterance.voice = preferredVoice;

                // Tweak these for the "Chadwick" vibe:
                utterance.rate = 0.85;  // Slower = more gravitas
                utterance.pitch = 0.8; // Lower pitch = more manly/resonant
                utterance.volume = 1;

                window.speechSynthesis.speak(utterance);
            };

            // Voices take a second to load in some browsers
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = speak;
            } else {
                speak();
            }
        }

        return () => window.speechSynthesis.cancel();
    }, []);

    const closeBanner = () => {
        window.speechSynthesis.cancel();
        if (!DEV_MODE) localStorage.setItem("hasSeenDouglassIntro", "true");
        setIsVisible(false);
    };

    const variants: Variants = {
        initial: { opacity: 0, y: 20, filter: "blur(10px)" },
        animate: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 1.5, delay: 0.5 + (i * 0.4), ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 1.2 } }}
                    className="fixed inset-0 z-[2000] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Visualizer bars pulsing to the voice vibe */}
                    <div className="flex items-end justify-center gap-2 h-12 mb-16">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: [10, Math.random() * 50 + 10, 10],
                                    opacity: [0.1, 0.6, 0.1]
                                }}
                                transition={{
                                    duration: 0.8 + Math.random(),
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-[2px] bg-amber-600 rounded-full"
                            />
                        ))}
                    </div>

                    <div className="relative z-10 text-center max-w-3xl px-10">
                        <motion.h1
                            custom={0} variants={variants} initial="initial" animate="animate"
                            className="text-2xl md:text-4xl font-light italic text-zinc-200 tracking-tight leading-relaxed mb-20"
                        >
                            {introText}
                        </motion.h1>

                        <motion.button
                            custom={1} variants={variants} initial="initial" animate="animate"
                            onClick={closeBanner}
                            className="group flex flex-col items-center gap-4 transition-all"
                        >
                            <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/5 transition-all duration-700">
                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            </div>
                            <span className="text-[8px] font-mono text-zinc-500 tracking-[0.5em] uppercase group-hover:text-amber-500 transition-colors">
                                Skip Introduction
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}