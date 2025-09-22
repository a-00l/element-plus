<template>
  <my-switch
    v-model="value"
    size="large"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <my-switch
    v-model="value"
    active-text="Open"
    inactive-text="Close"
  />
  <br />
  <my-switch
    v-model="value"
    size="small"
    active-text="Open"
    inactive-text="Close"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const value = ref(true)
</script>
