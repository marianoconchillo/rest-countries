import { Link } from "react-router-dom";
import { Country } from "../interfaces/countryInterface";

interface props {
    country: Country
}

const Card = ({ country }: props) => {

    return (
        <Link to={`/details?country=${country.name.common}`} state={country}>
            <div className="shadow-lg min-h-full">
                <img className="w-full rounded" src={country.flags.png} alt="country" />
                <div className="px-6 py-4">
                    <p className="font-bold text-xl mb-2">{country.name.common}</p>
                    <ul>
                        <li><span className="font-bold">Population: </span>{country.population.toLocaleString()}</li>
                        <li><span className="font-bold">Region: </span>{country.region}</li>
                        <li><span className="font-bold">Capital: </span>{country.capital}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
}

export default Card;