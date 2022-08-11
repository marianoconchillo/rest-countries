import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <form className="py-12" onSubmit={submitHandler}>
            <label className="relative block md:w-1/3">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input className="placeholder:text-slate-400 block w-full border border-darkGray rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for a country ..." type="text" name="keyword"
                    onChange={submitHandler} />
            </label>
        </form>
    );
}

export default Search;