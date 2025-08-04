<template>
  <div
    class="my-form-item"
    :class="{
      'is-required': required,
      'is-error': field,
    }"
  >
    <div class="my-form-item__label">
      <slot
        name="label"
        :label="label"
        :validate="validate"
      >
        {{ label }}
      </slot>
    </div>
    <div class="my-form-item__content">
      <slot></slot>
      <div
        class="my-form-item__error"
        v-if="field"
      >
        {{ field }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Schema from 'async-validator'
  import {
    FormContextKey,
    FormItemContextKey,
    type FormContext,
    type FormItemContext,
    type FormItemErrorField,
    type FormItemInstance,
    type FormItemProps,
  } from './types'
  import { inject, onMounted, provide, ref } from 'vue'

  const props = defineProps<FormItemProps>()
  const formContext = inject(FormContextKey) as FormContext
  const field = ref('')
  // 记录表单的初始值
  const initialValue = ref(formContext.model[props.prop!])

  const rules = (trigger?: string) => {
    if (!props.prop) return []

    // 有trigger时，筛选对应trigger的校验规则
    // 没有trigger，校验所有规则
    if (trigger) {
      return formContext.rules[props.prop].filter((item) => item.trigger === trigger)
    } else {
      return formContext.rules[props.prop] ?? []
    }
  }
  // 校验
  const validate = (trigger?: string) => {
    // 添加对应校验规则
    const validator = new Schema({
      [props.prop!]: rules(trigger),
    })

    return validator
      .validate({ [props.prop!]: formContext.model[props.prop!] })
      .then(() => {
        field.value = ''
      })
      .catch((e: FormItemErrorField) => {
        // 获取错误信息
        field.value = e.errors[0].message ?? ''

        return Promise.reject(e)
      })
  }

  // 重置表单，将其值设置为初始值
  const resetField = () => {
    field.value = ''
    formContext.model[props.prop!] = initialValue.value
  }

  // 清除错误信息
  const clearValidate = () => {
    field.value = ''
  }

  const context: FormItemContext = {
    prop: props.prop!,
    validate,
    resetField,
    clearValidate,
    disabled: typeof formContext.disabled === 'boolean' ? formContext.disabled : props.disabled,
  }

  provide(FormItemContextKey, context)

  defineExpose<FormItemInstance>({
    validate,
    resetField,
    clearValidate,
  })

  onMounted(() => {
    // 将所有校验都放在一个数组中
    formContext.addField(context)
  })
</script>
