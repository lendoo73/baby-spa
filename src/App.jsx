import {Navbar} from "./components/Navbar/Navbar.jsx";
import {ThemeProvider} from "./context/ThemeProvider.jsx";

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
            </div>
        </ThemeProvider>
    );
};