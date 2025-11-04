import {Moon, Sun, Menu, X} from "lucide-react";
import {useTheme} from "../../context/ThemeProvider.jsx";
import {useState} from "react";
import {LanguageToggle} from "./LanguageToggle.jsx";
import {useLanguage} from "../../context/useLanguage.js";

export const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navLabels = t("navLinks");

    const navTargets = [
        "mum-baby-spa",
        "baby-spa-experience",
        "baby-massage",
        "first-birthday-celebrations",
        "mum-toddler",
        "contact-us",
    ];

    const navLinks = navLabels.map((label, i) => ({
        label,
        target: navTargets[i],
    }));
    
    return (
        <nav
            className="
                bg-white
                dark:bg-gray-900 dark:text-white
                fixed top-0 left-0 right-0 z-50 shadow-md
            "
        >
            <div>
                <div
                    className="flex justify-center items-center p-6"
                >
                    <img
                        className="h-20 w-auto rounded-full"
                        src="/baby-spa.jpg"
                        alt="Baby Spa Logo"
                    />
                    <div className="absolute right-6">
                        <button
                            className="md:hidden"
                            onClick={() => setMenuOpen(prev => !prev)}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                        <div className="hidden items-center gap-4
                            md:flex
                        ">
                            <LanguageToggle />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-center items-center max-w-7xl mx-auto py-4 gap-4">
                    {navLinks.map(({ label, target }) => (
                        <a
                            key={label}
                            href={`#${target}`}
                            className="transition hover:text-blue-500"
                        >
                            {label}
                        </a>
                    ))}
                    <button onClick={toggleTheme}>
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-4">
                    {navLinks.map(({ label, target }) => (
                        <a
                            key={label}
                            href={`#${target}`}
                            className="transition hover:text-blue-500"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </a>
                    ))}
                    <button onClick={toggleTheme}>
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <div className="flex items-center gap-4">
                        <LanguageToggle />
                    </div>
                </div>
            )}
        </nav>
    );
};