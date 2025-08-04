<template>
  <div
    class="my-switch"
    :class="{
      'is-checked': switchToggle,
      'is-disabled': disabled,
      [`my-switch--${size}`]: size,
    }"
    @click="toggleSwitch"
  >
    <input
      type="checkbox"
      class="my-switch__input"
      :name="name"
      :id="id"
    />
    <span
      v-if="!inlinePrompt"
      class="my-switch__label my-switch__label--left"
      :class="{ 'is-active': !switchToggle }"
    >
      <span>{{ inactiveText }}</span>
    </span>

    <span class="my-switch__core">
      <div
        class="my-switch__inner"
        v-if="inlinePrompt"
      >
        <span
          class="is-text"
          :style="widthCss"
        >
          {{ switchToggle ? activeText : inactiveText }}
        </span>
      </div>
      <div class="my-switch__action"></div>
    </span>

    <span
      v-if="!inlinePrompt"
      class="my-switch__label my-switch__label--right"
      :class="{ 'is-active': switchToggle }"
    >
      <span>{{ activeText }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue'
  import type { SwitchEmits, SwitchProps } from './types'

  const props = withDefaults(defineProps<SwitchProps>(), {
    activeValue: true,
    inactiveValue: false,
  })

  const emits = defineEmits<SwitchEmits>()
  const switchToggle = ref(props.inactiveValue)
  // 切换switch
  const toggleSwitch = () => {
    if (props.disabled) return

    switchToggle.value =
      switchToggle.value === props.activeValue ? props.inactiveValue : props.activeValue

    emits('update:modelValue', switchToggle.value)
    emits('change', switchToggle.value)
  }

  const widthCss = computed(() => {
    return {
      width: props.width + 'px',
    }
  })

  watch(
    () => props.modelValue,
    (newVal) => {
      console.log(newVal)

      switchToggle.value = newVal
    },
  )
</script>
