import RainPM from "../../night/rain.svg";
import ClearPM from "../../night/clear.svg";
import SnowPM from "../../night/snow.svg";
import DrizzlePM from "../../night/drizzle.svg";
import ThunderPM from "../../night/thunder.svg";
import OtherPM from "../../night/other.svg";
import CloudPM from "../../night/cloud.svg";
import RainAM from "../../day/rain.svg";
import ClearAM from "../../day/clear.svg";
import SnowAM from "../../day/snow.svg";
import DrizzleAM from "../../day/drizzle.svg";
import ThunderAM from "../../day/thunder.svg";
import OtherAM from "../../day/other.svg";
import CloudAM from "../../day/cloud.svg";

// const locationHolder = document.getElementById("svg-holder");
// locationHolder.appendChild(locationSVG);

function getWeatherImage(adjective, timeOfDay) {
  const weatherSVG = new Image();

  if (timeOfDay == "morning" || timeOfDay == "afternoon") {
    if (adjective == "Thundery") {
      weatherSVG.src = ThunderAM;
    } else if (adjective == "Drizzling") {
      weatherSVG.src = DrizzleAM;
    } else if (adjective == "Rainy") {
      weatherSVG.src = RainAM;
    } else if (adjective == "Snowy") {
      weatherSVG.src = SnowAM;
    } else if (adjective == "Clear") {
      weatherSVG.src = ClearAM;
    } else if (adjective == "Cloudy") {
      weatherSVG.src = CloudAM;
    } else {
      weatherSVG.src = OtherAM;
    }
  }
  if (timeOfDay == "evening" || timeOfDay == "night") {
    if (adjective == "Thundery") {
      weatherSVG.src = ThunderPM;
    } else if (adjective == "Drizzling") {
      weatherSVG.src = DrizzlePM;
    } else if (adjective == "Rainy") {
      weatherSVG.src = RainPM;
    } else if (adjective == "Snowy") {
      weatherSVG.src = SnowPM;
    } else if (adjective == "Clear") {
      weatherSVG.src = ClearPM;
    } else if (adjective == "Cloudy") {
      weatherSVG.src = CloudPM;
    } else {
      weatherSVG.src = OtherPM;
    }
  }
  return weatherSVG.src;
}
export { getWeatherImage };

// function convertWeatherCodeToAdj(code) {
//     if (code >= 200 && code <= 232) {
//       return "Thundery";
//     }
//     if (code >= 300 && code <= 321) {
//       return "Drizzling";
//     }
//     if (code >= 500 && code <= 531) {
//       return "Rainy";
//     }
//     if (code >= 600 && code <= 622) {
//       return "Snowy";
//     }
//     if (code == 701) {
//       return "Misty";
//     }
//     if (code == 711) {
//       return "Smoky";
//     }
//     if (code == 721) {
//       return "Hazy";
//     }
//     if (code == 731) {
//       return "Dusty";
//     }
//     if (code == 741) {
//       return "Foggy";
//     }
//     if (code == 781) {
//       return "Tornadic";
//     }
//     if (code == 800) {
//       return "Clear";
//     }
//     if (code >= 801 && code <= 804) {
//       return "Cloudy";
//     }
//   }
