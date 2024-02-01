import React from "react"


function Competence(){
    return(
        <div className="xl:px-4 max-sm:px-4 max-sm:py-4 sm:max-md:px-4 sm:max-md:py-4 md:max-lg:px-4 md:max-lg:py-4 lg:max-xl:px-2 lg:max-xl:py-2 lg:max-xl:mt-0 xl:py-4 xl:mt-6 bg-gray-800 rounded-lg shadow-lg dark:bg-[#FEF5EA]">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 mx-auto text-[#FEF5EA] bg-indigo-500 rounded-md">
                    <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                        </path>
                    </svg>
                </div>
            </div>
            <h3 className="max-sm:py-4 sm:max-md:py-4 md:max-lg:py-4 xl:py-4 text-2xl font-Kalam font-semibold text-[#FEF5EA] sm:text-xl dark:text-gray-700">
                Concerne sur moi
            </h3>
            <p className="max-sm:py-4 sm:max-md:py-4 md:max-lg:py-4 xl:py-4 text-gray-300 font-Kalam text-md dark:text-gray-500">
                Mon amour pour la construction du front-end des sites web s'accompagne d'une passion pour surmonter les obstacles. Je suis prêt à relever tout défi qui me permettra d'exploiter pleinement mes compétences et de contribuer de manière significative.
            </p>
        </div>
    )
}

export default function Concernent(){
    return(
        <div className="xl:mx-12 max-sm:px-6 max-sm:grid max-sm:place-items-center sm:max-md:px-12 sm:max-md:grid sm:max-md:place-items-center md:max-lg:grid md:max-lg:place-items-center md:max-lg:px-12 lg:max-xl:grid lg:max-xl:px-12 lg:max-xl:place-items-center">
            <Competence/>
        </div>
    )
}