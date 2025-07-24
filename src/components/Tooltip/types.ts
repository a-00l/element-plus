import type { ComputedPlacement, Options } from "@popperjs/core"

export interface TooltipProps {
  visible: boolean;
  content: string;
  placement?: ComputedPlacement;
  popperOption?: Partial<Options>;
  trigger?: 'hover' | 'click';
  effect?: 'dark' | 'light';
  showAfter?: number;
  hideAfter?: number;
}

export interface TooltipEmits {
  (e: 'update:visible', visible: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}

