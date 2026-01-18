import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-primary-500/30 selection:text-white">
      {/* Background fixed layer */}
      <div className="fixed inset-0 grid-mesh opacity-30 pointer-events-none -z-10"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
