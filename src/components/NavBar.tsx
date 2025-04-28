import { CloudDownload } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function NavBar({className = ""}: {className?: any}){
    const nagivate = useNavigate()
    return (
        <div className={`font-medium text-xl md:text-2xl ${className}`}>
            <nav className="py-6">
                <ul className="grid grid-cols-8 gap-10 justify-items-center items-center">
                    <li className="col-span-1">
                        <a className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-300 cursor-pointer" 
                           onClick={()=>{nagivate("/")}}>
                            DN.
                        </a>
                    </li>
                    <li className="col-start-3 col-end-5">
                        <a className="relative text-gray-700 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
                           onClick={()=>{nagivate("/contact")}}>
                            Contact
                        </a>
                    </li>
                    <li className="col-span-2">
                        <a className="relative text-gray-700 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
                           onClick={()=>{nagivate("/projects")}}>
                            Projects
                        </a>
                    </li>
                    <li className="col-span-2">
                        <a href="/resume.pdf" 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
                            Resume 
                            <CloudDownload className="w-5 h-5 md:w-6 md:h-6" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}