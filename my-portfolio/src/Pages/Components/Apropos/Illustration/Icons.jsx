import React, {useEffect, useRef} from "react"
import Dyamond from "../../../../Assets/Acceuil/Dyamond.svg"
import Planet from "../../../../Assets/Acceuil/planet.svg"
import { gsap } from "gsap"

export function Icons(){
    const Animate = useRef();
    const AnimateOne = useRef();
    const tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline()
        .to(Animate.current, {scale: 1.2, repeat: -1, yoyo:true, opacity: 1, y: 1, duration: 2})
        .to(AnimateOne.current, {scale: 1.1, repeat: -1, yoyo:true, opacity: 1, y: 2, duration: 1, delay: 2})
    },[]);
    return(
        <>
            <img src={Dyamond} ref={Animate} alt="Dyamond" className="absolute hidden sm:block max-sm:top-24 max-sm:right-[-10%] sm:max-md:top-24 sm:max-md:right-[-10%] md:max-lg:top-24 md:max-lg:right-0 lg:max-xl:bottom-[-30%] xl:bottom-[-30%] lg:max-xl:scale-[0.5] lg:max-xl:left-0 xl:left-0" />
            <img src={Planet} ref={AnimateOne} alt="Planet" className="absolute max-sm:bottom-24 max-sm:left-12 sm:max-md:bottom-24 sm:max-md:left-12 md:max-lg:bottom-24 md:max-lg:left-12 lg:max-xl:top-24 xl:top-24 lg:max-xl:right-12 xl:right-12" />
        </>
    )
}