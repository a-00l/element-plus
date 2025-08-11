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
