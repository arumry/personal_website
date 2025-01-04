import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer footer-center p-3 md:p-10 text-white rounded py-14 w-full bg-primary shadow-card">
      <div className="z-10 flex justify-evenly items-center w-72">

        <a
          href="https://www.linkedin.com/in/arumery/"
          target="_blank"
          rel="noreferrer"
          className="z-10 hover:-translate-y-1 transition-all pt-3.5"
        >
          <IconContext.Provider value={{ className: "h-6 w-6" }}>
            <FiLinkedin />
          </IconContext.Provider>
        </a>

        <a
          href="https://github.com/arumry"
          target="_blank"
          rel="noreferrer"
          className="z-10 hover:-translate-y-1 transition-all pt-3.5"
        >
          <IconContext.Provider value={{ className: "h-6 w-6" }}>
            <FiGithub />
          </IconContext.Provider>
        </a>
        <span className="relative group flex gap-2 pt-3.5 cursor-pointer">
          <IconContext.Provider value={{ className: "w-6 h-6" }}>
            <MdOutlineMail />
          </IconContext.Provider>
          <p className="absolute bottom-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-secondary text-primary px-3 py-1 rounded shadow-card font-semibold text-xs after:absolute after:top-3 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-4 after:bg-secondary after:-z-10 after:rotate-45 whitespace-nowrap cursor-text">
          hello@aaronrumery.com
          </p>
        </span>
      
      </div>
      <div>
        <p className="flex items-center flex-nowrap whitespace-nowrap">
          Aaron Rumery &nbsp;<span className="text-fifth/80">&#123;&nbsp;"</span>Copyright<span className="text-fifth/80">": "</span>© 2025
            <span className="text-fifth/80"> "&nbsp;&#125;</span>
        </p>
      </div>
    </footer>
  );
}
