import React, { useState } from 'react';
import { FileText, Scissors, Binary, Search, Sparkles } from 'lucide-react';

export const RagPipelineVisual: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Document Ingestion',
      tech: 'Python / LangChain',
      icon: FileText,
      description: 'Parses research papers and complex PDF documents into structured text streams while preserving document metadata.',
      inDepth: 'Extracts section headers, paragraphs, and references from unstructured academic literature for downstream processing.',
    },
    {
      num: '02',
      title: 'Semantic Chunking',
      tech: 'RecursiveCharacterTextSplitter',
      icon: Scissors,
      description: 'Splits raw text into manageable chunks with controlled token overlap to preserve contextual continuity.',
      inDepth: 'Ensures conceptual sentences are not abruptly severed, retaining semantic coherence across adjacent token windows.',
    },
    {
      num: '03',
      title: 'Vector Embeddings',
      tech: 'HuggingFace Transformers',
      icon: Binary,
      description: 'Projects text chunks into dense, high-dimensional vector representations capturing semantic meaning.',
      inDepth: 'Transforms passages into coordinate vectors where conceptually similar academic claims map to neighboring points.',
    },
    {
      num: '04',
      title: 'FAISS Vector Search',
      tech: 'FAISS Index',
      icon: Search,
      description: 'Performs sub-millisecond nearest-neighbor similarity search matching user queries to relevant text chunks.',
      inDepth: 'Avoids costly brute-force lookups by utilizing Facebook AI Similarity Search clustering on local indexed vectors.',
    },
    {
      num: '05',
      title: 'Source-Grounded Synthesis',
      tech: 'LLM + Prompt Engineering',
      icon: Sparkles,
      description: 'Feeds retrieved chunks into LLM prompt constraints to generate strictly source-grounded responses with citations.',
      inDepth: 'Prevents LLM hallucinations by restricting the generation strictly to the retrieved facts, citing exact chunks.',
    },
  ];

  return (
    <div className="rounded-xl border border-[#222622] bg-[#0E100E] p-4 sm:p-6 my-4">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222622]">
        <span className="font-mono text-xs text-[#C6FF4D] uppercase tracking-wider font-semibold">
          RAG Pipeline Architecture
        </span>
        <span className="text-[11px] font-mono text-[#9CA3AF]">
          Source-Grounded Flow
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {steps.map((st, i) => {
          const Icon = st.icon;
          const isSelected = selectedStep === i;
          return (
            <button
              key={st.num}
              onClick={() => setSelectedStep(i)}
              className={`p-2.5 rounded-lg border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#182018] border-[#C6FF4D]/60 text-white shadow-sm'
                  : 'bg-[#121512] border-[#222622] text-[#9CA3AF] hover:border-[#384238] hover:text-[#D1D5DB]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-[#C6FF4D]">{st.num}</span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C6FF4D]' : 'text-[#6B7280]'}`} />
              </div>
              <p className="text-[11px] font-semibold leading-tight line-clamp-2">
                {st.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail */}
      <div className="rounded-lg bg-[#141814] border border-[#262E26] p-3.5">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <h5 className="font-heading font-semibold text-sm text-[#F5F5F0] flex items-center gap-1.5">
            <span className="text-[#C6FF4D] font-mono text-xs">Stage {steps[selectedStep].num}:</span>
            {steps[selectedStep].title}
          </h5>
          <span className="font-mono text-[10px] text-[#9CA3AF] bg-[#1E221E] px-2 py-0.5 rounded border border-[#2B352B]">
            {steps[selectedStep].tech}
          </span>
        </div>
        <p className="text-xs text-[#D1D5DB] leading-relaxed">
          {steps[selectedStep].description}
        </p>
        <p className="text-[11px] text-[#9CA3AF] mt-1.5 pt-1.5 border-t border-[#222622]">
          {steps[selectedStep].inDepth}
        </p>
      </div>
    </div>
  );
};
