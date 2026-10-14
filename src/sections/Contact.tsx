import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Copy, Check, ArrowUp, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-20 sm:pt-28 pb-12 border-t border-[#1C201C] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container */}
        <div className="rounded-3xl bg-[#111411] border border-[#2B352B] p-8 sm:p-12 mb-16 relative overflow-hidden text-center sm:text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6FF4D]/5 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161B16] border border-[#263326] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C6FF4D]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#C6FF4D] font-medium">
                  Direct Inquiries & Collaboration
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#F5F5F0] tracking-tight leading-tight">
                Have a project or opportunity in mind?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] max-w-2xl font-sans leading-relaxed">
                I'm interested in connecting with developers, teams, and organizations working on meaningful software projects.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center sm:items-start lg:items-end">
              <a
                href={`mailto:${personal.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C6FF4D] text-[#0A0A0A] font-semibold text-sm hover:bg-[#bbf642] transition-all hover:shadow-[0_0_25px_rgba(198,255,77,0.35)] active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#141814] border border-[#263126] text-xs font-mono text-[#F5F5F0] hover:border-[#3A4A3A] transition-colors"
                aria-label="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#C6FF4D]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-[#1C221C] text-left">
            <a
              href={`mailto:${personal.email}`}
              className="p-4 rounded-xl bg-[#141714] border border-[#202620] hover:border-[#C6FF4D]/40 transition-colors group"
            >
              <span className="font-mono text-[10px] uppercase text-[#6B7280] block mb-1">
                Direct Email
              </span>
              <span className="font-mono text-xs text-[#F5F5F0] group-hover:text-[#C6FF4D] transition-colors truncate block">
                {personal.email}
              </span>
            </a>

            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#141714] border border-[#202620] hover:border-[#C6FF4D]/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-[#C6FF4D]" />
                  <span className="font-mono text-[10px] uppercase text-[#6B7280]">
                    GitHub Profile
                  </span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#6B7280] group-hover:text-[#C6FF4D]" />
              </div>
              <span className="font-mono text-xs text-[#F5F5F0] group-hover:text-[#C6FF4D] transition-colors truncate block">
                tamilrider143-cyber
              </span>
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#141714] border border-[#202620] hover:border-[#C6FF4D]/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#C6FF4D]" />
                  <span className="font-mono text-[10px] uppercase text-[#6B7280]">
                    LinkedIn Profile
                  </span>
                </div>
                <ArrowUpRight className="w-3 h-3 text-[#6B7280] group-hover:text-[#C6FF4D]" />
              </div>
              <span className="font-mono text-xs text-[#F5F5F0] group-hover:text-[#C6FF4D] transition-colors truncate block">
                tamilselvan-m-84225438a
              </span>
            </a>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-[#1C201C] text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span className="font-heading font-medium text-[#D1D5DB]">
              {personal.name}
            </span>
            <span>·</span>
            <span>Built with care. © {currentYear}</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-[#4B5563]">
              B.Tech IT · Sri Eshwar College of Engineering
            </span>
            <a
              href="#hero"
              className="p-2 rounded-lg bg-[#141714] border border-[#222822] text-[#9CA3AF] hover:text-[#C6FF4D] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
