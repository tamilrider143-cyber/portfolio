import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectModal } from '../components/ProjectModal';
import { IntelliCampusVisual } from '../components/IntelliCampusVisual';
import { RagPipelineVisual } from '../components/RagPipelineVisual';
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { projects } = portfolioData;
  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[#1C201C] bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          title="Featured Software Engineering"
          subtitle="Real projects engineered with modern web stacks, multi-agent workflows, and source-grounded retrieval."
          badge="Production & Systems"
        />

        {/* 1. PRIMARY FEATURED PROJECT: INTELLICAMPUS */}
        <div className="mb-14 rounded-3xl bg-[#111311] border border-[#2B352B] p-6 sm:p-9 relative overflow-hidden shadow-2xl">
          {/* Subtle electric ambient accent behind featured card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6FF4D]/5 blur-[120px] pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#222822]">
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#C6FF4D]/15 text-[#C6FF4D] border border-[#C6FF4D]/30 font-semibold">
                  Featured Flagship System
                </span>
                <span className="font-mono text-xs text-[#9CA3AF]">
                  Year: {featuredProject.year}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#343C34]" />
                <span className="font-mono text-xs text-[#9CA3AF]">
                  Role-Based ERP Architecture
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F5F5F0] tracking-tight">
                {featuredProject.title}
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] mt-1 max-w-3xl">
                {featuredProject.tagline}
              </p>
            </div>

            {/* Live Actions */}
            <div className="flex items-center gap-3">
              {featuredProject.liveUrl ? (
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6FF4D] text-[#0A0A0A] font-semibold text-xs sm:text-sm hover:bg-[#b8f53b] transition-all shadow-[0_0_20px_rgba(198,255,77,0.25)] active:scale-95"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : null}

              <button
                onClick={() => setSelectedProject(featuredProject)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161916] border border-[#2B352B] hover:border-[#3C4A3C] text-xs sm:text-sm font-mono text-[#F5F5F0] hover:bg-[#1A1F1A] transition-all"
              >
                <span>Deep Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6FF4D]" />
              </button>
            </div>
          </div>

          {/* Description & Problem/Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed font-sans">
                {featuredProject.description}
              </p>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl bg-[#141714] border border-[#222822]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#EF4444] font-semibold block mb-1.5">
                    Institutional Problem
                  </span>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {featuredProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#141714] border border-[#232E23]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#C6FF4D] font-semibold block mb-1.5">
                    Multi-Agent Solution
                  </span>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {featuredProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#9CA3AF] block mb-2 font-medium">
                  Core Modules & Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {featuredProject.capabilities.slice(0, 4).map((cap, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-[#141714] border border-[#1E251E] text-xs text-[#D1D5DB]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Architecture Preview */}
            <div className="lg:col-span-5">
              <IntelliCampusVisual />
            </div>
          </div>

          {/* Technology Badges Row */}
          <div className="pt-5 border-t border-[#222822] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-xs text-[#6B7280] mr-2 uppercase">
                Stack:
              </span>
              {featuredProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#161B16] text-[#C6FF4D] border border-[#263326]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(featuredProject)}
              className="text-xs font-mono text-[#9CA3AF] hover:text-[#C6FF4D] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>View full specification</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. SECONDARY PROJECTS GRID: STUDY FLOW & AI RESEARCH ASSISTANT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherProjects.map((project) => {
            const isRAG = project.id === 'ai-research-assistant';
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#111311] border border-[#222822] hover:border-[#343D34] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#C6FF4D] font-semibold">
                        {project.year}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#343C34]" />
                      <span className="font-mono text-xs text-[#9CA3AF]">
                        {project.status}
                      </span>
                    </div>

                    {/* Verified Link or Honest Placeholder */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-[#C6FF4D] hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#161816] text-[#6B7280] border border-[#222622]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4B5563]" />
                        Link coming soon
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h4 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F0] mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-[#9CA3AF] mb-4">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed font-sans mb-5">
                    {project.description}
                  </p>

                  {/* Special Visual Treatment for RAG */}
                  {isRAG && (
                    <div className="mb-5">
                      <RagPipelineVisual />
                    </div>
                  )}

                  {/* Special Visual Treatment for Study Flow */}
                  {!isRAG && (
                    <div className="p-4 rounded-xl bg-[#141714] border border-[#222822] mb-5 space-y-2.5">
                      <div className="flex items-center justify-between text-xs pb-2 border-b border-[#202520]">
                        <span className="text-[#9CA3AF]">Auth & Protection</span>
                        <span className="font-mono text-[#F5F5F0]">JWT Sessions</span>
                      </div>
                      <div className="flex justify-between items-center text-xs pb-2 border-b border-[#202520]">
                        <span className="text-[#9CA3AF]">Data Handling</span>
                        <span className="font-mono text-[#F5F5F0]">CRUD & Task Analytics</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-[#9CA3AF]">Interface Design</span>
                        <span className="font-mono text-[#C6FF4D]">Dynamic Productivity Tracking</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer with Stack and Modal Action */}
                <div className="pt-4 border-t border-[#1F241F]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161916] text-[#C6FF4D] border border-[#263126]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#141814] hover:bg-[#1A1F1A] border border-[#242C24] hover:border-[#384538] text-xs font-mono font-medium text-[#F5F5F0] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Architecture & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6FF4D]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
