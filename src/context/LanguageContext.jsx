import {useState} from "react";
import {LanguageContext} from "./useLanguage.js";

const translations = {
    en: {
        english: "English",
        italian: "Italiano",
        navLinks: [
            "Mum & Baby Spa",
            "Baby Spa Experience",
            "Baby Massage",
            "First Birthday Celebrations",
            "Mum & Toddler",
            "Contact Us"
        ],
    },
    it: {
        english: "English",
        italian: "Italiano",
        navLinks: [
            "Spa per Mamma e Bambino",
            "Esperienza Spa per Bambini",
            "Massaggio per Bambini",
            "Feste per il Primo Compleanno",
            "Mamma e Bambino",
            "Contattaci"
        ],
    }
};

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en");

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            if (value === undefined || value === null) return key;

            // If key is numeric (array index)
            if (!isNaN(k)) {
                value = value[Number(k)];
            } else {
                value = value[k];
            }
        }

        return value ?? key;
    };


    return (
        <LanguageContext.Provider value={{language, setLanguage, t}}>
            {children}
        </LanguageContext.Provider>
    );
};