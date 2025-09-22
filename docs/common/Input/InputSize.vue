<template>
  <div class="flex gap-4 mb-4">
    <my-input
      v-model="input1"
      style="width: 240px"
      size="large"
      placeholder="Please Input"
    />
    <my-input
      v-model="input2"
      style="width: 240px"
      placeholder="Please Input"
    />
    <my-input
      v-model="input3"
      style="width: 240px"
      size="small"
      placeholder="Please Input"
    />
  </div>
  <div class="flex gap-4 mb-4">
    <my-input
      v-model="input1"
      style="width: 240px"
      size="large"
      placeholder="Please Input"
      suffix-icon="magnifying-glass"
    />
    <my-input
      v-model="input2"
      style="width: 240px"
      placeholder="Please Input"
      suffix-icon="magnifying-glass"
    />
    <my-input
      v-model="input3"
      style="width: 240px"
      size="small"
      placeholder="Please Input"
      suffix-icon="magnifying-glass"
    />
  </div>
  <div class="flex gap-4">
    <my-input
      v-model="input1"
      style="width: 240px"
      size="large"
      placeholder="Please Input"
      prefix-icon="magnifying-glass"
    />
    <my-input
      v-model="input2"
      style="width: 240px"
      placeholder="Please Input"
      prefix-icon="magnifying-glass"
    />
    <my-input
      v-model="input3"
      style="width: 240px"
      size="small"
      placeholder="Please Input"
      prefix-icon="magnifying-glass"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
</script>

<style lang="css" scoped>
  .flex {
    display: flex;
    align-items: center;
  }

  .gap-4 {
    gap: 1rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }
</style>
