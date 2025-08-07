import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'
import '@/styles/index.scss'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import './custom.scss'
// 引入图标库
import { library } from '@fortawesome/fontawesome-svg-core'
// 引入所有图标
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 正确的全局注册方式（仅在 VitePress 主题中）
    app.component('demo-preview', ElementPlusContainer)
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
