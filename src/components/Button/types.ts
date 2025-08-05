export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type ButtonSize = 'small' | 'medium' | 'large'

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
}
