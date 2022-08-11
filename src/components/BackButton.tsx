import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <div className="py-8">
            <Link to={"/"}>
                <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-800 py-1 px-7 border border-gray-200 rounded shadow">
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