import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { Terminal, Database, Layout, Server, Bot, Wrench, Binary } from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('All');

  const categoryIcons: Record<string, React.ElementType> = {
    'Programming Languages': Terminal,
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Databases': Database,
    'AI & RAG Technologies': Bot,
    'Developer Tools': Wrench,
    'Computer Science Fundamentals': Binary,
  };

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-[#1C201C] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          title="Technical Competencies"
          subtitle="Honest categorizations across systems languages, web frameworks, agentic AI, and computer science foundations."
          badge="Verified Tech Stack"
        />

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
              activeTab === 'All'
                ? 'bg-[#C6FF4D] text-[#0A0A0A] font-bold shadow-sm'
                : 'bg-[#121512] text-[#9CA3AF] border border-[#222822] hover:border-[#384238] hover:text-[#F5F5F0]'
            }`}
          >
            All Disciplines ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                activeTab === cat.name
                  ? 'bg-[#C6FF4D] text-[#0A0A0A] font-bold shadow-sm'
                  : 'bg-[#121512] text-[#9CA3AF] border border-[#222822] hover:border-[#384238] hover:text-[#F5F5F0]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.name] || Terminal;
            return (
              <div
                key={cat.name}
                className="rounded-2xl bg-[#111311] border border-[#222822] hover:border-[#303B30] p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#181D18] border border-[#263326] flex items-center justify-center text-[#C6FF4D]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#F5F5F0]">
                        {cat.name}
                      </h4>
                      <span className="font-mono text-[10px] text-[#6B7280]">
                        {cat.skills.length} competencies
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#9CA3AF] mb-4">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141814] border border-[#202720] hover:border-[#C6FF4D]/40 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF4D] opacity-75 group-hover:scale-125 transition-transform" />
                        <span className="text-xs font-mono font-medium text-[#F5F5F0]">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[10px] font-mono text-[#6B7280] ml-1">
                            · {skill.note}
                          </span>
                        )}
                      </div>
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
