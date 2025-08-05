import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen animated-bg text-gray-300">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <TypeAnimation
          sequence={["Hi, my name is", 1000]}
          speed={20}
          wrapper="h1"
          repeat={0}
          cursor={false}
          className="text-xs sm:text-sm text-pink-600"
        />
        <TypeAnimation
          sequence={[1500, "Bineet Joshi"]}
          speed={20}
          wrapper="h2"
          repeat={0}
          cursor={false}
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
        />

        <TypeAnimation
          sequence={[2500, "I'm a Frontend Developer."]}
          speed={20}
          cursor={false}
          wrapper="h3"
          repeat={0}
          className="text-4xl sm:text-7xl font-bold text-[#8892b0]"
        />

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive frontend web applications.
        </p>

        <div className="drop-in">
          <button className="text-white group flex items-center px-6 border-2 py-3 my-2 hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
