<template>
  <div class="my-tooltip">
    <div
      class="my-tooltip__trigger"
      ref="triggerRef"
    >
      <slot></slot>
    </div>
    <div
      class="my-tooltip__popper"
      ref="popperRef"
    >
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { createPopper } from '@popperjs/core'
  import type { TooltipProps } from './types'
  import { onMounted, ref } from 'vue'

  const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom-start',
  })

  const triggerRef = ref<HTMLDivElement>()
  const popperRef = ref<HTMLDivElement>()
  onMounted(() => {
    console.log(triggerRef.value, popperRef.value)

    createPopper(triggerRef.value!, popperRef.value!, {
      placement: props.placement,
    })
  })
</script>

<style scoped></style>
