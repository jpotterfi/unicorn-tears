function getTimeOfDay(val) {
  if (val > 559 && val < 1159) {
    return "morning";
  }
  if (val > 1159 && val < 1759) {
    return "afternoon";
  }
  if (val > 1759 && val < 2059) {
    return "evening";
  }
  if (val > 2059 || val < 559) {
    return "night";
  }
}

export { getTimeOfDay };
