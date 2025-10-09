import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

import resolveComponent from './src/resolve/resolveComponent'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Components({
      resolvers: [resolveComponent()],
      /**
       * 因为我们并没有以依赖的形式引入组件，所以这里不配置
       * 如果配置了，就会出现所有的组件都会被自动引入
       */
      dirs: []
    }),
    AutoImport({
      resolvers: [resolveComponent()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import url("@/styles/reset.scss");
        @import url("@/styles/vars.scss");`,
      },
    },
  }
})
