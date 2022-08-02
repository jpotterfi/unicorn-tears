function convertWeatherCodeToAdj(code) {
  if (code >= 200 && code <= 232) {
    return "Thundery";
  }
  if (code >= 300 && code <= 321) {
    return "Drizzling";
  }
  if (code >= 500 && code <= 531) {
    return "Rainy";
  }
  if (code >= 600 && code <= 622) {
    return "Snowy";
  }
  if (code == 701) {
    return "Misty";
  }
  if (code == 711) {
    return "Smoky";
  }
  if (code == 721) {
    return "Hazy";
  }
  if (code == 731) {
    return "Dusty";
  }
  if (code == 741) {
    return "Foggy";
  }
  if (code == 781) {
    return "Tornadic";
  }
  if (code == 800) {
    return "Clear";
  }
  if (code >= 801 && code <= 804) {
    return "Cloudy";
  }
}
export { convertWeatherCodeToAdj };
