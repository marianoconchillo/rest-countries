import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    return (
        <div className="p-6 md:px-14">
            <label className="relative block md:w-1/3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input className="placeholder:text-slate-400 block w-full border border-darkGray rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a country ..." type="text" name="search" />
            </label>
        </div>
    );
}

export default Search;