<template>
  <my-button
    :plain="true"
    @click="open6"
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
  <my-button
    :plain="true"
    @click="open5"
    >Won't close automatically</my-button
  >
</template>

<script setup>
  import { createMessage } from '@/components/Message/method.ts'

  const open1 = () => {
    createMessage({
      showClose: true,
      message: 'This is a info message.',
    })
  }
  const open2 = () => {
    createMessage({
      showClose: true,
      message: 'Congrats, this is a success message.',
      type: 'success',
    })
  }
  const open3 = () => {
    createMessage({
      showClose: true,
      message: 'Warning, this is a warning message.',
      type: 'warning',
    })
  }
  const open4 = () => {
    createMessage({
      showClose: true,
      message: 'Oops, this is a error message.',
      type: 'error',
    })
  }
  const open5 = () => {
    createMessage({
      showClose: true,
      message: 'Oops, this is a message that does not automatically close.',
    })
  }
  const open6 = () => {
    createMessage({
      showClose: true,
      message: 'This is a primary message.',
      type: 'primary',
    })
  }
</script>
