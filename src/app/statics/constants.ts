export enum WeatherConditions {
    Cloudy = 'cloudy',
    Sunny = 'sunny',
    Lightning = 'lightning',
    Partly = 'partly',
    Rainy = 'rainy',
    Foggy = 'foggy',
    Snowy = 'snowy'
}

export const WeatherConditionCodesOpenWeatherMap = {
    '11d': WeatherConditions.Lightning,
    '11n': WeatherConditions.Lightning,
    '13d': WeatherConditions.Snowy,
    '13n': WeatherConditions.Snowy,
    '50d': WeatherConditions.Foggy,
    '50n': WeatherConditions.Foggy,
    '10n': WeatherConditions.Rainy,
    '10d': WeatherConditions.Rainy,
    '09d': WeatherConditions.Rainy,
    '09n': WeatherConditions.Rainy,
    '03d': WeatherConditions.Cloudy,
    '03n': WeatherConditions.Cloudy,
    '04d': WeatherConditions.Cloudy,
    '04n': WeatherConditions.Cloudy,
    '02d': WeatherConditions.Partly,
    '02n': WeatherConditions.Partly,
    '01d': WeatherConditions.Sunny,
    '01n': WeatherConditions.Sunny
};
