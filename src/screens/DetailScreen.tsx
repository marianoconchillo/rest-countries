import { useContext } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../components/BackButton";
import { ThemeContext } from "../context/ThemeContext";
import { Country } from "../interfaces/countryInterface";

const DetailScreen = () => {

    const { theme: { navBackground } } = useContext(ThemeContext);
    const { state } = useLocation();
    const country = state as Country;

    const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].official;
    const currencies = country.currencies[Object.keys(country.currencies)[0]].name;
    const languages = Object.keys(country.languages);

    return (
        <>

            <BackButton />

            <div className="py-6 md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-6">
                <img className="rounded min-h-full" src={country.flags.png} alt="country" />

                <div className="lg:flex lg:flex-col lg:justify-between lg:py-4 lg:mr-12">
                    <p className="font-extrabold text-3xl my-8 lg:my-0">{country.name.common}</p>
                    <div className="lg:flex lg:justify-between">
                        <div className="my-5">
                            <p><span className="font-semibold leading-7">Native Name: </span>{nativeName}</p>
                            <p><span className="font-semibold leading-7">Population: </span>{country.population.toLocaleString()}</p>
                            <p><span className="font-semibold leading-7">Region: </span>{country.region}</p>
                            <p><span className="font-semibold leading-7">Sub Region: </span>{country.subregion}</p>
                            <p><span className="font-semibold leading-7">Capital: </span>{country.capital}</p>
                        </div>
                        <div className="my-5">
                            <p><span className="font-semibold leading-5">Currency: </span>{currencies}</p>
                            <p><span className="font-semibold leading-5">Languages: </span>{languages.map((lan, idx) => <span key={idx}> {lan}{idx < (languages.length - 1) && ","}</span>)}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-semibold inline">Border Countries:</p>
                        <div className="flex my-3 lg:flex-row lg:inline lg:ml-4">
                            {country.borders?.map((border, idx) => {
                                return (
                                    <span
                                        key={idx}
                                        className="inline-block rounded px-6 py-1 text-base font-semibold mr-2 mb-2 shadow"
                                        style={{ backgroundColor: navBackground }}
                                    >{border}</span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailScreen;