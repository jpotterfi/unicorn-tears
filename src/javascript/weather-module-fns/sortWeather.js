import { convertTemp } from "../conversion-module-fns/convertTemp";
import { timezoneToData } from "../time-date-functions/timezoneToData";
import { convertWeatherCodeToAdj } from "./convertWeatherCodeToAdj";
import { getWeatherImage } from "./getWeatherImage";

function sortWeather(weatherData) {
  let timezoneInfo = weatherData.timezone;
  let timezoneData = timezoneToData(timezoneInfo);
  // console.table(timezoneData);

  let cityInfo = weatherData.name;
  let countryInfo = weatherData.sys.country;
  let tempInfo = weatherData.main.temp;
  let weatherInfo = weatherData.weather[0].id;
  let weatherAdjective = convertWeatherCodeToAdj(weatherInfo);
  let localDateInfo = timezoneData.localDate;
  let localTimeInfo = timezoneData.localTime;
  let meridianInfo = timezoneData.meridian;
  let timeOfDayInfo = timezoneData.timeOfDay;
  let weatherImage = getWeatherImage(weatherAdjective, timeOfDayInfo);
  let formattedTimeInfo = timezoneData.formattedTime;
  let convertedTemperature = convertTemp(tempInfo);

  let info = {
    city: cityInfo,
    timezone: timezoneInfo,
    country: countryInfo,
    formattedLocation: cityInfo + ", " + countryInfo,
    temp: tempInfo,
    weather: weatherInfo,
    weatherAdj: weatherAdjective,
    weatherImg: weatherImage,
    localDate: localDateInfo,
    localTime: localTimeInfo,
    meridian: meridianInfo,
    timeOfDay: timeOfDayInfo,
    formattedTime: formattedTimeInfo,
    formattedWeather: weatherAdjective + " " + timeOfDayInfo,
    convertedTemp: convertedTemperature + "°",
  };
  // console.table(info);

  return info;
}

export { sortWeather };
