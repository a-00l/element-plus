<template>
  <my-button
    :plain="true"
    @click="open"
    >Show message</my-button
  >

  <my-button
    :plain="true"
    @click="openVn"
    >VNode</my-button
  >
</template>

<script setup>
  import myButton from '@/components/Button/Button.vue'
  import { createMessage } from '@/components/Message/method.ts'
  import { h } from 'vue'

  const open = () => {
    createMessage('This is a message.')
  }

  const openVn = () => {
    createMessage({
      message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
      ]),
    })
  }
</script>
