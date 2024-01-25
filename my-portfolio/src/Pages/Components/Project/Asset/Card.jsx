import React from "react"
import { Link } from "react-router-dom"
import LeQG from "../Picture/Capture.jpg"

export default function Card(){
    return(
        <div className="max-w-2xl mx-40 mt-12 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img className="object-cover w-full h-64" src={LeQG} alt="LeQG"/>

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 font-Kalam uppercase dark:text-blue-400">Projet</span>
                    <Link href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 font-Marker hover:underline" tabindex="0">Website QG</Link>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-Kalam">Un amis possède une boite de développement web au agence web m'a suggéré de faire un test de la création d'un interface web d'un restaurant. Mon role était d'effectuer le front et intégrateur</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar"/>
                            <Link href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0">Jone Doe</Link>
                        </div>
                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                    </div>
                </div>
            </div>
        </div>
    )
}