import { useEffect, useState } from "react"
import { Listbox, Transition } from '@headlessui/react'
import { useTranslation } from "react-i18next"

const lngs = [
    {
        id:1 ,code: "fr", native: "french"
    },
    {
        id:2 ,code: "en", native: "english"
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
        <Listbox value={Language} onChange={setLanguage}>
            <Listbox.Button>{Language ? Language.native : ""}</Listbox.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Listbox.Options>
                {lngs.map((lng, i) => {
                const { code, native } = lng;
                return(
                    <Listbox.Option key={i} onClick={() => handleTrans(code)}>{native}</Listbox.Option>
                )
                })}
                </Listbox.Options>
            </Transition>
        </Listbox>
    )
}