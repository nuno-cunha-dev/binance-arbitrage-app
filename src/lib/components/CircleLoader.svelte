<script lang="ts">
  export let percentage = '56%';
  export let size = '40px';
</script>

<div style="--size: {size}; --percentage: {percentage}" class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

<style>
  .progress-bar {
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background:
        radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(lightgray var(--percentage), white 0);
  }
</style>