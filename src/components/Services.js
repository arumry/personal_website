import React, { useCallback, useRef, useState } from "react";
import { BiPaint } from "react-icons/bi";
import { TbCodeDots } from "react-icons/tb";
import { FiLock, FiServer } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Services() {
  const observer = useRef();

  const [Viewing, setViewing] = useState(false);

  const servicesSection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  });

  return (
    <>
      <h2 className="text-zinc-500 max-w-[800px] w-full -mt-40 px-10 lg:px-0">
        // Services
      </h2>
      <section
        ref={servicesSection}
        className="w-full max-w-[1480px] h-fit overflow-visible flex flex-wrap justify-center pb-32 gap-8 lg:gap-14 mt-8 px-5 md:px-10"
      >
        <div
          className={`w-[320px] h-60 flex flex-col justify-evenly bg-primary shadow-card rounded px-6 py-4 text-white transition-all duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="flex gap-3 justify-center items-center">
            <div className="services-icon-container bg-primary_light w-fit text-gray-300 hover:text-primary h-fit p-3 hover:bg-tertiary transition-all duration-300 cursor-pointer">
              <IconContext.Provider value={{ className: "w-4 h-5" }}>
                <FiServer />
              </IconContext.Provider>
            </div>
            <h3 className="text-tertiary">Performance Optimization</h3>
          </div>

          <div className="mt-1 flex gap-2 text-[15px]">
            <p className="py-5 text-justify">
              <span className="text-tertiary text-base">&#123; "</span>description<span className="text-tertiary text-base">": "</span>I prioritize enhancing the speed and efficiency of your application, ensuring a smooth and uninterrupted user experience<span className="text-tertiary text-base">" &#125;</span>
            </p>
          </div>
        </div>

        <div
          className={`w-[320px] h-60 flex flex-col justify-evenly bg-primary shadow-card rounded px-6 py-4 text-white mt-6 transition-all delay-300 duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="flex gap-3 justify-center items-center -ml-8">
            <div className="services-icon-container bg-primary_light w-fit text-gray-300 hover:text-primary h-fit p-3.5 hover:bg-secondary transition-all duration-300 cursor-pointer">
              <IconContext.Provider value={{ className: "w-5 h-5" }}>
                <TbCodeDots />
              </IconContext.Provider>
            </div>
            <h3 className="text-secondary">Clean code</h3>
          </div>
          <div className="mt-1 flex gap-2 text-[15px]">
            <p className="py-5 text-justify">
            <span className="text-secondary text-base">&#123; "</span>description<span className="text-secondary text-base">": "</span>I am committed to crafting code that is not only clear and concise but also modular, facilitating ease of reading, comprehension, and maintenance
              <span className="text-secondary text-base">" &#125;</span>
            </p>
          </div>
        </div>

        <div
          className={`w-[320px] h-60 flex flex-col justify-evenly bg-primary shadow-card rounded px-6 py-4 text-white transition-all duration-1000 delay-700 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="flex gap-3 justify-center items-center -ml-8">
            <div className="services-icon-container bg-primary_light w-fit text-gray-300 hover:text-primary h-fit p-3.5 hover:bg-fourth transition-all duration-300 cursor-pointer">
              <IconContext.Provider value={{ className: "w-4 h-5" }}>
                <FiLock />
              </IconContext.Provider>
            </div>
            <h3 className="text-fourth">Security</h3>
          </div>
          <div className="mt-1 flex gap-2 text-[15px]">
          <p className="py-5 text-justify">
          <span className="text-fourth text-base">&#123; "</span>description<span className="text-fourth text-base">": "</span>I am dedicated to delivering software that excels in performance and reliability, while also being rigorously safeguarded against potential threats and vulnerabilities.
              <span className="text-fourth text-base">" &#125;</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
