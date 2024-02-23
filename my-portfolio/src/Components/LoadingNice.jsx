import React from "react"
import ImageLoading from "../Assets/Acceuil/zonirina-removebg-preview.png"

export default function LoadingNice(){
    return(
        <div className="w-full h-[100dvh] bg-gray-800 grid place-items-center">
            <img src={ImageLoading} alt="ImageLoading" />
        </div>
    )
}