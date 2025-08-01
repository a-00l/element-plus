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

## Form Attributes

| 参数  | 说明         | 类型   | 可选值 | 默认值 |
| ----- | ------------ | ------ | ------ | ------ |
| model | 表单数据对象 | object | —      | —      |
| rules | 表单验证规则 | object | —      | —      |

## Form Methods

| 方法名        | 说明                     | 参数 |
| ------------- | ------------------------ | ---- |
| validate      | 对整个表单进行校验的方法 | —    |
| resetFields   | 重置表单                 | —    |
| clearValidate | 清除验证信息             | —    |

## FormItem Attributes

| 参数     | 说明              | 类型    | 可选值 | 默认值 |
| -------- | ----------------- | ------- | ------ | ------ |
| label    | 标签文本          | string  | —      | —      |
| prop     | 表单域 model 字段 | string  | —      | —      |
| required | 是否必填          | boolean | —      | false  |

## FormItem Methods

| 方法名        | 说明                     | 参数                        |
| ------------- | ------------------------ | --------------------------- |
| validate      | 对该表单项进行校验的方法 | trigger: 'blur' \| 'change' |
| resetField    | 重置该表单项             | —                           |
| clearValidate | 清除该表单项验证信息     | —                           |
