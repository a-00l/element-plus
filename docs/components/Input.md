---
title: Input
description: 输入框组件
---

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

基础的输入框用法。
<preview path="../common/Input/InputBase.vue"></preview>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件
<preview path="../common/Input/InputDisabled.vue"></preview>

## 一键清空

使用`clearable`属性即可得到一个可一键清空的输入框
<preview path="../common/Input/InputClearable.vue"></preview>

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框
<preview path="../common/Input/InputShowPassword.vue"></preview>

## 带图标的输入框

带有图标标记输入类型

要在输入框中添加图标，你可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。 另外， `prefix` 和 `suffix` 命名的插槽也能正常工作
<preview path="../common/Input/InputIcon.vue"></preview>

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制
<preview path="../common/Input/InputTextarea.vue"></preview>

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。

<preview path="../common/Input/InputCustom.vue"></preview>

## 尺寸

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large`, `small`。
<preview path="../common/Input/InputSize.vue"></preview>

## API

### Attributes

| 属性名         | 说明                 | 类型                      | 默认值 |
| -------------- | -------------------- | ------------------------- | ------ |
| `modelValue`   | 输入框的值           | `string` / `number`       | —      |
| `type`         | 输入框类型           | `NativeType` / `textarea` | `text` |
| `size`         | 输入框尺寸           | `small` / `large`         | —      |
| `disabled`     | 是否禁用             | `boolean` / `false`       | —      |
| `clearable`    | 是否可清空           | `boolean` / `false`       | —      |
| `showPassword` | 是否显示密码切换按钮 | `boolean` / `false`       | —      |
| `prefixIcon`   | 前缀图标             | `string`                  | —      |
| `suffixIcon`   | 后缀图标             | `string`                  | —      |
| `placeholder`  | 占位文本             | `string`                  | —      |
| `rows`         | 文本域行数           | `number`                  | —      |

### Event

| 事件名              | 说明               | 类型                                |
| ------------------- | ------------------ | ----------------------------------- |
| `update:modelValue` | 输入框值更新时触发 | `(value: string \| number) => void` |
| `change`            | 输入框值改变时触发 | `(value: string \| number) => void` |
| `clear`             | 点击清空按钮时触发 | `() => void`                        |

### Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `prepend` | 输入框前置内容 |
| `append`  | 输入框后置内容 |
| `prefix`  | 输入框前缀内容 |
| `suffix`  | 输入框后缀内容 |

### Expose

| 名称     | 说明               | 类型                    |
| -------- | ------------------ | ----------------------- |
| `clear`  | 清空输入框内容     | `() => void`            |
| `blur`   | 使输入框失去焦点   | `() => void`            |
| `focus`  | 使输入框获得焦点   | `() => void`            |
| `select` | 选中输入框中的文字 | `() => void`            |
| `ref`    | 输入框 DOM 引用    | `Ref<HTMLInputElement>` |
