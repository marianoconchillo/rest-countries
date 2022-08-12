
export interface Country {
    flags: Flags;
    name: Name;
    currencies: { [key: string]: Currency };
    capital: string[];
    region: Region;
    subregion: string;
    languages: { [key: string]: string };
    borders: string[];
    population: number;
}

interface Currency {
    name: string;
    symbol: string;
}

interface Flags {
    png: string;
    svg: string;
}

interface Name {
    common: string;
    official: string;
    nativeName: { [key: string]: NativeName };
}

interface NativeName {
    official: string;
    common: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}
