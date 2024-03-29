import React, { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import HeroZoContact from "../Assets/Acceuil/zo nirina.png"
import IllustrationContact from "./Components/Contact/IllustrationContact"
import Phone from "../Assets/Acceuil/phone.svg"
import Email from "../Assets/Acceuil/mail.svg"
import City from "../Assets/Acceuil/city.svg"
import { useTranslation } from "react-i18next"
import Loading from "../Components/Loading"



function HeroContact(){
    const { t, i18n } = useTranslation();
    return(
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] max-lg:grid max-lg:grid-rows-2 max-lg:grid-cols-1 lg:grid lg:grid-cols-2">
            <section className="flex items-center justify-center lg:pt-[8rem]">
                <img src={HeroZoContact} alt="HeroZoContact" className="max-lg:h-[60dvh] aspect-auto" />
            </section> 
            <section className="flex items-center justify-center">
                <div className="grid gap-2 w-[80%]">
                    <section>
                        <h1 className="dark:text-[#FEF5EA] text-[2.3rem] font-semibold font-Kalam">{t('Besoin')}<span className="text-[#3563E9]">{t('Parlant')}</span></h1>
                    </section>
                    <section>
                        <h2 className="font-Kalam dark:text-[#FEF5EA] text-[#757575] text-[1.8rem]">{t('Disponible')}</h2>
                        <section className="border border-black dark:border-[#3563E9] bg-[#D9D9D9] p-4 rounded">
                            <ul>
                                <li>
                                    <p className="text-[#3563E9] font-Kalam">Contact</p>
                                </li>
                                <li className="py-2">
                                    <div className="flex gap-2 items-center">
                                        <section>
                                            <img src={Phone} alt="Phone"/>
                                        </section>
                                        <article>
                                            <p className="text-[#3563E9] font-Kalam">
                                                +261329719391
                                            </p>
                                            <p className="text-[#3563E9] font-Kalam">
                                                Mobile
                                            </p>
                                        </article>
                                    </div>
                                </li>
                                <li className="py-2">
                                    <div className="flex gap-2 items-center">
                                        <section>
                                            <img src={Email} alt="Phone"/>
                                        </section>
                                        <article>
                                            <p className="text-[#3563E9] font-Kalam">
                                                tomzonirina@gmail.com
                                            </p>
                                            <p className="text-[#3563E9] font-Kalam">
                                                {t('Email')}
                                            </p>
                                        </article>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex gap-2 items-center">
                                        <section>
                                            <img src={City} alt="Phone"/>
                                        </section>
                                        <article>
                                            <p className="text-[#3563E9] font-Kalam">
                                                Madagascar/ Mahajanga 
                                            </p>
                                            <p className="text-[#3563E9] font-Kalam">
                                                {t('Ville')}
                                            </p>
                                        </article>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </section>
                </div>
            </section>
        </div>
    )
};
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
                <HeroContact/>
                <IllustrationContact/>
            </>
        )}
        </>
    )
}

export default function Contact(){
    return(
        <>
        <div className="grid place-items-center w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] relative acceuil-body">
            <Navbar/>
            <FirstSuspense/>
        </div>
        </>
    )
}