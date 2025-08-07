import type { ComponentInternalInstance, VNode } from "vue"

export interface MessageProps {
  message: string | VNode;
  id: string;
  type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  showClose?: boolean;
  duration?: number;
  close?: () => void
  offset?: number
  destroy: (id: string) => void;
  zIndex?: number;
  plain?: boolean;
}

export interface MessageArray {
  id: string;
  props: MessageProps;
  vm: ComponentInternalInstance;
}

type filter = 'id' | 'destroy' | 'zIndex'
export type CreateMessage = Omit<MessageProps, filter>
