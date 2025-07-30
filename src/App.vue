<script setup lang="ts">
  import { ref } from 'vue'
  import Button from './components/Button/Button.vue'
  import Switch from './components/Switch/Switch.vue'
  const value = ref(false)
</script>

<template>
  <Switch v-model="value"></Switch>
</template>

<style scoped></style>
