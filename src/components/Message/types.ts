import type { ComponentInternalInstance, VNode } from "vue"
type MessageType = 'primary' | 'success' | 'warning' | 'error' | 'info'
export interface MessageProps {
  message: string | VNode;
  id: string;
  type?: MessageType;
  showClose?: boolean;
  duration?: number;
  close?: () => void
  offset?: number
  destroy: (id: string) => void;
  zIndex?: number;
  plain?: boolean;
  grouping?: boolean;
}

export interface MessageArray {
  id: string;
  props: MessageProps;
  vm: ComponentInternalInstance;
  type: MessageType;
  sameTypeCount: number;
}

type filter = 'id' | 'destroy' | 'zIndex'
export type CreateMessage = Omit<MessageProps, filter>
