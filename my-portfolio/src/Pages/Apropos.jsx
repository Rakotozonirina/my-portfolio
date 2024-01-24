import React, {useState, useEffect, useRef} from "react"
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
import { TextPlugin } from "gsap/dist/TextPlugin"
import { gsap } from "gsap"


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
        <section className="flex w-fit items-center justify-center lg:max-xl:mx-64 xl:mx-56">
            <div>
                <TextTransition springConfig={presets.wobbly}>{Illustrates[index % Illustrates.length]}</TextTransition>
            </div>
        </section>
        </>
    )
}

function Hero(){
    const tl = useRef();
    const Para = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            gsap.registerPlugin(TextPlugin);
            tl.current = gsap.timeline()
            .to(Para.current, {duration: 3, text:"Mon amour pour la construction du front-end des sites web s'accompagne d'une passion pour surmonter les obstacles. Je suis prêt à relever tout défi qui me permettra d'exploiter pleinement mes compétences et de contribuer de manière significative.", ease: 'none'})
        }, 100)
    },[]);
    return(
        <div className=" xl:w-[40%] max-sm:w-[80%] max-sm:top-48 max-sm:left-12 sm:max-md:w-[60%] md:max-lg:w-[60%] lg:max-xl:w-[40%] sm:max-md:top-32 sm:max-md:left-12 md:max-lg:top-32 md:max-lg:left-12 lg:max-xl:top-28 lg:max-xl:left-12 absolute xl:top-28 xl:left-12">
            <p ref={Para} className="text-stone-600 text-justify font-Kalam dark:text-stone-300 text-xl lg:max-xl:text-lg md:max-lg:text-lg font-normal tracking-tight"></p>
        </div>
    )
}

export function Apropos(){
    return(
        <>
        <div className="h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] relative acceuil-body max-sm:flex max-sm:items-center max-sm:justify-center sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center md:max-lg:flex md:max-lg:items-center md:max-lg:justify-center lg:max-xl:flex lg:max-xl:items-center lg:max-xl:justify-end xl:flex xl:items-center xl:justify-end w-full">
        <Navbar/>
        <Hero/>
        <Illustration/>
        <Icons/>
        </div>
        </>
    )
}