import {Navbar} from "./components/Navbar/Navbar.jsx";
import {ThemeProvider} from "./context/ThemeProvider.jsx";
import {MumAndBabySpa} from "./components/MumAndBabySpa/MumAndBabySpa.jsx";

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
            </div>
        </ThemeProvider>
    );
};