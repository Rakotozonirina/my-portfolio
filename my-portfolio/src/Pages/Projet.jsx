import React, { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import { Icons } from "./Acceuil"
import Project from "./Components/Project/Component/Project"
import { useTranslation } from "react-i18next"
import Loading from "../Components/Loading"

function HeroProjet(){
    const { t, i18n } = useTranslation();
    return(
        <>
            <h1 className="text-neutral-800 absolute top-32 left-12 dark:text-[#FEF5EA] md:max-lg:text-3xl lg:max-xl:text-3xl text-4xl font-bold font-Marker capitalize tracking-wider">{t('Projet')}</h1>
        </>
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
                <Project/>
                <Icons/>
                <HeroProjet/>
            </>
        )}
        </>
    )
}

export default function Projet(){
    return(
        <>
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] acceuil-body flex items-center justify-center sm:max-md:flex sm:max-md:items-center sm:max-md:justify-center md:max-lg:flex md:max-lg:items-center md:max-lg:justify-center lg:flex lg:items-center lg:justify-end relative">
        <Navbar/>
        <FirstSuspense/>
        </div>
        </>
    )
}