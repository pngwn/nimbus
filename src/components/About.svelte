<style scoped lang="scss">
  .about {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    right: 0;
    padding: 50px;
    font-size: 1.5rem;
    line-height: 1.6em;
    background: #333;
    color: #eee;
    z-index: 1;
    overflow-x: hidden;
  }

  p {
    margin: 20px 0;
  }

  .sub {
    margin-top: -15px;
  }

  a {
    color: #eee;
    text-decoration: none;
    border-bottom: 1px solid #999;
  }

  a:hover {
    border-color: #eee;
  }

  @media only screen and (max-width: 800px) {
    .about {
      width: 100%;
    }
  }
</style>

<div class="about">
  <h1>nimbus</h1>
  <p class="sub">weather made simple</p>
  <p>
    <strong>nimbus</strong>
    forecasts the weather in a given location for today and tomorrow only. The
    day is split into four six-hour blocks: morning (0600 - 1200), afternoon
    (1200 - 1800), evening (1800 - 0000), night (0000 - 0600)
  </p>
  <p>
    Each block is based on an hourly forecast. The icons show all of the weather
    types you can expect during each six-hour block, if different types of
    precipitation are forcast only the worst will be shown (rain > hail > snow).
    The listed temperatures and wind speed will be the most extreme forecast for
    that period, humidity will be the average. The summary will list the most
    likely and common expected weather for that period.
  </p>
  <p>
    This is an experiment and might be wrong. If you find yourself up shit creek
    wearing the wrong kind of socks, go find someone else to blame.
  </p>
  <p>
    <strong>nimbus</strong>
    is built with
    <a href="https://svelte.technology">Svelte</a>
    and
    <a href="https://sapper.svelte.technology">Sapper</a>
    hosted on
    <a href="https://www.netlify.com/">Netlify</a>
    and powered by
    <a href="https://cloud.google.com/functions/">Google Cloud Functions</a>
    . It uses the
    <a href="https://darksky.net/dev">Dark Sky API</a>
    for weather data and the
    <a href="https://developers.google.com/places/">Google Places API</a>
    for geocoding and location autocomplete. The source code is availble on
    <a href="https://github.com/pwngwn/nimbus">github</a>
    .
  </p>
</div>
