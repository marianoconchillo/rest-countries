import { useState } from "react";
import { Region } from "../interfaces/countryInterface";

interface props {
    getCountriesByRegion: (region: Region) => void;
}

const FilterByRegion = ({ getCountriesByRegion }: props) => {

    const [region, setRegion] = useState<Region>();

    const handleChange = (e: any) => {
        e.preventDefault();
        if (Object.values(Region).includes(e.target.value)) {
            getCountriesByRegion(e.target.value);
        }
    }

    return (
        <div>
            <select
                className="border-darkGray bg-white py-3 px-4 rounded shadow focus:outline-none"
                value={region}
                onChange={handleChange}
            >
                <option>Filter By Region</option>
                <option>{Region.Africa}</option>
                <option>{Region.Americas}</option>
                <option>{Region.Asia}</option>
                <option>{Region.Europe}</option>
                <option>{Region.Oceania}</option>
            </select>
        </div>
    );
}

export default FilterByRegion;