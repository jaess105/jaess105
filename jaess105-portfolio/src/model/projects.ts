import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    title: "E-Commerce Microservices",
    description:
      "Built a fully distributed e-commerce backend utilizing Node.js, Docker, and RabbitMQ to handle high-throughput order processing. Implemented a Next.js frontend with robust global state management.",
    tags: ["React", "Node.js", "Docker", "RabbitMQ"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AI-Driven Project Planner",
    description:
      "An automated academic timeline generator utilizing OpenAI APIs to break down complex syllabi into weekly milestone tasks. Crafted with a highly responsive React/Tailwind UI dashboard.",
    tags: ["React", "Python", "OpenAI API", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Real-time Collaborative Canvas",
    description:
      "A web-based vector drawing board enabling multiple concurrent users to collaborate simultaneously. Powered by WebSockets and HTML5 Canvas API with custom state diffing sync rules.",
    tags: ["React", "WebSockets", "Express", "HTML5 Canvas"],
    liveUrl: "#",
    codeUrl: "#",
  },
];
