// state machine for Search

export const search = {
  id: 'search',
  initial: 'idle',
  states: {
    idle: {
      on: {
        SEARCH_PLACE: 'searchingplace',
      },
    },
    searchingplace: {
      entry: 'searchPlaces',
      on: {
        PLACES_LOADED: 'showplaces',
        FAIL: 'placeError',
      },
    },
    showplaces: {
      on: {
        SEARCH_WEATHER: 'searchingWeather',
      },
    },
    searchingWeather: {
      entry: 'searchWeather',
      on: {
        FOUNDWEATHER: 'idle',
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
        CLEAR: 'idle',
      },
    },
  },
};

// the return value of an action (or resolve value of a promise) is an event that will be sent to the machine.
// no return - no 'send'
export const searchActions = {
  searchPlaces(location) {
    // request to gmaps places API for location latlng data
    // fail - resolve 'FAIL' -- error message to store.
  },
  searchWeather(latlng) {
    // request to darksky weather API for weather data (2 requests i think)
    // fail -- resolve 'FAIL' error message to store.
    // success -- resolve 'FOUNDWEATHER', weather data to store.
  },
};
