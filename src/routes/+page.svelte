<script lang="ts">
  import SimplePanel from "$lib/components/SimplePanel.svelte";
  import TimerPanel from "$lib/components/TimerPanel.svelte";
  import OpportunityPanel from "$lib/components/OpportunityPanel.svelte";
  import type { Opportunity, ProfitabilityResponse } from "$lib/types";
  import { onMount } from "svelte";
  import config from "$lib/config";

  let opportunities: Opportunity[] = [];
  let fetchedAt = new Date();

  $: totalPercentage = opportunities.reduce((total, opportunity) => {
    return total + opportunity.profit;
  }, 0)
  $: loadedOpportunities = opportunities.sort((a, b) => {
    return b.profit - a.profit;
  });

  async function refreshOpportunities() {
    const response = await fetch(`${config.binanceArbitrageApiUrl}/arbitrage`);
    if (response.status !== 200) {
      return;
    }

    const data: ProfitabilityResponse | undefined = await response.json();
    if (!data) {
      return;
    }

    opportunities = data.opportunities;
    fetchedAt = new Date(data.fetchedAt);
  }

  onMount(() => {
    refreshOpportunities();
  });
</script>


<div class="h-screen px-4 pt-4 pb-24 overflow-auto md:px-6">
  <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
    Binance Arbitrage Scanner
  </h1>
  <h2 class="text-gray-400 text-md">
    Opportunities updated every 10 seconds
  </h2>
  <div class="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
    <div class="w-full">
      <TimerPanel description={'Next opportunities in'} interval={5} on:timeout={refreshOpportunities}/>
    </div>
    <div class="w-full">
      <SimplePanel description={'Total percentages'} value={totalPercentage.toFixed(3)}/>
    </div>
  </div>


  <div class="flex items-center space-x-4">
    <span class="text-sm text-gray-400">Latest data from {fetchedAt}</span>
  </div>


  <div class="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3">
    {#each loadedOpportunities as opportunity}
      <div class="w-full">
        <OpportunityPanel {opportunity}/>
      </div>
    {/each}
  </div>
</div>

