<script>
  export let time, active, options, weather;
  import { fly } from 'svelte/transition';
</script>

<div class="box-content {time}-box">
  <h1>{ time }</h1>
  <p class="box-temp">{ weather.temperatureHi } °</p>

  {#if active && !options}
  <div out:fly="{{y: 50}}" class="box-extra">
    <p class="box-temp temp-min">{ weather.temperatureLow } °</p>
    <p class="box-status">{ weather.summary }</p>
    <p class="box-wind">
      Wind: { weather.windDirection } { weather.windSpeed }mph
    </p>
    <p class="box-humidity">Humidity: { weather.humidity }%</p>
  </div>
  {/if}
</div>

<style>
  /* @import "../../assets/styles/variables"; */

  .box-content {
    float: left;
    margin-top: 5vh;
    margin-left: 3vw;
    width: 16%;
  }

  h1,
  p {
    font-family: 'Inter';
    font-size: 1.6rem;
    color: #fff;
    font-weight: 400;
  }

  .box-content h1 {
    text-transform: uppercase;
    margin: 20px 0 10px 0;
    font-size: 1.8rem;
    color: #f5e5cf;
    letter-spacing: 0.2em;
    font-weight: 600;
  }

  .day-box h1 {
    color: #ebc6a9;
  }

  .evening-box h1 {
    color: #d1a59d;
  }

  .night-box h1 {
    color: #9b8180;
  }

  .box-temp {
    font-size: 3.5rem;
    font-weight: 500;
    color: #fff;
  }

  .temp-min {
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 30px;
  }

  .box-status {
    font-size: 3rem;
    font-weight: 200;
    margin: 10px 0;
  }

  .box-wind,
  .box-humidity {
    font-weight: 500;
    letter-spacing: 0.05em;
    margin: 5px 0;
  }

  .box-extra {
    animation: 0.5s 0.5s fadein forwards;
    opacity: 0;
  }

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }

    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media only screen and (max-width: 800px) {
    .box-content {
      position: absolute;
      left: 55%;
      margin-top: 1vh;
      margin-left: 3vw;
      width: 30%;
    }
  }
</style>
