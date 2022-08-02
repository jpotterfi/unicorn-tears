function getMeridian(val) {
  if (val < 1200 || val == 2400) {
    return "AM";
  } else {
    return "PM";
  }
}
export { getMeridian };
