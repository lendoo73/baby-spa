import {LanguageContext, useLanguage} from "../../context/useLanguage.js";
import {Globe} from "lucide-react";

const baseClass = "px-4 py-2 text-sm font-medium transition-all " +
    "focus:outline-none " +
    "className={`${baseClass}} ";

const class1 = "bg-blue-500 text-white shadow-md " +
    "dark:text-gray-200 "
;
const class2 = "text-gray-600 " +
    "dark:text-gray-400 " +
    "hover:bg-blue-50 "
;


export const LanguageToggle = () => {
    const {language, setLanguage, t} = useLanguage();


    return (
        <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5 text-blue-600
                dark:text-blue-400
            " />
            <div className="flex bg-white rounded-full shadow-md border border-gray-200 overflow-hidden
                dark:bg-gray-700
            ">
                <button
                    onClick={() => setLanguage("en")}
                    className={`${baseClass} ${language === "en" ? class1 : class2}`}
                >{t("english")}</button>
                <button
                    onClick={() => setLanguage("it")}
                    className={`${baseClass} ${language === "it" ? class1 : class2}`}
                >{t("italian")}</button>
            </div>
        </div>
    );
};