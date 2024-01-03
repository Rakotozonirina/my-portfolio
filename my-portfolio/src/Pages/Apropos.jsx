import React from "react"
import Navbar from "../Components/Navbar"
import SvgJavascript from "./Components/Apropos/Svg/SvgJavascript"
import CssSvg from "./Components/Apropos/Svg/CssSvg"
import TestSvg from "./Components/Apropos/Svg/TestSvg"


function Illustration() {
    return(
        <>
        <section className="flex">
            <div className="border border-red-400">
                    <SvgJavascript/>
            </div>
            <div className="border border-yellow-400">
                    <CssSvg/>
            </div>
            <div className="border border-gray-400">
                <TestSvg/>
            </div>
        </section>
        </>
    )
}

export function Apropos(){
    return(
        <>
        <div className="h-[100dvh] w-full">
        <Navbar/>
        <h1>Sur moi</h1>
        <Illustration/>
        </div>
        </>
    )
}