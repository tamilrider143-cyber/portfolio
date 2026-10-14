export interface Project {
  id: string;
  title: string;
  tagline: string;
  year: string;
  isFeatured: boolean;
  description: string;
  technologies: string[];
  liveUrl?: string | null;
  repoUrl?: string | null;
  status: string;
  problem: string;
  solution: string;
  architecturalDecisions?: string[];
  capabilities: string[];
  pipelineSteps?: { step: string; title: string; desc: string }[];
}

export interface Internship {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  category: 'Hackathon' | 'Innovation' | 'Competitive';
  badge: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string | null;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; note?: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    roleLabel: string;
    headline: string;
    supportingBio: string;
    aboutText: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    profilePhotoUrl: string;
    resumeUrl: string | null;
    location: string;
    degree: string;
    college: string;
    educationPeriod: string;
    cgpa: string;
    school: {
      name: string;
      hsc: string;
      hscPeriod: string;
      sslc: string;
      sslcPeriod: string;
    };
    focusAreas: { title: string; desc: string }[];
  };
  leetcode: {
    maxRating: number;
    globalRank: string;
    problemsSolved: number;
    profileUrl: string | null;
  };
  internships: Internship[];
  projects: Project[];
  achievements: Achievement[];
  certifications: Certification[];
  skillCategories: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Tamilselvan M",
    roleLabel: "IT STUDENT · FULL-STACK DEVELOPER",
    headline: "I build digital experiences that solve real problems.",
    supportingBio:
      "I'm Tamilselvan M, an Information Technology student building web applications and exploring AI-powered systems through practical projects.",
    aboutText:
      "I'm a B.Tech Information Technology student at Sri Eshwar College of Engineering, graduating in 2027. I enjoy building practical web applications, exploring backend engineering, and developing AI-powered systems. Through projects and internships, I've worked with the MERN stack, REST APIs, authentication, and retrieval-based AI applications.",
    email: "contactme.tamilselvanm053@gmail.com",
    githubUrl: "https://github.com/tamilrider143-cyber",
    linkedinUrl: "https://www.linkedin.com/in/tamilselvan-m-84225438a/",
    profilePhotoUrl: "/profile.jpg",
    resumeUrl: null, // Keep null or set to a local asset like "/resume.pdf" once supplied
    location: "Tamil Nadu, India",
    degree: "B.Tech in Information Technology",
    college: "Sri Eshwar College of Engineering",
    educationPeriod: "2023–2027",
    cgpa: "7.71 (VI semester)",
    school: {
      name: "Oxford Matriculation Higher Secondary School",
      hsc: "76.5%",
      hscPeriod: "2022–2023",
      sslc: "All Pass",
      sslcPeriod: "2020–2021",
    },
    focusAreas: [
      {
        title: "Full-Stack Web Development",
        desc: "Designing and engineering responsive user interfaces and dependable web applications using React, Tailwind CSS, and modern JavaScript.",
      },
      {
        title: "Backend Engineering",
        desc: "Architecting modular REST APIs, secure JWT & Role-Based Access Control (RBAC), and persistent data layers with Node.js, Express, and MongoDB.",
      },
      {
        title: "AI-Powered Applications",
        desc: "Building agentic workflows and source-grounded Retrieval-Augmented Generation (RAG) pipelines leveraging Python, LangChain, and FAISS.",
      },
    ],
  },

  leetcode: {
    maxRating: 1571,
    globalRank: "2,44,081",
    problemsSolved: 196,
    profileUrl: null, // Editable profile URL field; statistics verified from resume
  },

  internships: [
    {
      id: "better-tomorrow-mern",
      title: "MERN Stack Development",
      organization: "Better Tomorrow",
      year: "2024",
      description:
        "Developed a banking application using the MERN stack, allowing users to efficiently manage and handle their bank accounts with different operations.",
      highlights: [
        "Implemented secure account workflows and transactional operations",
        "Designed RESTful endpoints in Node.js/Express for transaction histories",
        "Engineered MongoDB schemas with Mongoose data validations",
        "Constructed intuitive React client interfaces for account handling",
      ],
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "REST APIs"],
    },
    {
      id: "ai-agents-internship",
      title: "AI Agents Development",
      organization: "14-Day Specialized Internship",
      year: "2025",
      description:
        "Completed a 14-day AI Agent Development internship, gaining hands-on experience in Agentic AI, AI agent architectures, prompt engineering, LLM integration, and workflow automation using Python and LangChain.",
      highlights: [
        "Constructed autonomous agent workflows and decision loops with LangChain",
        "Engineered structured prompt templates and context-augmented queries",
        "Explored LLM integration patterns and tool-calling execution structures",
        "Gained practical experience with multi-agent orchestration paradigms",
      ],
      technologies: ["Python", "LangChain", "LLM Integration", "Agentic AI", "Workflow Automation"],
    },
  ],

  projects: [
    {
      id: "intellicampus",
      title: "IntelliCampus",
      tagline: "Multi-Agent College ERP Platform with Autonomous Workflow Automation",
      year: "2026",
      isFeatured: true,
      description:
        "IntelliCampus is a multi-agent college ERP platform designed to streamline academic and administrative activities across students, faculty, HODs, management, and the Placement Cell. It provides role-based access, intelligent academic assistance, automated workflows, risk-based approvals, and secure human-in-the-loop decision making for efficient and transparent college management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "RBAC",
        "Tailwind CSS",
        "REST APIs",
        "AI Agent Architecture",
      ],
      liveUrl: "https://studyflow-frontend-nine.vercel.app/",
      repoUrl: null, // Verified live URL available; repo URL remains configurable
      status: "Featured Active Project",
      problem:
        "Academic institutions frequently operate on fragmented software systems. Administrative requests, attendance verification, placement notifications, and departmental approvals typically stall in manual email threads and paper trails, causing administrative lag and communication breakdowns.",
      solution:
        "An enterprise multi-tier ERP powered by an AI agent architecture. By integrating role-based access control with intelligent academic assistance and risk-based human-in-the-loop approvals, routine workflows are autonomously executed while sensitive administrative actions require verified authorization.",
      architecturalDecisions: [
        "Role-Based Access Control (RBAC): Enforces segregated permissions for Students, Faculty, HODs, Management, and Placement Officers.",
        "Agentic Workflow Engine: Dispatches autonomous background agents for eligibility cross-checks, notification routing, and academic queries.",
        "Human-In-The-Loop Approval Gateway: Flags high-risk requests (e.g. condonation, disciplinary review, grade modifications) for mandatory department head sign-off.",
        "Mongoose Schema Architecture: Normalized institutional relational modeling within MongoDB for fast concurrent student records access.",
      ],
      capabilities: [
        "Multi-Stakeholder Portals (Student, Faculty, HOD, Management, Placement Cell)",
        "Intelligent Academic Assistant for instant student schedule & course guidance",
        "Automated Risk-Based Approval routing with transparent status tracking",
        "Placement Cell Automation with dynamic eligibility matching and drive updates",
        "Granular JWT-authenticated sessions with encrypted credential protection",
      ],
    },
    {
      id: "study-flow",
      title: "Study Flow",
      tagline: "MERN Academic Task & Productivity Management System",
      year: "2025",
      isFeatured: false,
      description:
        "Developed a MERN-based web application that helps students manage academic tasks, track progress, and monitor productivity. Implemented JWT authentication, task CRUD operations, REST APIs, and a dashboard for task analytics and progress tracking.",
      technologies: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      liveUrl: null, // Link coming soon (handled non-clickably)
      repoUrl: null, // Configurable field
      status: "Completed Academic Project",
      problem:
        "Students juggle numerous assignment deadlines, laboratory submissions, and semester targets without unified analytics to visualize daily productivity or measure task completion efficiency.",
      solution:
        "A full-stack productivity web platform providing private authenticated dashboards, dynamic task sorting by deadline/priority, and real-time visual analytics reflecting overall progress.",
      capabilities: [
        "Secure user authentication and session management via JSON Web Tokens (JWT)",
        "Comprehensive Task CRUD operations with priority categorization and deadline alerts",
        "Interactive dashboard analytics measuring task velocity and completion milestones",
        "Modular REST API architecture linking React frontend to Express backend services",
      ],
    },
    {
      id: "ai-research-assistant",
      title: "AI Research Assistant Using RAG",
      tagline: "Source-Grounded Research Document Intelligence via Vector Search",
      year: "2024",
      isFeatured: false,
      description:
        "Developed an AI Research Assistant using Retrieval-Augmented Generation (RAG) to retrieve relevant information from research documents and generate accurate, context-aware responses. Implemented document processing, text chunking, embeddings, vector search, and LLM-based response generation to deliver source-grounded answers.",
      technologies: ["Python", "LangChain", "HuggingFace", "FAISS", "Streamlit"],
      liveUrl: null, // Link coming soon
      repoUrl: null, // Configurable field
      status: "Completed R&D Project",
      problem:
        "Standard LLMs produce hallucinations when queried about specialized domain research papers and lack the ability to point researchers directly to the underlying source paragraphs.",
      solution:
        "A local Retrieval-Augmented Generation (RAG) system that processes research PDFs into semantic text chunks, calculates high-dimensional vector embeddings, searches through a FAISS index, and constrains generation to verified context.",
      pipelineSteps: [
        {
          step: "01",
          title: "Document Ingestion & Chunking",
          desc: "Parses PDF research papers and splits content into semantically coherent chunks with overlap preservation.",
        },
        {
          step: "02",
          title: "Vector Embeddings",
          desc: "Computes dense mathematical representations of text chunks via HuggingFace transformer models.",
        },
        {
          step: "03",
          title: "FAISS Similarity Search",
          desc: "Executes ultra-fast nearest-neighbor similarity search to pull the most contextually relevant passages.",
        },
        {
          step: "04",
          title: "Context-Grounded LLM Synthesis",
          desc: "Passes retrieved passages into the LLM prompt to generate factual answers with source citations.",
        },
      ],
      capabilities: [
        "Automated PDF document parsing and semantic chunking with LangChain",
        "High-performance local vector similarity search powered by FAISS",
        "Integration with HuggingFace open-source embedding models",
        "Streamlit-based interactive researcher dashboard for query and citation inspection",
      ],
    },
  ],

  achievements: [
    {
      id: "hackathon-1st-2026",
      title: "First Prize — 24-Hour Inter-College Hackathon",
      year: "2026",
      category: "Hackathon",
      badge: "Winner",
      description:
        "Awarded first place in a competitive 24-hour inter-college hackathon, developing an end-to-end software solution under rigorous time constraints.",
    },
    {
      id: "samsung-innovation-2025",
      title: "Shortlisted & Participated — Samsung Innovation Program",
      year: "2025",
      category: "Innovation",
      badge: "Selected Participant",
      description:
        "Selected and participated in the prestigious Samsung Innovation Program, collaborating on forward-looking technology concepts.",
    },
    {
      id: "game-dev-hackathon-2025",
      title: "Third Prize — 24-Hour Game Development Hackathon",
      year: "2025",
      category: "Hackathon",
      badge: "3rd Place",
      description:
        "Secured third place in a 24-hour game development hackathon, engineering functional interactive mechanics and game logic within a strict 24-hour sprint.",
    },
  ],

  certifications: [
    {
      id: "cert-aws-2026",
      title: "AWS Certified Cloud Practitioner",
      issuer: "AWS",
      year: "2026",
      credentialUrl: null, // Preserved exact credential title; link configurable
    },
    {
      id: "cert-web-bootcamp-2026",
      title: "The Web Developer Bootcamp 2026",
      issuer: "Udemy",
      year: "2026",
      credentialUrl: null,
    },
    {
      id: "cert-dsa-cpp-2025",
      title: "Mastering Data Structures and Algorithms using C & C++",
      issuer: "Udemy",
      year: "2025",
      credentialUrl: null,
    },
    {
      id: "cert-fullstack-2024",
      title: "Full Stack Developer Course",
      issuer: "Simplilearn",
      year: "2024",
      credentialUrl: null,
    },
    {
      id: "cert-mysql-2024",
      title: "MySQL Basics & Intermediate",
      issuer: "HackerRank",
      year: "2024",
      credentialUrl: null,
    },
  ],

  skillCategories: [
    {
      name: "Programming Languages",
      description: "Core languages used for systems, scripting, and application logic",
      skills: [
        { name: "Java", note: "Core & OOP" },
        { name: "Python", note: "AI & RAG" },
        { name: "JavaScript", note: "ES6+ Modern Web" },
        { name: "C++", note: "Basics & Algorithms" },
      ],
    },
    {
      name: "Frontend Development",
      description: "Technologies for building fast, responsive, modern web interfaces",
      skills: [
        { name: "ReactJS", note: "Components & Hooks" },
        { name: "HTML5", note: "Semantic Structure" },
        { name: "CSS3", note: "Responsive Layouts" },
        { name: "Tailwind CSS", note: "Design Systems" },
      ],
    },
    {
      name: "Backend Development",
      description: "Server architecture, API design, and security layers",
      skills: [
        { name: "Node.js", note: "Runtime Environment" },
        { name: "Express", note: "Web Framework" },
        { name: "REST APIs", note: "Endpoint Architecture" },
        { name: "JWT", note: "Authentication & Sessions" },
        { name: "Role-Based Access Control", note: "RBAC Security" },
        { name: "Mongoose", note: "ODM & Schema Modeling" },
      ],
    },
    {
      name: "Databases",
      description: "Relational, document, and real-time database management",
      skills: [
        { name: "MySQL", note: "Relational Queries" },
        { name: "MongoDB", note: "Document Store" },
        { name: "Firebase", note: "Realtime & Cloud" },
      ],
    },
    {
      name: "AI & RAG Technologies",
      description: "Tools for agentic systems, document embeddings, and LLM applications",
      skills: [
        { name: "AI Agent Architecture", note: "Autonomous Workflows" },
        { name: "LangChain", note: "Orchestration & Chains" },
        { name: "FAISS", note: "Vector Similarity Search" },
        { name: "HuggingFace", note: "Transformer Embeddings" },
        { name: "Streamlit", note: "Interactive AI Interfaces" },
      ],
    },
    {
      name: "Developer Tools",
      description: "Tooling for version control, testing, deployment, and automation",
      skills: [
        { name: "Git", note: "Version Control" },
        { name: "GitHub", note: "Collaboration & CI" },
        { name: "Postman", note: "API Testing & Docs" },
        { name: "Vercel", note: "Frontend Deployment" },
        { name: "AWS", note: "Cloud Fundamentals" },
        { name: "n8n", note: "Workflow Automation" },
        { name: "VS Code", note: "Primary IDE" },
        { name: "Jira", note: "Agile Task Management" },
        { name: "Canva", note: "Visual Assets" },
      ],
    },
    {
      name: "Computer Science Fundamentals",
      description: "Foundational engineering concepts applied across all software projects",
      skills: [
        { name: "Data Structures & Algorithms", note: "DSA" },
        { name: "Object-Oriented Programming", note: "OOP" },
        { name: "Database Management Systems", note: "DBMS" },
        { name: "Computer Networks", note: "TCP/IP & Protocols" },
        { name: "Operating Systems", note: "Processes & Threads" },
      ],
    },
  ],
};
