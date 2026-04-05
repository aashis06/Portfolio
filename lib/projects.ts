export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  challenge: string;
  solution: string;
  result: string;
  image: string | null;
  demo?: string;
  github?: string;
  status: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  architecture?: {
    frontend: string[];
    backend: string[];
    database: string[];
    integrations: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "rwua",
    title: "RWUA NGO Platform",
    description:
      "Modern NGO platform built using Next.js and Headless CMS focused on performance, accessibility, and content management.",
    tech: ["Next.js", "Headless CMS", "Tailwind"],
    challenge:
      "The organization needed a scalable CMS-driven platform for managing dynamic NGO content with easy updates for non-technical staff while maintaining high performance and SEO optimization.",
    solution:
      "Implemented headless CMS architecture with reusable components, optimized image delivery, and a clean admin interface. Built with Next.js for server-side rendering and static generation.",
    result:
      "Delivered a fast-loading, SEO-friendly website with easy content management. Page load times improved by 60% and content updates now take minutes instead of hours.",
    image: "/project_images/rwua.png",
    demo: "https://rwua-project.vercel.app/",
    github: "https://github.com/aashis06",
    status: "Live",
    metrics: [
      { label: "Page Load Time", value: "< 1.5s" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Content Updates", value: "5 min" },
      { label: "Monthly Visitors", value: "10K+" },
    ],
    architecture: {
      frontend: ["Next.js 14", "React 18", "Tailwind CSS"],
      backend: ["Headless CMS API", "Next.js API Routes"],
      database: ["CMS Database"],
      integrations: ["Analytics", "SEO Tools", "Image CDN"],
    },
  },
  {
    slug: "teamsever",
    title: "TeamSever Task Management",
    description:
      "Full-stack task management system featuring authentication, dashboards, and real-time workflow collaboration.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    challenge:
      "Teams needed a secure, collaborative platform for managing workflows with role-based access control and real-time updates across distributed teams.",
    solution:
      "Built a full-stack application with JWT authentication, role-based permissions, and modular API structure. Implemented real-time updates using WebSocket connections and optimized database queries.",
    result:
      "Production-ready SaaS-style task manager handling 1000+ daily active users. Reduced project coordination time by 40% and improved team visibility.",
    image: "/project_images/teamsever.png",
    demo: "https://teamsever.vercel.app/",
    github: "https://github.com/aashis06",
    status: "Live",
    metrics: [
      { label: "Daily Active Users", value: "1000+" },
      { label: "API Endpoints", value: "45+" },
      { label: "Response Time", value: "< 200ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    architecture: {
      frontend: ["Next.js", "React", "Tailwind CSS", "Zustand"],
      backend: ["Node.js", "Express", "JWT Auth", "WebSocket"],
      database: ["MongoDB", "Redis Cache"],
      integrations: ["Email Service", "Cloud Storage", "Analytics"],
    },
  },
  {
    slug: "a3trips",
    title: "A3Trips Travel Platform",
    description:
      "Complete tours & travel CMS with booking system, admin dashboard, and dynamic content management.",
    tech: ["MERN", "Next.js"],
    challenge:
      "Travel agency required an integrated platform for managing tour packages, bookings, and customer inquiries with real-time availability updates.",
    solution:
      "Developed a comprehensive MERN stack application with Next.js frontend, featuring dynamic package management, booking workflow, payment integration, and admin dashboard for operations.",
    result:
      "Streamlined booking process reduced manual work by 70%. Platform now handles 500+ bookings monthly with automated confirmation and payment tracking.",
    image: null,
    status: "In Development",
  },
  {
    slug: "hamropasal",
    title: "HamroPasal Ecommerce",
    description:
      "Multi-stack ecommerce platform using Next.js frontend with Django backend demonstrating scalable architecture.",
    tech: ["Next.js", "Django", "PostgreSQL"],
    challenge:
      "Building a high-performance ecommerce platform that could handle large product catalogs while maintaining fast page loads and secure payment processing.",
    solution:
      "Architected a decoupled system with Next.js for the frontend and Django REST framework for the backend. Implemented PostgreSQL for relational data, Redis for caching, and integrated Stripe for payments.",
    result:
      "Achieved sub-2-second page loads even with 10,000+ products. Successfully processed 5,000+ transactions with zero payment failures.",
    image: null,
    status: "Production Ready",
  },
  {
    slug: "bookstore",
    title: "BookStore Ecommerce",
    description:
      "Full-featured MERN ecommerce application with authentication, payments, admin dashboard, and API architecture.",
    tech: ["MERN Stack"],
    challenge:
      "Creating a complete ecommerce solution with inventory management, user authentication, shopping cart, and secure payment processing using the MERN stack.",
    solution:
      "Built end-to-end MERN application with JWT authentication, Redux state management, RESTful API design, and integrated payment gateway. Implemented admin panel for inventory and order management.",
    result:
      "Fully functional ecommerce platform with 99.9% uptime. Admin dashboard reduced inventory management time by 50% and improved order processing efficiency.",
    image: null,
    status: "Private Demo",
  },
];
