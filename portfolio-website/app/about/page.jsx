import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div
      className="flex 
    flex-col
     min-h-screen
      bg-[url('/pictures/synth-border.jpg')] bg-cover "
    >
      <Navbar />
      <div className="h-20" />

      <main className="flex-grow max-w-7xl mx-auto px-4 min-h-[calc(100vh-5rem)] flex flex-col items-center pb-10 sm:pb-20">
        <h2 className="text-center py-16 text-5xl font-bold text-blue-100">
          Something About me
        </h2>
        <p className="font-code text-center max-w-screen-md text-white mb-14">
          I'm a former nurse transitioning into software development. I have
          always been curious about the way software works, especially since I
          started creating music with sequencers. I recently completed the
          Northcoders Software Development bootcamp where I learnt JavaScript,
          React.js, PostgreSQL, HTML and CSS. Previously, I completed two
          courses about cybersecurity where I learnt the basics of Python, Linux
          and SQL.
        </p>

        <h3 className="text-blue-100 text-3xl mb-8">My skills:</h3>

        <div className="flex flex-wrap justify-center gap-16 text-blue-100">
          <ul>
            <li className="text-xl font-semibold mb-2">Frontend:</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>

          <ul>
            <li className="text-xl font-semibold mb-2">Backend:</li>
            <li>SQL</li>
            <li>
              Model View
              <br />
              Controller (MVC)
            </li>
            <li>Supabase</li>
          </ul>

          <ul>
            <li className="text-xl font-semibold mb-2">Testing:</li>
            <li>Jest</li>
            <li>Supertest</li>
          </ul>

          <ul>
            <li className="text-xl font-semibold mb-2">
              Methodologies & Practices:
            </li>
            <li>Agile</li>
            <li>SCRUM</li>
            <li>Paired programming</li>
            <li>TDD</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default About;
