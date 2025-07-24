<template>
  <Tooltip
    content="这是一个提示"
    trigger="click"
    v-model:visible="visible"
    effect="dark"
  >
    <Button>Hover{{ visible }}</Button>
  </Tooltip>
</template>

<script setup>
  import Button from '@/components/Button/Button.vue'
  import Tooltip from '@/components/Tooltip/Tooltip.vue'
  import { ref } from 'vue'
  const visible = ref(false)
</script>
