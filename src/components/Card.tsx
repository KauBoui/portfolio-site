import React from "react"
import { FaGithub } from "react-icons/fa";

const Card = ({ children, title, imgsrc, githublnk }: { children:string, title:string, imgsrc:string, githublnk:string }) => (
    <div className="flex center max-w-prose 
                    center gap-2 px-4 py-4 mx-auto my-4 rounded-md
                    bg-slate-200">
        <img className="w-[20%] h-[90%] rounded-md" src={ imgsrc } alt=""/> 
        <div className = "flex flex-col">
            <header className="flex flex-row pb-3 pr-4 justify-between font-extrabold divide-x-2">
                <h1> { title } </h1>   
                <a className="" href={ githublnk }>
                    <div role="button" className="navbar-item  shadow-slate-100/50">   
                    <FaGithub/>
                    </div> 
                </a>
            </header>
            <article className="">  
                { children }
            </article>          
        </div>         
    </div>
)

export default Card; 