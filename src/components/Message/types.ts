import type { ComponentInternalInstance, VNode } from "vue"

export interface MessageProps {
  message: string | VNode;
  id: string;
  type?: 'primary' | 'success' | 'warning' | 'info' | 'error';
  showClose?: boolean;
  duration?: number;
  close?: () => void
  offset?: number
  destroy: () => void;
  zIndex?: number
}

export interface MessasgeArray {
  id: string;
  props: MessageProps;
  vm: ComponentInternalInstance;
}
