<template>
  <li
    class="my-select__menu-item"
    :class="{
      'is-disable': disabled,
      'is-selected': value === inputValue,
    }"
    @click.stop="handleClick"
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

  const { emits, inputValue, searchValue, popper } = inject(SelectContexKey) as SelectContext
  // 当开启filterable搜索功能时，判断当前option是否满足搜索条件
  const isMatch = computed(() => {
    // 未开启搜索功能
    if (searchValue.value.trim() === '') return true

    const options = findOption(searchValue.value)

    return options.some((item) => item.value.toString().includes(props.value.toString()))
  })

  const handleClick = () => {
    if (props.disabled) return

    inputValue.value = props.label ? props.label : props.value
    emits('update:modelValue', props.value)

    // 隐藏下拉菜单
    popper.value.hide()
  }

  onMounted(() => {
    // 将option添加到optionArray数组中
    addOption(props)
  })
</script>
