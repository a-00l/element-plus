---
title: Dropdown
description: 下拉菜单组件
---

# Dropdown 下拉菜单组件

下拉菜单组件。

## 基础用法

悬停在下拉菜单上以展开更多操作。

通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。 默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。
<preview path="../common/Dropdown/DropdownBase.vue"></preview>

## 位置

支持 6 个位置。

设置 `placement` 属性，使下拉菜单出现在不同位置。
<preview path="../common/Dropdown/DropdownPlacement.vue"></preview>

## 触发方式

支持点击和悬停两种触发方式。

设置 `trigger` 属性为 `click` 即可使用点击触发。
<preview path="../common/Dropdown/DropdownTrigger.vue"></preview>

## 菜单隐藏方式

可以通过 `hide-on-click` 属性来配置。

下拉菜单默认在点击菜单项后会被隐藏，将 hide-on-click 属性设置为 false 可以关闭此功能。
<preview path="../common/Dropdown/DropdownHide.vue"></preview>

## 指令事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。
<preview path="../common/Dropdown/DropdownEvent.vue"></preview>

## Dropdown API

## Dropdown Attributes

| 属性名        | 说明                 | 类型               | Default |
| ------------- | -------------------- | ------------------ | ------- |
| placement     | 下拉菜单弹出位置     | ComputedPlacement  | —       |
| trigger       | 触发方式             | `hover \| click`   | hover   |
| disabled      | 是否禁用             | `boolean`          | false   |
| popperOptions | Popper.js 配置项     | `Partial<Options>` | —       |
| showTimeout   | 显示延迟（毫秒）     | `number`           | 150     |
| hideTimeout   | 隐藏延迟（毫秒）     | `number`           | 150     |
| hideOnClick   | 点击菜单项后是否隐藏 | `boolean`          | true    |

## Dropdown Slots

| 插槽名   | 说明                                                                                                     | 子标签        |
| -------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| default  | 下拉菜单的内容。 注意：必须是有效的 html DOM 元素（例如 `<span>、<button>` 等）或 组件，以附加监听触发器 | —             |
| dropdown | 下拉菜单内容                                                                                             | Dropdown-Menu |

## Dropdown Events

| 事件名         | 说明                    | 类型                           |
| -------------- | ----------------------- | ------------------------------ |
| command        | 点击菜单项触发          | `(command: commandType) => ()` |
| visible-change | 下拉菜单出现/隐藏时触发 | `(visible: boolean) => ()`     |

## Dropdown Exposes

| 方法名      | 说明         | Type         |
| ----------- | ------------ | ------------ |
| handleOpen  | 打开下拉菜单 | `() => void` |
| handleClose | 关闭下拉菜单 | `() => void` |

## Dropdown-Menu API

## Dropdown-Menu Slots

| 插槽名  | 说明           | 子标签        |
| ------- | -------------- | ------------- |
| default | 下拉菜单的内容 | Dropdown-Item |

## Dropdown-Item API

## Dropdown-Item Attributes

| 属性名   | 说明                              | Type                           | 默认值 |
| -------- | --------------------------------- | ------------------------------ | ------ |
| command  | 派发到`command`回调函数的指令参数 | `string` / `number` / `object` | —      |
| disabled | 是否禁用                          | `boolean`                      | false  |
| divided  | 是否显示分隔符                    | `boolean`                      | false  |

## Dropdown-Item Slots

| 插槽名  | 说明                    |
| ------- | ----------------------- |
| default | 自定义Dropdown-Item内容 |
