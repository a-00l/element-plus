import type { InjectionKey, Ref } from "vue";

export type NameType = string | Array<string>;

export interface CollapseProps {
  modelValue: NameType;
  accordion?: boolean;
}

export interface CollapseIntance {
  setActiveName: (name: string) => void;
  activeName: Ref<NameType>;
}

export interface CollapseItemProps {
  title: string;
  name: string;
  disabled?: boolean;
}

export interface CollapseEmits {
  (e: 'update:modelValue', value: NameType): void;
  (e: 'change', value: NameType): void;
}

export interface CollapseContext {
  activeName: Ref<NameType>;
  setActiveName: (name: string) => void;
}

export const CollapseContextKey: InjectionKey<CollapseContext> = Symbol('CollapseContext');
