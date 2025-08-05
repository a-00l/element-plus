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
    ref="btnRef"
  >
    <Icon
      :icon="loadingIcon"
      v-if="loading"
      spin
    >
    </Icon>
    <Icon
      :icon="icon"
      v-if="icon"
    >
    </Icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
  import type { ButtonInstance, ButtonProps } from './types'
  import Icon from '../Icon/Icon.vue'
  import { FormItemContextKey } from '../Form/types'
  import { inject, ref, type Ref } from 'vue'
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
    loadingIcon: 'spinner',
  })

  const loading = ref(props.loading)
  const btnRef = ref() as Ref<HTMLButtonElement>

  defineExpose<ButtonInstance>({
    ref: btnRef,
    size: props.size ?? 'default',
    type: props.type,
    disabled: props.disabled,
  })
</script>
