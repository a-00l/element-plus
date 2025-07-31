<template>
  <div class="my-form-item">
    <div class="my-form-item__label">
      <slot
        name="label"
        :label="label"
        >{{ label }}
      </slot>
    </div>
    <div class="my-form-item__content">
      <slot></slot>
    </div>
    <button @click="validate">校验</button>
    {{ formContext.model }}
  </div>
</template>

<script setup lang="ts">
  import Schema from 'async-validator'
  import {
    FormContextKey,
    type FormContext,
    type FormItemContext,
    type FormItemProps,
  } from './types'
  import { inject, onMounted, ref } from 'vue'

  const props = defineProps<FormItemProps>()
  const formContext = inject(FormContextKey) as FormContext
  const field = ref('')
  // 添加对应校验规则
  const validator = new Schema({
    [props.prop!]: formContext.rules[props.prop!],
  })

  // 校验
  const validate = () => {
    validator
      .validate({ [props.prop!]: formContext.model[props.prop!] })
      .then(() => {})
      .catch(({ errors, fields }) => {
        // 获取错误信息
        field.value = fields[props.prop!]
        console.log(errors)
        console.log(fields)
      })
  }

  const context: FormItemContext = {
    prop: props.prop!,
    validate,
    field,
  }

  onMounted(() => {
    // 将所有校验都放在一个数组中
    formContext.addField(context)
  })
</script>
