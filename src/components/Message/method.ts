import { h, reactive, render } from "vue";
import type { MessageProps, MessasgeArray } from "./types";
import Message from "./Message.vue";
import { app } from "@/main";

const messageArray: MessasgeArray[] = reactive([])

let count = 0
// 创建message
export const createMessage = (props: MessageProps) => {
  const id = `message_${count++}`
  const div = document.createElement('div')

  // 删除message
  const onDestroy = () => {
    const index = messageArray.findIndex(item => item.id === id)
    if (index !== -1) {
      messageArray.splice(index, 1)

      // 卸载dom
      render(null, div)
    }
  }

  const newProps = {
    ...props,
    id,
    destroy: onDestroy,
    zIndex: addIndex()
  }

  console.log(addIndex());

  // 创建虚拟节点
  const VNode = h(Message, newProps)
  VNode.appContext = app._context

  console.log(VNode);

  debugger
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
  console.log(messageArray[index]);
  if (index <= 0) {
    return 0
  } else {
    return messageArray[index - 1].vm.exposed!.bottomOffset
  }
}

export const deleteMessage = (id: string) => {
  const index = messageArray.findIndex(item => item.id === id)

  // 重新触发动画
  messageArray.splice(index, 1)
}

export const addIndex = () => 1000 + count
