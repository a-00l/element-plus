<template>
  <div class="my-collapse-item">
    <div
      class="my-collapse-item__header"
      @click="toggleShow(name)"
      :class="{
        'is-active': isActive,
        'is-disabled': disabled,
      }"
    >
      <span class="my-collapse-item__title">
        <slot name="title">{{ title }}</slot>
      </span>
      <!-- icon箭头 -->
      <Icon
        icon="angle-right"
        class="angle-header"
      >
      </Icon>
    </div>
    <Transition
      name="slide"
      v-on="transitionEvents"
    >
      <div
        class="my-collapse-item__wrapper"
        v-show="isActive"
      >
        <div
          class="my-collapse-item__content"
          :class="{ 'is-active': isActive }"
        >
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { computed, inject, ref } from 'vue'
  import Icon from '../Icon/Icon.vue'
  import { CollapseContextKey, type CollapseItemProps } from './types'

  const props = defineProps<CollapseItemProps>()
  // 获取Collapse组件的方法
  const collapseContext = inject(CollapseContextKey)

  const isActive = computed(() => {
    return collapseContext?.activeName.value.includes(props.name)
  })

  // 切换显示
  const toggleShow = (name: string) => {
    if (!props.disabled) {
      collapseContext?.setActiveName(name)
    }
  }

  const transitionEvents: Record<string, (el: HTMLElement) => void> = {
    // 动画前状态
    beforeEnter(el) {
      el.style.height = '0px'
    },
    // 动画执行状态
    enter(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    // 动画离开前状态
    beforeLeave(el) {
      el.style.height = `${el.scrollHeight}px`
    },
    // 动画执行状态
    leave(el) {
      el.style.height = '0px'
    },
    // 动画结束状态
    afterLeave(el) {
      el.style.height = ''
    },
  }
</script>
