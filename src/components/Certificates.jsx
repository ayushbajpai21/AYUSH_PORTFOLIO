import { motion } from 'framer-motion';
import { Award, ExternalLink, Download } from 'lucide-react';
import { certificates } from '../data/portfolio';

export const Certificates = () => {
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
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="certificates" className="section-padding bg-dark-900">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates <span className="text-primary-500">& Awards</span></h2>
                    <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of professional certifications and courses I've completed to sharpen my skills.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {certificates.map((cert) => {
                        const Icon = cert.icon || Award;
                        return (
                            <motion.div
                                key={cert.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-dark-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-primary-500/30 overflow-hidden transition-all duration-300"
                            >
                                {/* Decorative Gradient Blob */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl group-hover:bg-primary-600/20 transition-all duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 flex items-start justify-between">
                                        <div className="p-4 bg-dark-700/50 rounded-2xl group-hover:bg-primary-500/10 group-hover:text-primary-400 transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-primary-500" />
                                        </div>
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-gray-400 hover:text-white transition-colors"
                                            title="View Credential"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                                        {cert.title}
                                    </h3>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-1">
                                        <span className="text-sm font-medium text-gray-300">{cert.issuer}</span>
                                        <span className="text-xs text-gray-500">{cert.date}</span>
                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:animate-shimmer skew-x-12"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};
