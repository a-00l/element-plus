<template>
  <Select disabled>
    <Option
      value="1"
      label="选项1"
      >选项1</Option
    >
    <Option
      value="2"
      label="选项2"
      >选项2</Option
    >
    <Option
      value="3"
      disabled
      label="选项3"
      >选项3
    </Option>
  </Select>
</template>

<script setup>
  import Select from '@/components/Select/Select.vue'
  import Option from '@/components/Select/Option.vue'
</script>
