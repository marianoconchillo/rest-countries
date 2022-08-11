import axios from "axios";

const restCountriesAPI = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
});

export default restCountriesAPI;