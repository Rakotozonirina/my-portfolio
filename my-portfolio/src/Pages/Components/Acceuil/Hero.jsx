import React, {useEffect, useRef} from "react"
import CircleOne from "../../../Assets/Acceuil/circle.svg"
import IllustrationBottom from "../../../Assets/Acceuil/Ilustration bottom.svg"
import HeroZo from "../../../Assets/Acceuil/zo nirina.png"
import { gsap } from "gsap"

export function Hero(){
    const Circle = useRef();
    const Illustration = useRef();
    const tl = useRef();
    useEffect(() => {
        tl.current = gsap.timeline()
        .to(Circle.current, {scale: 1.2, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0, delay: 2})
        .to(Illustration.current, {scale: 1.4, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0, delay: 3})
    },[]);
    return(
        <>
            <img src={CircleOne} ref={Circle} alt="circle" className="absolute max-sm:left-4 sm:max-md:left-4 md:max-lg:top-12 md:max-lg:left-0 top-12 right-60" />
            <img src={HeroZo} alt="hero zo nirina" className="absolute bottom-0 max-sm:right-0 right-64 block object-cover h-[70dvh]" />
            <img src={IllustrationBottom} ref={Illustration} alt="illustration bottom" className="absolute bottom-0 max-sm:right-0 sm:max-md:right-0 right-36 block object-cover h-[80dvh]" />
        </>
    )
}