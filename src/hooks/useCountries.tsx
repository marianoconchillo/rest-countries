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

    const getCountriesByName = async (name: string) => {
        try {
            if (name !== "") {
                const { data } = await restCountriesAPI.get<Country[]>(`/name/${name}`);
                setCountries(data);
            } else {
                getCountries();
            }
        } catch (error) {
            setCountries([]);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return {
        isLoading,
        countries,
        getCountriesByName,
    }

}

export default useCountries;