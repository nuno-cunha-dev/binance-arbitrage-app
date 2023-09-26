<script lang="ts">
  import type { Opportunity } from "$lib/types";

  export let opportunity: Opportunity;
</script>

<div class="relative w-full px-4 pt-4 pb-6 bg-white shadow-lg dark:bg-gray-700">
  <p class="text-sm font-semibold text-gray-700 border-b border-gray-200 w-max dark:text-white">
    {opportunity.coins[0]} <span class="text-2xl">→</span> {opportunity.coins[1]} <span
      class="text-2xl">→</span> {opportunity.coins[2]}
  </p>

  <div class="flex items-end my-6 space-x-2">
    <span class="flex items-center text-3xl font-bold text-green-500">
      <svg class="h-3" fill="currentColor" height="20" viewBox="0 0 1792 1792" width="20"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
      </svg>
      {opportunity.profit}%
    </span>
  </div>

  <div class="dark:text-white">
    {#each opportunity.orders as order}
      <div class="flex items-center justify-evenly pb-2 mb-2 text-sm border-b border-gray-200 sm:space-x-12">
        <div class="w-full font-semibold text-green-500 uppercase"
          class:text-red-500={order.type === 'sell'}>{order.type}</div>
        <div class="w-full">{order.pair}</div>
        <div class="w-full text-right">{order.price}</div>
      </div>
    {/each}
  </div>
</div>