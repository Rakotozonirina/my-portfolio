import React from "react"
import Navbar from "../Components/Navbar"
import {Navigation} from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Icons } from "./Acceuil"

function VerticalSwipe(){
    return(
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
        className="swiper-container-vertical"
      >
        <SwiperSlide key={1} className="absolute top-0 left-28">
        <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
            <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-20 -bottom-8"/>
            <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-gray-800">
                    Avg
                </p>
                <p className="text-xs text-gray-400">
                    Detail is not an obsession, it is the very essence of perfection.
                </p>
                <p className="text-xl font-medium text-indigo-500">
                    $399
                </p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide key={2}>
            <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
                    <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-20 -bottom-8"/>
                    <div className="w-4/6">
                        <p className="mb-2 text-lg font-medium text-gray-800">
                            Avg
                        </p>
                        <p className="text-xs text-gray-400">
                            Detail is not an obsession, it is the very essence of perfection.
                        </p>
                        <p className="text-xl font-medium text-indigo-500">
                            $399
                        </p>
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide key={3}>
            <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
                <img alt="moto" src="/images/object/1.png" class="absolute w-40 h-40 mb-4 -right-20 -bottom-8"/>
                <div className="w-4/6">
                    <p className="mb-2 text-lg font-medium text-gray-800">
                        Avg
                    </p>
                    <p className="text-xs text-gray-400">
                        Detail is not an obsession, it is the very essence of perfection.
                    </p>
                    <p className="text-xl font-medium text-indigo-500">
                        $399
                    </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide key={4}>
            <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
                <img alt="moto" src="/images/object/1.png" className="absolute w-40 h-40 mb-4 -right-20 -bottom-8"/>
                <div className="w-4/6">
                    <p className="mb-2 text-lg font-medium text-gray-800">
                        Avg
                    </p>
                    <p className="text-xs text-gray-400">
                        Detail is not an obsession, it is the very essence of perfection.
                    </p>
                    <p className="text-xl font-medium text-indigo-500">
                        $399
                    </p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    )
}

export function Reconnaissance() {
    return(
        <>
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] grid items-center justify-center relative acceuil-body">
            <Navbar/>
            <div className="border border-red-400">
                <VerticalSwipe/>
            </div>
            <Icons/>
        </div>
        </>
    )
}