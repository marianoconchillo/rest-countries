import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const BackButton = () => {

    const { theme: { navBackground } } = useContext(ThemeContext);

    return (
        <div className="py-8">
            <Link to={"/"}>
                <button
                    className="flex items-center space-x-2 hover:bg-gray-100 py-2 px-7 borderrounded shadow"
                    style={{ backgroundColor: navBackground }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <span>Back</span>
                </button>
            </Link>
        </div>
    );
}

export default BackButton;