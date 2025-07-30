<template>
  <li
    class="my-select__menu-item"
    :class="{ 'is-disable': disabled }"
    @click="handleClick"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script setup lang="ts">
  import { inject, onMounted } from 'vue'
  import { addOption } from './method'
  import { SelectContexKey, type OptionProps, type SelectContext } from './types'

  const props = withDefaults(defineProps<OptionProps>(), {
    disabled: false,
  })

  const { emits, inputValue } = inject(SelectContexKey) as SelectContext
  const handleClick = () => {
    inputValue.value = props.label ? props.label : props.value

    emits('update:modelValue', props.value)
  }

  onMounted(() => {
    // 将option添加到optionArray数组中
    addOption(props)
  })
</script>
