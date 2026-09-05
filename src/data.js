// Shared site data — single source of truth for personal info + content.
// Edit values here to update the portfolio everywhere.

export const profile = {
  name: "Mahek Datta",
  role: "B.Tech CSE Student | Programmer | Problem Solver",
  shortRole: "B.Tech CSE Student",
  university: "Graphic Era Deemed to be University",
  degree: "B.Tech in Computer Science Engineering",
  school: "Euro International School",
  cgpa: "9.6 / 10",
  class12: "90%",
  class10: "95%",
  email: "m02659501@gamil.com",
  github: "https://github.com/m02datta",
  githubHandle: "github.com/m02datta",
  linkedin: "https://linkedin.com/in/mahek-datta",
  linkedinHandle: "linkedin.com/in/mahek-datta",
};

export const navItems = [
  { id: "home", label: "Home", icon: "House" },
  { id: "about", label: "About", icon: "UserRound" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "skills", label: "Skills", icon: "Code2" },
  { id: "projects", label: "Projects", icon: "FolderKanban" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

export const quickFacts = [
  { icon: "GraduationCap", label: "Graduation", value: "B.Tech CSE" },
  { icon: "Trophy", label: "CGPA", value: "9.6 / 10" },
  { icon: "BookOpen", label: "Class 12", value: "90%" },
  { icon: "BookMarked", label: "Class 10", value: "95%" },
  { icon: "Sparkles", label: "Interests", value: "Programming, DSA & Web Development" },
];

export const education = [
  {
    institution: "Graphic Era Deemed to be University",
    degree: "B.Tech in Computer Science Engineering",
    period: "2025 – Present",
    detail: "CGPA: 9.6 / 10",
    accent: "pink",
  },
  {
    institution: "Euro International School",
    degree: "Senior Secondary Examination",
    period: "CBSE",
    detail: "Class 12: 90%",
    accent: "lavender",
  },
  {
    institution: "Euro International School",
    degree: "Secondary Examination",
    period: "CBSE",
    detail: "Class 10: 95%",
    accent: "pink",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: "Code2",
    accent: "pink",
    skills: [
      { name: "C", icon: "Braces" },
      { name: "C++", icon: "Braces" },
    ],
  },
  {
    title: "Core Computer Science",
    icon: "Network",
    accent: "lavender",
    skills: [
      { name: "Data Structures & Algorithms", icon: "Network" },
      { name: "Object-Oriented Programming", icon: "GitBranch" },
      { name: "Problem Solving", icon: "Lightbulb" },
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    accent: "pink",
    skills: [
      { name: "HTML", icon: "Code2" },
      { name: "CSS", icon: "Code2" },
      { name: "JavaScript", icon: "Code2" },
      { name: "React.js", icon: "Globe" },
    ],
  },
  {
    title: "Tools",
    icon: "GitBranch",
    accent: "lavender",
    skills: [
      { name: "Git", icon: "GitBranch" },
      { name: "GitHub", icon: "Github" },
    ],
  },
];

export const projects = [
  {
    title: "Journal Management System",
    icon: "NotebookPen",
    technology: "C Language",
    description:
      "A console-based journal management system developed using C that allows users to create, store and manage journal entries. The system allows journal entries to be organized according to dates and uses file handling to save information for future access.",
    features: [
      "Create journal entries",
      "Save entries according to dates",
      "View stored entries",
      "File handling",
      "Manage journal records",
      "Simple console-based interface",
    ],
    highlight: "C Programming + File Handling",
    accent: "pink",
    link: null,
  },
  {
    title: "MoodDraft – AI Message Redrafting",
    icon: "MessageSquareText",
    technology: "Next.js · TypeScript · FastAPI · VADER · Gemini",
    description:
      "A smart message-redrafting concept designed to help users improve the tone and clarity of their messages. The project combines tone analysis with AI-powered rewriting suggestions to make communication more effective.",
    features: [
      "AI-assisted message rewriting",
      "Tone analysis",
      "Rewrite suggestions",
      "User-friendly interface",
      "AI-powered communication assistance",
    ],
    highlight: "AI + Web Development",
    accent: "lavender",
    link: null,
  },
  {
    title: "Text Editor",
    subtitle: "Data Structures & Algorithms Project",
    icon: "FileText",
    technology: "C++",
    status: "Currently Developing",
    description:
      "An ongoing text editor project developed using C++ and Data Structures & Algorithms. The project focuses on applying core DSA concepts to build text-editing functionality and understand how data structures can be used to manage and manipulate text efficiently.",
    features: [
      "Text-editing functionality",
      "Core DSA concepts",
      "Efficient text management",
      "C++ implementation",
    ],
    highlight: "C++ + DSA",
    accent: "pink",
    link: null,
  },
];

export const learning = [
  { name: "Data Structures & Algorithms", icon: "Network" },
  { name: "C Programming", icon: "Braces" },
  { name: "C++ Programming", icon: "Code2" },
  { name: "Object-Oriented Programming", icon: "GitBranch" },
  { name: "React.js", icon: "Globe" },
  { name: "Web Development", icon: "Code" },
  { name: "Git & GitHub", icon: "Github" },
  { name: "Problem Solving", icon: "Lightbulb" },
];

export const learningHighlight = {
  title: "Text Editor using C++ & DSA",
  description:
    "I'm continuously learning and improving my technical skills by combining theory with hands-on projects.",
};
