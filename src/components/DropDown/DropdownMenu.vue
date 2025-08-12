<template>
  <ul class="my-dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'MyDropdownMenu',
  })
</script>

<style scoped></style>
