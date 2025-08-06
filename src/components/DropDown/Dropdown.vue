<template>
  <div class="my-dropdown">
    <Tooltip
      ref="tooltipRef"
      :placement="placement"
      :trigger="trigger"
      :popperOptions="popperOptions"
      effect="light"
      v-model:visible="visible"
      :hideAfter="hideTimeout"
      :showAfter="showTimeout"
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
  import type { TooltipInstance } from '../Tooltip/types'
  import {
    DropdownSymbolKey,
    type commandType,
    type DropdownEmits,
    type DropdownInstance,
    type DropdownProps,
  } from './types'
  import { provide, ref, watch } from 'vue'

  withDefaults(defineProps<DropdownProps>(), {
    trigger: 'hover',
    showTimeout: 150,
    hideTimeout: 150,
  })

  const tooltipRef = ref<TooltipInstance>()
  const emits = defineEmits<DropdownEmits>()
  const visible = ref(false)
  watch(visible, (val) => {
    emits('visible-change', val)
  })

  const command = (command: commandType) => {
    emits('command', command)
  }

  provide(DropdownSymbolKey, { command })
  defineExpose<DropdownInstance>({
    handleOpen: () => tooltipRef.value?.show(),
    handleClose: () => tooltipRef.value?.hide(),
  })
</script>
