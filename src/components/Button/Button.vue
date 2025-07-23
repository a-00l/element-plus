<template>
  <button
    class="my-button"
    :class="{
      [`my-button--${type}`]: type,
      [`my-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
      'is-circle': circle,
    }"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonProps } from './types'

  defineOptions({
    name: 'MyButton',
  })

  defineProps<ButtonProps>()
</script>
