<template>
  <div class="test">vvvvvvvv</div>
</template>

<script lang="ts" setup>
  console.log('VITE_APP_BASE_URL', import.meta.env.VITE_APP_BASE_URL)
  console.log('环境', import.meta.env)
</script>
<style lang="scss" scoped>
  .test {
    color: red;
    font-size: 20px;
  }
</style>
