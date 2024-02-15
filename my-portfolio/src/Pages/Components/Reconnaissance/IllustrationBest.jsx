import React, { useEffect, useRef } from "react"
import planet from "../../../Assets/Acceuil/planetMore.svg"
import star from "../../../Assets/Acceuil/star.svg"
import { gsap } from "gsap"

export default function IllustrationBest() {
    const Planet = useRef();
    const Star = useRef();
    const tl = useRef();

    useEffect(
        () => {
            tl.current = gsap.timeline()
            .to(Planet.current, {scale: 1.1, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0, delay: 2})
            .to(Star.current, {scale: 1.1, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0, delay: 3})
        }, []
    );

    return(
        <>
            <img className="absolute max-sm:bottom-0 max-sm:left-0 sm:max-md:bottom-0 sm:max-md:left-0 md:max-lg:scale-[0.7] md:max-lg:bottom-0 md:max-lg:left-0 lg:top-[5rem] lg:left-0" ref={Planet} src={planet} alt="planet" />
            <img className="absolute top-[5rem] right-0" ref={Star} src={star} alt="star" />
        </>
    )
}