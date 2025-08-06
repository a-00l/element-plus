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
