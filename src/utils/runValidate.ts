import { type FormItemContext } from "@/components/Form/types"

export const runRules = (trigger?: string, formItem?: FormItemContext) => {
  formItem?.validate(trigger)
}
