import { includesComponents, excludeComponents, noSliceComponents } from "./includes"

/**
 * 解析组件与函数的导入
 */
function resolveComponent(): any[] {
  return [
    // 自动导入组件
    {
      type: 'component',
      resolve: (name: string) => {
        if (!/^My/.test(name)) return

        const component = name.slice(2) // MyButton --> Button
        if (includesComponents.includes(component)) {
          const componentPath = `@/components/${component}`
          const stylePath = excludeComponents.includes(component) ? null : `@/components/${component}/style.scss`
          console.log(stylePath)
          return {
            name: component,
            from: componentPath,
            sideEffects: stylePath && [stylePath],
          }
        }

        return undefined
      },
    },
    // 自动导入函数
    {
      type: 'function',
      resolve: (name: string) => {
        if (name === 'createMessage') {
          return {
            from: '@/components/Message/method',
            name: 'default',
          }
        }
      }
    },
  ]
}

export default resolveComponent
