import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { personalInfo, socialLinks } from '../data/portfolio';

/* 🔐 EmailJS Keys (PASTE YOUR REAL VALUES HERE) */
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
        name: formState.name,
        email: formState.email,
        message: formState.message,
    };

    emailjs
        .send(
            "service_7q1jcwu",
            "template_qe8yi2c",
            templateParams,
            "VeRlHBQIkr_DuwbCz"
        )
        .then(() => {
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitted(false), 5000);
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        })
        .finally(() => {
            setIsSubmitting(false);
        });
};


    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="section-padding bg-dark-900 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 gradient-radial opacity-30 pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In <span className="text-primary-500">Touch</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                        I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass p-8 rounded-2xl space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${personalInfo.email}`}
                                            className="text-gray-300 hover:text-primary-400 transition-colors"
                                        >
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">
                                            Location
                                        </p>
                                        <p className="text-gray-300">Lucknow, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-4">
                                    Follow Me
                                </p>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form (UI UNCHANGED) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`btn-primary w-full flex items-center justify-center gap-2 py-4 ${
                                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            >
                                {submitted ? (
                                    <span className="flex items-center gap-2">
                                        Success! <Send className="w-5 h-5" />
                                    </span>
                                ) : isSubmitting ? (
                                    <span className="flex items-center gap-2 animate-pulse">
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message <Send className="w-5 h-5" />
                                    </span>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
