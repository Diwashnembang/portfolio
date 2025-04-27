import { Github } from "lucide-react";

export function ProjectShow({videosrc,title,description,link,stack,website}:{videosrc:string,title:string,description:string,link:string,stack:string,website?:string}){
    return(<>
    <div className="grid grid-cols-8 w-full mt-10 rounded-2xl overflow-hidden p-4 md:p-8
        bg-gradient-to-br from-gray-50 to-white
        shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]
        hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)]
        transition-all duration-300 ease-out">
        <div className="col-span-8 rounded-xl overflow-hidden md:col-span-4 md:max-h-[420px] bg-gray-100">
            <video 
                src={videosrc} 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
            </video>
        </div>
        <div className="col-span-8 font-secondary pt-6 [font-size:16px] md:col-span-4 md:ml-8">    
            <div className="space-y-4">
                <h1 className="text-xl font-bold border-b border-gray-200 pb-2">{title}</h1>
                <p className="text-gray-600 leading-relaxed">{description}</p>
                <p className="pt-2">
                    <span className="font-semibold text-gray-800">Technologies:</span> 
                    <span className="text-gray-600">{stack}</span>
                </p>
                {website && (
                    <p className="hover:text-gray-600 transition-colors">
                        <a href={website} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="flex items-center gap-2">
                            <span className="font-semibold">Website:</span>{website}
                        </a>
                    </p>
                )}
            </div>
            <a href={link} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center gap-2 mt-6 text-gray-700 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">View on GitHub</span>
            </a>
        </div>
    </div>
    </>)
}