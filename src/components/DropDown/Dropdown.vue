<template>
  <div class="my-dropdown">
    <Tooltip
      :placement="placement"
      :trigger="trigger"
      :popperOptions="popperOptions"
      effect="light"
      v-model:visible="visible"
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
  import {
    DropdownSymbolKey,
    type commandType,
    type DropdownEmits,
    type DropdownProps,
  } from './types'
  import { provide, ref, watch } from 'vue'

  withDefaults(defineProps<DropdownProps>(), {
    trigger: 'click',
  })

  const emits = defineEmits<DropdownEmits>()
  const visible = ref(false)
  watch(visible, (val) => {
    emits('visible-change', val)
  })

  const command = (command: commandType) => {
    emits('command', command)
  }

  provide(DropdownSymbolKey, { command })
</script>
