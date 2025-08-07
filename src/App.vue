<template>
  <button @click="handleClick">click</button>
  <myInput
    v-model="input"
    placeholder="Please input"
    maxlength="240"
  >
  </myInput>
</template>

<script lang="ts">
  import myInput from '@/components/Input/Input.vue'
  import { ref } from 'vue'
  export default {
    components: {
      myInput,
    },
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
    setup() {
      const input = ref('')
      return {
        input,
      }
    },
  }
</script>

<style scoped></style>
