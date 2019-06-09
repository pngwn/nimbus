<script>
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  export let results, clickCb, currentIndex;

  $: console.log(currentIndex);

  const squish = (node, { delay, duration }) => ({
    duration,
    delay,
    easing: quintOut,
    css: (t, u) => `opacity: ${t}; transform: scaleY(${t});`,
  });

  let heights = [];

  function scale(node, { delay }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;

    const od = target_opacity * 1;

    return {
      delay,
      duration: 400,
      easing: quintOut,
      css: (t, u) => `
			transform: ${transform} scaleY(${t});
			opacity: ${target_opacity - od * u}
		`,
    };
  }
</script>

<style>
  .search-list {
    text-align: center;
  }

  ul {
    font-size: 1.6rem;
    font-weight: 100;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    margin: auto;
    text-align: center;

    position: relative;
    z-index: 1;
    border-radius: 3px;
    margin-top: 2px;
    color: #eee;
  }

  ul li {
    color: #fff;
    font-weight: 300;
    padding: 10px;
    width: 100%;
    cursor: pointer;
    background: #b1695a;
    border-radius: 1px;
    margin: 1.5px;
    box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.2);
    /* position: absolute; */
  }

  ul li:hover,
  ul li.selected {
    background: #644749;
  }

  @media only screen and (max-width: 800px) {
    ul {
      font-size: 2rem;
    }
    ul li {
      font-weight: 400;
    }
  }
</style>

<ul class="search-list">
  <!-- {#if results.length} -->
  {#each results as place, i}
    <li
      class:selected={i === currentIndex}
      in:scale={{ delay: i * 100, duration: 400 }}
      out:scale
      on:click={() => clickCb({ place })}>
      <span in:fade={{ delay: 50 + i * 100, duration: 250 }}> {place} </span>
    </li>
  {/each}
  <!-- {/if} -->
</ul>
