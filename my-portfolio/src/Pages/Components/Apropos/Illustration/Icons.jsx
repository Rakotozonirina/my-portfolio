import React, {useEffect, useRef} from "react"
import Planet from "../../../../Assets/Acceuil/planet.svg"
import { gsap } from "gsap"

export function Icons(){
    const AnimateOne = useRef();
    const tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline()
        .to(AnimateOne.current, {scale: 1.1, repeat: -1, yoyo:true, opacity: 1, y: 2, duration: 1, delay: 2})
    },[]);
    return(
        <>
            <img src={Planet} ref={AnimateOne} alt="Planet" className="absolute max-sm:bottom-24 max-sm:left-12 sm:max-md:bottom-24 sm:max-md:left-12 md:max-lg:bottom-24 md:max-lg:left-12 lg:max-xl:top-24 xl:top-24 lg:max-xl:right-12 xl:right-12" />
        </>
    )
}