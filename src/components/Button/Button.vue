<template>
  <button
    class="my-button"
    :disabled="disabled || formItem?.disabled || loading"
    :class="{
      [`my-button--${type}`]: type,
      [`my-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || formItem?.disabled,
      'is-circle': circle,
      'is-loading': loading,
    }"
  >
    <Icon
      icon="spinner"
      v-if="loading"
      spin
    >
    </Icon>
    <Icon
      :icon="icon"
      v-if="icon"
    >
    </Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonProps } from './types'
  import Icon from '../Icon/Icon.vue'
  import { FormItemContextKey } from '../Form/types'
  import { inject, ref } from 'vue'
  const formItem = inject(FormItemContextKey)
  defineOptions({
    name: 'MyButton',
  })

  const props = withDefaults(defineProps<ButtonProps>(), {
    plain: false,
    round: false,
    disabled: false,
    circle: false,
    loading: false,
  })

  const loading = ref(props.loading)
</script>
