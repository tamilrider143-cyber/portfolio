import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-tech"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#C6FF4D]/6 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#C6FF4D]/3 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Small Technical Role Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111411] border border-[#222822] w-fit mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C6FF4D] animate-ping" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-[#C6FF4D] font-medium">
                {personal.roleLabel}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] mb-6">
              I build digital experiences that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F0] via-[#E2E8F0] to-[#C6FF4D]">
                solve real problems.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl font-sans leading-relaxed mb-8">
              {personal.supportingBio}
            </p>

            {/* Actions & Links */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C6FF4D] text-[#0A0A0A] font-semibold text-sm hover:bg-[#bbf642] transition-all hover:shadow-[0_0_25px_rgba(198,255,77,0.35)] active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121512] border border-[#262C26] hover:border-[#3A453A] text-sm font-mono font-medium text-[#F5F5F0] hover:bg-[#181D18] transition-all"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4 text-[#9CA3AF]" />
              </button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center gap-4 pt-6 border-t border-[#1C221C]">
              <span className="font-mono text-xs text-[#6B7280] uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#121512] border border-[#222822] text-[#9CA3AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#121512] border border-[#222822] text-[#9CA3AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg bg-[#121512] border border-[#222822] text-[#9CA3AF] hover:text-[#C6FF4D] hover:border-[#C6FF4D]/40 transition-colors"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Technical Badge Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#C6FF4D]/30 via-transparent to-[#222622]/40 blur-lg opacity-60" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-[#111311] border border-[#242A24] p-3.5 sm:p-4 shadow-2xl overflow-hidden">
                
                {/* Profile Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#181B18] border border-[#202620] group">
                  <img
                    src={personal.profilePhotoUrl}
                    alt="Tamilselvan M"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom for text contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

                  {/* Overlaid Bottom Identity Stamp */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                    <div>
                      <h2 className="font-heading font-bold text-sm text-[#F5F5F0]">
                        {personal.name}
                      </h2>
                      <p className="font-mono text-[10px] text-[#9CA3AF]">
                        {personal.college}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] text-[#C6FF4D] bg-[#0A0A0A]/80 border border-[#C6FF4D]/30 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      2023–2027
                    </span>
                  </div>
                </div>

                {/* Sub-card Architecture / Spec bar */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#141814] border border-[#1E251E]">
                    <span className="font-mono text-[10px] uppercase text-[#6B7280] block">
                      Engineering Focus
                    </span>
                    <span className="font-sans font-semibold text-xs text-[#F5F5F0] mt-0.5 block truncate">
                      MERN & Agentic AI
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#141814] border border-[#1E251E]">
                    <span className="font-mono text-[10px] uppercase text-[#6B7280] block">
                      Academic Standing
                    </span>
                    <span className="font-mono font-semibold text-xs text-[#C6FF4D] mt-0.5 block">
                      CGPA {personal.cgpa}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs font-mono text-[#6B7280] hover:text-[#C6FF4D] transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C6FF4D]" />
          </a>
        </div>

      </div>
    </section>
  );
};
