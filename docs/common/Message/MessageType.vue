<template>
  <my-button
    :plain="true"
    @click="open5"
    >Primary</my-button
  >
  <my-button
    :plain="true"
    @click="open2"
    >Success</my-button
  >
  <my-button
    :plain="true"
    @click="open3"
    >Warning</my-button
  >
  <my-button
    :plain="true"
    @click="open1"
    >Info</my-button
  >
  <my-button
    :plain="true"
    @click="open4"
    >Error</my-button
  >
</template>

<script setup>
  import myButton from '@/components/Button/Button.vue'
  import { createMessage } from '@/components/Message/method.ts'

  const open1 = () => {
    createMessage('This is a info message.')
  }
  const open2 = () => {
    createMessage({
      message: 'Congrats, this is a success message.',
      type: 'success',
    })
  }
  const open3 = () => {
    createMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning',
    })
  }
  const open4 = () => {
    createMessage.error('Oops, this is a error message.')
  }
  const open5 = () => {
    createMessage.primary('This is a primary message.')
  }
</script>
