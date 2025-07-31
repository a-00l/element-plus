import type { Reactive, Ref } from "vue";
import type { TooltipInstance } from "../Tooltip/types";

export type OptionValueType = string | number;
export interface SelectProps {
  modelValue: string | number;
  disabled?: boolean;
  clearable?: boolean;
  effect?: 'light' | 'dark';
  placeholder?: string;
  filterable?: boolean;
  filterMethod?: (value: string) => OptionProps[];
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string | number): void;
}

export interface OptionProps {
  value: OptionValueType;
  label?: OptionValueType;
  disabled?: boolean;
}

export interface StateSelect {
  inputValue: OptionValueType;
  selectOption: OptionProps;
}

export interface SelectContext {
  stateSelect: Reactive<StateSelect>;
  emits: SelectEmits;
  searchValue: Ref<string>;
  popper: Ref<TooltipInstance>;
  filterMethod?: (value: string) => OptionProps[];
}

export const SelectContexKey = Symbol('selectRef')
