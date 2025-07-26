<template>
  <Transition
    name="fade-up"
    @after-leave="handleAfterLeave"
  >
    <div
      class="my-message"
      :class="{ [`my-message--${type}`]: type }"
      v-if="isMessage"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      ref="messageRef"
      :id="id"
      :style="cssStyle"
    >
      <div class="my-message__content">
        {{ message }}
      </div>
      <div
        class="my-message__close"
        v-if="showClose"
        @click="handleClose"
      >
        <Icon icon="xmark"></Icon>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import type { MessageProps } from './types'
  import Icon from '../Icon/Icon.vue'
  import { computed, nextTick, onMounted, ref } from 'vue'
  import { deleteMessage, getBottomOffset } from './method'
  const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    showClose: false,
    duration: 3000,
    offset: 16,
  })

  const isMessage = ref(false)
  const messageRef = ref<HTMLDivElement>()
  let timer: number

  const height = ref(0)
  // 计算最后一个message的位置
  const lastOffset = computed(() => getBottomOffset(props.id))

  // 计算当前message的位置
  const topOffset = computed(() => lastOffset.value + props.offset)
  const bottomOffset = computed(() => topOffset.value + height.value)

  const cssStyle = computed(() => {
    return {
      top: `${topOffset.value}px`,
      zIndex: props.zIndex,
    }
  })

  // 销毁message
  const destroy = () => {
    if (props.duration) {
      timer = setTimeout(() => {
        isMessage.value = false
        // 删除对应message，重新触发动画
        deleteMessage(props.id)
      }, props.duration)
    }
  }

  const handleAfterLeave = () => {
    props.destroy()
  }

  const handleMouseenter = () => {
    if (timer) clearTimeout(timer)
  }

  const handleMouseleave = () => {
    destroy()
  }

  const handleClose = () => {
    isMessage.value = false
    // 删除对应message，重新触发动画
    deleteMessage(props.id)
  }

  onMounted(async () => {
    isMessage.value = true
    destroy()

    await nextTick()
    height.value = messageRef.value?.getBoundingClientRect().height!
  })

  defineExpose({
    bottomOffset,
  })
</script>
