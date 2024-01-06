import React from "react"
import Navbar from "../Components/Navbar"
import SvgJavascript from "./Components/Apropos/Svg/SvgJavascript"
import MyJs from "./Components/Apropos/Svg/MyJs"
import HtmlSvg from "./Components/Apropos/Svg/HtmlSvg"
import CssSvg from "./Components/Apropos/Svg/CssSvg"


function Illustration() {
    return(
        <>
        <section className="flex flex-wrap">
            <div className="border border-red-400">
                    <SvgJavascript/>
            </div>
            <div className="border border-green-400">
                    <CssSvg/>
            </div>
            <div className="border border-yellow-400">
                <MyJs/>
            </div>
            <div className="border border-amber-400">
                <HtmlSvg/>
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