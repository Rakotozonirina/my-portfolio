import React, { useRef, useEffect } from "react"
import { Popover } from '@headlessui/react'
import { gsap } from "gsap"
import { useTranslation } from "react-i18next"
import CVZoFr from "../../../Assets/Acceuil/resumeuptwo.pdf"

export default function Button(){
    const Btn = useRef();
    const tl = useRef();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        tl.current = gsap.timeline()
        .to(Btn.current, {scale: 1.1, duration: 2, repeat: -1, yoyo:true, opacity: 1, y: 0})
    },[]);
    return(
        <>
        <Popover className="relative">
            <Popover.Button ref={Btn} className="bg-indigo-950 border-none font-Marker dark:bg-blue-600 text-[#FEF5EA]  p-2 text-lg font-medium my-2">{t('Telecharge')}</Popover.Button>
            <Popover.Panel className="absolute bg-indigo-950 dark:bg-blue-600 z-10">
                <div className="grid grid-rows-2 place-items-center grid-cols-1 gap-[0.5rem]">
                    <a href="/" className="px-11 py-2 dark:hover:text-indigo-950 text-[#FEF5EA] hover:text-fuchsia-500 font-medium font-Marker">CV in EN</a>
                    <a href={CVZoFr} download="resumeuptwo.pdf" className="px-11 dark:hover:text-indigo-950 py-2 text-[#FEF5EA] hover:text-fuchsia-500 font-medium font-Marker">CV in FR</a>
                </div>
            </Popover.Panel>
        </Popover>
        </>
    )
}