import {
    Code2, Database, Globe, Server, GitBranch, Terminal,
    Palette, Layout, Smartphone, Cloud, Package, Layers,
    Github, Linkedin, Mail, ExternalLink
} from 'lucide-react';

export const personalInfo = {
    name: "Ayush Bajpai",
    role: "Frontend / MERN Stack Developer",
    tagline: "Crafting premium digital experiences with modern web technologies",
    email: "bajpai21ayush@gmail.com",
    location: "India",
    resumeUrl: "/Ayushresume.pdf"
};

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/ayushbajpai21/",
        icon: Github
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayush-bajpai21",
        icon: Linkedin
    },
    {
        name: "Email",
        url: "mailto:bajpai21ayush@gmail.com",
        icon: Mail
    }
];

export const aboutText = {
    intro: "I am a final-year B.Tech (Information Technology) student and a passionate MERN Stack Developer with a strong interest in building modern, scalable web applications.",

description: "Currently in my final year of engineering, I have hands-on experience with MongoDB, Express.js, React, and Node.js. I have worked on multiple real-world and academic projects where I focused on clean, maintainable code, performance optimization, and user-friendly interfaces. I enjoy turning complex problems into simple and intuitive solutions using modern web technologies.",

goal: "As I move toward graduation, my goal is to begin my professional journey as a Full-Stack Developer, contributing to impactful projects, continuously improving my skills, and growing as a developer while delivering meaningful solutions to real-world problems."

};

export const skills = [
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: Code2, level: 90 },
            { name: "JavaScript (ES6+)", icon: Terminal, level: 95 },
            { name: "HTML5 & CSS3", icon: Layout, level: 95 },
            { name: "Tailwind CSS", icon: Palette, level: 90 },
            { name: "BootStrap", icon: Layers, level: 75 },
            // { name: "Framer Motion", icon: Smartphone, level: 80 }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: Server, level: 85 },
            { name: "Express.js", icon: Code2, level: 85 },
            { name: "MongoDB", icon: Database, level: 80 },
            { name: "REST APIs", icon: Globe, level: 90 },
            { name: "JWT AUth", icon: Cloud, level: 75 }
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            { name: "Git & GitHub", icon: GitBranch, level: 90 },
            { name: "VS Code", icon: Terminal, level: 95 },
            { name: "Postman", icon: Package, level: 85 },
            { name: "Reusable Component Design", icon: Smartphone, level: 95 },
            { name: "Frontend Architecture", icon: Palette, level: 80 }
        ]
    }
];

export const projects = [
    {
        id: 1,
        title: "AI-Assistant",
        description: "Developed an intelligent chatbot using React, Node.js, and Express integrated with Google Gemini API for AI-based responses.",
        image: "/projects/ai-assistant.png",
        techStack: ["React", "Express.js", "Tailwind CSS", "Jwt-Auth", "Node.js"],
        featured: true,
        liveUrl: "",
        githubUrl: "https://github.com/ayushbajpai21/AI_Assistant"
    },
    {
        id: 2,
        title: "Taskify - Task Management",
        description: "Developed a full-stack task management web application using the MERN stack, enabling users to securely create, update, complete, and delete tasks with user-specific data handling.",
        image: "/projects/taskify.png",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Toastify"],
        featured: true,
        liveUrl: "",
        githubUrl: "https://github.com/ayushbajpai21/Taskify"
    },
    {
        id: 3,
        title: "Foodie AI",
        description: "Developed a fully responsive food ordering web app with modern design and smooth user experience Integrated a clickable AI Assistant Chatbot using Gemini API to enhance user interaction.",
        image: "/projects/foodie.png",
        techStack: ["React", "Tailwind CSS", "Context API", "Email.js"],
        featured: true,
        liveUrl: "https://foodie-ai-seven.vercel.app/",
        githubUrl: "https://github.com/ayushbajpai21/Foodie-AI"
    }
];

export const education = [
    {
        id: 1,
        degree: "Bachelor of Technology in Information Technology",
        institution: "Abdul Kalam Technical University",
        location: "Lucknow, India",
        year: "2022 - 2026",
        description: "B.Tech Information Technology student with a focus on software engineering concepts and hands-on web development projects."

    },
    {
        id: 2,
        degree: "Higher Secondary Education (12th)",
        institution: "Universal Public School",
        location: "Lucknow, India",
        year: "2021 - 2022",
        
    }
];

export const certificates = [
    {
        id: 1,
        title:  "Winner – Smart India Hackathon (SIH) 2025",
        issuer: "Ministry of Education, Government of India",
        date: "December 2025",
        image: "/certificates/sih.jpeg",
        // credentialUrl: "https://udemy.com/certificate/example123"
    },
    {
        id: 2,
        title: "Won Frontend Competion Certificate",
        issuer: "College",
        date: "December 2024",
        image: "/certificates/samera.jpeg",
        // credentialUrl: "https://udemy.com/certificate/example456"
    },
    {
        id: 3,
        title: "Complete Training on MERN Stack Development",
        issuer: "ZN Infotech",
        date: "January 2025",
        image: "/certificates/zn.jpeg",
        // credentialUrl: "https://udemy.com/certificate/example789"
    },
    {
        id: 4,
        title: "Full Stack Web Development (MERN) – Delta Batch",
        issuer: "Apna College",
        date: "June 2023",
        image: "/certificates/delta.jpeg",
        // credentialUrl: "https://coursera.org/verify/example123"
    },

];

export const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
];
