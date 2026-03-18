import { Link } from 'react-scroll';
import { Code2, Github, Linkedin, Mail, ArrowUp, ExternalLink, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { navLinks, personalInfo, socialLinks } from '../data/portfolio';
import { motion } from 'framer-motion';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Navigation",
            links: navLinks
        },
        {
            title: "Services",
            links: [
                { label: "Frontend Development", id: "skills" },
                { label: "MERN Stack Solutions", id: "skills" },
                // { label: "UI/UX Optimization", id: "skills" },
                // { label: "3D Web Experiences", id: "home" }
            ]
        }
    ];

    return (
        <footer className="bg-[#01040a] pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container-custom px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">

                    {/* Brand Identity Column */}
                    <div className="md:col-span-5 space-y-8">
                        <Link to="home" smooth={true} className="flex items-center gap-3 cursor-pointer group">
                            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-xl shadow-primary-600/20">
                                <Code2 className="text-white w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-2xl font-black tracking-tighter text-white block leading-none">
                                    {personalInfo.name.toUpperCase()}
                                </span>
                                <span className="text-xs font-bold text-primary-500 tracking-[0.2em] uppercase">
                                 Full Stack Developer (MERN)
                                </span>
                            </div>
                        </Link>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Pushing the boundaries of web development by merging performance with
                            high-end creative design. Let's build the future of the web together.
                        </p>

                        <div className="flex items-center gap-6">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex flex-col items-center gap-2"
                                >
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-primary-600 group-hover:border-primary-500 transition-all duration-500">
                                        <social.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-primary-400 transition-colors">
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        {footerLinks.map((column, idx) => (
                            <div key={idx} className="space-y-8">
                                <h4 className="text-sm font-black text-white uppercase tracking-[0.3em] border-l-2 border-primary-600 pl-4">
                                    {column.title}
                                </h4>
                                <ul className="space-y-4">
                                    {column.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                to={link.id}
                                                smooth={true}
                                                duration={500}
                                                offset={-80}
                                                className="text-gray-400 hover:text-primary-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-900 group-hover:bg-primary-500 transition-all"></span>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Availability / Global Card */}
                        <div className="col-span-2 sm:col-span-1 border border-white/5 glass p-6 rounded-2xl space-y-4 h-fit">
                            <div className="flex items-center gap-2 text-primary-400">
                                <Globe className="w-4 h-4 animate-spin-slow" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Global Reach</span>
                            </div>
                         <p className="text-xs text-gray-400 font-medium">
  Engineering modern digital experiences with clarity, structure, and impact.
</p>

                            <div className="pt-2 flex items-center gap-2">
                                {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> */}
                                {/* <span className="text-[10px] font-bold text-gray-300 uppercase">System Online</span> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dynamic Badge Row */}
                <div className="flex flex-wrap items-center justify-center gap-8 py-10 border-y border-white/5 mb-10">
                    <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                        <ShieldCheck className="w-6 h-6 text-primary-500" />
                        <span className="text-sm font-bold text-white tracking-tighter">SECURE DEVELOPMENT</span>
                    </div>
                    <div className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                        <Cpu className="w-6 h-6 text-primary-500" />
                        <span className="text-sm font-bold text-white tracking-tighter">HIGH PERFORMANCE</span>
                    </div>
                </div>

                {/* Final Copyright Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-gray-500 text-[11px] font-bold tracking-widest uppercase">
                        &copy; {currentYear} {personalInfo.name} — CRAFTED WITH PRECISION
                    </div>

                    <div className="flex items-center gap-8">
                        <Link
                            to="home"
                            smooth={true}
                            className="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors cursor-pointer"
                        >
                            <span className="text-[10px] font-black uppercase tracking-widest">Back to top</span>
                            <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-all">
                                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
