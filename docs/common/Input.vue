<template>
  <Input v-model="inp"></Input>
</template>

<script setup>
  import Input from '@/components/Input/Input.vue'
  import { ref, watch } from 'vue'

  const inp = ref()
  watch(inp, (newVal, oldVal) => {
    console.log(newVal, oldVal)
  })
</script>
