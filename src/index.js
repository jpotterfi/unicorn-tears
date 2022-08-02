import "./style.css";
import { weatherModule } from "./javascript/weatherModule";
import { add, getTime, sub } from "date-fns";
import {
  getConversion,
  setConversion,
} from "./javascript/conversion-module-fns/conversionModule";

setConversion("fahrenheit");
weatherModule("Tokyo");
let currentLocation = "tokyo";

let symbol = document.getElementById("symbol");
symbol.addEventListener("click", function () {
  if (getConversion() == "fahrenheit") {
    setConversion("celsius");
    weatherModule(currentLocation);
  } else if (getConversion() == "celsius") {
    setConversion("fahrenheit");
    weatherModule(currentLocation);
  }
});

let searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keyup", function onEvent(e) {
  if (e.key === "Enter") {
    console.log(searchbar.value);
    currentLocation = searchbar.value;
    weatherModule(searchbar.value);
  }
});

///////////////////

// function getUTCHour() {
//   function addZero(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
//   }
//   const d = new Date();
//   let h = addZero(d.getUTCHours());
//   h = h.toString();
//   let m = addZero(d.getUTCMinutes());
//   m = m.toString();
//   let time = h + m;
//   time = parseInt(time);
//   return time;
// }

// function getTimeOfDay(val) {
//   if (val > 559 && val < 1159) {
//     return "morning";
//   }
//   if (val > 1159 && val < 1759) {
//     return "afternoon";
//   }
//   if (val > 1759 && val < 2059) {
//     return "evening";
//   }
//   if (val > 2059 || val < 559) {
//     return "night";
//   }
// }

// function getMeridian(val) {
//   if (val < 1200 || val == 2400) {
//     return "AM";
//   } else {
//     return "PM";
//   }
// }

// function formatTime(time) {
//   time = time.toString();
//   let length = time.length;
//   if (length === 3) {
//     let hour = time.slice(0, 1);
//     hour = hour + ":";
//     let minutes = time.slice(1, 3);
//     let formattedTime = hour + minutes;
//     return formattedTime;
//   }
//   if (length === 4) {
//     let hour = time.slice(0, 2);
//     if (hour > 12) {
//       hour = hour - 12;
//     }
//     hour = hour + ":";
//     let minutes = time.slice(2, 4);
//     let formattedTime = hour + minutes;
//     return formattedTime;
//   }
// }

// function offsetTZ(timezone) {
//   //-36000
//   let time = getUTCHour();
//   console.log("UTC time is" + time);
//   let offset = timezone / 36; //-10
//   console.log("offset is " + offset);
//   let newTime = time + offset; //4:31
//   console.log("UTC time + offset is " + newTime);
//   let datetimeObj = {
//     localDate: "",
//     localTime: "",
//     timeOfDay: "",
//     meridian: "",
//     formattedTime: "",
//   };

//   if (newTime > 2400) {
//     let date = new Date();
//     date = add(date, {
//       days: 1,
//     });
//     newTime = newTime - 2400;
//     datetimeObj.localDate = date;
//     datetimeObj.localTime = newTime;
//     datetimeObj.timeOfDay = getTimeOfDay(newTime);
//     datetimeObj.meridian = getMeridian(newTime);
//     datetimeObj.formattedTime =
//       formatTime(newTime) + " " + getMeridian(newTime);
//   } else if (newTime < 0) {
//     let date = new Date();
//     date = sub(date, {
//       days: 1,
//     });
//     newTime = newTime + 2400;
//     datetimeObj.localDate = date;
//     datetimeObj.localTime = newTime;
//     datetimeObj.timeOfDay = getTimeOfDay(newTime);
//     datetimeObj.meridian = getMeridian(newTime);
//     datetimeObj.formattedTime =
//       formatTime(newTime) + " " + getMeridian(newTime);
//   } else {
//     let date = new Date();
//     datetimeObj.localDate = date;
//     datetimeObj.localTime = newTime;
//     datetimeObj.timeOfDay = getTimeOfDay(newTime);
//     datetimeObj.meridian = getMeridian(newTime);
//     datetimeObj.formattedTime =
//       formatTime(newTime) + " " + getMeridian(newTime);
//   }
//   return datetimeObj;
// }

// //console.log(formatTime(1331));

// console.log(offsetTZ(32400));
// //san fransisco -25200 | -7
// //japan 32400 | 9
// //takoma park -14400 | -4
// //hawaii -36000 | - 10
