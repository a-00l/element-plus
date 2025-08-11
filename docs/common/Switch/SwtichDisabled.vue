<template>
  <my-switch
    v-model="value1"
    disabled
  />
  <my-switch
    v-model="value2"
    class="ml-2"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import mySwitch from '@/components/Switch/Switch.vue'

  const value1 = ref(true)
  const value2 = ref(true)
</script>

<style scoped>
  .ml-2 {
    margin-left: 10px;
  }
</style>
