---
title: Message
description: 消息提示组件
---

# Message 消息提示

常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。

## 基础用法

## 基础用法

从顶部出现，3 秒后自动消失。

Message 可以接收一个字符串，它会被显示为正文内容。
<preview path="../common/Message/MessageBase.vue"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

当需要自定义更多属性时，Message 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态，默认为`info`。 此时正文内容以 `message` 的值传入。 同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 `open4` 那样直接调用。 `primary` 已被添加到2.9.11。
<preview path="../common/Message/MessageType.vue"></preview>

## Plain

设置 `plain` 为 plain 背景。
<preview path="../common/Message/MessagePlain.vue"></preview>

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true 此外，和 Notification 一样，Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。

<preview path="../common/Message/MessageClose.vue"></preview>

## 全局方法

Element Plus 为 `app.config.globalProperties` 添加了全局方法 `$message`。 因此在 vue 实例中你可以使用当前页面中的调用方式调用 `Message`

## Message 组件类型说明

## Message 配置项

| 名称      | 说明                           | `类型`                                           | 默认值 |
| --------- | ------------------------------ | ------------------------------------------------ | ------ |
| message   | 消息内容，可以是字符串或 VNode | `string \| VNode`                                | -      |
| type      | 消息类型                       | `primary \| success \| warning \| info \| error` | info   |
| showClose | 是否显示关闭按钮               | `boolean`                                        | false  |
| duration  | 消息显示时长（毫秒）           | `number`                                         | 3000   |
| close     | 关闭回调函数                   | `() => void`                                     | -      |
| offset    | Message 距离窗口顶部的偏移量   | `number`                                         | 16     |
| destroy   | 销毁消息的函数                 | `(id: string) => void`                           | -      |
| zIndex    | 消息的层级                     | `number`                                         | -      |
| plain     | 是否为简洁风格                 | `boolean`                                        | false  |

## Message 方法

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。

| 名称  | 描述               | 类型         |
| ----- | ------------------ | ------------ |
| close | 关闭当前的 Message | `() => void` |
