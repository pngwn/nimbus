import { addHours, startOfDay, differenceInDays, getHours } from 'date-fns';
import { getUTCDate } from './date';
import { icons, windDirection } from './weatherHelpers';
import { max, min, mean, mode } from './arrayMaths';

export const parseWeather = array => {
  let blockedWeather = {};
  const offset = array[0].offset;
  const currentDate = addHours(getUTCDate(), offset);

  array.forEach(({ data }) => {
    blockedWeather = Object.assign(
      blockedWeather,
      arrayWeather(data, offset, currentDate)
    );
  });

  return formatWeather(blockedWeather);
};

const arrayWeather = (weatherArr, offset, currentDate) => {
  const blockedWeather = {};

  weatherArr.forEach(el => {
    const elDate = addHours(getUTCDate(el.time * 1000), offset);

    const dateDifference = differenceInDays(
      startOfDay(elDate),
      startOfDay(currentDate)
    );

    let time = getHours(elDate);
    time += dateDifference * 24;

    const newKey = Math.floor(time / 6);
    if (!blockedWeather[newKey]) blockedWeather[newKey] = {};

    for (const dataPoint in el) {
      if (!blockedWeather[newKey][dataPoint]) {
        blockedWeather[newKey][dataPoint] = [];
      }
      blockedWeather[newKey][dataPoint].push(el[dataPoint]);
    }
  });

  return blockedWeather;
};

const formatWeather = blockedWeather => {
  const weatherParsed = {};
  for (const segment in blockedWeather) {
    weatherParsed[segment] = {
      summary: mode(blockedWeather[segment].summary),
      temperatureHi: max(blockedWeather[segment].temperature),
      temperatureLow: min(blockedWeather[segment].temperature),
      windSpeed: max(blockedWeather[segment].windSpeed),
      windDirection: windDirection(blockedWeather[segment].windBearing),
      humidity: mean(blockedWeather[segment].humidity),
      icons: icons(blockedWeather[segment].icon, segment),
    };
  }

  return {
    today: [
      weatherParsed['1'],
      weatherParsed['2'],
      weatherParsed['3'],
      weatherParsed['4'],
    ],
    tomorrow: [
      weatherParsed['5'],
      weatherParsed['6'],
      weatherParsed['7'],
      weatherParsed['8'],
    ],
  };
};
