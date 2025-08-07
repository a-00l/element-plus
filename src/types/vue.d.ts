import { CreateMessageFn } from '@/components/Message/types'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: CreateMessageFn
  }
}

export { }
