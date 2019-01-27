import _ from "lodash";

export default (array, time) => {
  let weatherIconDict = {
    "clear-day": "sun",
    "clear-night": "sun",
    rain: "rain",
    snow: "snow",
    sleet: "snow",
    wind: "cloud",
    fog: "cloud",
    cloudy: "cloud",
    "partly-cloudy-day": "cloud",
    "partly-cloudy-night": "cloud"
  };

  if (time % 4 === 0) {
    weatherIconDict["clear-day"] = null;
    weatherIconDict["clear-night"] = null;
  }

  const mapToDict = val => weatherIconDict[val];
  const removeNull = val => val !== null;
  const icons = _(array)
    .map(mapToDict)
    .filter(removeNull)
    .uniq()
    .value();

  if (icons.includes("rain" || "snow") && !icons.includes("cloud")) {
    icons.push("cloud");
  }
  if (time % 4 === 0) icons.push("moon");
  return icons;
};
