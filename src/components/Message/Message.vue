<template>
  <Transition
    name="fade-up"
    @enter="handleEnter"
    @after-leave="handleAfterLeave"
  >
    <div
      class="my-message"
      :class="{
        [`my-message--${type}`]: type,
        'is-plain': plain,
      }"
      v-if="visible"
      @mouseenter="clear"
      @mouseleave="destroy"
      ref="messageRef"
      :id="id"
      :style="cssStyle"
    >
      <div class="my-message__content">
        <VNodeRender :message="message" />
      </div>
      <div
        class="my-message__close"
        v-if="showClose"
        @click.stop="handleClose"
      >
        <Icon icon="xmark"></Icon>
      </div>
      <div
        class="my-badge my-message__badge"
        v-if="grouping && sameTypeCount > 1"
      >
        <sup
          class="my-badge__content"
          :class="`my-badge__content--${type}`"
        >
          {{ sameTypeCount }}
        </sup>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import VNodeRender from '@/utils/VNodeRender'
  import type { MessageProps } from './types'
  import Icon from '../Icon/Icon.vue'
  import { computed, onMounted, ref, watch, type ComputedRef } from 'vue'
  import { deleteMessage, getBottomOffset, getSameTypeCount } from './method'
  defineOptions({
    name: 'MyMessage',
  })

  const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    showClose: false,
    duration: 3000,
    offset: 16,
    grouping: false,
  })

  const visible = ref(false)
  const messageRef = ref<HTMLDivElement>()
  let timer: number

  const height = ref(0)
  // 计算最后一个message的位置
  const lastOffset = computed(() => getBottomOffset(props.id))

  // 计算当前message的位置
  const topOffset = computed(() => lastOffset.value + props.offset)
  const bottomOffset = computed(() => topOffset.value + height.value)

  // 计算当前类型的message数量
  let sameTypeCount: ComputedRef<number>
  if (props.grouping) {
    sameTypeCount = computed(() => getSameTypeCount(props.id))

    watch(sameTypeCount, (newVal, oldVal) => {
      if (newVal > 1) {
        clearTimeout(timer)

        destroy()
      }
    })
  }

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
        visible.value = false
        // 删除对应message，重新触发动画
        deleteMessage(props.id)
      }, props.duration)
    }
  }

  const handleEnter = () => {
    if (messageRef.value) {
      height.value = messageRef.value?.getBoundingClientRect().height!
    }
  }
  const handleAfterLeave = () => {
    props.destroy(props.id)
  }

  const clear = () => {
    if (timer) clearTimeout(timer)
  }

  const handleClose = () => {
    setTimeout(() => {
      visible.value = false
    })

    // 删除对应message，重新触发动画
    deleteMessage(props.id)
  }

  watch(visible, (newVal) => {
    if (!newVal) {
      // 删除message，回调函数
      props.close ? props.close() : ''
    }
  })

  onMounted(async () => {
    visible.value = true
    destroy()
  })

  defineExpose({
    bottomOffset,
  })
</script>
