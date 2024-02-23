import React, { useState, useEffect } from "react"
import Navbar from "../Components/Navbar"
import {Navigation} from "swiper/modules"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import Nomena from "../Assets/Acceuil/nomena.jpg"
import 'swiper/css'
import 'swiper/css/navigation'
import { Icons } from "./Acceuil"
import IllustrationBest from "./Components/Reconnaissance/IllustrationBest"
import { useTranslation } from "react-i18next"

function VerticalSwipe(){
    const [activeIndex, setActiveIndex] = useState(0);
    const { t, i18n } = useTranslation();
    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
        };

    useEffect(() => {
        const next = document.querySelector(".swiper-button-next");
        const prev = document.querySelector(".swiper-button-prev");
        try{
            if(activeIndex  === 1){
                next.style.display = "none"
                prev.style.display = "block"
            }else if(activeIndex === 0){
                prev.style.display = "none"
                next.style.display = "block"

            }
        }catch(error){
            console.log(error);
        }
    }, [activeIndex]);

    return(
        <>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        direction="vertical"
        navigation
        modules={[Navigation]}
        autoplay={{
            delay: 10000,
            disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        className="swiper-container-vertical"
      >
        <SwiperSlide key={1} className="absolute top-12 left-0">
        <div className="bg-gray-800 dark:bg-[#FEF5EA] w-[24rem] shadow-lg mx-auto rounded-xl p-4">
                <p className="text-[#FEF5EA] font-Kalam dark:text-gray-600">
                    <span className="text-lg font-bold text-indigo-500">
                        “
                    </span>
                        {t('Avis')}
                    <span className="text-lg font-bold text-indigo-500">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <Link to="https://coruscating-arithmetic-f57467.netlify.app/" className="relative block">
                        <img src={Nomena} alt="profil" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </Link>
                    <div className="flex flex-col justify-between ml-2">
                        <span className="text-sm font-semibold font-Kalam text-indigo-500">
                            RAHAJANIRINA Nomenjanahary Tantely
                        </span>
                        <span className="flex items-center text-xs font-Kalam text-[#FEF5EA] dark:text-gray-400">
                            <Link to="https://coruscating-arithmetic-f57467.netlify.app/">
                                portfolio
                            </Link>
                            <img src="/icons/rocket.svg" class="w-4 h-4 ml-2"/>
                        </span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide key={2} className="absolute top-12 left-0">
        <div className=" bg-gray-800 dark:bg-[#FEF5EA] w-72 shadow-lg mx-auto rounded-xl p-4">
                <p className="text-[#FEF5EA] dark:text-gray-600">
                    <span className="text-lg font-bold text-indigo-500">
                        “
                    </span>
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                    <span className="text-lg font-bold text-indigo-500">
                        ”
                    </span>
                </p>
                <div className="flex items-center mt-4">
                    <Link to="/" className="relative block">
                        <img src="/images/person/1.jpg" alt="profil" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </Link>
                    <div className="flex flex-col justify-between ml-2">
                        <span className="text-sm font-semibold text-indigo-500">
                            Jean Miguel
                        </span>
                        <span className="flex items-center text-xs text-[#FEF5EA] dark:text-gray-400">
                            User of Tail-Kit
                            <img src="/icons/rocket.svg" class="w-4 h-4 ml-2"/>
                        </span>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </>
    )
}

export default function Reconnaissance() {
    return(
        <>
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] grid items-center justify-center relative acceuil-body">
            <Navbar/>
            <div>
                <VerticalSwipe/>
            </div>
            <IllustrationBest/>
            <Icons/>
        </div>
        </>
    )
}