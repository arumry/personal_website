import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Hero() {
  return (
    <section className="w-full max-w-[1480px] min-h-[800px] px-10 md:px-20 pt-28 pb-14 md:py-52 flex justify-start items-center md:gap-5 flex-wrap md:flex-nowrap lg:gap-[10%]">
      <div className="relative w-full  text-white flex flex-col items-center md:items-start font-semibold lg:font-bold">
        <div className="max-w-full w-fit">
          <p className="text-base md:text-lg z-10 mb-2 lg:mb-5 text-tertiary">
            Hi, my name is
          </p>
          <h2 className="z-10 relative text-3xl lg:text-5xl text-gray-200  whitespace-nowrap">
            Aaron Rumery
          </h2>
          <h2 className="z-10 relative text-2xl lg:text-4xl mt-5 text-gray-400  sm:whitespace-nowrap">
            And I'm a Senior Software Engineer..
          </h2>
          <p className="mt-7 mb-5 max-w-3xl md:my-7 lg:my-8 text-xs font-medium md:text-sm lg:text-base text-gray-500">
            <span className="text-sixth/90 text-base">&#123; "</span>description<span className="text-sixth/90 text-base">":&nbsp;"</span>
            With over a decade of experience in the industry, I have a diverse background in back-end development. My work involves architecting robust systems that power seamless user interactions, focusing on creating resilient and scalable software solutions.
            <span className="text-sixth/90 text-base">" &#125;</span>
          </p>
        </div>
        <div className="max-w-[386px] w-full flex justify-center md:justify-start  lg:justify-center items-center gap-3 md:gap-4 lg:gap-5 mt-6">
          <div className="w-fit h-fit bg-gray-300 rounded overflow-visible">
            <a
              href="https://www.linkedin.com/in/arumery/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-gray-200 bg-secondary px-3 py-1 md:px-4 md:py-1.5 lg:px-8 lg:py-2.5 text-xs md:text-sm font-semibold lg:font-bold flex gap-3 items-center transition-all hover:translate-x-0.5 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer border rounded border-secondary hover:border-l-primary hover:border-b-primary"
            >
             <IconContext.Provider
              value={{ className: "w-5 h-5 " }}
            >
              <FiLinkedin />
            </IconContext.Provider>
            </a>
          </div>

          <div className="w-fit h-fit bg-gray-300 overflow-visible rounded">
            <a
              href="https://github.com/arumry"
              rel="noreferrer"
              target="_blank"
              className="text-gray-300 bg-primary px-4 py-1 md:px-6 md:py-1.5 lg:px-8 lg:py-2.5 text-xs md:text-sm font-semibold lg:font-bold flex gap-3 items-center transition-all hover:translate-x-0.5 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer border rounded border-gray-300"
            >
              <IconContext.Provider
              value={{ className: "w-5 h-5 " }}
            >
              <FiGithub />
            </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
