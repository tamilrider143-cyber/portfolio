import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Trophy, Code, ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { achievements, leetcode, certifications } = portfolioData;

  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-[#1C201C] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          title="Achievements & Verified Credentials"
          subtitle="Competitive hackathon results, industry innovation programs, and verified coursework."
          badge="Honors & Certifications"
        />

        {/* LeetCode & Hackathon Metric Highlight Strip */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LeetCode Resume Metric Showcase */}
          <div className="md:col-span-5 rounded-2xl bg-[#111411] border border-[#242C24] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#C6FF4D]/15 border border-[#C6FF4D]/30 flex items-center justify-center text-[#C6FF4D]">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-base text-[#F5F5F0]">
                      LeetCode Competitive Profile
                    </h3>
                    <span className="font-mono text-[10px] text-[#9CA3AF]">
                      Algorithms & Problem Solving
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#6B7280] bg-[#161816] px-2 py-0.5 rounded border border-[#202520]">
                  Resume Verified
                </span>
              </div>

              {/* Numerical Metrics */}
              <div className="grid grid-cols-3 gap-3 my-4">
                <div className="p-3 rounded-xl bg-[#141814] border border-[#1E251E] text-center">
                  <span className="font-mono text-[10px] uppercase text-[#9CA3AF] block mb-1">
                    Max Rating
                  </span>
                  <span className="font-mono text-xl font-bold text-[#C6FF4D]">
                    {leetcode.maxRating}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#141814] border border-[#1E251E] text-center">
                  <span className="font-mono text-[10px] uppercase text-[#9CA3AF] block mb-1">
                    Solved
                  </span>
                  <span className="font-mono text-xl font-bold text-[#F5F5F0]">
                    {leetcode.problemsSolved}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#141814] border border-[#1E251E] text-center">
                  <span className="font-mono text-[10px] uppercase text-[#9CA3AF] block mb-1">
                    Global Rank
                  </span>
                  <span className="font-mono text-xs font-bold text-[#D1D5DB] mt-1 block">
                    {leetcode.globalRank}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#6B7280] font-mono pt-3 border-t border-[#1C221C]">
              * Resume-reported statistics. Real-time synchronization may be linked via configurable profile field.
            </p>
          </div>

          {/* Hackathon Awards Grid */}
          <div className="md:col-span-7 grid grid-cols-1 gap-3.5">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-xl bg-[#111411] border border-[#222822] hover:border-[#333E33] transition-colors flex items-start justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#181D18] border border-[#263126] flex items-center justify-center text-[#C6FF4D] shrink-0 mt-0.5">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-[10px] text-[#C6FF4D] bg-[#C6FF4D]/10 px-2 py-0.5 rounded border border-[#C6FF4D]/20 font-semibold">
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs text-[#9CA3AF]">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-heading font-semibold text-sm text-[#F5F5F0]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Certifications Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#C6FF4D] font-semibold">
              // Credential Record
            </span>
            <span className="w-8 h-[1px] bg-[#222622]" />
            <h3 className="font-heading font-bold text-xl text-[#F5F5F0]">
              Professional Certifications & Coursework
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-[#111311] border border-[#222822] hover:border-[#2F3A2F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="px-2 py-0.5 rounded bg-[#161916] border border-[#222622] text-[#C6FF4D]">
                      {cert.issuer}
                    </span>
                    <span>{cert.year}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-[#F5F5F0] leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1C221C] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#6B7280]">
                    Verified Resume Entry
                  </span>
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#C6FF4D] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-[#4B5563]">
                      Credential ID on request
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
