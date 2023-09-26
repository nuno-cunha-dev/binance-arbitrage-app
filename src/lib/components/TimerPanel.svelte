<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import CircleLoader from "$lib/components/CircleLoader.svelte";

  const dispatch = createEventDispatcher();

  export let interval = 10;
  export let description = '';

  let startDate = new Date();
  let endDate = new Date(startDate.getTime() + interval * 1000);
  let currentTime = new Date();

  setInterval(() => {
    currentTime = new Date();
    if (currentTime.getTime() >= endDate.getTime()) {
      dispatch('timeout');
      startDate = new Date();
      endDate = new Date(startDate.getTime() + interval * 1000);
    }
  }, 100);

  $: percentage = 100 - Math.round(
    ((endDate.getTime() - currentTime.getTime()) /
      (endDate.getTime() - startDate.getTime())) *
      100
  );

  $: timeleft = Math.min(Math.floor(interval - (interval * percentage / 100)) + 1, interval);
</script>

<div class="relative w-full overflow-hidden shadow-lg">
  <div class="relative w-full h-24 px-4 py-6 bg-white dark:bg-gray-700 flex flex-row justify-between items-center">
    <div class="flex flex-col">
      <p class="text-2xl font-bold text-black dark:text-white">
        {timeleft}
      </p>
      <p class="text-sm text-gray-400">
        {description}
      </p>
    </div>

    <CircleLoader percentage={`${percentage}%`}/>
  </div>
</div>
