import React from "react"
import Navbar from "../Components/Navbar"
import { Hero } from "./Components/Acceuil/Hero"

function ArticleHero(){
    return(
        <article className="mx-16 p-4 w-[40%] z-10 flex flex-col gap-2">
            <h1 className="text-neutral-800 dark:text-white text-4xl font-bold capitalize tracking-wider"><span>INTEGRATEUR WEB ET FRONT END DEVELOPPEUR</span> <br /> <span className="text-indigo-950 dark:text-white">Bonjour! Je suis RAKOTOMANANA Andriamihaja Zo Nirina</span> </h1>
            <div>
                <p><span className="text-stone-600 dark:text-stone-300 text-xl font-normal tracking-tight">J’aime construire des sites web et si vous avez besoin un intégrateur web et front capable de faire votre projet parfaitement.</span> <span className="text-indigo-950 text-xl font-normal tracking-tight dark:text-blue-600">Contactez moi!</span> </p>
                <button className="bg-indigo-950 dark:bg-blue-600 text-white p-2 text-lg font-medium my-2">CV Télécharger</button>
            </div>
        </article>
    )
}

export function Acceuil(){
    return(
        <>
            <div className="w-full h-[100dvh] relative flex items-center">
                <Navbar/>
                <ArticleHero/>
                <Hero/>
            </div>
        </>
    )
}