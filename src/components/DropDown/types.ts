import type { ComputedPlacement, Options } from "@popperjs/core";

export type commandType = string | number | object | undefined

export interface DropdownProps {
  placement?: ComputedPlacement;
  trigger?: 'hover' | 'click';
  disabled?: boolean;
  popperOptions?: Partial<Options>;
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
  command: (command: commandType) => void
}

export const DropdownSymbolKey = Symbol('Dropdown')
