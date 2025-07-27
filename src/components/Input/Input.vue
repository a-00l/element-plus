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
        <textarea></textarea>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import Icon from '../Icon/Icon.vue'
  import type { InputProps } from './types'

  defineProps<InputProps>()
</script>
