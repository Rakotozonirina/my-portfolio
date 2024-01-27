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
        <div className="w-full h-[100dvh] acceuil-body flex items-center flex-wrap justify-end relative border border-red-400">
        <Navbar/>
        <Project/>
        <Icons/>
        <HeroProjet/>
        </div>
        </>
    )
}