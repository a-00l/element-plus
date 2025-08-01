import type { ValidateError, ValidateFieldsError } from "async-validator";
import type { Ref } from "vue";

export interface FormItemProps {
  label: string;
  prop?: string;
}

export interface FormProps {
  model: Record<string, any>;
  rules: Record<string, any>;
}

export interface FormItemContext {
  prop: string;
  validate: () => any;
}

export interface FormItemErrorField {
  errors: ValidateError[];
  fields: ValidateFieldsError;
}

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
}

export const FormContextKey = Symbol('FormContext');
