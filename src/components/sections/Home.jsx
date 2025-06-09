import { RevealOnScroll } from "../RevealOnScroll";
import resumePDF from "../../assets/Guya-Jerome-Resume.pdf";
import { useEffect, useState } from "react";

export const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Jerome Guya";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-white/5">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {typedText}
            <span className="inline-block w-1 h-12 ml-1 bg-blue-500 animate-blink align-middle"></span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a full-stack developer who loves crafting clean, scalable
            web applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] relative overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>

            <a
              href={resumePDF}
              download="Guya-Jerome-Resume.pdf"
              className="border border-blue-500/50 text-blue-400 py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/10 relative overflow-hidden"
            >
              Download CV
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="#about"
              className="animate-bounce text-white/50 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
