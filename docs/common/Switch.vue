<template>
  <Switch v-model="value"></Switch>
  <Switch
    v-model="value"
    active-text="开启"
    inactive-text="关闭"
  >
  </Switch>
  <Switch
    v-model="value"
    active-text="开启123123"
    inactive-text="关闭"
    inline-prompt
  >
  </Switch>
</template>

<script setup>
  import Switch from '@/components/Switch/Switch.vue'
  import { ref } from 'vue'

  const value = ref(false)
</script>
