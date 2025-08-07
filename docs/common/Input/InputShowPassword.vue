<template>
  <my-input
    v-model="input"
    style="width: 240px"
    type="text"
    placeholder="Please input password"
    show-password
  />
</template>

<script setup>
  import myInput from '@/components/Input/Input.vue'
  import { ref } from 'vue'

  const input = ref('')
</script>
