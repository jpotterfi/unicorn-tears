import { getUTCHour } from "./getUTCHour";
import { formatTime } from "./formatTime";
import { getMeridian } from "./getMeridian";
import { getTimeOfDay } from "./getTimeOfDay";
import { add, format, getTime, sub } from "date-fns";

function timezoneToData(timezone) {
  //-36000
  let time = getUTCHour();
  console.table(time);

  let offset = timezone / 36; //-10
  console.table(offset);

  let newTime = time + offset; //4:31
  console.table(newTime);

  let testDate = new Date();
  let testUTCDate = testDate.getUTCFullYear();
  let UTCMonth = testDate.getUTCMonth();
  let UTCDate = testDate.getUTCDate();
  let UTCYear = testDate.getUTCFullYear();

  let newUTC = new Date(UTCYear, UTCMonth, UTCDate);

  let formatNewUTC = format(newUTC, "PP");

  let datetimeObj = {
    localDate: "",
    localTime: "",
    timeOfDay: "",
    meridian: "",
    formattedTime: "",
  };

  if (newTime > 2400) {
    let date = newUTC;
    date = add(date, {
      days: 1,
    });
    date = format(date, "PP");
    newTime = newTime - 2400;
    datetimeObj.localDate = date;
    datetimeObj.localTime = newTime;
    datetimeObj.timeOfDay = getTimeOfDay(newTime);
    datetimeObj.meridian = getMeridian(newTime);

    datetimeObj.formattedTime =
      formatTime(newTime) + " " + getMeridian(newTime);
  } else if (newTime < 0) {
    let date = newUTC;
    date = sub(date, {
      days: 1,
    });
    date = format(date, "PP");
    newTime = newTime + 2400;
    datetimeObj.localDate = date;
    datetimeObj.localTime = newTime;
    datetimeObj.timeOfDay = getTimeOfDay(newTime);
    datetimeObj.meridian = getMeridian(newTime);
    datetimeObj.formattedTime =
      formatTime(newTime) + " " + getMeridian(newTime);
  } else {
    let date = newUTC;
    date = format(date, "PP");
    datetimeObj.localDate = date;
    datetimeObj.localTime = newTime;
    datetimeObj.timeOfDay = getTimeOfDay(newTime);
    datetimeObj.meridian = getMeridian(newTime);
    datetimeObj.formattedTime =
      formatTime(newTime) + " " + getMeridian(newTime);
  }
  return datetimeObj;
}

export { timezoneToData };
