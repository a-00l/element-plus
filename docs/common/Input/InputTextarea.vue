<template>
  <my-input
    v-model="textarea"
    style="width: 240px"
    :rows="2"
    type="textarea"
    placeholder="Please input"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import myInput from '@/components/Input/Input.vue'

  const textarea = ref('')
</script>
