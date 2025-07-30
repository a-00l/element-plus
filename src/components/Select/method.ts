import { reactive } from "vue";
import type { OptionProps } from "./types";

// 用于保存所有option
export const optionArray = reactive<OptionProps[]>([])

// 用于添加option
export const addOption = (option: OptionProps) => {
  optionArray.push(option)
}
