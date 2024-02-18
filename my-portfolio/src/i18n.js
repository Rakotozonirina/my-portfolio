import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            "acceuil": "home",
            "Sur_moi": "on_me",
            "Projet": "project",
            "Reconnaissance": "testimonial",
            "Contact":"contact",
            "Profession1": "WEB INTEGRATOR AND",
            "Profession2": "FRONT END DEVELOPER",
            "Bonjour": "Hi!",
            "Jesuis": "I am",
        }
    },
    fr: {
        translation: {
            "acceuil": "acceuil",
            "Sur_moi": "sur_moi",
            "Projet": "projet",
            "Reconnaissance":"témoignage",
            "Contact":"contact",
            "Profession1": "INTEGRATEUR WEB ET",
            "Profession2": "FRONT END DEVELOPPEUR",
            "Bonjour": "Salut!",
            "Jesuis": "Je suis",
        }
    },
    mg: {
        translation: {
            "acceuil": "tongasoa",
            "Sur_moi": "amiko",
            "Projet": "tetikasa",
            "Reconnaissance":"fijoroana_ho_vavolombelona",
            "Contact":"fifandraisana",
            "Profession1": "WEB INTEGRATOR SY",
            "Profession2": "DEVELOPER FRONT END",
            "Bonjour": "Salama!",
            "Jesuis": "Izaho dia",
        }
    }
};

i18n
.use(initReactI18next)
.init(
    {
        resources,
        lng: "fr",
        interpolation: {
            escapeValue: false 
        }
    }
)

export default i18n;