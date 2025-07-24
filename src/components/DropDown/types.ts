import type { ComputedPlacement, Options } from "@popperjs/core";

type commandType = string | number | object

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

