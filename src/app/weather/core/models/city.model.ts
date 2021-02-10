import { Polluant } from "./polluant.model";
import { Weather } from "./weather.model";

export class City {
    cityName: string;
    inseeCode: string;
    population: number;
    state: string;
    department: string;
    weathers: Weather[];
    polluants: Polluant[];
    longitude: number;
    latitude: number;
}