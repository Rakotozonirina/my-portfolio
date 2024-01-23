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
import { Icons } from "./Components/Apropos/Illustration/Icons"


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
        <section className="flex w-fit items-center justify-center xl:mx-56">
            <div>
                <TextTransition springConfig={presets.wobbly}>{Illustrates[index % Illustrates.length]}</TextTransition>
            </div>
        </section>
        </>
    )
}

function Hero(){
    return(
        <div className="border border-green-400 absolute top-48 left-0">
            <p className="text-stone-600 font-Kalam dark:text-stone-300 text-xl lg:max-xl:text-lg md:max-lg:text-lg font-normal tracking-tight">
                Mon amour pour la construction du front-end des sites web s'accompagne d'une passion pour surmonter les obstacles. Je suis prêt à relever tout défi qui me permettra d'exploiter pleinement mes compétences et de contribuer de manière significative.
            </p>
        </div>
    )
}

export function Apropos(){
    return(
        <>
        <div className="h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] relative acceuil-body max-sm:flex max-sm:items-center max-sm:justify-center sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center md:max-lg:flex md:max-lg:items-center md:max-lg:justify-center lg:max-xl:flex lg:max-xl:items-center lg:max-xl:justify-center xl:flex xl:items-center xl:justify-end w-full">
        <Navbar/>
        <Hero/>
        <Illustration/>
        <Icons/>
        </div>
        </>
    )
}