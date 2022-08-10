import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
    return (
        <nav className="shadow-md py-6">
            <div className="container px-6 mx-auto flex justify-between">
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