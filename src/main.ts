import { createApp, onMounted } from 'vue'
import App from './App.vue'
import './styles/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import createMessage from './components/Message/method'
library.add(fas, far, fab)

export const app = createApp(App)

if (!import.meta.env.SSR) {
  // 挂载全局方法
  app.config.globalProperties.$message = (props: any) => createMessage(props, app._context)
}

onMounted(() => {
  app
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
})

