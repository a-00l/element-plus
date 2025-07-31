export interface FormItemProps {
  label: string;
  prop?: string;
}

export interface FormProps {
  model: Record<string, any>;
  rules: Record<string, any>;
}

export const FormContextKey = Symbol('FormContext');
