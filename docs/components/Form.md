---
title: Form
description: 表单组件
---

# Form 表单组件

表单组件，包含表单验证、字段管理等功能。

## 基础用法

基础的表单用法，包含表单验证功能。
<preview path="../common/Form/FormBase.vue"></preview>

## 表单验证

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 rules 属性传入约定的验证规则，并将 form-Item 的 prop 属性设置为需要验证的特殊键值即可。 校验规则参见 async-validator
<preview path="../common/Form/FormValidate.vue"></preview>

## 自定义校验规则​

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。
<preview path="../common/Form/FormCustomValidate.vue"></preview>

# Form API

## Form Attributes

| 属性名   | 说明                                                                                          | 类型                             | 默认值  |
| -------- | --------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| model    | 表单数据对象                                                                                  | `Record<string, any>`            | -       |
| rules    | 表单验证规则，更多内容可以参考 [async-validator](https://github.com/yiminghe/async-validator) | `Record<string, RuleFormItem[]>` | -       |
| disabled | 是否禁用表单所有组件                                                                          | `boolean`                        | `false` |

## Form Slots

| 插槽名  | 说明         | 类型 |
| ------- | ------------ | ---- |
| default | 表单内容区域 | -    |

## Form Exposes

| 方法名        | 说明                       | 参数 | 返回值         |
| ------------- | -------------------------- | ---- | -------------- |
| validate      | 对整个表单进行校验         | -    | `Promise<any>` |
| resetFields   | 重置所有字段并移除校验结果 | -    | `void`         |
| clearValidate | 移除表单项的校验结果       | -    | `void`         |

# FormItem API

## FormItem Attributes

| 属性名   | 说明              | 类型      | 默认值  |
| -------- | ----------------- | --------- | ------- |
| label    | 标签文本          | `string`  | -       |
| prop     | 表单域 model 字段 | `string`  | -       |
| required | 是否必填          | `boolean` | `false` |
| disabled | 是否禁用该表单项  | `boolean` | `false` |

## FormItem Slots

| 插槽名  | 说明               | 类型                |
| ------- | ------------------ | ------------------- |
| default | 表单的内容         | -                   |
| label   | 标签位置显示的内容 | `{ label: string }` |

## FormItem Exposes

| 方法名        | 说明           | 参数               | 返回值         |
| ------------- | -------------- | ------------------ | -------------- |
| validate      | 触发表单项校验 | `trigger?: string` | `Promise<any>` |
| resetField    | 重置当前字段   | -                  | `void`         |
| clearValidate | 移除校验结果   | -                  | `void`         |
