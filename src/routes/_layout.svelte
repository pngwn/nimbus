<script>
  import Logo from '../components/icons/Logo.svelte';
  import Info from '../components/Info.svelte';
  import {
    Forecast,
    ForecastBlock,
    ForecastData,
  } from '../components/Forecast';
  import Icons from '../components/icons/index.svelte';

  import data from '../state/_fake-data.js';
  import { search } from '../state';

  $: console.log('Search: ', $search);

  $: ({ weather, places, state } = $search);
  $: options = state !== 'idle';

  export let child, path;

  let options = true,
    day = 'today',
    time = 0;
  const timeKey = ['morning', 'afternoon', 'evening', 'night'];
</script>

<style>
  main {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    transition: 0.5s;
  }
  @import '../assets/styles/variables';
</style>

<main>

  <Logo on:click={() => (options = !options)} {options} />

  {#if options}
    <Info about="false" />
  {/if}

  <Forecast activeDay={day} {options} activeTime={timeKey[time]}>

    {#each weather[day] as block, i}
      <!--  -->
      <ForecastBlock
        on:click={e => (time = i)}
        time={timeKey[i]}
        activeTime={timeKey[time]}
        {options}>

        <ForecastData
          weather={block}
          active={i === time}
          {options}
          time={timeKey[i]} />

      </ForecastBlock>
    {/each}

  </Forecast>

  {#if !options}
    <Icons
      currentIcons={data[day][time].icons}
      activeTime={timeKey[time]}
      {options} />
  {/if}
</main>
