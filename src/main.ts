import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const app = createApp(App)

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
