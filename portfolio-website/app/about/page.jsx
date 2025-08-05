import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/pictures/valeria-reverdo-7BhskVuYie8-unsplash.jpg')] bg-cover bg-center h-screen">
      <Navbar />
      <div className="h-20" />

      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
        <div className="flex flex-col items-center">
          <h2 className="text-center pb-14 flex justify-center text-5xl font-bold text-blue-100">
            Something About me
          </h2>
          <p className="text-center flex justify-center text-white">
            I'm a former nurse transitioning into software development. I have
            always been curious about the way software works, especially since I
            started creating music with sequencers. I completed two courses
            about cybersecurity where I learnt the basics of Python, Linux and
            SQL. I recently completed the Northcoders Software Development
            bootcamp where I learnt JavaScript, React.js, PostgreSQL, HTML and
            CSS.
          </p>
          <h3 className=" pt-14 text-blue-100 text-3xl"> My skills</h3>
          <div className="flex gap-14">
            <ul className="text-blue-100">
              <li>Frontend</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>React.js</li>
            </ul>
            <ul className="text-blue-100">
              <li>Backend</li>
              <li>SQL</li>
              <li>
                Model View
                <br />
                Controller (MVC)
              </li>
              <li>React.js</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
