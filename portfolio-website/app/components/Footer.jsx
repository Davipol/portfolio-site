const Footer = () => {
  return (
    <footer className="bg-fuchsia-900 text-blue-100 text-center py-6 mt-auto">
      <p>© {new Date().getFullYear()} Davide Polizzi. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-6">
        <a
          href="https://github.com/Davipol"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/davide-polizzi-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:davide.polizzi15@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
