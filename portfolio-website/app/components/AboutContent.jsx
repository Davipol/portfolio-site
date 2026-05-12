"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutContent = () => {
  return (
    <main className="flex-grow max-w-3xl mx-auto px-4 flex flex-col items-center pb-10 sm:pb-20">
      <motion.h2
        className="text-center py-16 text-5xl font-bold text-blue-100"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="w-full bg-black/30 rounded-2xl px-6 py-8 mb-8 flex flex-col items-center gap-6"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-center max-w-screen-md text-purple-200 text-lg leading-relaxed">
          I&apos;m a software developer based in London with a background in
          nursing. My curiosity about how software works deepened when I started
          creating music with sequencers, and after completing the Northcoders
          bootcamp, I turned that curiosity into a career. I build full-stack
          applications with JavaScript, React, Node.js and PostgreSQL, and
          I&apos;m currently collaborating with SOHMA AI, an early-stage
          startup.
        </p>
        <p className="text-center max-w-screen-md text-purple-200 text-lg leading-relaxed">
          My years in healthcare taught me to stay calm under pressure,
          communicate clearly, and collaborate closely, skills that translate
          surprisingly well into tech. I&apos;m looking for a junior role where
          I can do meaningful work, keep learning, and contribute to something
          worth building.
        </p>
      </motion.div>

      <motion.a
        href="/CV_Davide Polizzi_Software_Developer.pdf"
        download
        className="btn-fuchsia font-bold py-3 px-8 rounded-lg text-sm cursor-pointer mb-16"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Download my CV
      </motion.a>

      <motion.h3
        className="text-fuchsia-300 font-bold text-3xl mb-8"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Skills
      </motion.h3>

      <div className="flex flex-col gap-8 w-full max-w-2xl mb-12 items-center">
        {[
          {
            label: "Frontend",
            skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
          },
          {
            label: "Backend",
            skills: [
              "Node.js",
              "Express",
              "SQL",
              "PostgreSQL",
              "Supabase",
              "MVC",
            ],
          },
          { label: "Testing", skills: ["Jest", "Supertest"] },
          {
            label: "Methodologies",
            skills: ["Agile", "SCRUM", "Pair programming", "TDD"],
          },
        ].map(({ label, skills }, groupIndex) => (
          <motion.div
            key={label}
            className="flex flex-col items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <p className="text-cyan-400 text-sm font-bold tracking-widest uppercase mb-3">
              {label}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((s, i) => (
                <span
                  key={s}
                  className="text-sm font-semibold px-3 py-1 rounded-full"
                  style={
                    i % 2 === 0
                      ? {
                          background: "#581c87",
                          border: "2px solid #d946ef",
                          color: "#f5d0fe",
                          boxShadow: "0 0 8px #d946ef66",
                        }
                      : {
                          background: "#164e63",
                          border: "2px solid #22d3ee",
                          color: "#a5f3fc",
                          boxShadow: "0 0 8px #22d3ee66",
                        }
                  }
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default AboutContent;
