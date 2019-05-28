<script>
  import Search from './Search/Search.svelte';
  import About from './About.svelte';

  let about;

  function setWeatherData(data) {
    console.log(data);
  }
</script>

<style>
  .info {
    position: absolute;
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
    z-index: 2;
    opacity: 1;
    padding: 3vh 3vw;
    overflow: hidden;
  }
  h1 {
    text-align: left;
    color: #f5e5cf;
    margin-top: 50px;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.1em;
    margin-top: 15vh;
  }

  .options-close {
    position: absolute;
    top: 2vh;
    left: 3vw;
    color: #eee;
    font-size: 3rem;
    cursor: pointer;
    animation: options 0.5s forwards;
    width: 3rem;
    font-weight: 900;
    text-align: center;
    display: block;
  }

  .options-close:hover {
    color: #222;
  }

  .help-toggle {
    position: absolute;
    color: #666;
    top: 20px;
    right: 40px;
    font-size: 4rem;
    font-weight: 800;
    transition: 0.2s;
    cursor: pointer;
    z-index: 2;
  }

  .help-toggle:hover {
    color: #222;
  }

  @media only screen and (max-width: 800px) {
    .info {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      opacity: 1;
      padding: 3vh 3vw;
    }
  }
</style>

<div class="info">
  <Search onData={setWeatherData} />
  {#if about}
    <About />
  {/if}
</div>
