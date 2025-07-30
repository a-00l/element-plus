<template>
  <div
    class="my-select"
    @click="handleClick"
  >
    <Tooltip
      :effect="effect"
      trigger="click"
      v-model:visible="isActive"
      ref="popperRef"
    >
      <Input
        v-model="inputValue"
        :placeholder="currentPlaceholder"
        :disabled="disabled"
        :clearable="clearable"
        :readonly="!filterable"
        @input="search"
      >
        <template #suffix>
          <Icon
            icon="angle-down"
            class="header-angle"
            :class="{ 'is-active': isActive }"
          />
        </template>
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
  import Icon from '../Icon/Icon.vue'
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

  const popperRef = ref()
  const currentPlaceholder = ref(props.placeholder)
  // 记录下拉菜单显示与否
  const isActive = ref()
  // 输入框中的值
  const inputValue = ref('')
  // 搜索框中的值
  const searchValue = ref('')
  const search = (e: Event) => {
    if (!props.filterable) return

    const target = e.target as HTMLInputElement
    // 用来记录搜索框中的值
    searchValue.value = target.value
  }

  const handleClick = () => {
    if (props.disabled) return

    // TODO：点击下拉菜单，将输入框中的值设置为占位符
  }

  provide(SelectContexKey, {
    inputValue,
    searchValue,
    emits,
    popper: popperRef,
  })
</script>
