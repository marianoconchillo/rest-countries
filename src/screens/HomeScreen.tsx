// Hook
import useCountries from "../hooks/useCountries";

// Components
import Card from "../components/Card";
import Loader from "../components/Loader";
import Search from "../components/Search";
import FilterByRegion from "../components/FilterByRegion";

const HomeScreen = () => {

    const { isLoading, countries, getCountriesByName, getCountriesByRegion } = useCountries();


    return (
        <>
            <div className="py-12 sm:flex sm:justify-between">
                <Search getCountriesByName={getCountriesByName} />
                <FilterByRegion getCountriesByRegion={getCountriesByRegion} />
            </div>

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
