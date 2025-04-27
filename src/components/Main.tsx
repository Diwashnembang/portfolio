import { Github ,Linkedin, Mail, CloudDownload} from "lucide-react"
import home from "../assets/Home.svg"
import { Typewriter } from "react-simple-typewriter"
export function Main(){
    return (
        <>
        <div className="pt-10 md:grid grid-cols-8 items-center [height:100%] md:pt-20">

        <div className="w-full grid grid-cols-8 gap-1.25 content-center justify-items-center [height:186px] md:col-span-4">
            <div className="[font-size:20px] col-span-8 md:[font-size:40px]">
                <h1>Hi! I am Diwash Nembang</h1>
                <Typewriter words={["I'm a student.","I'm a software developer."]} loop={false} cursor={true} cursorBlinking={true}>
                </Typewriter>
            </div>
            <ul className="[font-size:20px] flex col-span-8  gap-5 justify-items-center items-center h-full my-5">
                <li ><a className="hover:text-gray-400"><Mail className="[width:20px] [height:20px] md:[width:40px] [height:40px]"></Mail></a></li>
                <li ><a className="hover:text-gray-400"><Github className="[width:20px] [height:20px] md:[width:40px] [height:40px]"></Github></a></li>
                <li ><a className="hover:text-gray-400"><Linkedin className="[width:20px] [height:20px] md:[width:40px] [height:40px]"></Linkedin></a></li>
            </ul>
        </div>
            <div className="w-full grid grid-cols-8 gap-1.25 justify-items-center col-span-4 ">
                <img src={home} alt="home" className="col-span-8 [height:350px]  md:h-full"></img>
            </div>
            </div>
             <ul className="[font-size:20px] flex flex-col w-full gap-5 justify-items-center items-center h-full md:hidden">
                    <li className=""><a href="#" className="hover:text-gray-400">Contact</a></li>
                    <li  className=""><a href="#" className="hover:text-gray-400">Projects</a></li>
                    <li className=""><a href="#" className="hover:text-gray-400 flex ">Resume <CloudDownload className="[width:27px] [height:27px] pl-1"></CloudDownload></a></li>
                </ul>
            </>
    )
}