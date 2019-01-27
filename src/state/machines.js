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
  searchingplace: [
    function searchPlaces(payload, store) {
      store.update(v => ({ ...v, id: payload.id }));

      const params = {
        input: payload.value,
      };

      return get(endpoints.location, params)
        .then(v => v.json())
        .then(v => {
          let correctId;
          store.update(state => {
            if (state.id !== payload.id) {
              correctId = false;
              return state;
            }
            correctId = true;
            return { ...state, places: v.predictions };
          });

          if (correctId) return { event: 'PLACES_LOADED' };
        })
        .catch(e => {
          store.update(state => ({ ...state, error: e.message }));
          return { event: 'PLACE_FAIL' };
        });
    },
  ],
  searchingWeather: [
    function searchWeather(payload, store) {
      const latlngParams = {
        address: payload.place,
      };

      return (
        get(endpoints.geometry, latlngParams)
          .then(v => v.json())
          .then(v => {
            const time = Math.round(Date.now() / 1000);
            const weatherParams = {
              lat: v.results[0].geometry.location.lat,
              lng: v.results[0].geometry.location.lat,
              units: 'uk2',
            };

            return Promise.all([
              get(endpoints.weather, weatherParams).then(r => r.json()),
              get(endpoints.weather, { ...weatherParams, time }).then(r =>
                r.json()
              ),
            ]);
          })
          //.then(v => v.map(r => r))
          .then(v => {
            store.update(state => ({ ...state, weather: parseWeather(v) }));

            return { event: 'WEATHER_LOADED' };
          })
          .catch(e => {
            console.log('error:', e);
            store.update(state => ({ ...state, error: e.message }));
            return { event: 'FAIL' };
          })
      );
    },
  ],
};

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
