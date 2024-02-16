import { useTranslation } from "react-i18next"

const lngs = [
    {
        code: "fr", native: "french"
    },
    {
        code: "en", native: "english"
    }
];

export default function Lang(){
    const { t, i18n } = useTranslation();
    const handleTrans = (code) => {
        i18n.changeLanguage(code);
      };
    return(
        <div>
            {lngs.map((lng, i) => {
            const { code, native } = lng;
            return <button onClick={() => handleTrans(code)}>{native}</button>;
            })}
        </div>
    )
}