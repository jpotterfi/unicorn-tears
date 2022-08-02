function formatTime(time) {
  time = time.toString();
  let length = time.length;
  if (length == 2) {
    let hour = "1" + ":";

    let minutes = time.slice(0, 2);

    let formattedTime = hour + minutes;

    return formattedTime;
  }
  if (length === 3) {
    let hour = time.slice(0, 1);
    hour = hour + ":";
    let minutes = time.slice(1, 3);
    let formattedTime = hour + minutes;
    return formattedTime;
  }
  if (length === 4) {
    let hour = time.slice(0, 2);
    if (hour > 12) {
      hour = hour - 12;
    }
    hour = hour + ":";
    let minutes = time.slice(2, 4);
    let formattedTime = hour + minutes;
    return formattedTime;
  }
}

export { formatTime };
