import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] selection:bg-[#C6FF4D]/25 selection:text-[#C6FF4D]">
      {/* Top Floating Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Page Flow */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
      </main>

      {/* Contact Section & Footer */}
      <Contact />

      {/* Reusable Honest Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
};

export default App;
