<template>
  <Collapse accordion>
    <CollapseItem
      title="标题1"
      name="1"
      disabled
      >内容1
    </CollapseItem>
    <CollapseItem
      title="标题2"
      name="2"
      >内容2</CollapseItem
    >
    <CollapseItem
      title="标题3"
      name="3"
      >内容3</CollapseItem
    >
  </Collapse>
</template>

<script setup>
  import Collapse from '@/components/Collapse/Collapse.vue'
  import CollapseItem from '@/components/Collapse/CollapseItem.vue'
</script>
