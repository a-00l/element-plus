import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
import requireTransform from "vite-plugin-require-transform";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    css: {
      postcss: {
        map: true
      }
    },
    plugins: [
      requireTransform({
        fileRegex: /.js$|.vue$|.ts$/,
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  title: "Element-plus",
  description: "Element-plus 组件库",
  themeConfig: {
    nav: [
      { text: '组件', link: '/components/Button' },
    ],
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'Button',
        items: [
          { text: 'Button', link: '/components/Button' },
          { text: 'Icon', link: '/components/Icon' },
          { text: 'Collapse', link: '/components/Collapse' },
          { text: 'Tooltip', link: '/components/Tooltip' },
          { text: 'Dropdown', link: '/components/Dropdown' },
          { text: 'Message', link: '/components/Message' },
          { text: 'Input', link: '/components/Input' },
          { text: 'Switch', link: '/components/Switch' },
          { text: 'Select', link: '/components/Select' },
          { text: 'Form', link: '/components/Form' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/a-00l/element-plus/' }
    ]
  },
  base: '/element-plus/',
})
