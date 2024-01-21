import React, {useState, useEffect} from "react"
import Navbar from "../Components/Navbar"
import TextTransition, { presets } from 'react-text-transition'
import MyJs from "./Components/Apropos/Svg/MyJs"
import HtmlSvg from "./Components/Apropos/Svg/HtmlSvg"
import CssSvg from "./Components/Apropos/Svg/CssSvg"
import GitSvg from "./Components/Apropos/Svg/GitSvg"
import GitHubSvg from "./Components/Apropos/Svg/GitHubSvg"
import TailwindCssSvg from "./Components/Apropos/Svg/TailwindCssSvg"
import ReactSvg from "./Components/Apropos/Svg/ReactSvg"
import BootstrapSvg from "./Components/Apropos/Svg/BootstrapSvg"
import WordPressSvg from "./Components/Apropos/Svg/WordPressSvg"


function Illustration() {
    const [index, setIndex] = useState(0);
    const Illustrates = [<MyJs/>, <CssSvg/>, <HtmlSvg/>, <GitSvg/>, <GitHubSvg/>, <TailwindCssSvg/>, <ReactSvg/>, <BootstrapSvg/>, <WordPressSvg/>];
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
          );
          return () => clearTimeout(intervalId);
    }, []);
    return(
        <>
        <section className="flex w-full items-center justify-center">
            <div>
                <TextTransition springConfig={presets.wobbly}>{Illustrates[index % Illustrates.length]}</TextTransition>
            </div>
        </section>
        </>
    )
}

export function Apropos(){
    return(
        <>
        <div className="h-[100dvh] acceuil-body md:max-lg:flex md:max-lg:items-center md:max-lg:justify-center xl:flex xl:items-center xl:justify-center w-full">
        <Navbar/>
        <Illustration/>
        </div>
        </>
    )
}