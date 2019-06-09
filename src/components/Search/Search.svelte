<script>
  import { afterUpdate } from 'svelte';

  import SearchInput from './SearchInput.svelte';
  import SearchResults from './SearchResults.svelte';

  import { search } from '../../state';

  export let onData;
  let currentData,
    currentIndex = -1;

  afterUpdate(() => {
    if ($search.weather && currentData !== $search.weather) {
      onData($search.weather);
      currentData = $search.weather;
    }
  });

  const getGeo = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        search.send('SEARCH_WEATHER', pos);
      },
      err => {
        search.send('FAIL', err);
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },
      {
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const handleUp = () => {
    if (!$search.places.length) return;

    currentIndex =
      currentIndex - 1 < 0 ? $search.places.length - 1 : currentIndex - 1;
  };

  const handleDown = () => {
    if (!$search.places.length) return;

    currentIndex =
      currentIndex + 1 >= $search.places.length ? 0 : currentIndex + 1;
  };
</script>

<style>
  .search-wrap {
    height: 100%;
    opacity: 0;
    animation: top-in 0.5s 0.5s forwards;
  }

  .options-leave .search-wrap {
    transform: translateY(0%);
    opacity: 1;
    animation: top-out 0.5s ease-in-out forwards;
  }

  div.loading-dots {
    position: absolute;
    left: 50%;
    margin-left: -0.5em;
    top: 0;
    margin-top: 20px;
  }

  @keyframes top-in {
    0% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes top-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>

<div class="search-wrap">
  <SearchInput
    loading={$search === 'searchingplace'}
    changeCb={val => search.send('SEARCH_PLACE', val)}
    getGeoCb={getGeo}
    on:up={handleUp}
    on:down={handleDown}
    on:enter={payload => search.send('SEARCH_WEATHER', payload)} />

  <SearchResults
    results={$search.places}
    clickCb={payload => search.send('SEARCH_WEATHER', payload)}
    bind:currentIndex />

  <h1>{$search.state}</h1>
</div>
