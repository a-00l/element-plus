<template>
  <Form
    ref="formRef"
    :model="form"
    :rules="rules"
  >
    <FormItem
      label="Activity name"
      prop="name"
      disabled
    >
      <Input v-model="form.name" />
    </FormItem>
    <FormItem
      label="Activity zone"
      prop="region"
    >
      <Select
        v-model="form.region"
        placeholder="please select your zone"
      >
        <Option
          label="Zone one"
          value="shanghai"
        />
        <Option
          label="Zone two"
          value="beijing"
        />
      </Select>
    </FormItem>
    <FormItem
      label="Instant delivery"
      prop="delivery"
    >
      <Switch v-model="form.delivery" />
    </FormItem>
    <FormItem
      label="Activity form"
      prop="desc"
    >
      <Input
        v-model="form.desc"
        type="textarea"
      />
    </FormItem>
    <FormItem>
      <Button
        type="primary"
        @click="onSubmit"
        >Create</Button
      >
      <Button @click="reset">Cancel</Button>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
  import Form from '@/components/Form/Form.vue'
  import FormItem from '@/components/Form/FormItem.vue'
  import Input from '@/components/Input/Input.vue'
  import Select from '@/components/Select/Select.vue'
  import Option from '@/components/Select/Option.vue'
  import Switch from '@/components/Switch/Switch.vue'
  import Button from '@/components/Button/Button.vue'
  import { reactive, ref } from 'vue'

  const formRef = ref()
  const form = reactive({
    name: '',
    region: '',
    delivery: false,
    desc: '',
  })

  const rules = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' as const },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' as const },
    ],
    region: [{ required: true, message: '请选择活动区域', trigger: 'change' as const }],
    desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' as const }],
  }

  const onSubmit = async () => {
    formRef.value.validate()
  }

  const reset = () => {
    formRef.value.resetFields()
  }
</script>
<style scoped></style>
