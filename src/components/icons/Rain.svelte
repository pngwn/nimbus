<script>
  import { fade } from 'svelte/transition';
  export let color;
</script>

<style>
  svg {
    left: 0;
    top: 0;
    position: absolute;
    transform-origin: 45% 22.2%;

    z-index: 1;
    opacity: 1;
  }

  div {
    opacity: 0;
    animation: fade 0.3s 0.6s forwards;
  }

  svg > g {
    transform: translate(45px, 63px);
  }

  .drop1,
  .drop2,
  .drop3,
  .drop4 {
    animation: rain 1s 0.6s linear infinite;
  }

  .drop2 {
    animation-delay: 0.85s;
  }
  .drop3 {
    animation-delay: 1.1s;
  }
  .drop4 {
    animation-delay: 1.35s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes rain {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-30px, 160px);
      opacity: 0;
    }
  }
</style>

<div out:fade={{ duration: 100 }}>
  <svg class="drop1" viewBox="0 0 111 198" xmlns="http://www.w3.org/2000/svg">
    <g class="rain" transform="translate(20 69)" fill={color.primary}>
      <g class="drops ">
        <path
          d="M6.45591891 1.03174259S1.58091717 7.06924353 1.58091717
          9.65674393c0 2.69025047 2.18475078 4.87500077 4.87500174
          4.87500077s4.87500169-2.1847503
          4.87500169-4.87500077c0-2.5875004-4.87500169-8.62500134-4.87500169-8.62500134z"
          transform="rotate(15 6.455919 7.781744)" />
        <path
          d="M26.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 26.455919 7.781744)" />
        <path
          d="M46.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 46.455919 7.781744)" />
      </g>
    </g>
  </svg>

  <svg class="drop2" viewBox="0 0 111 198" xmlns="http://www.w3.org/2000/svg">
    <g class="rain" transform="translate(20 69)" fill={color.primary}>
      <g class="drops ">
        <path
          d="M46.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 46.455919 7.781744)" />
        <path
          d="M26.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 26.455919 7.781744)" />
        <path
          d="M6.45591891 1.03174259S1.58091717 7.06924353 1.58091717
          9.65674393c0 2.69025047 2.18475078 4.87500077 4.87500174
          4.87500077s4.87500169-2.1847503
          4.87500169-4.87500077c0-2.5875004-4.87500169-8.62500134-4.87500169-8.62500134z"
          transform="rotate(15 6.455919 7.781744)" />
      </g>
    </g>
  </svg>
  <svg class="drop3" viewBox="0 0 111 198" xmlns="http://www.w3.org/2000/svg">
    <g class="rain" transform="translate(20 69)" fill={color.primary}>
      <g class="drops ">
        <path
          d="M6.45591891 1.03174259S1.58091717 7.06924353 1.58091717
          9.65674393c0 2.69025047 2.18475078 4.87500077 4.87500174
          4.87500077s4.87500169-2.1847503
          4.87500169-4.87500077c0-2.5875004-4.87500169-8.62500134-4.87500169-8.62500134z"
          transform="rotate(15 6.455919 7.781744)" />
        <path
          d="M26.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 26.455919 7.781744)" />
        <path
          d="M46.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 46.455919 7.781744)" />
      </g>
    </g>
  </svg>
  <svg class="drop4" viewBox="0 0 111 198" xmlns="http://www.w3.org/2000/svg">
    <g class="rain" transform="translate(20 69)" fill={color.primary}>
      <g class="drops ">
        <path
          d="M46.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 46.455919 7.781744)" />
        <path
          d="M26.4559189 1.03174259s-4.8750017 6.03750094-4.8750017 8.62500134c0
          2.69025047 2.1847507 4.87500077 4.8750017 4.87500077 2.690251 0
          4.8750017-2.1847503 4.8750017-4.87500077
          0-2.5875004-4.8750017-8.62500134-4.8750017-8.62500134z"
          transform="rotate(15 26.455919 7.781744)" />
        <path
          d="M6.45591891 1.03174259S1.58091717 7.06924353 1.58091717
          9.65674393c0 2.69025047 2.18475078 4.87500077 4.87500174
          4.87500077s4.87500169-2.1847503
          4.87500169-4.87500077c0-2.5875004-4.87500169-8.62500134-4.87500169-8.62500134z"
          transform="rotate(15 6.455919 7.781744)" />
      </g>
    </g>
  </svg>
</div>
