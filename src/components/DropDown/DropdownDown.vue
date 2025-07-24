<template>
  <div class="my-dropdown">
    <Tooltip
      :placement="placement"
      :trigger="trigger"
      :popperOptions="popperOptions"
    >
      <slot></slot>
      <template #content>
        <slot name="dropdown"></slot>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
  import Tooltip from '../Tooltip/Tooltip.vue'
  import type { DropdownProps } from './types'

  const props = defineProps<DropdownProps>()
</script>
