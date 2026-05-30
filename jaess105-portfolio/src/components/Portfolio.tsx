import { PERSON } from "../model/person";
import { PROJECTS } from "../model/projects";
import TimelineItem from "./TimelineItem";

export default function Portfolio() {
  const projectsData = PROJECTS;
  const person = PERSON;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-900">
      {/* HERO / ABOUT ME SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 md:py-32 flex flex-col md:flex-row items-center gap-12 border-b border-slate-800">
        <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-3xl rotate-6 scale-105 opacity-30 blur-sm"></div>
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
            alt="Developer Portrait"
            className="w-full h-full object-cover rounded-3xl relative z-10 border border-slate-700"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              {person.firstName} {person.lastName}
            </span>
          </h1>
          <p className="text-emerald-400 font-medium tracking-wide uppercase text-sm mb-4">
            {person.jobTitle}
          </p>
          <p className="text-slate-400 max-w-2xl leading-relaxed text-base">
            {person.description}
          </p>
        </div>
      </section>

      {/* TIMELINE PROJECTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Project Timeline
          </h2>
          <p className="text-slate-400 mt-2">
            A chronological showcase of my deployment history and engineering
            milestones
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-slate-700 h-full border left-1/2 transform -translate-x-1/2 hidden md:block"></div>

          {projectsData.map((project, index) => (
            <TimelineItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
