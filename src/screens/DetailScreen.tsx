import { Link, useLocation } from "react-router-dom";
import { Country } from "../interfaces/countryInterface";

const DetailScreen = () => {

    const { state } = useLocation();
    const country = state as Country;

    const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].official;
    const currencies = country.currencies[Object.keys(country.currencies)[0]].name;
    const languages = Object.keys(country.languages);

    return (
        <>
            <div className="py-8">
                <Link to={"/"}>
                    <button className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-gray-800 py-1 px-7 border border-gray-200 rounded shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        <span>Back</span>
                    </button>
                </Link>
            </div>

            <div className="py-6 sm:py-0">
                <div className="sm:grid sm:grid-cols-6">
                    <img className="w-full rounded" src={country.flags.png} alt="country" />
                    <>
                        <p className="font-extrabold text-3xl my-8 text-gray-800">{country.name.common}</p>
                        <div className="my-5 sm:my-0">
                            <p><span className="font-semibold text-gray-900">Native Name: </span>{nativeName}</p>
                            <p><span className="font-semibold text-gray-900">Population: </span>{country.population.toLocaleString()}</p>
                            <p><span className="font-semibold text-gray-900">Region: </span>{country.region}</p>
                            <p><span className="font-semibold text-gray-900">Sub Region: </span>{country.subregion}</p>
                            <p><span className="font-semibold text-gray-900">Capital: </span>{country.capital}</p>
                        </div>
                        <div className="my-5 sm:my-0">
                            <p><span className="font-semibold text-gray-900">Currency: </span>{currencies}</p>
                            <p><span className="font-semibold text-gray-900">Languages: </span>{languages.map((lan, idx) => <span key={idx}> {lan}{idx < (languages.length - 1) && ","}</span>)}</p>
                        </div>
                        <div>
                            <p className="text-xl font-semibold text-gray-900">Border Countries:</p>
                            <div className="flex my-3">
                                {country.borders?.map((border, idx) => {
                                    return (
                                        <span key={idx} className="inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{border}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
}

export default DetailScreen;