// eslint-disable-next-line no-unused-vars
import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Next from "../assets/next.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen animated-bg text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full cursor-pointer">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-7 text-center py-8">
          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:rotate-1 hover:bg-gradient-to-br from-pink-600/20 via-red-600/20 to-orange-500/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={HTML}
              alt="HTML icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-pink-400 transition-colors duration-500">
              HTML
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-pink-500/20 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:-rotate-1 hover:bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={CSS}
              alt="CSS icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-blue-400 transition-colors duration-500">
              CSS
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-blue-500/20 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:rotate-2 hover:bg-gradient-to-br from-sky-400/20 via-cyan-500/20 to-blue-500/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={Tailwind}
              alt="Tailwind icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-sky-300 transition-colors duration-500">
              TAILWIND
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-sky-500/20 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:rotate-3 hover:bg-gradient-to-br from-yellow-300/20 via-yellow-500/20 to-orange-400/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-yellow-400 transition-colors duration-500">
              JAVASCRIPT
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-yellow-400/20 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:-rotate-2 hover:bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={ReactImg}
              alt="React icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-cyan-300 transition-colors duration-500">
              REACT
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-cyan-500/20 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:rotate-1 hover:bg-gradient-to-br from-gray-600/20 via-zinc-700/20 to-neutral-800/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={Next}
              alt="Next.js icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-gray-400 transition-colors duration-500">
              NEXT JS
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-gray-500/20 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:-rotate-1 hover:bg-gradient-to-br from-gray-700/20 via-gray-800/20 to-black/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={GitHub}
              alt="GitHub icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-gray-300 transition-colors duration-500">
              GITHUB
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-white/10 transition-all duration-700 z-[-1]"></div>
          </div>

          <div className="group relative shadow-md shadow-[#040c16] hover:scale-110 hover:rotate-3 hover:bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20 duration-500 transition-all rounded-lg">
            <img
              className="w-20 mx-auto mt-4 group-hover:scale-105 transition-transform duration-500"
              src={Mongo}
              alt="MongoDB icon"
            />
            <p className="my-4 text-white font-semibold group-hover:text-green-400 transition-colors duration-500">
              MONGO DB
            </p>
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-sm group-hover:scale-105 bg-green-500/20 transition-all duration-700 z-[-1]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
