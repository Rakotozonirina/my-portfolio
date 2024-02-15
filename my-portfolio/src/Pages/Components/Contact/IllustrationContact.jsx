import React, { useEffect, useRef } from "react"
import Jewelery from "../../../Assets/Acceuil/Jewelry.svg"
import { gsap } from "gsap"

export default function IllustrationContact(){
    const Jewelry = useRef();
    const tl = useRef();
    useEffect(
        () => {
            tl.current = gsap.timeline()
            .to(Jewelry.current, {scale: 1.1, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0, delay: 2})
        }, []
    );
    return(
        <>
            <img src={Jewelery} ref={Jewelry} className="absolute max-sm:top-[6rem] max-sm:left-0 sm:max-md:-top-[4rem] sm:max-md:left-0 md:max-lg:scale-[0.7] md:max-lg:-top-[15rem] md:max-lg:left-0 lg:scale-[0.8] lg:-top-[20rem] lg:left-0" alt="Jewelery"/>
        </>
    )
}
