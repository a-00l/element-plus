<template>
  <div
    class="my-input"
    :class="{
      [`my-input--${size}`]: size,
      'is-disabled': disabled || formItem?.disabled,
      'my-input-group': $slots.append || $slots.prepend,
      'my-input-group--prepend': $slots.prepend,
      'my-input-group--append': $slots.append,
      'is-suffix': $slots.suffix,
    }"
    v-bind="$attrs"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <!-- input -->
    <template v-if="type === 'text'">
      <!-- prepend slot -->
      <div
        class="my-input-group__prepend"
        v-if="$slots.prepend"
      >
        <slot name="prepend"></slot>
      </div>
      <div
        class="my-input__wrapper"
        :class="{ 'is-focus': isFocus }"
      >
        <!-- prefix -->
        <span
          class="my-input__prefix"
          v-if="prefixIcon || $slots.prefix"
        >
          <span class="my-input__prefix-inner">
            <Icon
              v-if="prefixIcon"
              :icon="prefixIcon!"
              class="my-input__icon"
            ></Icon>
            <slot name="prefix"> </slot>
          </span>
        </span>
        <input
          v-on="$attrs"
          ref="inputRef"
          :type="inputType"
          class="my-input__inner"
          v-model="modelInput"
          :disabled="disabled || formItem?.disabled"
          :placeholder="placeholder"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown.enter="emits('change', modelInput)"
        />
        <!-- suffix -->
        <span
          class="my-input__suffix"
          v-if="suffixIcon || $slots.suffix || clearable || showPassword"
        >
          <span class="my-input__suffix-inner">
            <Icon
              icon="times-circle"
              class="my-input__icon my-input__clear"
              v-if="isClearable"
              @click="clearInput"
            >
            </Icon>

            <Icon
              v-if="suffixIcon"
              :icon="suffixIcon!"
              class="my-input__icon"
            >
            </Icon>

            <Icon
              icon="eye"
              class="my-input__icon my-input__password"
              v-if="showPassword && isPassword && modelInput?.toString().length > 0"
              @click="toggleShowPwd"
            >
            </Icon>

            <Icon
              icon="eye-slash"
              class="my-input__icon my-input__password"
              v-if="showPassword && !isPassword && modelInput?.toString().length > 0"
              @click="toggleShowPwd"
            >
            </Icon>
            <slot name="suffix"> </slot>
          </span>
        </span>
      </div>
      <!-- append slot -->
      <div
        class="my-input-group__append"
        v-if="$slots.append"
      >
        <slot name="append"> </slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <div
        class="my-textarea"
        :class="{ 'is-focus': isFocus }"
      >
        <textarea
          ref="inputRef"
          :type="inputType"
          v-model="modelInput"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown.enter="emits('change', modelInput)"
          v-on="$attrs"
          class="my-textarea__inner"
          :disabled="disabled || formItem?.disabled"
          :placeholder="placeholder"
          :rows="rows"
          name="textarea"
        ></textarea>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, inject, nextTick, ref, watch } from 'vue'
  import Icon from '../Icon/Icon.vue'
  import type { InputEmits, InputProps } from './types'
  import { runRules } from '@/utils/runValidate'
  import { FormItemContextKey } from '../Form/types'

  defineOptions({
    inheritAttrs: false,
  })

  const formItem = inject(FormItemContextKey)
  const props = withDefaults(defineProps<InputProps>(), {
    type: 'text',
  })

  const emits = defineEmits<InputEmits>()

  const modelInput = ref(props.modelValue)
  const inputType = ref(props.type)
  const inputRef = ref<HTMLInputElement>()

  const isClearable = computed(
    () =>
      modelInput.value?.toString().length > 0 &&
      props.clearable &&
      !props.disabled &&
      (isFocus.value || isHover.value),
  )

  // 控制密码显示
  const isShowPwd = ref(true)
  const isPassword = computed(
    () =>
      modelInput.value?.toString().length > 0 &&
      props.type !== 'textarea' &&
      isShowPwd.value &&
      props.showPassword &&
      !props.disabled,
  )

  const isHover = ref(false)
  const isFocus = ref(false)
  // 获得焦点
  const handleFocus = () => {
    isFocus.value = true
    nextTick(() => {
      inputRef.value?.focus()
    })
  }

  // 失去焦点
  const handleBlur = () => {
    isFocus.value = false
    inputRef.value?.blur()

    emits('change', modelInput.value)
    runRules('blur', formItem)
  }

  // 处理input事件
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement

    emits('update:modelValue', target.value)
    runRules('change', formItem)
  }

  // 选中input中的文字
  const selectInputText = () => {
    if (props.disabled) return

    inputRef.value?.select()
  }

  // 清空input
  const clearInput = () => {
    if (props.disabled) return

    modelInput.value = ''
    emits('clear')
  }

  // 密码关闭，显示
  const toggleShowPwd = () => {
    handleFocus()
    // 切换显示
    isShowPwd.value = !isShowPwd.value
    inputType.value = isShowPwd.value ? 'text' : 'password'
  }

  watch(
    () => props.modelValue,
    (newValue, oldValue) => {
      modelInput.value = newValue
      if (newValue !== oldValue) {
        emits('change', newValue)
      }
    },
  )

  defineExpose({
    clear: clearInput,
    blur: handleBlur,
    focus: handleFocus,
    ref: inputRef,
    select: selectInputText,
  })
</script>
