<template>
  <Form
    :model="model"
    :rules="rules"
  >
    <FormItem
      label="Name"
      prop="name"
    >
      <Input v-model="model.name"></Input>
    </FormItem>
    <FormItem
      label="Email"
      prop="email"
    >
      <Input v-model="model.email"></Input>
    </FormItem>
    <FormItem
      label="Password"
      prop="password"
    >
      <Input v-model="model.password"></Input>
    </FormItem>
  </Form>
</template>

<script setup>
  import Form from '@/components/Form/Form.vue'
  import FormItem from '@/components/Form/FormItem.vue'
  import Input from '@/components/Input/Input.vue'
  import { reactive } from 'vue'

  const rules = {
    name: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { min: 3, message: '长度不能小于 3', trigger: 'blur' },
    ],
    email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }

  const model = reactive({
    name: '123',
    email: '222',
    password: '111',
  })
</script>
