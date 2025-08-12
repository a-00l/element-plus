<template>
  <div class="my-select">
    <Tooltip
      :effect="effect"
      trigger="click"
      v-model:visible="isActive"
      ref="popperRef"
      :hide-after="0"
      :popper-option="sameWidth"
    >
      <!-- 包裹 Input 组件的 div，监听鼠标事件 -->
      <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="input-wrapper"
      >
        <Input
          v-model="stateSelect.inputValue"
          :placeholder="setPlaceholder || placeholder"
          :disabled="disabled"
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
      </div>
      <template #content>
        <ul class="my-select__menu">
          <slot></slot>
          <div
            class="my-select__empty"
            v-if="options.length === 0"
          >
            No Date
          </div>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import Icon from '../Icon/Icon.vue'
  import { computed, onMounted, provide, reactive, ref, watch } from 'vue'
  import Input from '../Input/Input.vue'
  import Tooltip from '../Tooltip/Tooltip.vue'
  import {
    SelectContexKey,
    type OptionProps,
    type SelectEmits,
    type SelectProps,
    type StateSelect,
  } from './types'
  import { findOption } from './method'
  defineOptions({
    name: 'MySelect',
  })

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
  watch(isActive, (newVal) => {
    if (newVal) {
      const mockEvent = { target: { value: '' } } as unknown as Event

      search(mockEvent)
    }
  })

  // 搜索框中的值
  const searchValue = ref('')
  const options = ref<OptionProps[]>([])

  const search = async (e: Event) => {
    if (!props.filterable) return
    debugger
    const target = e.target as HTMLInputElement
    // 用来记录搜索框中的值
    searchValue.value = target.value

    // 未开启搜索功能
    if (searchValue.value.trim() === '') {
      return
    }

    searchMethod()
  }

  const searchMethod = async () => {
    // 如果自定义了过滤方法，则用该方法
    if (typeof props.filterMethod === 'function') {
      // 清空原有的 options
      options.value = []
      const newOptions = props.filterMethod(searchValue.value)
      options.value.push(...newOptions)
    }
    // 如果自定义了远程搜索方法，则用该方法
    else if (typeof props.remoteMethod === 'function' && props.remote) {
      try {
        // 清空原有的 options
        options.value = []
        const newOptions = await props.remoteMethod(searchValue.value)

        options.value.push(...newOptions)
      } catch (error) {
        console.log('远程搜索失败', error)
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
    const label = stateSelect.selectOption.label?.toString()
    if (!isActive.value) {
      stateSelect.inputValue = label ?? ''

      return
    }
    stateSelect.inputValue = ''
    return label || props.placeholder
  })

  onMounted(() => {
    searchMethod()
  })

  provide(SelectContexKey, {
    emits,
    popper: popperRef,
    searchValue,
    stateSelect,
    options,
  })
</script>
