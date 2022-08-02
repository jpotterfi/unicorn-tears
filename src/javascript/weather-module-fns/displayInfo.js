import { compareDesc } from "date-fns";
import { getConversion } from "../conversion-module-fns/conversionModule";

function displayInfo(info) {
  console.table(info);

  let localDateAnchor = document.getElementById("info__date");
  let localTimeAnchor = document.getElementById("info__time");
  let locationAnchor = document.getElementById("info__location");
  let writtenWeatherAnchor = document.getElementById("info__written");
  let tempAnchor = document.getElementById("info__temp");
  let symbolAnchor = document.getElementById("symbol");
  let weatherImageAnchor = document.getElementById("weather-image");

  localDateAnchor.innerText = info.localDate;
  localTimeAnchor.innerText = info.formattedTime;
  locationAnchor.innerText = info.formattedLocation;
  writtenWeatherAnchor.innerText = info.formattedWeather;
  tempAnchor.innerText = info.convertedTemp;
  weatherImageAnchor.src = info.weatherImg;

  if (getConversion() == "fahrenheit") {
    symbolAnchor.innerText = "F";
  }
  if (getConversion() == "celsius") {
    symbolAnchor.innerText = "C";
  }

  ///dark mode light mode styling//
  let card = document.getElementById("card");

  if (info.timeOfDay == "evening" || info.timeOfDay == "night") {
    card.style.backgroundColor = "#020006";
    card.style.color = "white";
  }

  if (info.timeOfDay == "morning" || info.timeOfDay == "afternoon") {
    card.style.backgroundColor = "#f6f5fa";
    card.style.color = "black";
  }

  //have function that styles everything before appended
}
export { displayInfo };
