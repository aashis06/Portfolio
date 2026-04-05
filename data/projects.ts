export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  status: "Live" | "In Development" | "Private Demo";
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    status: "Live",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "2",
    title: "Task Management SaaS",
    description: "Collaborative project management tool with real-time updates, team workspaces, and advanced analytics.",
    image: "/projects/task-manager.jpg",
    tags: ["React", "Express", "PostgreSQL", "Socket.io"],
    status: "In Development",
    githubUrl: "https://github.com/example",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description: "AI-powered content creation platform using OpenAI API with custom prompt engineering and content optimization.",
    image: "/projects/ai-content.jpg",
    tags: ["Next.js", "OpenAI", "Prisma", "TypeScript"],
    status: "Live",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
  {
    id: "4",
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search filters, virtual tours, and integrated booking system.",
    image: "/projects/real-estate.jpg",
    tags: ["Next.js", "MySQL", "Tailwind", "Google Maps API"],
    status: "Private Demo",
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Healthcare Dashboard",
    description: "Medical records management system with patient portal, appointment scheduling, and HIPAA compliance.",
    image: "/projects/healthcare.jpg",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
    status: "Live",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
  },
];
