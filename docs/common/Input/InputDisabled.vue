<template>
  <my-input
    v-model="input"
    style="width: 240px"
    disabled
    placeholder="Please input"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const input = ref('')
</script>
