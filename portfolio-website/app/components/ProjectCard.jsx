import React from "react";
import { workData } from "./assets.js";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <h2 className="text-blue-100 text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectCard;
