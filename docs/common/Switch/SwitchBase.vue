<template>
  <my-switch v-model="value1" />
  <my-switch
    v-model="value2"
    style="--my-switch-on-color: #13ce66; --my-switch-off-color: #ff4949"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import mySwitch from '@/components/Switch/Switch.vue'
  const value1 = ref(true)
  const value2 = ref(true)
</script>
