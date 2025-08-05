---
title: Button
description: 按钮组件
---

# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。
<preview path="../common/Button/ButtonBase.vue"></preview>

## 禁用状态

你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
<preview path="../common/Button/ButtonDisabled.vue"></preview>

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

您可以使用 `loading` 插槽或 `loadingIcon`属性自定义您的loading图标

ps: `loading` 插槽优先级高于`loadingIcon`属性、

<preview path="../common/Button/ButtonLoading.vue"></preview>

## 按钮大小

<preview path="../common/Button/ButtonSize.vue"></preview>

## Button API

### Button Attributes

| 属性名      | 类型                                                        | 默认值      | 说明             |
| ----------- | ----------------------------------------------------------- | ----------- | ---------------- |
| type        | `'primary' \| 'success' \| 'info' \| 'warning' \| 'danger'` | -           | 按钮类型         |
| size        | `'small' \| 'medium' \| 'large'`                            | `'medium'`  | 按钮尺寸         |
| plain       | `boolean`                                                   | `false`     | 是否为朴素按钮   |
| round       | `boolean`                                                   | `false`     | 是否为圆角按钮   |
| disabled    | `boolean`                                                   | `false`     | 是否禁用按钮     |
| circle      | `boolean`                                                   | `false`     | 是否为圆形按钮   |
| icon        | `string`                                                    | -           | 图标名称         |
| loading     | `boolean`                                                   | `false`     | 是否显示加载状态 |
| loadingIcon | `string`                                                    | `'spinner'` | 加载状态图标名称 |

## Button Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 按钮内容 |

## Button Expose

| 属性名   | 说明         | 类型                     |
| -------- | ------------ | ------------------------ |
| ref      | 按钮的引用   | `Ref<HTMLButtonElement>` |
| size     | 按钮尺寸     | `ButtonSize`             |
| type     | 按钮类型     | `ButtonType`             |
| disabled | 是否禁用按钮 | `boolean`                |

## 注意事项

1. 图标使用基于Font Awesome的实现，需要确保图标已正确注册
2. 加载状态会自动禁用按钮
