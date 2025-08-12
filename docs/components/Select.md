---
title: Select
description: 选择器组件
---

# Select 选择器组件

常用的选择器组件。

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `my-option` 的 value 属性值
<preview path="../common/Select/SelectBase.vue"></preview>

## 有禁用选项

在 `my-option` 中，设定 `disabled` 值为 true，即可禁用该选项
<preview path="../common/Select/SelectOptionDisabled.vue"></preview>

## 禁用状态

禁用整个选择器组件

为 `my-select` 设置 `disabled`属性，则整个选择器不可用。
<preview path="../common/Select/SelectDisabled.vue"></preview>

## 可清空

您可以使用清除图标来清除选择。

为 `my-select` 设置 `clearable` 属性，则可将选择器清空。
<preview path="../common/Select/SelectClearable.vue"></preview>

## 自定义模板

你可以自定义如何来渲染每一个选项。

将自定义的 HTML 模板插入 `my-option` 的 slot 中即可。
<preview path="../common/Select/SelectCustom.vue"></preview>

## 筛选选项

可以利用筛选功能快速查找选项。

为`my-select`添加`filterable`属性即可启用搜索功能。 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。
<preview path="../common/Select/SelectFilter.vue"></preview>

## 远程搜索

输入关键字以从远程服务器中查找数据。

从服务器搜索数据，输入关键字进行查找。为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。 `remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。
<preview path="../common/Select/SelectSearch.vue"></preview>

## Attributes 属性

| 属性名       | 说明                                                          | **类型**                                                     | **Default** |
| ------------ | ------------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| modelValue   | 绑定值，选中项的 value 值                                     | `string \| number`                                           | —           |
| disabled     | 是否禁用组件                                                  | `boolean`                                                    | `false`     |
| clearable    | 是否显示清空按钮                                              | `boolean`                                                    | `false`     |
| effect       | 主题风格，可选 `light` 或 `dark`                              | ``light` \| `dark``                                          | `light`     |
| placeholder  | 输入框占位符                                                  | `string`                                                     | —           |
| filterable   | 是否开启过滤功能（支持本地搜索）                              | `boolean`                                                    | `false`     |
| filterMethod | 自定义本地过滤方法，当 `filterable` 为 true 时生效            | `(value: string) => OptionProps[] \| Promise<OptionProps[]>` | —           |
| remote       | 是否开启远程搜索模式                                          | `boolean`                                                    | `false`     |
| remoteMethod | 远程搜索方法，当 `remote` 为 true 时生效，需返回 Promise 数组 | `(value: string) => Promise<OptionProps[]>`                  | —           |

## Slots 插槽

| 插槽名  | 说明             | 子标签                                           |
| ------- | ---------------- | ------------------------------------------------ |
| default | 用于渲染选项列表 | 通常为 Option 组件（需包含 value、label 等属性） |
