import type { ComputedPlacement, Options } from "@popperjs/core";
import type { Ref } from "vue";

export type commandType = string | number | object | undefined

export interface DropdownProps {
  placement?: ComputedPlacement;
  trigger?: 'hover' | 'click';
  disabled?: boolean;
  popperOptions?: Partial<Options>;
  showTimeout?: number;
  hideTimeout?: number;
  hideOnClick?: boolean;
}

export interface DropdownInstance {
  handleOpen: () => void
  handleClose: () => void
}

export interface DropdownEmits {
  (e: 'command', command: any): void;
  (e: 'visible-change', value: boolean): void;

}

export interface DropdownItemProps {
  disabled?: boolean;
  divided?: boolean;
  command?: commandType
}

export interface DropdownContext {
  command: (command: commandType) => void;
  visible: Ref<boolean>;
}

export const DropdownSymbolKey = Symbol('Dropdown')
