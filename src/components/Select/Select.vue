<template>
  <div class="my-select">
    <Tooltip
      :effect="effect"
      trigger="click"
    >
      <Input
        v-model="inputValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :clearable="clearable"
      >
      </Input>
      <template #content>
        <ul class="my-select__menu"></ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Input from '../Input/Input.vue'
  import Tooltip from '../Tooltip/Tooltip.vue'
  import type { SelectProps } from './types'

  const inputValue = ref('')
  defineProps<SelectProps>()
</script>
