<template>
  <div class="my-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { provide } from 'vue'
  import { FormContextKey, type FormProps } from './types'

  const props = defineProps<FormProps>()

  provide(FormContextKey, {
    model: props.model,
    rules: props.rules,
  })
</script>
