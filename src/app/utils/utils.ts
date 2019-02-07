import { WeatherConditionCodesOpenWeatherMap } from '../statics/constants';
import { CityForecastData } from '../statics/city-data-interface';

export function roundToNearHalf(num: number): number {
    return Math.round(num * 2) / 2;
}

export function getWeatherIconEnum(conditionIconCode: string): string {
    if (WeatherConditionCodesOpenWeatherMap[conditionIconCode]) {
        return WeatherConditionCodesOpenWeatherMap[conditionIconCode];
    }
    return '';
}

export function groupByDate(forecastData: CityForecastData[]): any {
    const groupedByDate = {};
    forecastData.forEach(forecast => {
        // Conversion of unix requires multplies 1000
        const forecastDate = new Date(forecast.dt * 1000);
        const dateKeyString = ('0' + forecastDate.getDate()).slice(-2) + '.'
            + ('0' + (forecastDate.getMonth() + 1)).slice(-2) + '.'
            + forecastDate.getFullYear();
        if (!groupedByDate[dateKeyString]) {
            groupedByDate[dateKeyString] = [];
        }
        groupedByDate[dateKeyString].push({
            time: ('0' + forecastDate.getUTCHours()).slice(-2) + ':00',
            ...forecast
        });
    });
    return groupedByDate;
}

export function getKeys(source: object): string[] {
    return Object.keys(source);
}
