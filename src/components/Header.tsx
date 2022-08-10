import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="shadow-md py-6">
            <div className="px-10 mx-auto flex justify-between">
                <Link to={"/"}>
                    <h3 className="font-extrabold">Where in the world?</h3>
                </Link>
                <div className="flex items-center space-x-3 text-sm">
                    <FontAwesomeIcon icon={faMoon} />
                    <p>Dark Mode</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;