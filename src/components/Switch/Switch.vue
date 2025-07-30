<template>
  <div
    class="my-switch"
    :class="{
      'is-checked': switchToggle,
      [`my-switch--${size}`]: size,
    }"
    @click="toggleSwitch"
  >
    <input
      type="checkbox"
      class="my-switch__input"
    />
    <span
      v-if="activeText"
      class="my-switch__label my-switch__label--left"
      :class="{ 'is-active': !switchToggle }"
    >
      <span>{{ inactiveText }}</span>
    </span>

    <span class="my-switch__core">
      <div class="el-switch__inner">
        <span class="is-text">完整展示多个内容</span>
      </div>
      <div class="my-switch__action"></div>
    </span>

    <span
      v-if="activeText"
      class="my-switch__label my-switch__label--right"
      :class="{ 'is-active': switchToggle }"
    >
      <span>{{ activeText }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { SwitchEmits, SwitchProps } from './types'

  const props = withDefaults(defineProps<SwitchProps>(), {
    activeValue: true,
    inactiveValue: false,
  })

  const emits = defineEmits<SwitchEmits>()
  const switchToggle = ref(props.inactiveValue)
  // 切换switch
  const toggleSwitch = () => {
    switchToggle.value = !switchToggle.value

    emits('update:modelValue', switchToggle.value)
  }
</script>
