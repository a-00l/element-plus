export interface InputProps {
  modelValue: string;
  type?: 'text' | 'textarea';
  size?: 'small' | 'large';
  disabled?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
}
