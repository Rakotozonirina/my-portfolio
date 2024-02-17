import { useEffect, useState } from "react"
import { Listbox, Transition } from '@headlessui/react'
import { useTranslation } from "react-i18next"

const lngs = [
    {
        id:1 ,code: "fr", native: "french"
    },
    {
        id:2 ,code: "en", native: "english"
    },
    {
        id:3 ,code: "mg", native: "malagasy"
    }
];

export default function Lang(){
    const [Language, setLanguage] = useState(lngs[0]);
    const { t, i18n } = useTranslation();
    useEffect(
        () => {
            setLanguage(lngs.find((lng) => lng.code === i18n.language) || lngs[0]);
        }, [i18n.language]
    )
    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };
    return(
        <Listbox value={Language} onChange={setLanguage} as="div" className="max-md:absolute max-md:right-16 md:relative">
            <Listbox.Button as="button" className="px-4 py-2 mx-4 dark:bg-gray-700 dark:text-[#E0F4FF] rounded">{Language ? Language.native : ""}</Listbox.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Listbox.Options as="ul" className="px-8 py-2 bg-[#E0F4FF] rounded absolute top-[100%]">
                {lngs.map((lng, i) => {
                const { code, native } = lng;
                return(
                    <Listbox.Option as="li" className="cursor-pointer py-2 mb-1 hover:font-semibold" key={i} onClick={() => handleTrans(code)}>{native}</Listbox.Option>
                )
                })}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}