import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-t from-black to-transparent backdrop-blur-lg border-t border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <p className="font-mono text-xl font-bold text-white">
              jerome
              <span className="text-gradient-animate bg-clip-text text-transparent">
                .stack
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Building the future, one line at a time
            </p>
          </div>

          <div className="flex space-x-6">
            <SocialLink
              href="www.linkedin.com/in/jerome-guya-58756b21b"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </SocialLink>
            <SocialLink
              href="https://github.com/AmariCoding"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/jerome.dev/"
              aria-label="Facebook"
            >
              <FaFacebook size={22} />
            </SocialLink>
          </div>

          <div className="text-sm text-gray-400">
            <p>© jerome.dev {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">Designed & Built with ❤️</div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  );
};

const SocialLink = ({ href, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
      {...props}
    >
      {children}
    </a>
  );
};
