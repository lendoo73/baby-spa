import {Moon, Sun, Menu, X} from "lucide-react";
import {useTheme} from "../../context/ThemeProvider.jsx";
import {useState} from "react";

export const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        {label: 'Mum & Baby Spa', target: 'mum-baby-spa'},
        {label: 'Baby Spa Experience', target: 'baby-spa-experience'},
        {label: 'Baby Massage', target: 'baby-massage'},
        {label: 'First Birthday Celebrations', target: 'first-birthday-celebrations'},
        {label: 'Mum & Toddler', target: 'mum-toddler'},
        {label: 'Contact Us', target: 'contact-us'},
    ];
    
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
                </div>
                <div className="flex justify-center items-center max-w-7xl mx-auto p-6">
                    <div className="hidden md:flex gap-6">
                        {navLinks.map(({label, target}) => (
                            <a
                                key={label}
                                href={`#${target}`}
                                className="transition hover:text-blue-500"
                            >
                                {label}
                            </a>
                        ))}
                        <button onClick={toggleTheme}>
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};