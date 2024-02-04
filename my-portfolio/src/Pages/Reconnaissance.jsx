import React from "react"
import Navbar from "../Components/Navbar"
import { Icons } from "./Acceuil"

export function Reconnaissance() {
    return(
        <>
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] acceuil-body">
            <Navbar/>
            <Icons/>
        </div>
        </>
    )
}