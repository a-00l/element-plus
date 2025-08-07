<template>
  <my-input
    v-model="input"
    placeholder="Please input"
    style="width: 240px"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import myInput from '@/components/Input/Input.vue'

  const input = ref('')
</script>
