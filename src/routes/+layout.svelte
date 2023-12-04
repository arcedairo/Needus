<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css'
  import '@fontsource/inter'
  import Responsive from '$lib/components/Responsive.svelte';
</script>

<div class="w-full min-h-screen">
  
  <slot />

  <div class="sm:hidden">
    <Responsive />
  </div>

</div>

<style lang="postcss" global>

</style>