<template>
  <div class="my-form">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, provide } from 'vue'
  import {
    FormContextKey,
    type FormItemContext,
    type FormItemErrorField,
    type FormProps,
  } from './types'
  import type { ValidateFieldsError } from 'async-validator'

  const props = defineProps<FormProps>()

  const formItemArray: FormItemContext[] = []
  const validate = async () => {
    // 收集所有错误信息
    let validateFields: ValidateFieldsError = {}
    for (const field of formItemArray) {
      try {
        await field.validate('')
      } catch (e: any) {
        const error = e as FormItemErrorField
        validateFields = {
          ...validateFields,
          [field.prop]: error.fields[field.prop],
        }
      }
    }

    // 表单验证成功
    if (Object.keys(validateFields).length === 0) return true

    return Promise.reject(validateFields)
  }
  // 添加校验字段
  const addField = (field: FormItemContext) => {
    formItemArray.push(field)
  }

  // 删除校验字段
  const removeField = (field: FormItemContext) => {
    formItemArray.splice(formItemArray.indexOf(field), 1)
  }

  const resetFields = () => {
    for (const field of formItemArray) {
      field.resetField()
    }
  }

  const clearValidate = () => {
    for (const field of formItemArray) {
      field.clearValidate()
    }
  }

  provide(FormContextKey, {
    model: props.model,
    rules: props.rules,
    addField,
    removeField,
  })

  defineExpose({
    validate,
    resetFields,
    clearValidate,
  })
</script>
