import React from "react"
import Navbar from "../Components/Navbar"
import HeroZoContact from "../Assets/Acceuil/zo nirina.png"
import IllustrationContact from "./Components/Contact/IllustrationContact"



function HeroContact(){
    return(
        <div className="w-full h-[100dvh] grid grid-cols-2">
            <section className="border border-green-400 flex items-center justify-center pt-[8rem]">
                <img src={HeroZoContact} alt="HeroZoContact" />
            </section> 
            <section className="border border-green-400 flex items-center justify-center">
                <div className="border border-red-400 w-[80%]">
                    <section>
                        <h1 className="text-[2.3rem] font-Kalam">Si vous avez besoin un Intégrateur et Front-end de faire votre projet, <span>en parlant ici!</span></h1>
                    </section>
                    <section></section>
                </div>
            </section>
        </div>
    )
};

export function Contact(){
    return(
        <>
        <div className="grid place-items-center w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] relative acceuil-body">
            <Navbar/>
            <HeroContact/>
            <IllustrationContact/>
        </div>
        </>
    )
}