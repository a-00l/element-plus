<template>
  <my-tooltip placement="top">
    <template #content> multiple lines<br />second line </template>
    <my-button>Top center</my-button>
  </my-tooltip>
</template>

<script setup>
  import myTooltip from '@/components/Tooltip/Tooltip.vue'
  import myButton from '@/components/Button/Button.vue'
</script>
