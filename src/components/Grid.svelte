<script lang="ts">
  import { TILES } from "$lib/data";

  import Card from "./Card.svelte";
</script>

<section class="bg-[#fdfbf7] px-4 py-12">
  <div class="mx-auto max-w-4xl">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {#each TILES as tile}
        <Card {...tile} />
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    font-family: "Inter", sans-serif;
  }
</style>
