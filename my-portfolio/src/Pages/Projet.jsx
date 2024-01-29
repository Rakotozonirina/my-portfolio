import React from "react"
import Navbar from "../Components/Navbar"
import { Icons } from "./Acceuil"
import Project from "./Components/Project/Component/Project"

function HeroProjet(){
    return(
        <>
        <h1 className="text-neutral-800 absolute top-32 left-12 dark:text-white md:max-lg:text-3xl lg:max-xl:text-3xl text-4xl font-bold font-Marker capitalize tracking-wider">Projet</h1>
        </>
    )
}

export function Projet(){
    return(
        <>
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] acceuil-body max-sm:flex max-sm:items-center max-sm:justify-center sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center md:max-lg:flex md:max-lg:items-center md:max-lg:justify-center flex items-center justify-end relative border border-red-400">
        <Navbar/>
        <Project/>
        <Icons/>
        <HeroProjet/>
        </div>
        </>
    )
}