<script>
  import { fly } from 'svelte/transition';
  export let color;
</script>

<style>
  svg {
    left: 0;
    top: 0;
    position: absolute;
    z-index: 0;
    opacity: 0;
    transform: translateY(50px);
    animation: fly 0.5s 0.5s forwards;
  }

  g {
    transition: 0.5s;
  }

  @keyframes fly {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>

<svg
  out:fly={{ duration: 500, y: 0 }}
  viewBox="0 0 111 198"
  xmlns="http://www.w3.org/2000/svg">
  <g fill={color.accent}>
    <path
      class="moon"
      d="M15.6943353 48.752698C18.4888087 49.5646942 21.4435688 50 24.5 50
      41.8969696 50 56 35.8969696 56
      18.5c0-6.761464-2.1303291-13.0253629-5.7564013-18.15711068C61.2587854
      4.94237361 69 15.817158 69 28.5 69 45.3446849 55.3446849 59 38.5
      59c-9.0719304 0-17.2187824-3.9607311-22.8056647-10.247302z" />
  </g>
</svg>
