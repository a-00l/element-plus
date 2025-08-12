<template>
  <i
    class="my-icon"
    v-bind="$attrs"
  >
    <font-awesome-icon
      v-if="icon"
      v-bind="$props"
      :style="styleCss"
    />
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: false,
    name: 'MyIcon',
  })
  import { computed } from 'vue'
  import type { IconProps } from './types'

  const props = defineProps<IconProps>()
  const styleCss = computed(() => {
    return {
      fontSize: props.size || '1em',
    }
  })
</script>
