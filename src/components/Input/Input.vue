<template>
  <div class="my-input">
    <!-- input -->
    <template v-if="type === 'text'">
      <!-- prepend slot -->
      <div
        class="my-input-group__prepend"
        v-if="$slots.prepend"
      >
        <slot name="prepend"></slot>
      </div>
      <div class="my-input__warpper">
        <!-- prefix -->
        <span
          class="my-input__prefix"
          v-if="prefixIcon || $slots.prefix"
        >
          <span class="my-input__prefix-inner">
            <slot name="prefix">
              <Icon :icon="prefixIcon!"></Icon>
            </slot>
          </span>
        </span>
        <input
          type="text"
          class="my-input__inner"
          @input="handleInput"
        />
        <!-- suffix -->
        <span
          class="my-input__suffix"
          v-if="suffixIcon || $slots.suffix"
        >
          <span class="my-input__suffix-inner">
            <slot name="suffix">
              <Icon :icon="suffixIcon!"></Icon>
            </slot>
          </span>
        </span>
      </div>
      <!-- append slot -->
      <div
        class="my-input-group__append"
        v-if="$slots.append"
      >
        <slot name="append"> </slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <div class="my-textarea">
        <textarea @input="handleInput"></textarea>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { watch } from 'vue'
  import Icon from '../Icon/Icon.vue'
  import type { InputEmits, InputProps } from './types'

  const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
  })

  const emits = defineEmits<InputEmits>()
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    emits('update:modelValue', target.value)
  }

  watch(
    () => props.modelValue,
    (newValue, oldValue) => {
      if (newValue !== oldValue) {
        emits('change', newValue)
      }
    },
  )
</script>
