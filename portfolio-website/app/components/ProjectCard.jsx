import React from "react";
import { workData } from "./assets.js";
import Image from "next/image";

const ProjectCard = ({ title, description, image, liveURL, gitHubURL }) => {
  return (
    <div className="max-w-md bg-fuchsia-700 shadow-md rounded-lg overflow-hidden m-4">
      <div className="relative w-[448px] h-[224px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <h2 className="text-blue-200 text-xl text-center font-bold my-2">
        {title}
      </h2>
      <p className="text-blue-100 text-center">{description}</p>
      <div className="flex gap-4 my-2 justify-center">
        <a
          href={liveURL}
          target="_blank"
          rel="noopener noreferrer"
          className=" cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Live
        </a>
        <a
          href={gitHubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
