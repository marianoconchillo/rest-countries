import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface props {
    getCountriesByName: (searchValue: string) => void;
}

const Search = ({ getCountriesByName }: props) => {

    const { theme: { navBackground, currentTheme, text } } = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        getCountriesByName(searchValue);
    }, [searchValue, getCountriesByName]);

    return (
        <form className="w-3/4">
            <label className="relative block md:w-1/2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={text} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    className={`
                    block w-full rounded-md py-3 pl-12 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm
                    ${currentTheme === "dark" ? "placeholder-white" : "placeholder-black"}`}
                    placeholder="Search for a country ..."
                    type="text"
                    name="keyword"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    style={{ background: navBackground }}
                />
            </label>
        </form>
    );
}

export default Search;