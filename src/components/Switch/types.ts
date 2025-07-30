export type SwitchValue = boolean | string | number;

export interface SwitchProps {
  modelValue: SwitchValue;
  activeText?: string;
  inactiveText?: string;
  activeValue?: SwitchValue;
  inactiveValue?: SwitchValue;
  inlinePrompt?: boolean;
  size?: 'small' | 'large';
}

export interface SwitchEmits {
  (e: 'update:modelValue', value: SwitchValue): void;
  (e: 'change', value: SwitchValue): void;
}
