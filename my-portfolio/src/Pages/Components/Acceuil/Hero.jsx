import React from "react"
import CircleOne from "../../../Assets/Acceuil/circle.svg"
import IllustrationBottom from "../../../Assets/Acceuil/Ilustration bottom.svg"
import HeroZo from "../../../Assets/Acceuil/zo nirina.png"

export function Hero(){
    return(
        <>
            <img src={CircleOne} alt="circle" className="absolute top-12 right-60" />
            <img src={HeroZo} alt="hero zo nirina" className="absolute bottom-0 right-64 block object-cover h-[70dvh]" />
            <img src={IllustrationBottom} alt="illustration bottom" className="absolute bottom-0 right-36 block object-cover h-[80dvh]" />
        </>
    )
}