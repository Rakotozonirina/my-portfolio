import React from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6"
import Panther from "../Picture/Project-three.jpg"
import Me from "../../../../Assets/Acceuil/zo nirina.png"
import { useTranslation } from "react-i18next"


export default function CardThree(){
    const { t, i18n } = useTranslation();
    return(
        <div className="max-sm:w-[100%] sm:max-md:w-[38rem] md:max-lg:w-[44rem] lg:max-w-2xl lg:mx-40 lg:mt-12 overflow-hidden bg-gray-800 rounded-lg shadow-md dark:bg-[#FEF5EA]">
            <img className="object-cover w-full h-64" src={Panther} alt="Honey"/>

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-[#c5c7ff] font-Kalam uppercase dark:text-blue-400">{t('Projet')}</span>
                    <Link to="https://eloquent-cocada-d9a9b0.netlify.app/" className="block mt-2 text-xl font-semibold text-[#FEF5EA] transition-colors duration-300 transform dark:text-neutral-800 font-Marker hover:underline" tabindex="0">Panther landing page</Link>
                    <p className="mt-2 text-md text-white/50 dark:text-gray-400 font-Kalam">{t('Sayna')}<span>{t('Utilisé')}<span className="text-blue-600 dark:text-blue-400">Html, Css, Js, Git, Github</span> </span> {t('réaliser')}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={Me} alt="Avatar"/>
                            <Link to="/" className="mx-2 font-semibold max-sm:text-sm text-[#FEF5EA] font-Kalam dark:text-gray-400" tabindex="0">RAKOTOMANANA Andriamihaja Zo Nirina</Link>
                        </div>
                        <span className="mx-1 text-xs text-white/80 font-Kalam dark:text-neutral-800">Jul 5, 2023</span>
                        <span className="mx-2">
                            <Link to="https://github.com/Rakotozonirina/SAYNA-JSTSCANVAS-PANTHER-062023" target="_blank">
                                <FaGithub className="w-5 h-5 text-[#c5c7ff] dark:text-blue-400"/>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}