import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavBar = () => (
        <div className="flex flex-row justify-between w-screen m-auto bg-slate-500 py-2 px-3 rounded-b-lg">    
            <div className="navicon-container"> 
                <NavLink href="projects" txt="Projects"/>
                <NavLink href="about" txt="About"/>
            </div>
            <div className="navicon-container">
                <IconLink href="https://linkedin.com/in/errol-bucy-799882231/" icon={ <FaLinkedin/> }/>
                <IconLink href="https://github.com/KauBoui" icon={ <FaGithub/> }/>  
            </div>
        </div>
)


const IconLink = ({ href, icon }: { href: string, icon:ReactElement<IconType> }) => (
    <div className="navbar-item">
        <a className="text-3xl" href= { href }> { icon } </a>
    </div>
)



const NavLink = ({ href, txt }: { href: string, txt:string }) => (
    <div className="navbar-item">
        <a className="blue-600" href= { href }> { txt } </a>
    </div>
)

export default NavBar;