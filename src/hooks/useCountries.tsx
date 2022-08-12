import { useCallback, useEffect, useState } from "react";
import { Country, Region } from "../interfaces/countryInterface";
import restCountriesAPI from "../api/restCountriesAPI";

const useCountries = () => {

    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [countries, setCountries] = useState<Country[]>([]);

    const getCountries = async () => {
        const { data } = await restCountriesAPI.get<Country[]>("/all?fields=name,population,capital,region,nativeName,subregion,currencies,languages,borders,flags");
        setCountries(data);
        setIsLoading(false);
    };

    const getCountriesByName = useCallback(
        async (name: string) => {
            const regex = /^[aA-zZ\s]+$/;
            try {
                if (name !== "" && regex.test(name)) {
                    const { data } = await restCountriesAPI.get<Country[]>(`/name/${name}`);
                    setCountries(data)
                } else {
                    getCountries();
                }
            } catch (error) {
                setCountries([]);
            }
        }, []
    );


    const getCountriesByRegion = async (region: Region) => {
        const { data } = await restCountriesAPI.get<Country[]>(`/region/${region}`);
        setCountries(data);
    }


    useEffect(() => {
        getCountries();
    }, []);

    return {
        isLoading,
        countries,
        getCountriesByName,
        getCountriesByRegion
    }

}

export default useCountries;