import React, { useState } from 'react';
import { ShieldCheck, Users, Bot, GitPullRequest, Database } from 'lucide-react';

export const IntelliCampusVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('agent-layer');

  const nodes = [
    {
      id: 'stakeholders',
      title: 'Role-Segregated Stakeholders',
      icon: Users,
      badge: 'Client Tier',
      summary: 'Portals for Students, Faculty, Department HODs, Management & Placement Cell.',
      details: 'Each role interacts via customized dashboards with strict scope boundaries. Student portals handle course schedules and requests, faculty portals manage approvals and attendance, HOD portals execute administrative oversight.',
    },
    {
      id: 'security-gateway',
      title: 'RBAC & JWT Gateway',
      icon: ShieldCheck,
      badge: 'Security Layer',
      summary: 'Stateless JWT tokens with role-based claim verification and route guarding.',
      details: 'Incoming requests pass through cryptographic signature verification and role verification middleware before reaching any internal service. Prevents unauthorized privilege escalation across academic tiers.',
    },
    {
      id: 'agent-layer',
      title: 'Multi-Agent Orchestration',
      icon: Bot,
      badge: 'Autonomous Core',
      summary: 'Autonomous agent dispatchers evaluating academic inquiries and rules.',
      details: 'Employs specialized agent routines to automate repetitive academic tasks: syllabus matching, attendance shortfall calculations, placement eligibility filtering, and notification generation.',
    },
    {
      id: 'approval-engine',
      title: 'Risk-Based Human-in-the-Loop',
      icon: GitPullRequest,
      badge: 'Governance',
      summary: 'Auto-approves low-risk queries while escalating critical decisions to HODs.',
      details: 'Safe, low-friction operations (e.g. routine certificates) resolve automatically. High-consequence actions (condonation, grade overrides, disciplinary reviews) trigger cryptographic multi-signature human approval chains.',
    },
    {
      id: 'persistence',
      title: 'Mongoose & MongoDB Store',
      icon: Database,
      badge: 'Data Tier',
      summary: 'High-concurrency document schemas optimized for institutional records.',
      details: 'Indexed MongoDB collections managing student profiles, audit histories, academic performance logs, and verified placement drive statuses with Mongoose data modeling.',
    },
  ];

  const currentNode = nodes.find((n) => n.id === activeNode) || nodes[2];

  return (
    <div className="rounded-2xl border border-[#222622] bg-[#0E100E] p-5 sm:p-7 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#222622]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C6FF4D] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#C6FF4D] font-semibold">
              Interactive System Architecture
            </span>
          </div>
          <p className="text-xs text-[#9CA3AF] mt-1">
            Click any node below to inspect architectural decisions & data flow
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-[#9CA3AF] bg-[#161816] px-2.5 py-1 rounded border border-[#262C26]">
            Active: <span className="text-[#C6FF4D]">{currentNode.badge}</span>
          </span>
        </div>
      </div>

      {/* Node Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-2 mb-6">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className={`group text-left p-3.5 rounded-xl border transition-all relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#182018] border-[#C6FF4D]/60 shadow-[0_0_20px_rgba(198,255,77,0.12)] ring-1 ring-[#C6FF4D]/30'
                  : 'bg-[#121512] border-[#222622] hover:border-[#384238] hover:bg-[#151915]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#C6FF4D] text-[#0A0A0A]' : 'bg-[#1A1E1A] text-[#9CA3AF] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#6B7280]">0{idx + 1}</span>
                </div>
                <h4
                  className={`text-xs font-semibold leading-snug tracking-tight ${
                    isSelected ? 'text-[#F5F5F0]' : 'text-[#D1D5DB]'
                  }`}
                >
                  {node.title}
                </h4>
              </div>
              <span
                className={`inline-block mt-3 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded w-fit ${
                  isSelected
                    ? 'bg-[#C6FF4D]/20 text-[#C6FF4D]'
                    : 'bg-[#1E221E] text-[#9CA3AF]'
                }`}
              >
                {node.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive Inspector */}
      <div className="rounded-xl border border-[#2B352B] bg-[#141814]/90 p-4 sm:p-5 relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-[#C6FF4D]/15 border border-[#C6FF4D]/30 text-[#C6FF4D] shrink-0 hidden sm:block">
            {React.createElement(currentNode.icon, { className: 'w-6 h-6' })}
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h5 className="font-heading font-bold text-base text-[#F5F5F0]">
                {currentNode.title}
              </h5>
              <span className="font-mono text-[10px] text-[#C6FF4D] uppercase tracking-wider bg-[#C6FF4D]/10 px-2 py-0.5 rounded border border-[#C6FF4D]/20">
                {currentNode.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#D1D5DB] font-sans">
              {currentNode.summary}
            </p>
            <p className="text-xs text-[#9CA3AF] leading-relaxed pt-1 border-t border-[#222A22]">
              {currentNode.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
