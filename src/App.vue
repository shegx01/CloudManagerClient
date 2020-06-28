<template>
  <div class="antialiased bg-app-background h-full pb-56">
    <div id="nav">
      <AppBar />
      <SecondaryBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import AppBar from '@/components/global/AppBar.vue'
import SecondaryBar from '@/components/global/SecondaryBar.vue'
export default {
  components: {
    AppBar,
    SecondaryBar
  }
}
</script>

<style></style>
