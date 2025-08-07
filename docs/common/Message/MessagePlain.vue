<template>
  <my-button
    :plain="true"
    @click="open5"
    >Primary
  </my-button>
  <my-button
    :plain="true"
    @click="open1"
    >Success
  </my-button>
  <my-button
    :plain="true"
    @click="open2"
    >Warning
  </my-button>
  <my-button
    :plain="true"
    @click="open3"
    >Info
  </my-button>
  <my-button
    :plain="true"
    @click="open4"
    >Error
  </my-button>
</template>

<script setup>
  import myButton from '@/components/Button/Button.vue'
  import { createMessage } from '@/components/Message/method.ts'

  const open1 = () => {
    createMessage({
      message: 'Congrats, this is a success message.',
      type: 'success',
      plain: true,
    })
  }
  const open2 = () => {
    createMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      plain: true,
    })
  }
  const open3 = () => {
    createMessage({
      message: 'This is a info message.',
      type: 'info',
      plain: true,
    })
  }
  const open4 = () => {
    createMessage({
      message: 'Oops, this is a error message.',
      type: 'error',
      plain: true,
    })
  }
  const open5 = () => {
    createMessage({
      message: 'This is a primary message.',
      type: 'primary',
      plain: true,
    })
  }
</script>
