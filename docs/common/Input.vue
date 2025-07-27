<template>
  <Input
    v-model="inp"
    showPassword
    disabled
  >
    <template #suffix>
      <h1>1</h1>
    </template>
    <template #prefix>
      <h1>2</h1>
    </template>
    <template #prepend>
      <div>3</div>
    </template>
    <template #append>
      <div>123</div>
    </template>
  </Input>
</template>

<script setup>
  import Input from '@/components/Input/Input.vue'
</script>
