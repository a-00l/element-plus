<template>
  <li
    class="my-select__menu-item"
    :class="{ 'is-disable': disabled }"
    @click="handleClick"
    v-show="isMatch"
  >
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script setup lang="ts">
  import { computed, inject, onMounted } from 'vue'
  import { addOption, findOption } from './method'
  import { SelectContexKey, type OptionProps, type SelectContext } from './types'

  const props = withDefaults(defineProps<OptionProps>(), {
    disabled: false,
  })

  const { emits, inputValue, searchValue } = inject(SelectContexKey) as SelectContext
  // 当开启filterable搜索功能时，判断当前option是否满足搜索条件
  const isMatch = computed(() => {
    console.log(searchValue.value)
    // 未开启搜索功能
    if (searchValue.value.trim() === '') return true

    const options = findOption(searchValue.value)

    return options.some((item) => item.value.toString().includes(props.value.toString()))
  })

  const handleClick = () => {
    inputValue.value = props.label ? props.label : props.value

    emits('update:modelValue', props.value)
  }

  onMounted(() => {
    // 将option添加到optionArray数组中
    addOption(props)
  })
</script>
