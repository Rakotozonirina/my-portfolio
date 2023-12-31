import React, { useEffect, useRef, useState} from "react"
import Navbar from "../Components/Navbar"
import { Hero } from "./Components/Acceuil/Hero"
import { FaLinkedinIn, FaGithub } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import TextTransition, { presets } from 'react-text-transition'
import { TextPlugin } from "gsap/dist/TextPlugin"
//className="text-indigo-950 dark:text-white"

function ArticleHero(){
    const Btn = useRef();
    const tl = useRef();
    const Para = useRef(null);
    const TEXTES = ['INTEGRATEUR WEB ET', 'FRONT END DEVELOPPEUR', 'Bonjour!', 'Je suis', 'RAKOTOMANANA Andriamihaja Zo Nirina'];
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
          );
          return () => clearTimeout(intervalId);
    }, []);
    useEffect(() => {
        tl.current = gsap.timeline()
        .to(Btn.current, {scale: 1.1, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0})
    },[]);
    useEffect(() => {
        console.log('Para.current:', Para.current);
        console.log('Para.current.children[0]:', Para.current.children[0]);
        setTimeout(() => {
            gsap.registerPlugin(TextPlugin);
            tl.current = gsap.timeline()
            .to(Para.current.children[0], {duration: 3, text:" J’aime construire des sites web et si vous avez besoin un intégrateur web et front capable de faire votre projet parfaitement.", ease: 'none'})
            .to(Para.current.children[1], { duration: 1, opacity: 1 }, "-=1")
        }, 100)
    },[]);
    return(
        <article className="mx-8 sm:mx-16 max-sm:mt-32 sm:p-4 sm:max-md:mt-32 max-sm:w-full sm:max-md:w-[80%] md:max-lg:w-[80%] md:max-lg:mt-32 w-[40%] z-10 flex flex-col max-sm:gap-24 gap-12">
            <h1 className="text-neutral-800 dark:text-white md:max-lg:text-3xl lg:max-xl:text-3xl text-4xl font-bold font-Marker capitalize tracking-wider"><TextTransition springConfig={presets.wobbly}>{TEXTES[index % TEXTES.length]}</TextTransition>  </h1>
            <div>
                <p ref={Para}><span className="text-stone-600 font-Kalam dark:text-stone-300 text-xl lg:max-xl:text-lg md:max-lg:text-lg font-normal tracking-tight"></span> <span className="text-indigo-950 text-xl lg:max-xl:text-lg md:max-lg:text-lg font-normal tracking-tight dark:text-blue-600 font-Kalam" style={{ opacity: 0 }}>Contactez moi!</span> </p>
                <button ref={Btn} className="bg-indigo-950 font-Marker dark:bg-blue-600 text-white  p-2 text-lg font-medium my-2">CV Télécharger</button>
            </div>
        </article>
    )
}

function Icons(){
    return(
        <div className="absolute sm:max-md:top-[50%] max-sm:top-[50%] md:max-lg:bottom-96 flex flex-col gap-4 bottom-12 left-8">
            <span>
                <Link to="https://www.linkedin.com/in/zo-nirina-rakotomanana-5276ab236/" target="_blank">
                    <FaLinkedinIn className="w-5 h-5 dark:text-white"/>
                </Link>
            </span>
            <span>
                <Link to="https://github.com/Rakotozonirina" target="_blank">
                    <FaGithub className="w-5 h-5 dark:text-white"/>
                </Link>
            </span>
        </div>
    )
}

export function Acceuil(){
    return(
        <>
            <div className="w-full h-[100dvh] max-sm:items-start acceuil-body max-sm:h-[200dvh] sm:max-md:h-[180dvh] sm:max-md:items-start md:max-lg:h-[150dvh] md:max-lg:items-start md:max-lg:justify-center relative flex items-center">
                <Navbar/>
                <ArticleHero/>
                <Icons/>
                <Hero/>
            </div>
        </>
    )
}