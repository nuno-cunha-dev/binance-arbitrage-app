<script lang="ts">
  import '../output.css';
</script>
<main class="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
  <div class="flex items-start justify-between">
    <div class="flex flex-col w-full md:space-y-4">
      <slot/>
    </div>
  </div>
</main>