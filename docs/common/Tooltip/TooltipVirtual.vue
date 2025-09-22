<template>
  <my-tooltip
    v-model:visible="visible"
    content="Bottom center"
    placement="bottom"
    effect="light"
    trigger="click"
    virtual-triggering
    :virtual-ref="triggerRef"
  >
    <my-button>tooltip</my-button>
  </my-tooltip>

  <span class="left">
    <my-button @click="visible = !visible">显示/隐藏</my-button>
  </span>
</template>

<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>

<style lang="scss" scoped>
  .left {
    margin-left: 20px;
  }
</style>
