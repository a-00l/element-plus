<template>
  <my-button
    :plain="true"
    @click="open"
    >Show message</my-button
  >
</template>

<script setup>
  import myButton from '@/components/Button/Button.vue'
  import { createMessage } from '@/components/Message/method.ts'

  const open = () => {
    createMessage('This is a message.')
  }
</script>
