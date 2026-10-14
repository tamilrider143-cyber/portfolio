import React, { useEffect } from 'react';
import type { Project } from '../data/portfolio';
import { X, ExternalLink, CheckCircle2, Cpu, AlertCircle } from 'lucide-react';
import { IntelliCampusVisual } from './IntelliCampusVisual';
import { RagPipelineVisual } from './RagPipelineVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0E110E] border border-[#2B352B] rounded-2xl shadow-2xl p-5 sm:p-8 text-left text-[#F5F5F0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#141714] border border-[#222622] text-[#9CA3AF] hover:text-white hover:border-[#384238] transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="font-mono text-xs text-[#C6FF4D] uppercase tracking-wider font-semibold">
              {project.year} · {project.status}
            </span>
            {project.isFeatured && (
              <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#C6FF4D]/15 text-[#C6FF4D] border border-[#C6FF4D]/30">
                Featured Flagship
              </span>
            )}
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-heading font-bold text-[#F5F5F0]">
            {project.title}
          </h3>
          <p className="text-sm text-[#9CA3AF] mt-1">{project.tagline}</p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-[#222622]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C6FF4D] text-[#0A0A0A] text-xs font-semibold hover:bg-[#b5f336] transition-colors shadow-sm"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#151815] border border-[#242C24] text-xs font-mono text-[#9CA3AF]">
              <span className="w-2 h-2 rounded-full bg-[#6B7280]" />
              Live Demo: Link coming soon
            </span>
          )}

          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#161916] border border-[#2B352B] text-xs font-mono text-[#F5F5F0] hover:border-[#C6FF4D]/50 transition-colors"
            >
              <span>View Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151815] border border-[#242C24] text-xs font-mono text-[#6B7280]">
              Repository link coming soon
            </span>
          )}
        </div>

        {/* Specialized Interactive Visualizers */}
        {project.id === 'intellicampus' && (
          <div className="mb-6">
            <IntelliCampusVisual />
          </div>
        )}

        {project.id === 'ai-research-assistant' && (
          <div className="mb-6">
            <RagPipelineVisual />
          </div>
        )}

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#121412] border border-[#222622]">
            <span className="font-mono text-xs uppercase text-[#EF4444] font-semibold tracking-wider flex items-center gap-1.5 mb-2">
              <AlertCircle className="w-3.5 h-3.5" /> Problem Space
            </span>
            <p className="text-xs text-[#D1D5DB] leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121612] border border-[#232F23]">
            <span className="font-mono text-xs uppercase text-[#C6FF4D] font-semibold tracking-wider flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Technical Solution
            </span>
            <p className="text-xs text-[#D1D5DB] leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architectural Decisions (if available) */}
        {project.architecturalDecisions && (
          <div className="mb-6 p-4 rounded-xl bg-[#121412] border border-[#222622]">
            <span className="font-mono text-xs uppercase text-[#9CA3AF] font-semibold tracking-wider flex items-center gap-1.5 mb-3">
              <Cpu className="w-3.5 h-3.5 text-[#C6FF4D]" /> Key Architectural Decisions
            </span>
            <ul className="space-y-2">
              {project.architecturalDecisions.map((dec, idx) => (
                <li key={idx} className="text-xs text-[#D1D5DB] flex items-start gap-2">
                  <span className="font-mono text-[#C6FF4D] font-bold mt-0.5">•</span>
                  <span>{dec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Capabilities List */}
        <div className="mb-6">
          <h4 className="font-heading font-semibold text-sm text-[#F5F5F0] mb-3">
            Core Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-2.5 rounded-lg bg-[#141714] border border-[#222622] text-xs text-[#D1D5DB]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Badges */}
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase font-mono tracking-wider text-[#9CA3AF] mb-2.5">
            Verified Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#181D18] text-[#C6FF4D] border border-[#283528]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
