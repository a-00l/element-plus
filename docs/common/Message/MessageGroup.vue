<template>
  <my-button
    :plain="true"
    @click="open"
    >Show message
  </my-button>
</template>

<script setup>
  import createMessage from '@/components/Message/method'
  const open = () => {
    createMessage({
      message: 'This is a message.',
      grouping: true,
      type: 'success',
    })
  }
</script>
