<script>
  import { uuid } from '../../helpers/uuid.js';
  import { createEventDispatcher, tick } from 'svelte';

  const dispatch = createEventDispatcher();

  export let changeCb, getGeoCb;
  let id, input;

  function handleInput(val) {
    if (!val) {
      return;
    }

    id = uuid();
    changeCb({ value: val, id });
  }

  const putCursorAtEnd = el => {
    if (el.setSelectionRange) {
      var len = el.value.length * 2;
      setTimeout(function() {
        el.setSelectionRange(len, len);
      }, 1);
    } else {
      el.value = el.value;
    }
  };

  const handleKeydown = async ({ preventDefault, keyCode, target }) => {
    if (keyCode === 40) {
      dispatch('down');
      putCursorAtEnd(target);
    }
    if (keyCode === 38) {
      putCursorAtEnd(target);

      dispatch('up');
    }
  };
</script>

<style>
  /* $font-main: Lato;

  $lightest: #e3bb88;
  $light: #db9864;
  $dark: #b1695a;
  $darkest: #644749; */

  .input {
    width: 40%;
    margin: 20vh auto 0 auto;
    position: relative;
  }
  .location-button {
    background: url('../location.svg') no-repeat center;
    font-size: 0px;
    width: 20px;
    height: 100%;
    border: none;
    opacity: 0.5;
    position: absolute;
    right: 10px;
    top: 0;
    cursor: pointer;
  }

  .location-button:focus {
    opacity: 1;
    outline: none;
  }

  .input-field {
    border: none;
    outline: none;
    background: #db9864;
    border-radius: 3px;
    font-size: 2.5rem;
    color: #333;
    width: 100%;
    padding-bottom: 1px;
    border-bottom: 2px solid #db9876;
    transition: 0.2s;
    text-align: center;
    padding: 7px 0 5px 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
  }

  .input-field:focus {
    /* border-color: $darkest; */
    border-color: #644749;
    transform: translateY(-1px);
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .input-field::placeholder {
    color: #eee;
  }

  .warning {
    position: absolute;
    left: 10%;
    bottom: 100px;
    color: red;
  }

  .location-arrow {
    position: absolute;
    width: 30px;
    left: 0;
    right: 0;
    margin: auto;
    top: -12%;
    transition: 0.5s;
    cursor: pointer;
  }

  .location-arrow path {
    /* fill: $dark; */
    fill: #b1695a;
    transition: 0.2s;
  }

  .location-arrow:hover path {
    /* fill: $darkest; */
    fill: #644749;
  }

  @keyframes top-in {
    0% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes top-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(30px);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 800px) {
    .input {
      width: 80%;
    }
    .input-field {
      outline: none;
      background: none;
      font-size: 3rem;
      color: #222;
      width: 100%;
      padding: 0 10%;
    }
  }
</style>

<div class="input">
  <input
    class="input-field"
    bind:this={input}
    on:input={({ target }) => handleInput(target.value)}
    on:keydown={handleKeydown} />
  <button class="location-button" on:click={getGeoCb}>Use your location</button>
</div>
