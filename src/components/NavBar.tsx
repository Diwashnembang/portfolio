import { CloudDownload } from "lucide-react"
export function NavBar(){
    return (
        <div className="hidden md:block">
            <nav className="h-21">
                <ul className="grid grid-cols-8 gap-10 justify-items-center items-center h-full">
                    <li className="col-span-1"><a href="#" className="hover:text-gray-400">DN.</a></li>
                    <li className="col-start-3 col-end-5"><a href="#" className="hover:text-gray-400">Contact</a></li>
                    <li  className="col-span-2"><a href="#" className="hover:text-gray-400">Projects</a></li>
                    <li className="col-span-2"><a href="#" className="hover:text-gray-400 flex ">Resume <CloudDownload className="[width:50px] [height:40px]"></CloudDownload></a></li>
                </ul>
            </nav>
        </div>
    )
}