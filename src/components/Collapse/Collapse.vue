<template>
  <div class="my-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { provide, ref, watch, type Ref } from 'vue'
  import {
    CollapseContextKey,
    type CollapseEmits,
    type CollapseIntance,
    type CollapseProps,
    type NameType,
  } from './types'

  const props = defineProps<CollapseProps>()
  const emits = defineEmits<CollapseEmits>()
  // 记录打开的name
  const activeName = ref(props.modelValue ?? []) as Ref<NameType>
  // 设置打开的name
  const setActiveName = (name: string) => {
    if (props.accordion) {
      activeName.value = activeName.value === name ? '' : name
    } else {
      const collapse = activeName as Ref<NameType[]>

      // 获取当前打开的折叠标题的索引
      const index = collapse.value.indexOf(name)
      if (index > -1) {
        // 删除打开的折叠标题
        collapse.value.splice(index, 1)
      } else {
        collapse.value.push(name)
      }
    }

    // 发送事件
    emits('change', activeName.value)
    emits('update:modelValue', activeName.value)
  }

  // 监视外面v-model改变
  watch(
    () => props.modelValue,
    (val) => {
      activeName.value = val
    },
  )

  provide(CollapseContextKey, {
    activeName,
    setActiveName,
  })

  defineExpose<CollapseIntance>({
    setActiveName,
    activeName,
  })
</script>
