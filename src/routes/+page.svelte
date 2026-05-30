<script>
  import { TRIGGERS, CONSEQUENCES } from "$lib/data";

  import Header from "../components/Header.svelte";
</script>

<Header currentPage="home" />

<section class="relative overflow-hidden bg-[#fdfbf7] px-4 py-20 lg:py-28">
  <div class="mx-auto max-w-4xl text-center">
    <h1 class="mb-6 text-5xl font-extrabold tracking-tight text-[#1a252f] md:text-6xl">
      1989 год <span class="text-[#a33835]">перевернул</span> карту Европы
    </h1>
    <p
      class="mx-auto mb-10 max-w-3xl font-serif text-xl leading-relaxed text-slate-600"
    >
      Серия революций демонтировала социалистическую систему, завершила Холодную войну и
      стерла «Железный занавес». В большинстве стран «Осень народов» прошла мирно, за
      исключением драматичных и кровавых событий в Румынии.
    </p>
  </div>
</section>

<section class="bg-[#fdfbf7] px-4 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <h2 class="relative inline-block text-3xl font-bold text-[#1a252f] md:text-4xl">
        Почему это произошло?
        <div
          class="absolute -bottom-4 left-1/2 h-1 w-16 -translate-x-1/2 rounded bg-[#a33835]"
        ></div>
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each TRIGGERS as trigger}
        <div
          class="group rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#a33835]/30 hover:shadow-xl"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#fdfbf7] text-[#a33835]"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3
            class="mb-4 text-xl font-bold text-slate-800 transition-colors group-hover:text-[#a33835]"
          >
            {trigger.title}
          </h3>
          <p class="font-serif text-base leading-relaxed text-slate-600">
            {trigger.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-[#fdfbf7] px-4 py-20">
  <div class="mx-auto max-w-6xl">
    <div class="mb-16 text-center">
      <h2 class="relative inline-block text-3xl font-bold text-[#1a252f] md:text-4xl">
        Исторические последствия
        <div
          class="absolute -bottom-4 left-1/2 h-1 w-16 -translate-x-1/2 rounded bg-[#a33835]"
        ></div>
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each CONSEQUENCES as consequence}
        <div
          class="relative overflow-hidden rounded-xl border-t-4 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#a33835] hover:shadow-lg"
        >
          <h3 class="mb-4 text-xl font-bold text-slate-800">
            {consequence.title}
          </h3>
          <p class="font-serif text-base leading-relaxed text-slate-600">
            {consequence.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  :global(body) {
    font-family:
      -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: "Montserrat", sans-serif;
  }

  .font-serif {
    font-family: "PT Serif", serif;
  }
</style>
