<script>
  export let options, activeTime, activeDay;
</script>

<p>hi</p>
<div
  class="forecast {activeTime}-active forecast-{activeDay}"
  class:options-on="{options}"
>
  <slot></slot>
</div>

<style>
  /* $font-main: Lato;

  $lightest: #e3bb88;
  $light: #db9864;
  $dark: #b1695a;
  $darkest: #644749; */

  .forecast {
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
    /* background: $lightest; */
    background: #e3bb88;
    z-index: 1;
    overflow: hidden;
  }
  h1 {
    text-align: center;
    color: #eee;
    margin-top: 50px;
  }
  .options-toggle {
    position: absolute;
    top: 3vh;
    left: 3vw;
    z-index: 999;
    /* color: $dark; */
    color: #b1695a;
    font-size: 1.8rem;
    transition: 0.2s;
    cursor: pointer;
  }

  .options-toggle:hover {
    /* color: $darkest; */
    color: #644749;
  }

  .toggle-day {
    position: absolute;
    width: 50px;
    opacity: 0.5;
    bottom: 10px;
    z-index: 99999;
    cursor: pointer;
  }
  .toggle-day:hover {
    opacity: 1;
  }

  .today-toggle {
    right: 30px;
  }

  .tomorrow-toggle {
    left: 30px;
    transform: rotate(180deg);
  }

  @media only screen and (max-width: 800px) {
    .forecast {
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
    }
    .toggle-day {
      display: none;
    }
    .options-toggle {
      top: unset;
      left: 6vw;
      bottom: 3vh;
      z-index: 999;
      /* color: $lightest; */
      color: #e3bb88;
      font-size: 1.8rem;
      transition: 0.2s;
      cursor: pointer;
    }

    .options-toggle:hover {
      /* color: $lightest; */
      color: #e3bb88;
    }
  }
</style>
