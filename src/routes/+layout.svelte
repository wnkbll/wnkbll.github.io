<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <title>Осень народов</title>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
  :global(body) {
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
    line-height: 1.6;
    color: #2c3e50;
    background-color: #fdfbf7;
    margin: 0;
    padding: 0;
  }

  :global(h1, h2, h3, h4) {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  :global(p) {
    font-family: "PT Serif", serif;
    line-height: 1.6;
  }

  :global(a) {
    color: #0ea5e9;
    text-decoration: none;
  }

  :global(a:hover) {
    color: #0284c7;
  }
</style>
