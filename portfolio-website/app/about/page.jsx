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
          Something about me
        </h2>
        <p className="font-code text-center max-w-screen-md text-blue-100 mb-8 text-lg">
          I&apos;m a software developer with a background in nursing. I've
          always been curious about how software works, a curiosity that
          deepened when I started creating music with sequencers, and after
          completing the Northcoders Software Development Bootcamp, I turned
          that curiosity into a career. I build full-stack applications using
          JavaScript, React.js, Express, and PostgreSQL, and I&apos;m currently
          collaborating with SOHMA AI, an early-stage startup, while looking for
          a junior developer role where I can keep growing as part of a great
          team.
        </p>
        <p className="font-code text-center max-w-screen-md text-blue-100 mb-8 text-lg">
          My years in healthcare taught me to stay calm under pressure,
          communicate clearly, and collaborate closely with others. This skills
          translate surprisingly well into tech, whether I&apos;m pair
          programming or working on a group project.
        </p>
        <p className="font-code text-center max-w-screen-md text-blue-100 mb-14 text-lg">
          I&apos;m looking for a junior role where I can do meaningful work,
          keep learning, and contribute to something worth building.
        </p>
        <a
          href="/CV_Davide Polizzi_Junior Software Developer.pdf"
          download
          className="mb-12 px-6 py-3 bg-purple-700 text-blue-200 font-semibold rounded-md shadow hover:bg-purple-600 hover:text-blue-400 transition-all"
        >
          Download My CV
        </a>
        <h3 className="text-blue-100 font-bold text-4xl mb-8">My skills:</h3>

        <div className="flex flex-wrap justify-center gap-16 text-blue-100">
          <div className="flex flex-col items-center text-center">
            <ul>
              <li className="text-blue-300 text-xl font-semibold mb-2">
                Frontend:
              </li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="flex flex-col items-center text-center">
            <ul>
              <li className="text-blue-300 text-xl font-semibold mb-2">
                Backend:
              </li>
              <li>Node.js</li>
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
