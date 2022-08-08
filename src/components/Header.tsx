import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
    return (
        <nav className="p-6 md:px-14 w-full mx-auto shadow-md">
            <div className="flex justify-between">
                <h3 className="font-extrabold">Where in the world?</h3>
                <div className="flex items-center space-x-3 text-sm">
                    <FontAwesomeIcon icon={faMoon} />
                    <p>Dark Mode</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;