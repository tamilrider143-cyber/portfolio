import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { X, Mail, Copy, Check, FileText, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hasResumeFile = Boolean(portfolioData.personal.resumeUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#0E110E] border border-[#2B352B] rounded-2xl shadow-2xl p-6 sm:p-7 text-left text-[#F5F5F0]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#141714] border border-[#222622] text-[#9CA3AF] hover:text-white hover:border-[#384238] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#C6FF4D]/15 border border-[#C6FF4D]/30 flex items-center justify-center text-[#C6FF4D]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-[#F5F5F0]">
              Resume · Tamilselvan M
            </h3>
            <span className="font-mono text-xs text-[#9CA3AF]">
              B.Tech IT · Sri Eshwar College of Engineering
            </span>
          </div>
        </div>

        {hasResumeFile ? (
          <div>
            <p className="text-sm text-[#D1D5DB] mb-5">
              Tamilselvan's verified resume is configured and ready for download.
            </p>
            <a
              href={portfolioData.personal.resumeUrl!}
              download="Tamilselvan_M_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C6FF4D] text-[#0A0A0A] font-semibold text-sm hover:bg-[#b8f53b] transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        ) : (
          <div>
            <p className="text-xs sm:text-sm text-[#D1D5DB] mb-4 leading-relaxed font-sans">
              To keep document versions synchronized and prevent circulating outdated files, Tamilselvan M provides his current verified resume directly upon request.
            </p>

            {/* Quick Resume Profile Snapshot */}
            <div className="rounded-xl bg-[#141714] border border-[#222622] p-3.5 mb-5 space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#202520]">
                <span className="text-[#9CA3AF]">Degree</span>
                <span className="font-mono text-[#F5F5F0]">B.Tech IT (2023–2027)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#202520]">
                <span className="text-[#9CA3AF]">Institution</span>
                <span className="font-mono text-[#F5F5F0]">Sri Eshwar College of Engineering</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#202520]">
                <span className="text-[#9CA3AF]">CGPA</span>
                <span className="font-mono text-[#C6FF4D] font-bold">7.71 (VI Sem)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#9CA3AF]">Technical Focus</span>
                <span className="font-mono text-[#F5F5F0]">MERN · AI Agents · RAG</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <a
                href={`mailto:${portfolioData.personal.email}?subject=Resume%20Request%20-%20Tamilselvan%20M`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#C6FF4D] text-[#0A0A0A] font-semibold text-xs hover:bg-[#b8f53b] transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Request Resume by Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#161916] border border-[#2B352B] text-xs font-mono text-[#F5F5F0] hover:border-[#3E4A3E] transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#C6FF4D]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
