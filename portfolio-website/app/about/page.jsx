import React from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "About | Davide Polizzi",
  description:
    "Learn more about Davide Polizzi, a junior software developer based in London.",
};

const About = () => {
  return (
    <div
      className="flex 
    flex-col
     min-h-screen
      bg-[url('/pictures/synth-border.jpg')] bg-cover py-7"
    >
      <Navbar />
      <div className="h-20" />

      <main className="flex-grow max-w-7xl mx-auto px-4 min-h-[calc(100vh-5rem)] flex flex-col items-center pb-10 sm:pb-20">
        <h2 className="text-center py-16 text-5xl font-bold text-blue-100">
          Something About me
        </h2>
        <p className="font-code text-center max-w-screen-md text-blue-100 mb-8">
          I&apos;m a former nurse transitioning into software development. I
          have always been curious about the way software works, especially
          since I started creating music with sequencers. After completing the
          Northcoders Software Development Bootcamp, I built full-stack
          applications using JavaScript, React.js, Express, and PostgreSQL.
        </p>
        <p className="font-code text-center max-w-screen-md text-blue-100 mb-8">
          My background in healthcare taught me how to stay calm under pressure,
          communicate clearly, and work closely with others, skills I now bring
          into tech, whether I&apos;m pair programming or collaborating on group
          projects.
        </p>
        <p className="font-code text-center max-w-screen-md text-blue-100 mb-14">
          I&apos;m currently building personal projects and looking for a junior
          developer role where I can keep growing and be part of a great team.
        </p>
        <h3 className="text-blue-500 font-bold text-4xl mb-8">My skills:</h3>

        <div className="flex flex-wrap justify-center gap-16 text-blue-100">
          <div className="flex flex-col items-center text-center">
            <ul>
              <li className="text-blue-300 text-xl font-semibold mb-2">
                Frontend:
              </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <ul>
              <li className="text-blue-300 text-xl font-semibold mb-2">
                Backend:
              </li>
              <li>SQL</li>
              <li>
                Model View
                <br />
                Controller (MVC)
              </li>
              <li>Supabase</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <ul>
              <li className="text-blue-300 text-xl font-semibold mb-2">
                Testing:
              </li>
              <li>Jest</li>
              <li>Supertest</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <ul>
              <li className="text-blue-300 text-xl font-semibold mb-2">
                Methodologies & Practices:
              </li>
              <li>Agile</li>
              <li>SCRUM</li>
              <li>Paired programming</li>
              <li>TDD</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
