import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';

export const Projects = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15
            }
        }
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden text-left">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm block mb-2">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A collection of projects exploring modern web technologies, performance optimization, and intuitive design.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="aspect-video relative overflow-hidden">
                                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay Actions */}
                                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-dark-900/90 via-dark-900/40 to-transparent flex items-end justify-between p-6">
                                    <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-dark-900 text-white transition-all duration-300"
                                            title="View Source"
                                        >
                                            <Github size={20} />
                                        </a>
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-blue-500/80 backdrop-blur-md rounded-full hover:bg-blue-600 text-white transition-all duration-300 shadow-lg shadow-blue-500/20"
                                            title="View Live"
                                        >
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.featured && (
                                        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 rounded border border-blue-500/20">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-md border border-white/5 hover:border-white/20 transition-colors whitespace-nowrap"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
