import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Download, X, Calendar, User } from 'lucide-react';
import { certificates } from '../data/portfolio';

const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null;

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-dark-800 border border-white/10 rounded-3xl overflow-hidden shadow-2xl overflow-y-auto max-h-[90vh]"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-dark-700/50 hover:bg-dark-600 rounded-full text-white/70 hover:text-white transition-all border border-white/5"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-3/5 relative group bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain"
                        />
                        {/* Image Overlay/Shine */}
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col">
                        <div className="mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold mb-4 border border-primary-500/20">
                                <Award className="w-3.5 h-3.5" />
                                Certification
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                                {cert.title}
                            </h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <div className="p-2 bg-dark-700 rounded-lg">
                                        <User className="w-4 h-4 text-primary-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Issued By</p>
                                        <p className="text-sm font-medium text-gray-200">{cert.issuer}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <div className="p-2 bg-dark-700 rounded-lg">
                                        <Calendar className="w-4 h-4 text-primary-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Date</p>
                                        <p className="text-sm font-medium text-gray-200">{cert.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <p className="text-gray-400 leading-relaxed">
                                {cert.description}
                            </p>
                        </div>

                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

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
                                onClick={() => setSelectedCert(cert)}
                                className="group relative bg-dark-800/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-primary-500/30 overflow-hidden transition-all duration-300 cursor-pointer"
                            >
                                {/* Decorative Gradient Blob */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl group-hover:bg-primary-600/20 transition-all duration-500"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 flex items-start justify-between">
                                        <div className="p-4 bg-dark-700/50 rounded-2xl group-hover:bg-primary-500/10 group-hover:text-primary-400 transition-colors duration-300">
                                            <Icon className="w-8 h-8 text-primary-500" />
                                        </div>
                                        <div className="p-2 text-gray-400 group-hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
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

                <AnimatePresence>
                    {selectedCert && (
                        <CertificateModal
                            cert={selectedCert}
                            onClose={() => setSelectedCert(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
