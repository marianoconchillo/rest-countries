import { useEffect, useState } from "react";
import { Country } from "../interfaces/countryInterface";
import restCountriesAPI from "../api/restCountriesAPI";

const useCountries = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [countries, setCountries] = useState<Country[]>([]);

    const getCountries = async () => {
        const { data } = await restCountriesAPI.get<Country[]>("/all?fields=name,population,capital,region,nativeName,subregion,currencies,languages,borders,flags");
        setCountries(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getCountries();
    }, []);

    return {
        isLoading,
        countries,
    }

}

export default useCountries;