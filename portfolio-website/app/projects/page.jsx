import React from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { workData } from "../components/assets";
export const metadata = {
  title: "Projects | Davide Polizzi",
  description:
    "Projects by Davide Polizzi, a junior software developer based in London.",
};

const ProjectsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/synth-border.jpg')] bg-cover py-7">
      <Navbar />
      <div className="h-20" />
      <main className="ml-2.5 mr-2.5 flex-grow flex flex-col items-center pb-10 sm:pb-20">
        <h2 className="text-center py-16 text-5xl font-bold text-blue-100">
          My projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {workData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              liveURL={project.liveURL}
              gitHubURL={project.gitHubURL}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
