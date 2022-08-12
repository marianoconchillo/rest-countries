import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

enum Theme {
    "lightTheme",
    "darkTheme"
}

const Header = () => {

    const { theme: { currentTheme, navBackground, text }, setDarkTheme, setLightTheme } = useContext(ThemeContext);

    const handleClick = () => {
        if (currentTheme == "light") {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }

    return (
        <nav
            className="shadow-md py-6"
            style={{ backgroundColor: navBackground, color: text }}
        >
            <div className="px-10 mx-auto flex justify-between">
                <Link to={"/"}>
                    <h3 className="font-extrabold">Where in the world?</h3>
                </Link>

                <button className="flex items-center space-x-3 text-sm" onClick={handleClick}>

                    {
                        currentTheme == "light" ? (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                                <p>Dark Mode</p>
                            </>
                        ) : (

                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                                <p>Light Mode</p>
                            </>
                        )
                    }


                </button>
            </div>
        </nav>
    );
}

export default Header;