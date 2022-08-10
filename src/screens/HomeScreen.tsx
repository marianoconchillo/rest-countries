// Hook
import useCountries from "../hooks/useCountries";

// Components
import Card from "../components/Card";
import Loader from "../components/Loader";
import Search from "../components/Search";

const HomeScreen = () => {

    const { isLoading, countries } = useCountries();

    return (
        <>
            <Search />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid gap-y-5 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 md:gap-8 justify-between">
                    {
                        countries.map((country, idx) => {
                            return (
                                <div key={idx}>
                                    <Card country={country} />
                                </div>
                            )
                        })
                    }
                </div>
            )}
        </>
    );
}

export default HomeScreen;