<template>
  <div class="my-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { provide } from 'vue'
  import { FormContextKey, type FormItemProps, type FormProps } from './types'

  const props = defineProps<FormProps>()

  const formItemArray: FormItemProps[] = []
  // 添加校验字段
  const addField = (field: FormItemProps) => {
    formItemArray.push(field)
  }

  // 删除校验字段
  const removeField = (field: FormItemProps) => {
    formItemArray.splice(formItemArray.indexOf(field), 1)
  }

  provide(FormContextKey, {
    model: props.model,
    rules: props.rules,
    addField,
    removeField,
  })
</script>
