<template>
  <Button
    @click="createMessage({ message: '创建消息', duration: 0, showClose: true, type: 'success' })"
    >创建消息
  </Button>
</template>

<script setup>
  import Message from '@/components/message/Message.vue'
  import { createMessage } from '@/components/message/method'
</script>

<style lang="scss" scoped></style>
