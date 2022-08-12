import { useEffect, useState } from "react";

interface props {
    getCountriesByName: (searchValue: string) => void;
}

const Search = ({ getCountriesByName }: props) => {

    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        getCountriesByName(searchValue);
        console.log("hola")
    }, [searchValue, getCountriesByName]);

    return (
        <form className="w-3/4">
            <label className="relative block md:w-1/2">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#858585" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    className="placeholder:text-slate-400 block w-full border border-darkGray rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                    placeholder="Search for a country ..."
                    type="text"
                    name="keyword"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </label>
        </form>
    )

}

export default Search;