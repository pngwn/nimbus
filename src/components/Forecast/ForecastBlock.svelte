<script>
  import { createEventDispatcher } from 'svelte';

  export let time, activeTime, options;

  const dispatch = createEventDispatcher();
</script>

<div
  on:click="{() => dispatch('click', time)}"
  class="box {time} {activeTime}-active"
  class:options-on="{options}"
>
  <slot></slot>
</div>

<style>
  .box {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    transition: 0.5s ease-in-out;
    backface-visibility: hidden;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  .morning {
    background: #e3bb88;
  }

  .afternoon {
    background: #db9864;
    transform: translateX(50%);
  }

  .evening {
    background: #b1695a;
    transform: translateX(66.6%);
  }

  .night {
    background: #644749;
    transform: translateX(83.3%);
  }

  .afternoon-active.afternoon {
    transform: translateX(16.6%);
  }

  .evening-active.afternoon {
    transform: translateX(16.6%);
  }

  .evening-active.evening {
    transform: translateX(33.3%);
  }

  .night-active.afternoon {
    transform: translateX(16.6%);
  }

  .night-active.evening {
    transform: translateX(33.3%);
  }

  .night-active.night {
    transform: translateX(50%);
  }

  .options-on.box {
    transition-timing-function: ease-in-out;
    transition-delay: 0.5s;
    transition-duration: 0.25s;
    transform: translateX(100%);
  }

  .options-on.morning {
    transform: translateX(0);
  }

  @media only screen and (max-width: 800px) {
    .box {
      height: 100%;
      width: 100%;
    }

    .afternoon {
      transform: translateY(50%);
    }

    .evening {
      transform: translateY(66.6%);
    }

    .night {
      transform: translateY(83.3%);
    }

    .afternoon-active.afternoon {
      transform: translateY(16.6%);
    }

    .evening-active.afternoon {
      transform: translateY(16.6%);
    }

    .evening-active.evening {
      transform: translateY(33.3%);
    }

    .night-active.afternoon {
      transform: translateY(16.6%);
    }

    .night-active.evening {
      transform: translateY(33.3%);
    }

    .night-active.night {
      transform: translateY(50%);
    }

    .options-on .box {
      transition-timing-function: ease-in-out;
      transition-delay: 0.5s;
      transition-duration: 0.25s;
      transform: translateY(100%);
    }
  }
</style>
