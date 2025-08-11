<template>
  <my-tooltip
    :content="'Switch value: ' + value"
    placement="top"
  >
    <my-switch
      v-model="value"
      style="--my-switch-on-color: #13ce66; --my-switch-off-color: #ff4949"
      active-value="100"
      inactive-value="0"
    />
  </my-tooltip>
</template>

<script setup>
  import { ref } from 'vue'
  import mySwitch from '@/components/Switch/Switch.vue'

  const value = ref('100')
</script>
