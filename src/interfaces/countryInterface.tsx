
export interface Country {
    name: Name;
    population: number;
    region: Region;
    capital?: string;
    nativeName: string;
    subregion: string;
    topLevelDomain: string[];
    currencies?: Currency[];
    languages: Language[];
    borders?: string[];
    flags: CoatOfArms;
}

export interface Name {
    common: string;
    official: string;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1?: string;
    iso639_2: string;
    name: string;
    nativeName?: string;
}

enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    AntarcticOcean = "Antarctic Ocean",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
    Polar = "Polar",
}

interface CoatOfArms {
    png?: string;
    svg?: string;
}

