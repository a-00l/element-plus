<template>
  <div
    class="my-tooltip"
    ref="parentRef"
  >
    <div
      class="my-tooltip__trigger"
      ref="triggerRef"
      v-on="eventTrigger"
    >
      <slot></slot>
    </div>
    <Transition :name="transition">
      <div
        class="my-tooltip__popper"
        ref="popperRef"
        v-show="isPopper"
        :class="{
          'is-dark': effect === 'dark',
          'is-light': effect === 'light',
        }"
        v-on="eventTrigger"
      >
        <slot name="content">{{ content }}</slot>
        <div
          id="arrow"
          data-popper-arrow
          :class="{
            'is-dark': effect === 'dark',
            'is-light': effect === 'light',
          }"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { createPopper } from '@popperjs/core'
  import type { TooltipEmits, TooltipInstance, TooltipProps } from './types'
  import { nextTick, onMounted, reactive, ref, watch } from 'vue'
  import { debounce } from '../../utils/debounce'
  import { useClickOutside } from '../../hooks/useClickOutside'

  const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'hover',
    effect: 'dark',
    showAfter: 0,
    hideAfter: 200,
    transition: 'tooltip',
  })

  const emits = defineEmits<TooltipEmits>()

  const triggerRef = ref<HTMLDivElement>()
  const popperRef = ref<HTMLDivElement>()
  const parentRef = ref<HTMLDivElement>()
  const isPopper = ref(false)

  const eventTrigger = reactive<Record<string, () => void>>({})
  // 创建popper
  const setPopper = () => {
    createPopper(triggerRef.value!, popperRef.value!, {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
      placement: props.placement,
      ...props.popperOption,
    })
  }

  // 显示提示框
  const show = () => {
    isPopper.value = true
    emits('update:visible', true)
  }

  // 隐藏提示框
  const hide = () => {
    isPopper.value = false
    emits('update:visible', false)
  }

  // 封装防抖函数
  const debounceShow = debounce(show, props.showAfter)
  const debounceHide = debounce(hide, props.hideAfter)

  // 显示提示框，取消隐藏提示框的防抖函数
  const showFinal = () => {
    debounceHide.cancel()
    debounceShow()
  }

  // 隐藏提示框，取消显示提示框的防抖函数
  const hideFinal = () => {
    debounceShow.cancel()
    debounceHide()
  }

  const toggleFinal = () => {
    isPopper.value ? hideFinal() : showFinal()
  }

  watch(isPopper, (val) => {
    // 显示提示框，创建popper
    if (val) {
      nextTick(() => {
        setPopper()
      })
    }
  })

  // 外面改变visible，里面同步修改isPopper
  watch(
    () => props.visible,
    (val) => {
      val ? showFinal() : hideFinal()
    },
  )

  onMounted(() => {
    // 更具trigger属性，绑定对应事件
    if (props.trigger === 'hover') {
      eventTrigger['mouseenter'] = showFinal
      eventTrigger['mouseleave'] = hideFinal
    } else if (props.trigger === 'click' && !props.virtualTriggering) {
      eventTrigger['click'] = toggleFinal
    }
  })

  if (props.trigger === 'click' && !props.virtualTriggering) {
    // 点击外部元素，隐藏提示框
    useClickOutside(parentRef, () => {
      if (isPopper.value) {
        hideFinal()
      }
    })
  }

  // 暴露方法
  defineExpose<TooltipInstance>({
    show,
    hide,
  })
</script>

<style scoped></style>
