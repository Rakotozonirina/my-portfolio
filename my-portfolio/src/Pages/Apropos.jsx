import React from "react"
import Navbar from "../Components/Navbar"
//import MyJs from "./Components/Apropos/Svg/MyJs"
import HtmlSvg from "./Components/Apropos/Svg/HtmlSvg"
//import CssSvg from "./Components/Apropos/Svg/CssSvg"
import GitSvg from "./Components/Apropos/Svg/GitSvg"
import GitHubSvg from "./Components/Apropos/Svg/GitHubSvg"
import TailwindCssSvg from "./Components/Apropos/Svg/TailwindCssSvg"


function Illustration() {
    return(
        <>
        <section className="flex flex-wrap">
            {/*
            <div className="border border-green-400">
                    <CssSvg/>
            </div>
            <div className="border border-yellow-400">
                <MyJs/>
            </div>
            */}
            <div className="border border-amber-400">
                <HtmlSvg/>
            </div>
            <div className="border border-amber-400">
                <GitSvg/>
            </div>
            <div className="border border-amber-400">
                <GitHubSvg/>
            </div>
            <div className="border border-amber-400">
                <TailwindCssSvg/>
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