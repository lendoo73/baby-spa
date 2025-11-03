import './App.css'
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {ThemeProvider} from "./context/ThemeProvider.jsx";
import {MumAndBabySpa} from "./components/MumAndBabySpa/MumAndBabySpa.jsx";
import {BabySpaExperience} from "./components/BabySpaExperience/BabySpaExperience.jsx";
import {BabyMassage} from "./components/BabyMassage/BabyMassage.jsx";
import {FirstBirthdayCelebrations} from "./components/FirstBirthdayCelebrations/FirstBirthdayCelebrations.jsx";
import {MumAndToddler} from "./components/MumAndToddler/MumAndToddler.jsx";
import {ContactUs} from "./components/ContactUs/ContactUs.jsx";
import {LanguageProvider} from "./context/LanguageContext.jsx";
import {useLanguage} from "./context/useLanguage.js";

// https://www.littlebabyluxespa.co.uk

// const LanguageTest = () => {
//     const {language, setLanguage, t} = useLanguage();
//
//     return (
//         <div className="p-6 space-y-4">
//             <h1 className="text-2xl font-bold">{t("navLinks.1")}</h1>
//             <p>Current language: {language}</p>
//             <div className="space-x-2">
//                 <button
//                     onClick={() => setLanguage("en")}
//                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                 >English</button>
//                 <button
//                     onClick={() => setLanguage("it")}
//                     className="bg-pink-500 text-white px-4 py-2 rounded"
//                 >Italy</button>
//             </div>
//         </div>
//     );
// };

export const App = () => {
    
    return (
        <ThemeProvider>
            <LanguageProvider>
                <div
                    className="
                    bg-white text-gray-900
                    dark:bg-gray-900 dark:text-white
                    "
                >
                    <Navbar />
                    <div id="mum-baby-spa">
                        <MumAndBabySpa />
                        {/*<LanguageTest />*/}
                    </div>
                    <div id="baby-spa-experience"><BabySpaExperience /></div>
                    <div id="baby-massage"><BabyMassage /></div>
                    <div id="first-birthday-celebrations"><FirstBirthdayCelebrations /></div>
                    <div id="mum-toddler"><MumAndToddler /></div>
                    <div id="contact-us"><ContactUs /></div>
                </div>
            </LanguageProvider>
        </ThemeProvider>
    );
};