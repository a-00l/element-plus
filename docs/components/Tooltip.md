---
title: Tooltip
description: 提示组件
---

# Tooltip 提示组件

常用的提示组件。

## 基础用法

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

使用 `content` 属性来决定 `hover` 时的提示信息。 由 `placement` 属性决定展示效果： `placement`属性值为：`[方向]-[对齐位置]`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
<preview path="../common/Tooltip/TooltipBase.vue"></preview>

## 主题

Tooltip 组件内置了两个主题：`dark`和`light`。

通过设置 `effect` 来修改主题，默认值为 `dark`.
<preview path="../common/Tooltip/TooltipEffect.vue"></preview>

## 更多内容的文字提示

展示多行文本或者是设置文本内容的格式

用具名 slot `content`，替代`tooltip`中的`content`属性。
<preview path="../common/Tooltip/TooltipContent.vue"></preview>

## 虚拟触发

有时候我们想把 tooltip 的触发元素放在别的地方，而不需要写在一起，这时候就可以使用虚拟触发。
<preview path="../common/Tooltip/TooltipVirtual.vue"></preview>

## 受控模式

Tooltip 可以通过父组件使用 `:visible` 来控制它的显示与关闭。

<preview path="../common/Tooltip/TooltipControlled.vue"></preview>

## API

## Attributes

| 名称                      | 说明                         | 类型                | 默认值  |
| ------------------------- | ---------------------------- | ------------------- | ------- |
| visible / v-model:visible | Tooltip 组件可见性           | `boolean`           | —       |
| content                   | 提示内容文本                 | `string`            | —       |
| placement                 | 弹出层位置（参考 Popper.js） | `ComputedPlacement` | bottom  |
| popperOption              | Popper.js 的额外配置         | `Partial<Options>`  | {}      |
| trigger                   | 触发方式（hover/click）      | `hover \| click`    | hover   |
| effect                    | 主题风格（dark/light）       | `dark \| light`     | dark    |
| showAfter                 | 显示延迟（毫秒）             | `number`            | 0       |
| hideAfter                 | 隐藏延迟（毫秒）             | `number`            | 200     |
| transition                | 动画名称                     | `string`            | tooltip |
| virtualTriggering         | 是否使用虚拟触发元素         | `boolean`           | false   |
|                           |                              |                     |         |

## Slots

| 插槽名  | 说明                      |
| ------- | ------------------------- |
| default | Tooltip 触发 & 引用的元素 |
| content | 自定义内容                |

## Exposes

| 名称       | 详情             | 类型                            |
| ---------- | ---------------- | ------------------------------- |
| show       | 显示 Tooltip     | `() => void`                    |
| hide       | 隐藏 Tooltip     | `() => void`                    |
| popperRef  | 获取 Popper 实例 | `Ref<HTMLElement \| undefined>` |
| triggerRef | 获取触发元素实例 | `Ref<HTMLElement \| undefined>` |
