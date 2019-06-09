/* eslint-disable indent */
import { parseWeather } from '../helpers/parseWeather';

export const searchMachine = {
  id: 'search',
  initial: 'idle',
  states: {
    idle: {
      on: {
        SEARCH_PLACE: 'searchingplace',
        SEARCH_WEATHER: 'searchingWeather',
      },
    },
    searchingplace: {
      entry: 'searchPlaces',
      on: {
        PLACES_LOADED: 'showplaces',
        SEARCH_PLACE: 'searchingplace',
        PLACE_FAIL: 'placeError',
      },
    },
    showplaces: {
      on: {
        SEARCH_WEATHER: 'searchingWeather',
        SEARCH_PLACE: 'searchingplace',
      },
    },
    searchingWeather: {
      entry: 'searchWeather',
      on: {
        WEATHER_LOADED: 'idle',
        FAIL: 'weatherError',
      },
    },
    placeError: {
      on: {
        SEARCH_PLACE: 'searchingplace',
        CLEAR: 'idle',
      },
    },
    weatherError: {
      on: {
        SEARCH_WEATHER: 'searchingWeather',
        SEARCH_PLACE: 'searchingplace',
        CLEAR: 'idle',
      },
    },
  },
};

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const endpoints = {
  location: dev
    ? 'http://localhost:34567/.netlify/functions/getLocation?'
    : '.netlify/functions/getLocation?',
  weather: dev
    ? 'http://localhost:34567/.netlify/functions/getWeather?'
    : '.netlify/functions/getWeather?',
};

export const searchActions = {
  searchingplace: [searchPlaces],
  searchingWeather: [searchWeather],
};

async function searchPlaces(payload, update) {
  update(v => ({ ...v, id: payload.id }));

  // const params = {
  //   input: payload.value,
  // };

  // try {
  //   const places = await (await get(endpoints.location, params)).json();

  //   let correctId = true;
  //   update(state => {
  //     if (state.id !== payload.id) {
  //       correctId = false;
  //       return state;
  //     }

  //     return { ...state, places };
  //   });

  //   if (correctId) return { event: 'PLACES_LOADED' };
  // } catch (e) {
  //   update(state => ({ ...state, error: e.message }));
  //   return { event: 'PLACE_FAIL' };
  // }

  const places = {
    predictions: ['one', 'two', 'three', 'four', 'five'],
  };
  update(state => {
    if (state.id !== payload.id) {
      correctId = false;
      return state;
    }

    return { ...state, places: places.predictions };
  });
}

async function searchWeather(payload, update) {
  const time = ~~(Date.now() / 1000);

  try {
    const coords = {
      ...(payload.coords && {
        lat: payload.coords.latitude,
        lng: payload.coords.longitude,
      }),
      address: payload.place,
      time,
    };

    const weather = await (await get(endpoints.weather, coords)).json();

    update(state => ({ ...state, weather: parseWeather(weather) }));

    return { event: 'WEATHER_LOADED' };
  } catch (e) {
    update(state => ({ ...state, error: e.message }));
    return { event: 'FAIL' };
  }
}

import utf8 from 'utf8';

function get(url, params) {
  let getUrl = url;
  for (const key in params) {
    let newStr = params[key]
      .toString()
      .replace(/,/g, '')
      .replace(/ /g, '+');
    newStr = utf8.encode(newStr);
    getUrl += `${key}=${newStr}&`;
  }

  const config = {
    mode: 'cors',
  };

  return fetch(getUrl, config);
}
