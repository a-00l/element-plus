<template>
  <div
    class="my-select"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <Tooltip
      :effect="effect"
      trigger="click"
      v-model:visible="isActive"
      ref="popperRef"
      :popper-option="sameWidth"
    >
      <Input
        v-model="stateSelect.inputValue"
        :placeholder="setPlaceholder || placeholder"
        :disabled="disabled"
        :clearable="clearable"
        :readonly="!filterable"
        @input="search"
      >
        <template #suffix>
          <Icon
            v-if="showClearIcon"
            icon="times-circle"
            class="my-input__icon my-input__clear"
            @click.stop="clear"
          >
          </Icon>

          <Icon
            v-else
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
  import { computed, provide, reactive, ref } from 'vue'
  import Input from '../Input/Input.vue'
  import Tooltip from '../Tooltip/Tooltip.vue'
  import { SelectContexKey, type SelectEmits, type SelectProps, type StateSelect } from './types'

  const sameWidth: any = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      {
        name: 'sameWidth',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: ({ state }: any) => {
          state.styles.popper.width = `${state.rects.reference.width}px`
        },
        effect: ({ state }: any) => {
          state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`
        },
      },
    ],
  }

  const props = withDefaults(defineProps<SelectProps>(), {
    placeholder: '请选择',
    disabled: false,
    clearable: false,
    effect: 'light',
  })
  const emits = defineEmits<SelectEmits>()

  const popperRef = ref()
  const stateSelect: StateSelect = reactive({
    inputValue: '',
    selectOption: {
      label: '',
      value: '',
    },
  })
  // 记录下拉菜单显示与否
  const isActive = ref()
  // 搜索框中的值
  const searchValue = ref('')
  const search = (e: Event) => {
    if (!props.filterable) return

    const target = e.target as HTMLInputElement
    // 用来记录搜索框中的值
    searchValue.value = target.value
  }

  const clear = () => {
    // 清空select选择状态
    stateSelect.inputValue = ''
    stateSelect.selectOption = {
      label: '',
      value: '',
    }
  }

  const isHover = ref(false)
  // 是否显示clearable图标
  const showClearIcon = computed(
    () => stateSelect.selectOption.label && props.clearable && !props.disabled && isHover.value,
  )

  // 设置input的placeholder
  const setPlaceholder = computed(() => {
    if (!isActive.value) return

    stateSelect.inputValue = ''
    return stateSelect.selectOption.label?.toString() || props.placeholder
  })

  provide(SelectContexKey, {
    searchValue,
    emits,
    popper: popperRef,
    stateSelect,
    filterMethod: props.filterMethod,
    remote: props.remote,
    remoteMethod: props.remoteMethod,
  })
</script>
