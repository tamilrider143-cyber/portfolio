import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { GraduationCap, Layers, Server, BrainCircuit, School } from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  const focusIcons = [Layers, Server, BrainCircuit];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#1C201C] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          title="About & Engineering Foundation"
          subtitle="A grounded overview of my academic journey, core focus areas, and development philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111411] border border-[#222822]">
              <h3 className="font-heading font-bold text-xl text-[#F5F5F0] mb-4">
                Full-Stack Development with an AI-Augmented Focus
              </h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-sans mb-5">
                {personal.aboutText}
              </p>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                I prioritize clean architecture, predictable API structures, and transparent workflows. Rather than treating AI as a buzzword, I focus on practical applications like Agentic automation and source-grounded Retrieval-Augmented Generation (RAG) that produce reproducible, dependable results.
              </p>
            </div>

            {/* Three Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {personal.focusAreas.map((area, idx) => {
                const Icon = focusIcons[idx % focusIcons.length];
                return (
                  <div
                    key={area.title}
                    className="p-5 rounded-xl bg-[#111311] border border-[#222622] hover:border-[#333C33] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#181D18] border border-[#263126] flex items-center justify-center text-[#C6FF4D] mb-3.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-heading font-semibold text-sm text-[#F5F5F0] mb-2">
                        {area.title}
                      </h4>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic Credibility & Records */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Higher Education Card */}
            <div className="p-6 rounded-2xl bg-[#111411] border border-[#242A24] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C6FF4D]/15 border border-[#C6FF4D]/30 flex items-center justify-center text-[#C6FF4D]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#C6FF4D] uppercase tracking-wider block">
                      Undergraduate Degree
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#F5F5F0]">
                      {personal.degree}
                    </h4>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#9CA3AF] bg-[#161916] px-2.5 py-1 rounded border border-[#242A24]">
                  {personal.educationPeriod}
                </span>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between items-center py-2 border-t border-[#1C221C]">
                  <span className="text-[#9CA3AF]">Institution</span>
                  <span className="font-medium text-[#F5F5F0] text-right">
                    {personal.college}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#1C221C]">
                  <span className="text-[#9CA3AF]">Cumulative Grade (CGPA)</span>
                  <span className="font-mono text-[#C6FF4D] font-bold text-sm">
                    {personal.cgpa}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#1C221C]">
                  <span className="text-[#9CA3AF]">Graduation Timeline</span>
                  <span className="font-mono text-[#D1D5DB]">Class of 2027</span>
                </div>
              </div>
            </div>

            {/* Schooling Records Card */}
            <div className="p-6 rounded-2xl bg-[#111411] border border-[#222622]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#181D18] border border-[#252E25] flex items-center justify-center text-[#9CA3AF]">
                  <School className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#9CA3AF] uppercase tracking-wider block">
                    Secondary Education
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#F5F5F0]">
                    {personal.school.name}
                  </h4>
                </div>
              </div>

              <div className="space-y-2.5 pt-1 text-xs">
                <div className="flex justify-between items-center py-2 border-t border-[#1C221C]">
                  <span className="text-[#9CA3AF]">Higher Secondary Certificate (HSC)</span>
                  <div className="text-right">
                    <span className="font-mono text-[#F5F5F0] font-semibold">{personal.school.hsc}</span>
                    <span className="text-[10px] text-[#6B7280] block font-mono">({personal.school.hscPeriod})</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-[#1C221C]">
                  <span className="text-[#9CA3AF]">Secondary School Leaving Certificate (SSLC)</span>
                  <div className="text-right">
                    <span className="font-mono text-[#F5F5F0] font-semibold">{personal.school.sslc}</span>
                    <span className="text-[10px] text-[#6B7280] block font-mono">({personal.school.sslcPeriod})</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
