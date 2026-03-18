import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ChevronDown, Rocket, Code2 } from 'lucide-react';
import { Scene3D } from './Scene3D';
import { useCursorTracking } from '../hooks/useCursorTracking';
import { personalInfo, socialLinks } from '../data/portfolio'; // Imported socialLinks
import { useRef } from 'react';

export const Hero = () => {
    const cursorPosition = useCursorTracking();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = personalInfo.resumeUrl;
        link.download = 'Ayush_Bajpai_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            ref={targetRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
        >
            {/* Dynamic Background from 3D Scene */}
            <motion.div style={{ opacity, y }} className="absolute inset-0 z-0">
                <Scene3D cursorPosition={cursorPosition} />
            </motion.div>

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] pointer-events-none z-0"></div>

            {/* Main Content */}
            <div className="relative z-10 container-custom px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Status Badge */}
                    <motion.div variants={itemVariants} className="flex justify-center mb-8">
                        {/* <div className="flex items-center gap-3 px-5 py-2 glass rounded-full border border-primary-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                         
                        </div> */}
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight"
                    >
                        {personalInfo.name}
                    </motion.h1>

                    {/* Role & Stack */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-300">
                            Building Scalable <span className="text-primary-500">MERN Stack</span> Applications
                        </h2>
                        <div className="flex gap-3 text-gray-400 text-sm md:text-base font-medium">
                            <span className="flex items-center gap-1"><Code2 className="w-4 h-4" /> MongoDB</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Rocket className="w-4 h-4" /> Express</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Code2 className="w-4 h-4" /> React</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Rocket className="w-4 h-4" /> Node.js</span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Turning ideas into reality with modern web technologies. Focus on clean code, performance, and intuitive user experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <button
                            onClick={handleDownloadResume}
                            className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Download Resume <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </span>
                        </button>

                        <div className="flex gap-4">
                            {socialLinks.slice(0, 2).map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-4 glass rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
                                >
                                    <link.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
};
