import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Search from "../components/Search";
import useCountriesSearch from "../hooks/useCountriesSearch";

const ResultScreen = () => {

    const search = useLocation().search;
    const keyword = new URLSearchParams(search).get('keyword') || "";

    const { isLoading, countries } = useCountriesSearch(keyword);

    return (
        <>
            <Search />
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid gap-y-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
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

export default ResultScreen;