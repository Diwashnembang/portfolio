import { Github, Linkedin, Mail, CloudDownload } from "lucide-react";
import home from "../assets/Home.svg";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
export function Main() {
  const nagivate = useNavigate();
  return (
    <>
      <div className="pt-10 md:grid grid-cols-8 items-center [height:100%] md:pt-20">
        <div className="w-full grid grid-cols-8 gap-1.25 content-center justify-items-center [height:186px] md:col-span-4">
          <div className="[font-size:24px] col-span-8 md:[font-size:42px] font-medium tracking-tight">
            <h1 className="mb-2 text-gray-800">Hi! I am Diwash Nembang</h1>
            <div className="text-gray-700">
              <Typewriter
                words={["I'm a student.", "I'm a software developer."]}
                loop={false}
                cursor={true}
                cursorBlinking={true}
                cursorColor="gray"
              />
            </div>
          </div>
          
          {/* Navigation for medium screens */}
          <ul className="hidden md:flex col-span-8 gap-8 items-center my-6 text-[17px] font-medium tracking-wide">
            <li>
              <a className="inline-block px-4 py-2 text-gray-700 hover:text-gray-900 relative group transition-all duration-300 cursor-pointer" 
                 onClick={() => {nagivate("/contact")}}>
                <span className="inline-block animate-[breathe_3s_ease-in-out_infinite]">Contact</span>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a className="inline-block px-4 py-2 text-gray-700 hover:text-gray-900 relative group transition-all duration-300 cursor-pointer" 
                 onClick={() => {nagivate("/projects")}}>
                <span className="inline-block animate-[breathe_3s_ease-in-out_infinite]">Projects</span>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li>
              <a href="/resume.pdf" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block px-4 py-2 text-gray-700 hover:text-gray-900 relative group transition-all duration-300">
                <span className="inline-flex items-center gap-2 animate-[breathe_3s_ease-in-out_infinite]">
                  Resume
                  <CloudDownload className="w-5 h-5" />
                </span>
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>

          {/* Social icons with adjusted size */}
          <ul className="flex col-span-8 gap-6 justify-items-center items-center mt-4">
            <li>
              <a href="mailto:diwashnembang2@gmail.com"
                 className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                <Mail className="w-[22px] h-[22px] md:w-7 md:h-7" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Diwashnembang" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                <Github className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/diwash-nembang-a06767229/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full grid grid-cols-8 gap-1.25 justify-items-center col-span-4">
          <img
            src={home}
            alt="home"
            className="col-span-8 [height:350px] md:h-full"
          />
        </div>
      </div>
      {/* Mobile navigation with improved typography */}
      <ul className="text-[17px] flex flex-col w-full gap-5 justify-items-center items-center h-full md:hidden font-medium tracking-wide">
        <li>
          <a className="inline-block relative group cursor-pointer" 
             onClick={() => {nagivate("/contact")}}>
            <span className="inline-block animate-[breathe_3s_ease-in-out_infinite]">
              Contact
            </span>
          </a>
        </li>
        <li>
          <a className="inline-block relative group cursor-pointer" 
             onClick={() => {nagivate("/projects")}}>
            <span className="inline-block animate-[breathe_3s_ease-in-out_infinite]">
              Projects
            </span>
          </a>
        </li>
        <li>
          <a href="/resume.pdf" 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block relative group">
            <span className="inline-flex items-center gap-2 animate-[breathe_3s_ease-in-out_infinite]">
              Resume
              <CloudDownload className="w-5 h-5" />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
}
