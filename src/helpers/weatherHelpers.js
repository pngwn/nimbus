import { mean } from './arrayMaths';

export const windDirection = array => {
  const compassArray = ['NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];

  const windMean = mean(array);
  let windDirection;

  if (windMean > 337.5 || windMean < 22.5) {
    windDirection = 'N';
  } else {
    windDirection = compassArray[Math.round(windMean / 45) - 1];
  }
  return windDirection;
};

export const icons = (array, time) => {
  const weatherIconDict = {
    'clear-day': 'sun',
    'clear-night': 'sun',
    rain: 'rain',
    snow: 'snow',
    sleet: 'snow',
    wind: 'cloud',
    fog: 'cloud',
    cloudy: 'cloud',
    'partly-cloudy-day': 'cloud',
    'partly-cloudy-night': 'cloud',
  };

  if (time % 4 === 0) {
    weatherIconDict['clear-day'] = null;
    weatherIconDict['clear-night'] = null;
  }

  const mapToDict = val => weatherIconDict[val];
  const removeNull = val => val !== null;
  const icons = Array.from(new Set(array.map(mapToDict).filter(removeNull)));

  if (icons.includes('rain' || 'snow') && !icons.includes('cloud')) {
    icons.push('cloud');
  }
  if (time % 4 === 0) icons.push('moon');
  return icons;
};
