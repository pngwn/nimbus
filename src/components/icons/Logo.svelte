<script>
  export let options;
</script>

<style>
  .logo {
    position: absolute;
    top: 30px;
    left: 0;
    width: 3rem;
    z-index: 999;
    /* fill: $dark; */
    fill: #b1695a;
    transition: 0.5s;
    transform: translate(3vw, 3vh);
    margin-left: 30px;

    cursor: pointer;
  }

  .logo path {
    /* fill: $dark; */
    fill: #b1695a;
    transition: 0.2s;
    transform: translateX(2px);
  }
  .logo:hover path {
    /* fill: $darkest; */
    fill: #644749;
  }
  .logo.options-on {
    transform: translate(50vw, 3vh);
    transition: 0.5s 0.5s;
    margin-left: -1.5rem;
  }
</style>

<svg
  on:click
  class="logo"
  class:options-on={options}
  viewBox="0 0 105 66"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xml:space="preserve"
  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
  <g transform="matrix(1,0,0,1,-50,-47)">
    <g transform="matrix(0.851064,0,0,2,-196.596,-162)">
      <g transform="matrix(1.175,0,0,0.5,-54.525,41.5)">
        <path
          d="M329.271,143.513C331.921,133.439 341.099,126 352,126C364.97,126
          375.5,136.53 375.5,149.5C375.5,151.758 375.181,153.942
          374.585,156.01C383.697,156.319 391,163.813 391,173C391,182.382
          383.383,190 374,190L310,190C300.617,190 293,182.383
          293,173C293,163.618 300.617,156 310,156L310.415,156C309.826,154.618
          309.5,153.097 309.5,151.5C309.5,145.153 314.653,140
          321,140C324.246,140 327.179,141.347 329.271,143.513Z" />
      </g>
    </g>
  </g>
</svg>
