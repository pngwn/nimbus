<script>
  import { fade } from 'svelte/transition';
  export let color;
  let ref;

  // onMount(() => {
  //   anime({
  //     targets: ref,
  //     rotate: '1turn',
  //     easing: 'linear',
  //     loop: true,
  //     duration: 4000,
  //   });
  // });
</script>

<style>
  svg {
    left: 0;
    top: 0;
    position: absolute;
    transform-origin: 45% 22.2%;
    animation: rotate 4s 0.5s linear infinite;
    z-index: 0;
  }

  g {
    opacity: 0;
    transition: 0.5s;
    animation: fade 0.5s 0.5s forwards;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotate {
    from {
      transform: translateZ(0) rotate(0deg);
    }
    to {
      transform: translateZ(0) rotate(360deg);
    }
  }
</style>

<svg
  out:fade={{ duration: 500 }}
  bind:this={ref}
  viewBox="0 0 111 198"
  xmlns="http://www.w3.org/2000/svg">
  <g fill={color.accent} class="sun" transform="translate(15 9)">
    <circle stroke-width="7" cx="35" cy="35" r="11.5" />
    <rect y="32" width="10" height="6" rx="3" />
    <rect x="60" y="32" width="10" height="6" rx="3" />
    <rect
      transform="rotate(45 13.656854 13.656854)"
      x="8.65685425"
      y="10.6568542"
      width="10"
      height="6"
      rx="3" />
    <rect
      transform="scale(-1 1) rotate(45 0 -123.12489133)"
      x="51.6568542"
      y="10.6568542"
      width="10"
      height="6"
      rx="3" />
    <rect
      transform="scale(-1 1) rotate(45 0 23.68629185)"
      x="8.65685425"
      y="53.6568542"
      width="10"
      height="6"
      rx="3" />
    <rect
      transform="rotate(45 56.656854 56.656854)"
      x="51.6568542"
      y="53.6568542"
      width="10"
      height="6"
      rx="3" />
    <rect
      transform="rotate(90 35 5)"
      x="30"
      y="2"
      width="10"
      height="6"
      rx="3" />
    <rect
      transform="rotate(90 35 65)"
      x="30"
      y="62"
      width="10"
      height="6"
      rx="3" />
  </g>
</svg>
