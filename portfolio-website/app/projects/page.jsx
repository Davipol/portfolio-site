import React from "react";
import Navbar from "../components/Navbar";
import ProjectsContent from "../components/ProjectsContent";

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
      <ProjectsContent />
    </div>
  );
};

export default ProjectsPage;
