import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">
                        My Arsenal
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
  These are the core technologies I work with to craft modern, scalable, and visually engaging web experiences.
</p>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05 }}
                                        className="group flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
                                    >
                                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 mb-3 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <skill.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300 relative z-10" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center">
                                            {skill.name}
                                        </span>


                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Skills };
