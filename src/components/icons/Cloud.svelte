<script>
  import { fade } from 'svelte/transition';
  export let color;
</script>

<svg
  out:fade="{{duration: 500}}"
  viewBox="0 0 111 198"
  xmlns="http://www.w3.org/2000/svg"
>
  <g class="cloud" transform="translate(34 30)" fill="{color.primary}">
    <path
      d="M27.7031009 13.38475C29.6906013 5.82925 36.5741027.25 44.7498544.25c9.7275019 0 17.6250035 7.8975 17.6250035 17.625 0 1.6935-.2392501 3.3315-.6862502 4.8825 6.8340014.23175 12.3112525 5.85225 12.3112525 12.7425 0 7.0365-5.7127511 12.75-12.7500025 12.75H13.2498481C6.21259664 48.25.4998455 42.53725.4998455 35.5c0-7.0365 5.71275114-12.75 12.7500026-12.75h.31125c-.4417501-1.0365-.6862501-2.17725-.6862501-3.375 0-4.76025 3.8647507-8.625 8.6250017-8.625 2.4345005 0 4.6342509 1.01025 6.2032512 2.63475z"
    />
  </g>
</svg>

<style>
  svg {
    left: 0;
    top: 0;
    position: absolute;
    transform-origin: 45% 22.2%;
    animation: fade 0.5s;
    z-index: 2;
  }

  g {
    transition: 0.5s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
