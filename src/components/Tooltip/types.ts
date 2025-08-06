import type { ComputedPlacement, Options } from "@popperjs/core"
import type { Ref } from "vue";

export interface TooltipProps {
  visible?: boolean;
  content?: string;
  placement?: ComputedPlacement;
  popperOption?: Partial<Options>;
  trigger?: 'hover' | 'click';
  effect?: 'dark' | 'light';
  showAfter?: number;
  hideAfter?: number;
  transition?: string;
  virtualTriggering?: boolean;
}

export interface TooltipEmits {
  (e: 'update:visible', visible: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
  triggerRef: Ref<HTMLElement | undefined>;
  popperRef: Ref<HTMLElement | undefined>
}

