<template>
  <div class="antialiased bg-app-background">
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
.el-table td {
  border-bottom: unset !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  text-align: center;
  color: #486581;
  font-weight: semibold;
}
.el-table th {
  text-align: center;
  color: #486581;
}
</style>
