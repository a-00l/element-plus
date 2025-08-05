---
title: Collapse
description: 折叠组件
---

# Collapse 折叠组件

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响
<preview path="../common/Collapse/CollapseBase.vue"></preview>

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。
<preview path="../common/Collapse/CollapseAccordion.vue"></preview>

## 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

<preview path="../common/Collapse/CollapseCustom.vue"></preview>

## Collapse API

### Collapse Attributes

| 属性名                | 详情                                                                | 类型               | 默认值 |
| --------------------- | ------------------------------------------------------------------- | ------------------ | ------ |
| model-value / v-model | 当前活动面板，在手风琴模式下其类型是`string`，在其他模式下是`array` | `string` / `array` | []     |
| accordion             | 是否手风琴模式                                                      | `boolean`          | false  |

### Collapse Slots

| 插槽名  | Description    | 子标签        |
| ------- | -------------- | ------------- |
| default | 自定义默认内容 | Collapse Item |

### Collapse Exposes

| 属性名         | 说明               | 类型                     |
| -------------- | ------------------ | ------------------------ |
| activeNames    | 当前活动的面板名称 | `(name: string) => void` |
| setActiveNames | 设置活动面板名称   | `Ref<NameType>`          |

## Collapse Item API

### Collapse Item Attributes

| 属性名   | 详情           | 类型    | 默认值 |
| -------- | -------------- | ------- | ------ |
| title    | 面板标题       | string  | -      |
| name     | 面板唯一标识   | string  | -      |
| disabled | 是否禁用该面板 | boolean | false  |

## Collapse Item Slots

| Name    | Description          | Type |
| ------- | -------------------- | ---- |
| default | Collapse Item 的内容 | —    |
| title   | Collapse Item 的标题 | —    |
