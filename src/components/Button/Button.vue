<template>
  <button
    class="my-button"
    :disabled="disabled || formItem?.disabled"
    :class="{
      [`my-button--${type}`]: type,
      [`my-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || formItem?.disabled,
      'is-circle': circle,
    }"
  >
    <Icon
      v-if="icon"
      :icon="icon"
    >
    </Icon>
    <span v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonProps } from './types'
  import Icon from '../Icon/Icon.vue'
  import { FormItemContextKey } from '../Form/types'
  import { inject } from 'vue'
  const formItem = inject(FormItemContextKey)
  defineOptions({
    name: 'MyButton',
  })

  defineProps<ButtonProps>()
</script>
