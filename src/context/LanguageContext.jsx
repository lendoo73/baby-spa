import {useState} from "react";
import {LanguageContext} from "./useLanguage.js";
import {translations} from "../content/translations.js";

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