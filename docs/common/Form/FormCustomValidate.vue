<template>
  <my-form
    ref="formRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <my-form-item
      label="Password"
      prop="pass"
    >
      <my-input
        v-model="ruleForm.pass"
        autocomplete="off"
      />
    </my-form-item>
    <my-form-item
      label="Confirm"
      prop="checkPass"
    >
      <my-input
        v-model="ruleForm.checkPass"
        autocomplete="off"
      />
    </my-form-item>
    <my-form-item
      label="Age"
      prop="age"
    >
      <my-input v-model.number="ruleForm.age" />
    </my-form-item>
    <my-form-item>
      <my-button
        type="primary"
        @click="submitForm"
      >
        Submit
      </my-button>
      <my-button @click="resetForm">Reset</my-button>
    </my-form-item>
  </my-form>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import myButton from '@/components/Button/Button.vue'
  import myForm from '@/components/Form/Form.vue'
  import myFormItem from '@/components/Form/FormItem.vue'
  import myInput from '@/components/Input/Input.vue'

  const formRef = ref()
  const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
  })

  const rules = reactive({
    pass: [
      {
        validator: (rule, value, callback) => {
          if (value.length < 6) {
            callback(new Error('请输入6位以上密码'))
          } else {
            callback()
          }
        },
        trigger: 'blur',
      },
    ],
    checkPass: [
      {
        validator: (rule, value, callback) => {
          if (value !== ruleForm.pass) {
            callback(new Error('两次输入密码不一致'))
          } else {
            callback()
          }
        },
        trigger: 'blur',
      },
    ],
    age: [
      {
        validator: (rule, value, callback) => {
          if (value < 18) {
            callback(new Error('年龄必须大于18岁'))
          } else {
            callback()
          }
        },
        trigger: 'blur',
      },
    ],
  })

  const submitForm = () => {
    formRef.value.validate().then(() => {
      console.log('校验通过')
    })
  }

  const resetForm = () => {
    formRef.value.resetFields()
  }
</script>
