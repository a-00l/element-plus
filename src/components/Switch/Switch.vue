<template>
  <div class="my-switch">
    <input
      type="checkbox"
      class="my-switch__input"
    />
    <span class="my-switch__core">
      <div class="my-switch__action"></div>
    </span>
  </div>
</template>

<script setup lang="ts">
  import type { SwitchProps } from './types'

  defineProps<SwitchProps>()
</script>
