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
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-primary-500/30 transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <Award className="w-6 h-6 text-primary-500 flex-shrink-0" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-gray-300">{cert.issuer}</span>
                                    <span className="text-xs text-gray-500">{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
