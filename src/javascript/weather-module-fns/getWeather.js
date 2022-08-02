async function getWeather(location) {
  // console.log(
  //   "http://api.openweathermap.org/data/2.5/weather?q=" +
  //     location +
  //     "&APPID=99b0b5395e6ca6d7d0df00a1cddea38f"
  // );
  const response = await fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&APPID=99b0b5395e6ca6d7d0df00a1cddea38f",
    { mode: "cors" }
  );
  const weatherData = await response.json();

  return weatherData;
}

export { getWeather };
