<template>
  <li
    v-if="divided"
    class="my-dropdown-item-divided"
  ></li>
  <li
    class="my-dropdown-item"
    :class="{ 'is-disabled': disabled }"
    @click="handleclick(command)"
  >
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  import {
    DropdownSymbolKey,
    type commandType,
    type DropdownContext,
    type DropdownItemProps,
  } from './types'

  const props = withDefaults(defineProps<DropdownItemProps>(), {
    disabled: false,
    divided: false,
  })

  const dropdown = inject(DropdownSymbolKey) as DropdownContext
  const handleclick = (command: commandType) => {
    if (props.disabled) return

    dropdown.visible.value = false
    dropdown.command(command)
  }
</script>
