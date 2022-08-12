import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="shadow-md py-6">
            <div className="px-10 mx-auto flex justify-between">
                <Link to={"/"}>
                    <h3 className="font-extrabold">Where in the world?</h3>
                </Link>
                <div className="flex items-center space-x-3 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <p>Dark Mode</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;