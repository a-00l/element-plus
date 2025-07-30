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
        :readonly="!filterable"
        @input="search"
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

  const props = withDefaults(defineProps<SelectProps>(), {
    placeholder: '请选择',
    disabled: false,
    clearable: false,
    effect: 'light',
  })
  const emits = defineEmits<SelectEmits>()
  const inputValue = ref()
  const searchValue = ref('')
  const search = (e: Event) => {
    if (!props.filterable) return

    const target = e.target as HTMLInputElement
    // 用来记录搜索框中的值
    searchValue.value = target.value
  }

  provide(SelectContexKey, {
    inputValue,
    searchValue,
    emits,
  })
</script>
