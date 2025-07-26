<template>
  <div
    class="my-message"
    :class="{ [`my-message--${type}`]: type }"
  >
    <div class="my-message__content">
      {{ message }}
    </div>
    <div
      class="my-message__close"
      v-if="showClose"
    >
      <Icon icon="xmark"></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { MessageProps } from './types'
  import Icon from '../Icon/Icon.vue'
  withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    showClose: false,
  })
</script>
