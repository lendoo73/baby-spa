import './App.css'
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {ThemeProvider} from "./context/ThemeProvider.jsx";
import {MumAndBabySpa} from "./components/MumAndBabySpa/MumAndBabySpa.jsx";
import {BabySpaExperience} from "./components/BabySpaExperience/BabySpaExperience.jsx";
import {BabyMassage} from "./components/BabyMassage/BabyMassage.jsx";
import {FirstBirthdayCelebrations} from "./components/FirstBirthdayCelebrations/FirstBirthdayCelebrations.jsx";
import {MumAndToddler} from "./components/MumAndToddler/MumAndToddler.jsx";
import {ContactUs} from "./components/ContactUs/ContactUs.jsx";

// https://www.littlebabyluxespa.co.uk

export const App = () => {
    
    return (
        <ThemeProvider>
            <div
                className="
                bg-white text-gray-900
                dark:bg-gray-900 dark:text-white
                "
            >
                <Navbar />
                <div id="mum-baby-spa"><MumAndBabySpa /></div>
                <div id="baby-spa-experience"><BabySpaExperience /></div>
                <div id="baby-massage"><BabyMassage /></div>
                <div id="first-birthday-celebrations"><FirstBirthdayCelebrations /></div>
                <div id="mum-toddler"><MumAndToddler /></div>
                <div id="contact-us"><ContactUs /></div>
            </div>
        </ThemeProvider>
    );
};