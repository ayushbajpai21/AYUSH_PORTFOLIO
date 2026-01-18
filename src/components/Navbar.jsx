import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolio';
import { useScrollSpy } from '../hooks/useScrollSpy';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const activeSection = useScrollSpy(navLinks.map(link => link.id));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-5xl rounded-full border border-white/10 ${isScrolled ? 'glass-strong shadow-2xl py-2 px-4' : 'bg-transparent py-4 border-transparent'
                }`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className={`flex items-center gap-2 cursor-pointer group px-3 py-1 rounded-full transition-all duration-300 ${isScrolled ? 'bg-transparent' : 'glass px-4 py-2'}`}
                >
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-600/20">
                        <Code2 className="text-white w-4 h-4" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white hidden sm:block">
                        {personalInfo.name.split(' ')[0]}<span className="text-primary-500">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className={`hidden md:flex items-center gap-1 ${isScrolled ? '' : 'glass rounded-full px-2 py-1'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.id}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-100}
                            className={`relative px-4 py-2 text-sm font-medium transition-all cursor-pointer rounded-full ${activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden text-white p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-white/10' : 'glass'}`}
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-16 left-0 right-0 mx-auto w-full glass-strong rounded-2xl overflow-hidden border border-white/10 md:hidden"
                    >
                        <div className="flex flex-col p-2 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-center font-medium transition-colors ${activeSection === link.id
                                        ? 'bg-primary-600/20 text-primary-400'
                                        : 'text-gray-300 hover:bg-white/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
