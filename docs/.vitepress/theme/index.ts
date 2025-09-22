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
import MyButton from '../../../src/components/Button/Button.vue'
import MyIcon from '../../../src/components/Icon/Icon.vue'
import MyCollapse from '../../../src/components/Collapse/Collapse.vue'
import MyCollapseItem from '../../../src/components/Collapse/CollapseItem.vue'
import MyTooltip from '../../../src/components/Tooltip/Tooltip.vue'
import MyDropdown from '../../../src/components/Dropdown/Dropdown.vue'
import MyDropdownItem from '../../../src/components/Dropdown/DropdownItem.vue'
import MyMessage from '../../../src/components/Message/Message.vue'
import MyInput from '../../../src/components/Input/Input.vue'
import MySwitch from '../../../src/components/Switch/Switch.vue'
import MySelect from '../../../src/components/Select/Select.vue'
import MyOption from '../../../src/components/Select/Option.vue'
import MyForm from '../../../src/components/Form/Form.vue'
import MyFormItem from '../../../src/components/Form/FormItem.vue'
import { createMessage } from '../../../src/components/Message/method'

library.add(fas)

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 正确的全局注册方式（仅在 VitePress 主题中）
    app.component('demo-preview', ElementPlusContainer)
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.component('my-icon', MyIcon)
    app.component('my-button', MyButton)
    app.component('my-collapse', MyCollapse)
    app.component('my-collapse-item', MyCollapseItem)
    app.component('my-tooltip', MyTooltip)
    app.component('my-dropdown', MyDropdown)
    app.component('my-dropdown-item', MyDropdownItem)
    app.component('my-message', MyMessage)
    app.component('my-input', MyInput)
    app.component('my-switch', MySwitch)
    app.component('my-select', MySelect)
    app.component('my-option', MyOption)
    app.component('my-form', MyForm)
    app.component('my-form-item', MyFormItem)
    app.config.globalProperties.$message = createMessage
  },
}
