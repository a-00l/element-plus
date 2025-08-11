<template>
  <li
    class="my-select__menu-item"
    :class="{
      'is-disabled': disabled,
      'is-selected': value === stateSelect.inputValue,
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
  import { addOption, findOption } from './method'
  import { SelectContexKey, type OptionProps, type SelectContext } from './types'

  const props = withDefaults(defineProps<OptionProps>(), {
    disabled: false,
  })

  let options = ref<OptionProps[]>([])
  const { emits, stateSelect, searchValue, popper, filterMethod, remoteMethod, remote } = inject(
    SelectContexKey,
  ) as SelectContext
  // 当开启filterable搜索功能时，判断当前option是否满足搜索条件
  // 使用 ref 存储 isMatch 的值
  const isMatch = ref(true)

  watchEffect(async () => {
    // 未开启搜索功能
    if (searchValue.value.trim() === '') {
      isMatch.value = true
      return
    }

    // 如果自定义了过滤方法，则用该方法
    if (typeof filterMethod === 'function') {
      // 清空原有的 options
      options.value = []
      const newOptions = filterMethod(searchValue.value)
      options.value.push(...newOptions)
    }
    // 如果自定义了远程搜索方法，则用该方法
    else if (typeof remoteMethod === 'function' && remote) {
      try {
        // 清空原有的 options
        options.value = []
        const newOptions = await remoteMethod(searchValue.value)
        options.value.push(...newOptions)
      } catch (error) {
        console.log('远程搜索失败', error)
        isMatch.value = false
        return
      }
    }
    // 默认搜索方法
    else {
      // 清空原有的 options
      options.value = []
      const newOptions = findOption(searchValue.value)
      options.value.push(...newOptions)
    }

    isMatch.value = options.value.some((item) =>
      item.label?.toString().includes(props.value.toString()),
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
