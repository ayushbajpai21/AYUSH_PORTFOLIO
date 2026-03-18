import { motion } from 'framer-motion';
import { User, Target, Rocket, Zap, Award, BookOpen, GraduationCap } from 'lucide-react';
import { aboutText } from '../data/portfolio';

export const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const stats = [
        { label: "Education", value: "B.Tech (IT)", icon: GraduationCap },
        { label: "Focus", value: "MERN Stack", icon: Zap },
        { label: "Status", value: "Active", icon: Rocket }
    ];

    const highlights = [
        {
            title: "Modern Tech",
            description: "Proficient in React, Node.js, and Express, with a focus on building scalable web architectures.",
            icon: Rocket
        },
        {
            title: "Problem Solver",
            description: "Analytical thinker with a knack for debugging complex issues and optimizing performance.",
            icon: Zap
        }
    ];

    return (
        <section id="about" className="section-padding bg-[#01040a] relative overflow-hidden border-y border-white/5">
            {/* Background radial glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left Column: Introductions */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-12 xl:col-span-5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[2px] bg-primary-500"></span>
                            <h2 className="text-sm font-bold text-primary-500 uppercase tracking-widest">
                                About Me
                            </h2>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                            I'm <span className="text-gradient">Ayush Bajpai</span>, <br /> MERN Stack Developer.
                        </h3>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10">
                            {aboutText.intro} {aboutText.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-4 rounded-xl border-l-2 border-primary-500/50 bg-white/5">
                                    <stat.icon className="w-5 h-5 text-primary-400 mb-2" />
                                    <div className="text-lg font-black text-white whitespace-nowrap">{stat.value}</div>
                                    <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Highlights */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="glass p-8 rounded-2xl border border-white/5 relative group"
                                >
                                    <div className="absolute top-4 right-4 text-primary-500/20 group-hover:text-primary-500/40 transition-colors">
                                        <item.icon className="w-12 h-12" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}

                            {/* Mission Statement */}
                            <motion.div
                                variants={itemVariants}
                                className="sm:col-span-2 mt-4 p-6 rounded-2xl bg-gradient-to-r from-primary-900/20 to-transparent border border-primary-500/10 flex items-center gap-4"
                            >
                                <div className="w-1 h-full bg-primary-500 rounded-full"></div>
                                <p className="text-gray-300 italic text-sm md:text-base">
                                    "{aboutText.goal}"
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
