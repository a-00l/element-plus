---
title: Icon 图标
description: 图标组件
---

# Icon 图标

常用的图标组件。

## 使用图标

- 图标组件基于 Font Awesome 图标库（免费版）， [Font Awesomes](https://docs.fontawesome.com/web/use-with/vue) 图标库。

## 安装

```shell
yarn add
  "@fortawesome/fontawesome-svg-core"
  "@fortawesome/free-brands-svg-icons"
  "@fortawesome/free-regular-svg-icons"
  "@fortawesome/free-solid-svg-icons"
  "@fortawesome/vue-fontawesome"
```

## 注册图标

```ts
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
```

## 注意

我们用的是[Font Awesome](https://fontawesome.com/search?ic=free&o=r)免费版本，而且只注册了`fas`、`far`、`fab`三个图标库，所以如果使用其他图标库的图标，需要先注册图标库。

## 基础用法

基础的图标用法。（具体参考[Font Awesome](https://docs.fontawesome.com/web/use-with/vue)）

```vue
<template>
  <div>
    <Icon
      :size="size"
      :color="color"
    >
    </Icon>
  </div>
</template>
```

## API

### Attributes

| 属性名 | 说明 | 类型                | 默认值 |
| ------ | ---- | ------------------- | ------ |
| size   | 尺寸 | `number` / `string` | —      |
| color  | 颜色 | `string`            | —      |
