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
        <ul class="my-select__menu">
          <slot></slot>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import { provide, ref } from 'vue'
  import Input from '../Input/Input.vue'
  import Tooltip from '../Tooltip/Tooltip.vue'
  import { SelectContexKey, type SelectEmits, type SelectProps } from './types'

  withDefaults(defineProps<SelectProps>(), {
    placeholder: '请选择',
    disabled: false,
    clearable: false,
    effect: 'light',
  })
  const emits = defineEmits<SelectEmits>()
  const inputValue = ref()

  provide(SelectContexKey, {
    inputValue,
    emits,
  })
</script>
