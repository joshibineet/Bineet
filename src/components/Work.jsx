import WorkImg from "../assets/projects/altitude.png";
import realEstate from "../assets/projects/realestate.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 animated-bg">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6"> Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center bg-contain text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover effect for images */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
