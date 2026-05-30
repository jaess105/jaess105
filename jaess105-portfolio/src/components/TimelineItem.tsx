import { useElementOnScreen } from "../hooks/useIntersectionObserver";
import type { Project } from "../model/types";

interface TimelineItemProps {
  project: Project;
  index: number;
}

export default function TimelineItem({ project, index }: TimelineItemProps) {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={containerRef}
      className={`mb-16 flex justify-between items-center w-full transition-all duration-1000 ease-out transform ${
        isEven ? "flex-row-reverse" : ""
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="w-5/12 hidden md:block"></div>

      <div className="z-20 flex items-center order-1 bg-emerald-500 shadow-xl w-8 h-8 rounded-full border-4 border-slate-900">
        <span className="mx-auto font-semibold text-xs text-slate-900">
          {index + 1}
        </span>
      </div>

      <div className="order-1 bg-slate-800 rounded-xl shadow-2xl w-full md:w-5/12 px-6 py-6 border border-slate-700 hover:border-emerald-500/50 transition-colors duration-300">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
          {project.tags.join(" • ")}
        </span>
        <h3 className="mb-2 font-bold text-white text-xl mt-1">
          {project.title}
        </h3>
        <p className="text-sm leading-snug text-slate-400 text-justify">
          {project.description}
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href={project.liveUrl}
            className="text-xs font-semibold bg-emerald-500 text-slate-900 px-3 py-2 rounded hover:bg-emerald-400 transition"
          >
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            className="text-xs font-semibold bg-slate-700 text-slate-200 px-3 py-2 rounded hover:bg-slate-600 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
