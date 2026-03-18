import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolio';

export const Education = () => {
    return (
        <section id="education" className="section-padding bg-dark-900 overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-primary-500">Education</span></h2>
                    <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mb-6"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto px-4">
                    {/* Timeline center line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600/50 via-primary-600 to-primary-600/50 transform -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content card */}
                                <div className="w-full md:w-[45%]">
                                    <div className="glass p-8 rounded-2xl hover:glow-blue transition-all duration-300">
                                        <div className="flex items-center gap-3 text-primary-400 mb-2">
                                            <GraduationCap className="w-6 h-6" />
                                            <span className="font-bold text-lg">{item.degree}</span>
                                        </div>
                                        <h4 className="text-xl font-semibold mb-4 text-white">{item.institution}</h4>

                                        <div className="flex flex-col gap-2 mb-6">
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{item.year}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                <MapPin className="w-4 h-4" />
                                                <span>{item.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-dark-900 transform -translate-x-1/2 z-10 flex items-center justify-center shadow-lg shadow-primary-600/50">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>

                                {/* Spacer for md screens */}
                                <div className="hidden md:block w-[45%]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
