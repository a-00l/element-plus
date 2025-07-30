import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    css: {
      postcss: {
        map: true
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  title: "./docs",
  description: " A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
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
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
