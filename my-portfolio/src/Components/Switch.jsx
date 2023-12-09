import React from "react"
import Theme from "../Context/Theme"

export default function Switch(){
    const {currentTheme, changeCurrentTheme} = React.useContext(Theme);
    return(
        <>
        <div className="absolute sm:max-md:absolute sm:max-md:right-0 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="w-[40px] cursor-pointer h-[28px] p-[2px] flex justify-between items-center border border-neutral-500 dark:bg-slate-900 bg-zinc-300 rounded-[30px] relative" onClick={() => changeCurrentTheme(currentTheme === 'dark' ? ' ' : 'dark')}>
                <div className={`w-[15px] absolute h-[15px] ${currentTheme === 'dark' ? 'right-[10%]' : 'left-[10%]'} bg-indigo-950 dark:bg-white duration-200 rounded-full`}></div>
            </button>
        </div>
        </>
    )
}