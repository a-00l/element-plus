import { onMounted, onUnmounted, type Ref } from "vue"

export const useClickOutside = (element: Ref<HTMLElement | undefined>, callback: () => void) => {

  const clickOutside = (e: MouseEvent) => {
    if (!e.target) return

    // 点击外部元素，回调函数
    if (element.value && !element.value?.contains(e.target as HTMLElement)) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('click', clickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', clickOutside)
  })
}
