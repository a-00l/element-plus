<template>
  <button @click="handleClick">click</button>
</template>

<script lang="ts">
  export default {
    methods: {
      handleClick() {
        this.$message({
          message: '这是一条消息',
          type: 'success',
          showClose: true,
          close() {
            console.log('close')
          },
        })
      },
    },
  }
</script>

<style scoped></style>
