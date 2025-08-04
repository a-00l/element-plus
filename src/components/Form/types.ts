import type { RuleItem, ValidateError, ValidateFieldsError } from "async-validator";
import type { InjectionKey } from "vue";


export interface FormItemProps {
  label: string;
  prop?: string;
  required?: boolean;
  disabled?: boolean | undefined;
}

export interface FormProps {
  model: Record<string, any>;
  rules: Record<string, RuleFormItem[]>;
  disabled?: boolean;
}

export interface FormInstance {
  validate: () => Promise<any>;
  resetFields: () => void;
  clearValidate: () => void;
}

export interface RuleFormItem extends RuleItem {
  trigger?: 'blur' | 'change';
}

export interface FormItemContext {
  prop: string;
  validate: (trigger?: string) => Promise<any>;
  resetField: () => void;
  clearValidate: () => void;
  disabled?: boolean;
}

export interface FormItemInstance {
  validate: (trigger?: string) => Promise<any>;
  resetField: () => void;
  clearValidate: () => void;
}

export interface FormItemErrorField {
  errors: ValidateError[];
  fields: ValidateFieldsError;
}

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
}

export const FormContextKey: InjectionKey<FormContext> = Symbol('FormContext');
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol('FormItemContext');
