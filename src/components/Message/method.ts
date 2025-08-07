import { h, reactive, render } from "vue";
import type { CreateMessage, MessageArray } from "./types";
import Message from "./Message.vue";

const messageArray: MessageArray[] = reactive([])

let count = 0
// 创建message
const _createMessage = (props: CreateMessage, appContext?: any) => {
  const id = `message_${count++}`
  const div = document.createElement('div')

  // 删除message
  const onDestroy = (id: string) => {
    const index = messageArray.findIndex(item => item.id === id)
    if (index !== -1) {
      messageArray.splice(index, 1)

      // 卸载dom
      render(null, div)
    }
  }

  if (typeof props === 'string') {
    props = {
      message: props
    }
  }

  const newProps = {
    ...props,
    id,
    destroy: onDestroy,
    zIndex: addIndex()
  }

  // 创建虚拟节点
  const VNode = h(Message, newProps)
  VNode.appContext = appContext

  // 渲染为真实节点
  render(VNode, div)
  const instance = {
    props: newProps,
    id,
    vm: VNode.component!
  }

  messageArray.push(instance)
  document.body.appendChild(div.firstChild!)
}

export const getBottomOffset = (id: string) => {
  const index = messageArray.findIndex(item => item.id === id)
  if (index <= 0) {
    return 0
  } else {
    return messageArray[index - 1].vm.exposed!.bottomOffset
  }
}

export const deleteMessage = (id: string) => {
  const index = messageArray.findIndex(item => item.id === id)

  // 重新触发动
  messageArray.splice(index, 1)
}

export const addIndex = () => 1000 + count

type MessageType = 'primary' | 'success' | 'warning' | 'error' | 'info'

const createTypedMessage = (type: MessageType) => {
  return (msg: string) => {
    _createMessage({
      message: msg,
      type
    })
  }
}

_createMessage.primary = createTypedMessage('primary')
_createMessage.success = createTypedMessage('success')
_createMessage.warning = createTypedMessage('warning')
_createMessage.error = createTypedMessage('error')
_createMessage.info = createTypedMessage('info')

// 类型声明补充（可选）
interface CreateMessageFunc {
  (props: CreateMessage, appContext?: any): void
  primary: (msg: string) => void
  success: (msg: string) => void
  warning: (msg: string) => void
  error: (msg: string) => void
  info: (msg: string) => void
}

export const createMessage: CreateMessageFunc = _createMessage as CreateMessageFunc
