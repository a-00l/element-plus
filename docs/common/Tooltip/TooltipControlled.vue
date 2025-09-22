<template>
  <my-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <my-button
      @mouseenter="visible = true"
      @mousmyeave="visible = false"
    >
      Hover me
    </my-button>
  </my-tooltip>
</template>

<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>
