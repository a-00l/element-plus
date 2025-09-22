<template>
  <div class="flex gap-4 mb-4">
    <span>Using attributes</span>
    <my-input
      v-model="input1"
      style="width: 240px"
      placeholder="Pick a date"
      suffix-icon="share-from-square"
    />
    <my-input
      v-model="input2"
      style="width: 240px"
      placeholder="Type something"
      prefix-icon="hand-pointer"
    />
  </div>
  <div class="flex gap-4">
    <span>Using slots</span>
    <my-input
      v-model="input3"
      style="width: 240px"
      placeholder="Pick a date"
    >
      <template #suffix>
        <my-icon icon="share-from-square"></my-icon>
      </template>
    </my-input>
    <my-input
      v-model="input4"
      style="width: 240px"
      placeholder="Type something"
    >
      <template #prefix>
        <my-icon icon="hand-pointer"></my-icon>
      </template>
    </my-input>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  const input4 = ref('')
</script>

<style scoped>
  .flex {
    display: flex;
  }

  .gap-4 {
    gap: 1rem;
  }

  .mb-4 {
    margin-bottom: 1rem;
  }
</style>
