import type { Ref } from "vue"

export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type ButtonSize = 'small' | 'default' | 'large'

// Button组件的props
export interface ButtonProps {
  type: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  disabled?: boolean
  circle?: boolean
  icon?: string
  loading?: boolean
  loadingIcon?: string
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement>
  size: ButtonSize
  type: ButtonType
  disabled: boolean
}
