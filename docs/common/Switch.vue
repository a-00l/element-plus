<template>
  <Switch v-model="value"></Switch>
</template>

<script setup>
  import Switch from '@/components/Switch/Switch.vue'
  import { ref } from 'vue'

  const value = ref(false)
</script>
