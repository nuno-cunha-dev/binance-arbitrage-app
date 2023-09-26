<script lang="ts">
  export let value = '';
  export let description = '';
</script>

<div class="relative w-full overflow-hidden shadow-lg">
  <div class="relative w-full h-24 px-4 py-6 bg-white  dark:bg-gray-700">
    <p class="text-2xl font-bold text-black dark:text-white">
      <span class="flex items-center text-xl font-bold text-green-500">
        <svg class="h-3" fill="currentColor" height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path></svg>
        {value}%
      </span>
    </p>
    <p class="text-sm text-gray-400">
      {description}
    </p>
  </div>
</div>