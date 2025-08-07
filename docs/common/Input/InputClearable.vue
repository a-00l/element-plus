<template>
  <my-input
    v-model="input"
    style="width: 240px"
    placeholder="Please input"
    clearable
  />
</template>

<script setup>
  import { ref } from 'vue'
  import myInput from '@/components/Input/Input.vue'

  const input = ref('')
</script>
