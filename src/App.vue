<template>
  <div class="antialiased bg-app-background pb-56">
    <div id="nav">
      <AppBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import AppBar from '@/components/global/AppBar.vue'
export default {
  components: {
    AppBar
  }
}
</script>

<style>
.echarts {
  width: 100% !important;
}
</style>
