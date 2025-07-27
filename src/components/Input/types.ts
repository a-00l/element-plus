export type NativeType = 'text' | 'textarea' | 'password' | 'button' | 'checkbox' | 'file' | 'number' | 'radio'

export interface InputProps {
  modelValue: string | number;
  type?: NativeType | 'textarea';
  size?: 'small' | 'large';
  disabled?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
  placeholder?: string;
}

export interface InputEmits {
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
}
