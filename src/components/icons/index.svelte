<script>
  import sun from './Sun.svelte';
  import snow from './Snow.svelte';
  import rain from './Rain.svelte';
  import moon from './Moon.svelte';
  import cloud from './Cloud.svelte';
  import { colormap, iconColors, iconPositions } from '../../state';

  export let currentIcons, activeTime, options;
  let width;

  const iconComponents = { sun, snow, rain, moon, cloud };

  $: currentColors = {
    accent: $colormap[$iconColors[activeTime].accent],
    primary: $colormap[$iconColors[activeTime].primary],
  };
  $: positions = width < 800 ? $iconPositions['small'] : $iconPositions['big'];
  $: translateX = positions[activeTime][0] * (width - 60) || 0;
  $: translateY = positions[activeTime][1] * (width - 60) || 0;
  $: opacity = options ? 0 : 1;
</script>

<style>
  div {
    position: absolute;
    width: 20vw;
    max-width: 250px;
    left: 0;
    top: 10%;
    bottom: 0;
    z-index: 998;
    overflow: visible;
    backface-visibility: hidden;
    pointer-events: none;
    transform-origin: 50% 50%;
    transition: 0.5s;
  }

  @media only screen and (max-width: 800px) {
    div {
      width: 40%;
      right: 55vw;
      left: unset;
      top: 0;
      z-index: 999;
      overflow: visible;
    }
  }
</style>

<svelte:window bind:innerWidth={width} />

<div
  style="transform: translate({translateX}px, {translateY}px); opacity: {opacity}"
  class="icon {activeTime}">
  {#each currentIcons as icon (icon)}
    <svelte:component this={iconComponents[icon]} color={currentColors} />
  {/each}
</div>
