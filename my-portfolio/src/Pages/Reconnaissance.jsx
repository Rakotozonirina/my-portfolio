import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Navbar from "../Components/Navbar"

function Swipe(){
    return(
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="border border-red-400 mt-80"
        >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    )
}

export function Reconnaissance() {
    return(
        <>
        <div className="w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] acceuil-body">
            <Navbar/>
            <Swipe/>
        </div>
        </>
    )
}