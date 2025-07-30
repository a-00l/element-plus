import { reactive } from "vue";
import type { OptionProps, OptionValueType } from "./types";

// 用于保存所有option
export const optionArray = reactive<OptionProps[]>([])

// 用于添加option
export const addOption = (option: OptionProps) => {
  optionArray.push(option)
}

// 查询所有满足value的option
export const findOption = (value: OptionValueType) => {
  return optionArray.filter(item => item.value.toString().includes(value.toString()))
}
