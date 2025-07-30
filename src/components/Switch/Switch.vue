<template>
  <div
    class="my-switch"
    :class="{ 'is-checked': switchToggle }"
    @click="toggleSwitch"
  >
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
  import { ref } from 'vue'
  import type { SwitchProps } from './types'

  const props = withDefaults(defineProps<SwitchProps>(), {
    modelValue: false,
  })

  const switchToggle = ref(props.modelValue)
  const toggleSwitch = () => {
    switchToggle.value = !switchToggle.value
  }
</script>
