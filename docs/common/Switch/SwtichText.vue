<template>
  <my-switch
    v-model="value1"
    class="mb-2"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <my-switch
    v-model="value2"
    class="mb-2"
    style="--my-switch-on-color: #13ce66; --my-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <my-switch
    v-model="value3"
    inline-prompt
    active-text="是"
    inactive-text="否"
  />
  <my-switch
    v-model="value4"
    class="ml-2"
    inline-prompt
    style="--my-switch-on-color: #13ce66; --my-switch-off-color: #ff4949"
    active-text="Y"
    inactive-text="N"
  />
  <my-switch
    v-model="value6"
    class="ml-2"
    width="30"
    inline-prompt
    active-text="超出省略"
    inactive-text="超出省略"
  />
  <my-switch
    v-model="value5"
    class="ml-2"
    inline-prompt
    style="--my-switch-on-color: #13ce66; --my-switch-off-color: #ff4949"
    active-text="完整展示多个内容"
    inactive-text="多个内容"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import mySwitch from '@/components/Switch/Switch.vue'

  const value1 = ref(true)
  const value2 = ref(true)
  const value3 = ref(true)
  const value4 = ref(true)
  const value5 = ref(true)
  const value6 = ref(true)
</script>

<style scoped>
  .ml-2 {
    margin-left: 8px;
  }
</style>
