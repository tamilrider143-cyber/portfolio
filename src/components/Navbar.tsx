import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Simple active section spy
      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-[#222622] py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF4D] rounded-lg p-1"
          aria-label="Tamilselvan M - Home"
        >
          <div className="w-10 h-10 rounded-xl bg-[#141714] border border-[#222622] group-hover:border-[#C6FF4D]/60 flex items-center justify-center transition-colors shadow-inner">
            <span className="font-mono font-black text-sm tracking-tighter text-[#F5F5F0]">
              T<span className="text-[#C6FF4D]">M</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-[#F5F5F0] group-hover:text-white transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[11px] text-[#9CA3AF] tracking-wider uppercase">
              Full-Stack · AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111311]/80 border border-[#222622] px-3 py-1.5 rounded-full shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#0A0A0A] bg-[#C6FF4D] font-semibold shadow-sm'
                    : 'text-[#9CA3AF] hover:text-[#F5F5F0] hover:bg-[#1E221E]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-mono font-medium text-[#9CA3AF] hover:text-[#F5F5F0] border border-[#222622] hover:border-[#384238] rounded-lg bg-[#111311] transition-all hover:bg-[#161916]"
            aria-label="View or download resume"
          >
            Resume
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-[#C6FF4D] text-[#0A0A0A] hover:bg-[#b8f53b] transition-all hover:shadow-[0_0_20px_rgba(198,255,77,0.3)] active:scale-95"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#141714] border border-[#222622] text-[#F5F5F0] hover:text-[#C6FF4D] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6FF4D]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#222622] bg-[#0A0A0A]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-lg text-[#9CA3AF] hover:text-[#F5F5F0] hover:bg-[#161916] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#222622] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-center text-xs font-mono font-medium text-[#9CA3AF] border border-[#222622] rounded-lg bg-[#111311]"
              >
                Resume Details
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-[#C6FF4D] text-[#0A0A0A]"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
