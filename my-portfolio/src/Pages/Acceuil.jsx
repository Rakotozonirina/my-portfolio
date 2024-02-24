import React, { useEffect, useRef, useState} from "react"
import Navbar from "../Components/Navbar"
import { Hero } from "./Components/Acceuil/Hero"
import { FaLinkedinIn, FaGithub } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { gsap } from "gsap"
import TextTransition, { presets } from 'react-text-transition'
import { useTranslation } from "react-i18next"
import { TextPlugin } from "gsap/dist/TextPlugin"
import Loading from "../Components/Loading"
import Button from "./Components/Acceuil/Button"

function ArticleHero(){
    const { t, i18n } = useTranslation();
    const Btn = useRef();
    const tl = useRef();
    const Para = useRef(null);
    const TEXTES = [t('Profession1'), t('Profession2'), t('Bonjour'), t('Jesuis'), 'RAKOTOMANANA Andriamihaja Zo Nirina'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
          );
          return () => clearTimeout(intervalId);
    }, []);
    useEffect(() => {
        console.log('Para.current:', Para.current);
        console.log('Para.current.children[0]:', Para.current.children[0]);
        setTimeout(() => {
            gsap.registerPlugin(TextPlugin);
            tl.current = gsap.timeline()
            .to(Para.current.children[0], {duration: 3, text: t('Description'), ease: 'none'})
            .to(Para.current.children[1], { duration: 1, opacity: 1 }, "-=1")
        }, 100)
    },[]);
    return(
        <article className="mx-8 sm:mx-16 max-sm:mt-32 sm:p-4 sm:max-md:mt-32 max-sm:w-full sm:max-md:w-[80%] md:max-lg:w-[80%] md:max-lg:mt-32 w-[40%] z-10 flex flex-col max-sm:gap-24 gap-12">
            <h1 className="text-neutral-800 dark:text-[#FEF5EA] md:max-lg:text-3xl lg:max-xl:text-3xl text-4xl font-bold font-Marker capitalize tracking-wider"><TextTransition springConfig={presets.wobbly}>{TEXTES[index % TEXTES.length]}</TextTransition></h1>
            <div>
                <p ref={Para}><span className="text-stone-600 font-Kalam dark:text-stone-300 text-xl lg:max-xl:text-lg md:max-lg:text-lg font-normal tracking-tight"></span> <Link to="/contact" className="text-indigo-950 text-xl lg:max-xl:text-lg md:max-lg:text-lg font-normal tracking-tight dark:text-blue-600 font-Kalam" style={{ opacity: 0 }}>{t('Contactez')}</Link> </p>
                <Button/>
            </div>
        </article>
    )
}

export function Icons(){
    return(
        <div className="absolute max-sm:rounded max-sm:p-2 max-sm:h-fit max-sm:bg-[#c5c7ff] max-sm:dark:bg-neutral-800 sm:max-md:rounded sm:max-md:p-2 sm:max-md:h-fit sm:max-md:bg-[#c5c7ff] sm:max-md:dark:bg-neutral-800 sm:max-md:top-[50%] max-sm:top-[50%] sm:max-md:left-8 max-sm:left-0 md:max-lg:bottom-96 flex flex-col gap-4 bottom-12 left-8">
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

function FirstSuspense(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return(
        <>
        {loading ? ( <Loading/> ) : (
            <>
                <ArticleHero/>
                <Icons/>
                <Hero/>
            </>
        )}
        </>
    )
}

export default function Acceuil(){
    return(
        <>
            <div className="w-full h-[100dvh] max-sm:items-start acceuil-body max-sm:h-[200dvh] sm:max-md:h-[180dvh] sm:max-md:items-start md:max-lg:h-[150dvh] md:max-lg:items-start md:max-lg:justify-center relative flex items-center">
            <Navbar/>
            <FirstSuspense/>
            </div>
        </>
    )
}
