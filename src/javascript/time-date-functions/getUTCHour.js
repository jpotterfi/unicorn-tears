function getUTCHour() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const d = new Date();
  let h = addZero(d.getUTCHours());
  h = h.toString();
  let m = addZero(d.getUTCMinutes());
  m = m.toString();
  let time = h + m;
  time = parseInt(time);
  return time;
}

export { getUTCHour };
