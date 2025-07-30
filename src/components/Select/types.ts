import type { InjectionKey, Ref } from "vue";

type OptionValueType = string | number;
export interface SelectProps {
  modelValue: string | number;
  disabled?: boolean;
  clearable?: boolean;
  effect?: 'light' | 'dark';
  placeholder?: string;
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string | number): void;
}

export interface OptionProps {
  value: OptionValueType;
  label?: OptionValueType;
  disabled?: boolean;
}

export interface SelectContext {
  inputValue: Ref<string | number>;
  emits: SelectEmits;
}

export const SelectContexKey = Symbol('selectRef')
