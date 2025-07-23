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

## 注册所有图标

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
