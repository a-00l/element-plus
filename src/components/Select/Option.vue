<template>
  <li
    class="my-select__menu-item"
    :class="{
      'is-disabled': disabled,
      'is-selected': value === stateSelect.selectOption.value,
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
  import { inject, onMounted, ref, watchEffect } from 'vue'
  import { addOption } from './method'
  import { SelectContexKey, type OptionProps, type SelectContext } from './types'
  defineOptions({
    name: 'MyOption',
  })

  const props = withDefaults(defineProps<OptionProps>(), {
    disabled: false,
  })

  const { emits, stateSelect, popper, options, searchValue } = inject(
    SelectContexKey,
  ) as SelectContext

  // 当开启filterable搜索功能时，判断当前option是否满足搜索条件
  // 使用 ref 存储 isMatch 的值
  const isMatch = ref(true)

  watchEffect(() => {
    if (!searchValue.value.trim()) {
      isMatch.value = true
      return
    }

    isMatch.value = options.value.some((item) =>
      item.value?.toString().includes(props.value.toString()),
    )
  })

  const handleClick = () => {
    if (props.disabled) return

    stateSelect.inputValue = props.label ? props.label : props.value
    emits('update:modelValue', props.value)

    // 记录选中的option
    stateSelect.selectOption = {
      label: props.label,
      value: props.value,
    }
    // 隐藏下拉菜单
    popper.value.hide()
  }

  onMounted(() => {
    // 将option添加到optionArray数组中
    addOption(props)
  })
</script>
