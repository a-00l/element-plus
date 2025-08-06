<template>
  <div class="right">
    <my-tooltip
      content="Top center"
      placement="top"
    >
      <my-button>Dark</my-button>
    </my-tooltip>
    <my-tooltip
      content="Bottom center"
      placement="bottom"
      effect="light"
    >
      <my-button>Light</my-button>
    </my-tooltip>
    <my-tooltip
      content="Bottom center"
      effect="customized"
    >
      <my-button>Customized theme</my-button>
    </my-tooltip>
  </div>
</template>

<script setup>
  import myTooltip from '@/components/Tooltip/Tooltip.vue'
  import myButton from '@/components/Button/Button.vue'
</script>

<style scoped>
  .right {
    display: flex;
    gap: 20px;
  }
</style>
