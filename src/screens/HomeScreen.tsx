import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// Hook
import useCountries from "../hooks/useCountries";

// Components
import Card from "../components/Card";
import Loader from "../components/Loader";

const HomeScreen = () => {

    const { isLoading, countries, getCountriesByName } = useCountries();

    const submitHandler = (e: any) => {
        e.preventDefault();
        getCountriesByName(e.target.value);
    }

    return (
        <>

            <form className="py-12" onSubmit={submitHandler}>
                <label className="relative block md:w-1/3">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                    <input
                        className="placeholder:text-slate-400 block w-full border border-darkGray rounded-md py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for a country ..."
                        type="text"
                        name="keyword"
                        onChange={submitHandler}
                    />
                </label>
            </form>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid gap-y-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
                    {countries.map((country, idx) => {
                        return (
                            <div key={idx}>
                                <Card country={country} />
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default HomeScreen;
