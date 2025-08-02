<template>
  <my-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-width="auto"
    style="max-width: 600px"
  >
    <my-form-item
      label="Activity name"
      prop="name"
    >
      <my-input v-model="form.name" />
    </my-form-item>
    <my-form-item
      label="Activity zone"
      prop="region"
    >
      <my-select
        v-model="form.region"
        placeholder="please select your zone"
      >
        <my-option
          label="Zone one"
          value="shanghai"
        />
        <my-option
          label="Zone two"
          value="beijing"
        />
      </my-select>
    </my-form-item>
    <my-form-item
      label="Instant delivery"
      prop="delivery"
    >
      <my-switch v-model="form.delivery" />
    </my-form-item>
    <my-form-item
      label="Activity form"
      prop="desc"
    >
      <my-input
        v-model="form.desc"
        type="textarea"
      />
    </my-form-item>
    <my-form-item>
      <my-button
        type="primary"
        @click="onSubmit"
        >Create</my-button
      >
      <my-button @click="reset">Cancel</my-button>
    </my-form-item>
  </my-form>
  {{ form.desc }}
</template>

<script setup>
  import myForm from '@/components/Form/Form.vue'
  import myFormItem from '@/components/Form/FormItem.vue'
  import myInput from '@/components/Input/Input.vue'
  import mySelect from '@/components/Select/Select.vue'
  import myOption from '@/components/Select/Option.vue'
  import mySwitch from '@/components/Switch/Switch.vue'
  import myButton from '@/components/Button/Button.vue'
  import { reactive, ref } from 'vue'

  const formRef = ref()
  const form = reactive({
    name: '',
    region: '',
    desc: '',
  })

  const rules = {
    name: [
      { required: true, message: '请输入活动名称', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' },
    ],
    region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
    desc: [
      { required: true, message: '请填写活动形式', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value && value.length > 4) {
            callback(new Error('活动形式描述不能超过4个字符'))
          } else {
            callback()
          }
        },
        trigger: 'blur',
      },
    ],
  }

  const onSubmit = async () => {
    formRef.value.validate()
  }

  const reset = () => {
    formRef.value.resetFields()
  }
</script>
