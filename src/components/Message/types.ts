export interface MessageProps {
  message: string
  type?: 'primary' | 'success' | 'warning' | 'info' | 'error'
  showClose?: boolean
}
