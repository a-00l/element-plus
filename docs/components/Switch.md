---
title: Switch
description: 开关组件
---

# Switch 开关组件

常用的开关组件。

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--my-switch-on-color` 属性与 `--my-switch-off-color` 属性来设置开关的背景色。
<preview path="../common/Switch/SwitchBase.vue"></preview>

## 尺寸

<preview path="../common/Switch/SwitchSize.vue"></preview>

## 文字描述

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。

使用`active-text`属性与`inactive-text`属性来设置开关的文字描述。
<preview path="../common/Switch/SwtichText.vue"></preview>

## 扩展的 value 类型

你可以设置 `active-value` 和 `inactive-value` 属性， 它们接受 `Boolean`、`String` 或 `Number` 类型的值。
<preview path="../common/Switch/SwitchValue.vue"></preview>

## 禁用状态

设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。
<preview path="../common/Switch/SwtichDisabled.vue"></preview>

## API

### Attributes

| 属性名        | 说明                   | 类型                        | Default |
| ------------- | ---------------------- | --------------------------- | ------- |
| modelValue    | 开关的值               | `boolean \ string \ number` | —       |
| activeText    | 开启时的文字描述       | `string`                    | —       |
| inactiveText  | 关闭时的文字描述       | `string`                    | —       |
| activeValue   | 开启时对应的值         | `boolean \ string \ number` | `true ` |
| inactiveValue | 关闭时对应的值         | `boolean \ string \ number` | `false` |
| inlinePrompt  | 是否显示文字提示       | `boolean`                   | —       |
| size          | 开关的尺寸             | `small \ large`             | —       |
| width         | 开关的宽度             | `number \ string`           | —       |
| disabled      | 是否禁用开关           | `boolean`                   | —       |
| name          | 开关的原生 `name` 属性 | `string`                    | —       |
| id            | 开关的原生 `id` 属性   | `string`                    | —       |

### Events

| 事件名            | 说明               | Type                                           |
| ----------------- | ------------------ | ---------------------------------------------- |
| update:modelValue | 当开关值改变时触发 | `(value: boolean \| string \| number) => void` |
| change            | 当开关值改变时触发 | `(value: boolean \| string \| number) => void` |
