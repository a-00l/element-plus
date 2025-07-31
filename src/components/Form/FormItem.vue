<template>
  <div class="my-form-item">
    <div class="my-form-item__label">
      <slot
        name="label"
        :label="label"
        >{{ label }}
      </slot>
    </div>
    <div class="my-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FormItemProps } from './types'

  defineProps<FormItemProps>()
</script>
