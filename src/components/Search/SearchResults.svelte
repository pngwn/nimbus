<script>
  import { afterUpdate } from 'svelte';
  import { fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  export let results, clickCb;

  afterUpdate(() => console.log(results));

  const squish = (node, { delay, duration }) => ({
    duration,
    delay,
    easing: quintOut,
    css: (t, u) => `opacity: ${t}; transform: scaleY(${t});`,
  });

  $: console.log(results);
</script>

<style>
  .search-list {
    text-align: center;
  }

  ul {
    font-size: 1.6rem;
    font-weight: 100;
    list-style: none;
    /* margin-top: 22px; */
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40%;
    margin: auto;
    text-align: center;
    /* background: #b1695a; */
    /* transform: translateY(-5px); */
    /* padding-top: 5px; */
    position: relative;
    z-index: 1;
    border-radius: 3px;
    margin-top: 2px;
    color: #eee;
    /* overflow: hidden; */
    /* transform-origin: 0 0; */
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
  {#each results as place, i}
    <li
      in:squish={{ delay: i * 100, duration: 250 }}
      on:click={() => clickCb({ place })}>
      <span in:fade={{ delay: 50 + i * 100, duration: 250 }}> {place} </span>
    </li>
  {/each}
</ul>
