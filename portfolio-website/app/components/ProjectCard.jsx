import React from "react";
import Image from "next/image";

const ProjectCard = ({
  title,
  description,
  image,
  liveURL,
  gitHubURL,
  techStack = [],
  objectPosition = "top",
}) => {
  return (
    <div className="max-w-md bg-black/50 border border-purple-900 rounded-xl overflow-hidden m-4">
      {/* Image with title overlay */}
      <div className="relative w-[448px] h-[270px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          style={{ objectPosition }}
          priority
        />
        {/* Gradient fade + title */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent flex items-end px-4 pb-3">
          <h2
            className="text-fuchsia-400 text-2xl font-bold"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1)",
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Card body */}
      <div className="px-4 pt-3 pb-4 flex flex-col gap-3">
        <p className="text-purple-200 text-sm text-center leading-relaxed">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-purple-900" />

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 justify-center">
          {techStack.map((tech, index) => (
            <span
              key={tech}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={
                index % 2 === 0
                  ? {
                      background: "#581c87",
                      border: "1.5px solid #d946ef",
                      color: "#f5d0fe",
                    }
                  : {
                      background: "#164e63",
                      border: "1.5px solid #22d3ee",
                      color: "#a5f3fc",
                    }
              }
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mt-1">
          <a href={liveURL} target="_blank" rel="noopener noreferrer">
            <button className="btn-fuchsia font-bold py-2 px-5 rounded-lg text-sm cursor-pointer">
              View live
            </button>
          </a>
          <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
            <button className="btn-cyan font-bold py-2 px-5 rounded-lg text-sm cursor-pointer">
              GitHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
