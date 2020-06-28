<template>
  <div class="p-4 bg-white shadow-md">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DisplayCard',
  props: {
    shadow: {
      default: 'none',
      type: String
    },
    border: {
      default: 'none',
      type: String
    }
  }
}
</script>
