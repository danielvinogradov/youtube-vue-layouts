<template>
  <section class="layout">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: "AuthLayout"
  }
</script>

<style lang="scss" scoped>
  .layout {
    background-color: #242F40;
  }
</style>
