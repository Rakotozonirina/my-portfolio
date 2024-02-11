import React from "react"
import Navbar from "../Components/Navbar"
import HeroZoContact from "../Assets/Acceuil/zo nirina.png"
import IllustrationContact from "./Components/Contact/IllustrationContact"
import Phone from "../Assets/Acceuil/phone.svg"
import Email from "../Assets/Acceuil/mail.svg"
import City from "../Assets/Acceuil/city.svg"



function HeroContact(){
    return(
        <div className="w-full h-[100dvh] grid grid-cols-2">
            <section className="border border-green-400 flex items-center justify-center pt-[8rem]">
                <img src={HeroZoContact} alt="HeroZoContact" />
            </section> 
            <section className="border border-green-400 flex items-center justify-center">
                <div className="grid gap-2 w-[80%]">
                    <section>
                        <h1 className="text-[2.3rem] font-semibold font-Kalam">Si vous avez besoin un Intégrateur et Front-end de faire votre projet, <span className="text-[#3563E9]">en parlant ici!</span></h1>
                    </section>
                    <section>
                        <h2 className="font-Kalam text-[#757575] text-[1.8rem]">je suis disponible à vous!</h2>
                        <section className="border border-black bg-[#D9D9D9] p-4 rounded">
                            <ul>
                                <li>
                                    <p>Contact</p>
                                </li>
                                <li className="py-2">
                                    <div className="flex gap-2 items-center">
                                        <section>
                                            <img src={Phone} alt="Phone"/>
                                        </section>
                                        <article>
                                            <p>
                                                +261329719391
                                            </p>
                                            <p>
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
                                            <p>
                                                tomzonirina@gmail.com
                                            </p>
                                            <p>
                                                Email
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
                                            <p>
                                                Madagascar/ Mahajanga 
                                            </p>
                                            <p>
                                                Pays/ Ville
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

export function Contact(){
    return(
        <>
        <div className="grid place-items-center w-full h-[100dvh] max-sm:h-[200dvh] sm:max-md:h-[180dvh] md:max-lg:h-[150dvh] relative acceuil-body">
            <Navbar/>
            <HeroContact/>
            <IllustrationContact/>
        </div>
        </>
    )
}