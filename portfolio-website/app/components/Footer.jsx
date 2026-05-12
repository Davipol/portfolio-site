import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-center py-6 mt-auto"
      style={{ borderTop: "1px solid #2d1b69", background: "rgba(0,0,0,0.4)" }}
    >
      <div className="flex justify-center gap-8 mb-4">
        <a
          href="https://github.com/Davipol"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 transition-all duration-200"
        >
          <FaGithub style={{ color: "#a5f3fc", width: 24, height: 24 }} />
          <span className="text-cyan-300 text-xs font-semibold">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/davide-polizzi-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 transition-all duration-200"
        >
          <FaLinkedin style={{ color: "#f5d0fe", width: 24, height: 24 }} />
          <span className="text-fuchsia-300 text-xs font-semibold">
            LinkedIn
          </span>
        </a>
        <a
          href="mailto:davide.polizzi15@gmail.com"
          className="flex flex-col items-center gap-1 transition-all duration-200"
        >
          <FaEnvelope style={{ color: "#f5d0fe", width: 24, height: 24 }} />
          <span className="text-fuchsia-300 text-xs font-semibold">Email</span>
        </a>
      </div>
      <p className="text-purple-400 text-xs">
        © {new Date().getFullYear()} Davide Polizzi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
