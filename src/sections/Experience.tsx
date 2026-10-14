import React from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Briefcase, Calendar, CheckCircle2, Bot } from 'lucide-react';

export const Experience: React.FC = () => {
  const { internships } = portfolioData;

  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#1C201C] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          title="Practical Engineering Experience"
          subtitle="Internships focused on full-stack web architectures and hands-on agentic AI system development."
          badge="Internship Track"
        />

        <div className="relative border-l border-[#222822] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {internships.map((internship) => {
            const isAI = internship.id.includes('ai');
            return (
              <div key={internship.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-[#111411] border-2 border-[#C6FF4D] flex items-center justify-center text-[#C6FF4D] shadow-sm">
                  {isAI ? <Bot className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#111311] border border-[#222822] group-hover:border-[#333E33] p-6 sm:p-8 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#C6FF4D] font-semibold">
                          Internship Experience
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[#343C34]" />
                        <span className="font-mono text-xs text-[#9CA3AF]">
                          {internship.organization}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F0]">
                        {internship.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#9CA3AF] bg-[#161816] px-3 py-1.5 rounded-lg border border-[#222822] w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#C6FF4D]" />
                      <span>{internship.year}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#D1D5DB] font-sans leading-relaxed mb-5">
                    {internship.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    <span className="font-mono text-[11px] text-[#9CA3AF] uppercase tracking-wider block font-medium">
                      Key Technical Contributions:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {internship.highlights.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-[#141714] border border-[#1E241E] text-xs text-[#D1D5DB]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-[#1E231E]">
                    <span className="font-mono text-[11px] text-[#6B7280] uppercase mr-2">
                      Stack:
                    </span>
                    {internship.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#161916] text-[#C6FF4D] border border-[#263126]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
