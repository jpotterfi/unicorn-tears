import { displayError } from "./weather-module-fns/displayError";
import { displayInfo } from "./weather-module-fns/displayInfo";
import { getWeather } from "./weather-module-fns/getWeather";
import { sortWeather } from "./weather-module-fns/sortWeather";

async function weatherModule(location) {
  try {
    let weatherObj = await getWeather(location);
    let weatherInfo = sortWeather(weatherObj);
    displayInfo(weatherInfo);
  } catch (error) {
    displayError();
  }
}

export { weatherModule };
