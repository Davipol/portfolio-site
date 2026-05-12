"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { workData } from "./assets";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsContent = () => {
  const featured = workData[0];
  const rest = workData.slice(1);

  return (
    <main className="mx-4 flex-grow flex flex-col items-center pb-10 sm:pb-20 max-w-5xl w-full self-center">
      <motion.h2
        className="text-center py-16 text-5xl font-bold text-blue-100"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        My projects
      </motion.h2>

      {/* Featured project */}
      <motion.div
        className="w-full bg-black/60 rounded-xl overflow-hidden mb-12 flex flex-col sm:flex-row"
        style={{
          border: "2px solid #d946ef",
          boxShadow: "0 0 24px #d946ef44, 0 0 48px #d946ef18",
        }}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative w-full sm:w-[420px] sm:min-w-[420px] h-[240px] sm:h-[270px]">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="flex flex-col justify-center gap-4 px-6 py-6 items-center sm:items-start text-center sm:text-left">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
            ★ Featured project
          </span>
          <h3 className="text-fuchsia-300 text-2xl font-bold">
            {featured.title}
          </h3>
          <p className="text-purple-200 text-sm leading-relaxed">
            {featured.description}
          </p>
          <div className="border-t border-purple-900 w-full" />
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {featured.techStack.map((tech, index) => (
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
          <div className="flex gap-3 justify-center sm:justify-start">
            <a
              href={featured.liveURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-fuchsia font-bold py-2 px-5 rounded-lg text-sm cursor-pointer">
                View live
              </button>
            </a>
            <a
              href={featured.gitHubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-cyan font-bold py-2 px-5 rounded-lg text-sm cursor-pointer">
                GitHub
              </button>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Rest of projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {rest.map((project, index) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              liveURL={project.liveURL}
              gitHubURL={project.gitHubURL}
              techStack={project.techStack}
              objectPosition={project.objectPosition}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsContent;
