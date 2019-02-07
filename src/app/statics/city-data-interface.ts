export interface WeatherData {
    readonly main?: string;
    readonly description?: string;
    readonly icon?: string;
}

export interface SingleCityData {
    readonly weather: WeatherData[];
    readonly main: {
        readonly temp: number;
    };
    readonly wind: {
        readonly speed: number;
        readonly deg: number;
    };
}

export interface CityForecastData extends SingleCityData {
    readonly dt: number;
    readonly time?: string;
}
