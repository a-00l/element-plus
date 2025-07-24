<template>
  <li
    v-if="divided"
    class="my-dropdown-item-divided"
  ></li>
  <li
    class="my-dropdown-item"
    :class="{ 'is-disabled': disabled }"
  >
    <slot></slot>
  </li>
</template>

<script setup lang="ts">
  import type { DropdownItemProps } from './types'

  const props = defineProps<DropdownItemProps>()
</script>
