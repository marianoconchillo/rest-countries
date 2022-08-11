import { useEffect, useState } from "react";
import { Country } from "../interfaces/countryInterface";
import restCountriesAPI from "../api/restCountriesAPI";

const useCountriesSearch = (name: string) => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [countries, setCountries] = useState<Country[]>([]);

    const getCountriesByName = async (name: string) => {
        const { data } = await restCountriesAPI.get<Country[]>(`/name/${name}`);
        setCountries(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getCountriesByName(name);
    }, []);

    return {
        isLoading,
        countries,
    }

}

export default useCountriesSearch;