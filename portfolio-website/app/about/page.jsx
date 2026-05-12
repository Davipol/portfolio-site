import React from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About | Davide Polizzi",
  description:
    "Learn more about Davide Polizzi, a software developer based in London.",
};

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/synth-border.jpg')] bg-cover py-7">
      <Navbar />
      <div className="h-20" />

      <main className="flex-grow max-w-3xl mx-auto px-4 flex flex-col items-center pb-10 sm:pb-20">
        <h2 className="text-center py-16 text-5xl font-bold text-blue-100">
          About me
        </h2>

        <p className="text-center max-w-screen-md text-purple-200 mb-6 text-lg leading-relaxed">
          I&apos;m a software developer based in London with a background in
          nursing. My curiosity about how software works deepened when I started
          creating music with sequencers, and after completing the Northcoders
          bootcamp, I turned that curiosity into a career. I build full-stack
          applications with JavaScript, React, Node.js and PostgreSQL, and
          I&apos;m currently collaborating with SOHMA AI, an early-stage
          startup.
        </p>

        <p className="text-center max-w-screen-md text-purple-200 mb-12 text-lg leading-relaxed">
          My years in healthcare taught me to stay calm under pressure,
          communicate clearly, and collaborate closely, skills that translate
          surprisingly well into tech. I&apos;m looking for a junior role where
          I can do meaningful work, keep learning, and contribute to something
          worth building.
        </p>

        <a
          href="/CV_Davide Polizzi_Software_Developer.pdf"
          download
          className="btn-fuchsia font-bold py-3 px-8 rounded-lg text-sm cursor-pointer mb-16"
        >
          Download my CV
        </a>

        <h3 className="text-fuchsia-300 font-bold text-3xl mb-8">Skills</h3>

        <div className="flex flex-col gap-8 w-full max-w-2xl mb-12 items-center">
          <div className="flex flex-col items-center">
            <p className="text-cyan-400 text-md font-bold tracking-widest uppercase mb-3">
              Frontend
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"].map(
                (s, i) => (
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
                ),
              )}
            </div>
          </div>

          <div>
            <p className="text-cyan-400 text-md font-bold tracking-widest uppercase mb-3 text-center">
              Backend
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express",
                "SQL",
                "PostgreSQL",
                "Supabase",
                "MVC",
              ].map((s, i) => (
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
          </div>

          <div>
            <p className="text-cyan-400 text-md font-bold tracking-widest uppercase mb-3 text-center">
              Testing
            </p>
            <div className="flex flex-wrap gap-2">
              {["Jest", "Supertest"].map((s, i) => (
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
          </div>

          <div>
            <p className="text-cyan-400 text-md font-bold tracking-widest uppercase mb-3 text-center">
              Methodologies
            </p>
            <div className="flex flex-wrap gap-2">
              {["Agile", "SCRUM", "Pair programming", "TDD"].map((s, i) => (
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
