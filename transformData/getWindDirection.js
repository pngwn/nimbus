import getMean from "./getMean";

export default array => {
  const compassArray = ["NE", "E", "SE", "S", "SW", "W", "NW", "N"];

  let windMean = getMean(array);
  let windDirection;

  if (windMean > 337.5 || windMean < 22.5) {
    windDirection = "N";
  } else {
    windDirection = compassArray[Math.round(windMean / 45) - 1];
  }
  return windDirection;
};
