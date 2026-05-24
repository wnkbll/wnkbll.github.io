<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Tile } from "$lib/interfaces";
  let tile: Tile = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="
  group
  relative
  flex
  h-25
  w-full
  max-w-sm
  transform
  cursor-pointer
  flex-col
  justify-between
  overflow-hidden
  rounded-2xl
  bg-white p-6
  text-slate-800
  shadow-lg
  transition-all
  duration-300
  ease-in-out
  hover:-translate-y-2
  hover:shadow-2xl"
  onclick={() => {
    goto(`/articles/${tile.id}`);
  }}
>
  <div
    class="absolute inset-0 origin-bottom-right scale-100 transform opacity-10 transition-transform duration-500 ease-in-out group-hover:scale-150"
  ></div>

  <div class="relative z-10 flex flex-row justify-between">
    <h3 class="text-2xl font-black tracking-wider uppercase">
      {tile.title}
    </h3>
    <img
      class="h-full w-15 border border-slate-600 shadow-sm"
      src={tile.img}
      alt={tile.title}
    />
  </div>

  <div
    class="relative z-10 translate-y-4 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100"
  >
    <div class="flex items-center text-sm font-bold text-slate-700">
      <span>Читать историю</span>
      <svg
        class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path></svg
      >
    </div>
  </div>
</div>
