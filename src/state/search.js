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

const endpoints = {
  location: 'https://us-central1-nimbus-200817.cloudfunctions.net/getLocation?',
  geometry: 'https://us-central1-nimbus-200817.cloudfunctions.net/getLatLong?',
  weather: 'https://us-central1-nimbus-200817.cloudfunctions.net/getWeather?',
};

export const searchActions = {
  searchingplace: [searchPlaces],
  searchingWeather: [searchWeather],
};

async function searchPlaces(payload, store) {
  store.update(v => ({ ...v, id: payload.id }));

  const params = {
    input: payload.value,
  };

  try {
    const places = await (await get(endpoints.location, params)).json();

    let correctId = true;
    store.update(state => {
      if (state.id !== payload.id) {
        correctId = false;
        return state;
      }

      return { ...state, places: places.predictions };
    });

    if (correctId) return { event: 'PLACES_LOADED' };
  } catch (e) {
    store.update(state => ({ ...state, error: e.message }));
    return { event: 'PLACE_FAIL' };
  }
}

async function searchWeather(payload, store) {
  try {
    let coords = payload.coords
      ? {
        lat: payload.coords.latitude,
        lng: payload.coords.longitude,
        units: 'uk2',
      }
      : undefined;

    if (!coords) {
      const r = await (await get(endpoints.geometry, {
        address: payload.place,
      })).json();

      coords = {
        lat: r.results[0].geometry.location.lat,
        lng: r.results[0].geometry.location.lat,
        units: 'uk2',
      };
    }

    const time = Math.round(Date.now() / 1000);
    let weather = await Promise.all([
      get(endpoints.weather, coords),
      get(endpoints.weather, { ...coords, time }),
    ]);
    weather = await Promise.all(weather.map(r => r.json()));

    store.update(state => ({ ...state, weather: parseWeather(weather) }));

    return { event: 'WEATHER_LOADED' };
  } catch (e) {
    store.update(state => ({ ...state, error: e.message }));
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
    headers: { 'Access-Control-Allow-Origin': '*' },
  };

  return fetch(getUrl, config);
}
