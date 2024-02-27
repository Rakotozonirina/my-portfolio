import React from "react"
import { FaFaceGrinBeamSweat } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function Oops(){
    const { t, i18n } = useTranslation();
    return(
        <div className="w-full h-[100dvh] grid place-items-center">
            <div className="w-64 p-4 py-6 bg-white shadow-lg rounded-2xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="relative w-24 h-24 bg-red-200 rounded-full">
                        
                        <FaFaceGrinBeamSweat className="absolute w-8 h-8 text-gray-800 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
                    </div>
                    <p className="mt-4 mb-4 text-xl font-medium text-gray-800">
                        Page Not Found:
                    </p>
                    <p className="px-2 text-xs text-center text-gray-400">
                        We couldn’t find the page you’re looking for. Please verify the URL and <Link to="/" className="font-semibold text-gray-800">try again</Link>.
                    </p>
                </div>
            </div>
        </div>
    )
}