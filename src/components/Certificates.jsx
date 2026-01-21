import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, Download, X, Maximize2 } from 'lucide-react';
import { certificates } from '../data/portfolio';

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
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedCert(cert)}
                            className="glass rounded-2xl overflow-hidden group border border-white/5 hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Maximize2 className="w-10 h-10 text-white drop-shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300" />
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

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full bg-dark-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500 text-white rounded-full transition-colors z-10 backdrop-blur-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-2/3 bg-dark-900 flex items-center justify-center p-4">
                                    <img
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg"
                                    />
                                </div>
                                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5 bg-gradient-to-br from-dark-800 to-dark-900">
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{selectedCert.title}</h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Issued By</p>
                                            <p className="text-primary-400 font-semibold text-lg">{selectedCert.issuer}</p>
                                        </div>
                                        
                                        <div>
                                            <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Date</p>
                                            <p className="text-white font-medium">{selectedCert.date}</p>
                                        </div>

                                        {selectedCert.credentialUrl && (
                                            <div className="pt-6">
                                                <a 
                                                    href={selectedCert.credentialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-colors w-full justify-center group"
                                                >
                                                    Verify Credential
                                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
