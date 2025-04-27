import { nanoid } from "nanoid";
import { NavBar } from "./NavBar";
import { ProjectShow } from "./ProjectShow";

interface Projects{
    id:string,
    videosrc:string,
    title:string,
    description:string,
    link:string,
    stack:string,
    website?:string
}

const projects:Projects[] = [
    {
        id: nanoid(),
        videosrc:"/mp4/mero-drive.mp4",
        title:"Mero Drive",
        description:"Mero Drive is a Google Drive clone that runs on my own server, built with an Express/Node.js API and a React + Vite frontend. It features JWT-based authentication, RESTful file and folder CRUD, standard upload/download flows, inline previews for images, videos, and documents, and a fully responsive interface. Clone the repo, configure your storage path and database, and start the server—your files stay on your home server under your control.",
        link:"https://github.com/Diwashnembang/mero_drive",
        stack:"React, Express, Tailwind Css, Prisma ,postgres",
    },{
        id: nanoid(),
        videosrc:"/mp4/quick-tab-switch.mp4",
        title:"Quick Tab Switch",
        description:"Quick Tab Switch is a fast and lightweight Chrome extension that lets you instantly jump between your open tabs using simple keyboard shortcuts. Each tab is assigned a unique index, allowing you to quickly switch without manually cycling through tabs. Designed for speed and efficiency, it makes multitasking across multiple tabs much smoother and more effortless.",
        stack:"vanilla JS, TypeScript",
        link:"https://github.com/Diwashnembang/tab-manager-plugin",
        website:"https://chromewebstore.google.com/detail/quick-tab-switch/hdpbmldonkjhhlpmbppahhgjjkemejfa"

    }]
export function Projects() {
    return (<>

    <div className='font-primary mx-3.5 text-4xl md:mx-20' >
        <NavBar></NavBar>
        <div className="mb-9">

        {projects.map((project) =>(
            <ProjectShow videosrc={project.videosrc} link={project.link} title={project.title} description={project.description} stack={project.stack} key={project.id} website={project.website || ""}></ProjectShow>
        ))}
        </div>
    </div>

    </>)
}