import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (currentTime, timezone, visibilityInMeters, unitSystem) => {
  
  const time = unixToLocalTime(currentTime, timezone);
  let [hours, minutes] = time.split(':');

  visibilityInMeters = visibilityInMeters[hours];

  if(unitSystem == "metric") {
    return (visibilityInMeters / 1000).toFixed(1);
  }
  else {
    return kmToMiles(visibilityInMeters / 1000);
  }
}

export const getTime = (unitSystem, currentTime, timezone) =>
  unitSystem == "metric"
    ? unixToLocalTime(currentTime, timezone)
    : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((weatherData.current.time + weatherData.utc_offset_seconds) * 1000).getUTCDay()
  ];
};
