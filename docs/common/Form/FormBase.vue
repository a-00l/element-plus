<template>
  <my-form
    :model="form"
    :rules="rules"
    label-width="auto"
    style="max-width: 600px"
  >
    <my-form-item label="Activity name">
      <my-input v-model="form.name" />
    </my-form-item>
    <my-form-item label="Activity zone">
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
    <my-form-item label="Instant delivery">
      <my-switch v-model="form.delivery" />
    </my-form-item>
    <my-form-item label="Activity form">
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
      <my-button>Cancel</my-button>
    </my-form-item>
  </my-form>
</template>

<script setup>
  import { reactive } from 'vue'
  import myButton from '@/components/Button/Button.vue'
  import myForm from '@/components/Form/Form.vue'
  import myFormItem from '@/components/Form/FormItem.vue'
  import myInput from '@/components/Input/Input.vue'
  import mySelect from '@/components/Select/Select.vue'
  import myOption from '@/components/Select/Option.vue'
  import mySwitch from '@/components/Switch/Switch.vue'

  const form = reactive({
    name: '',
    region: '',
    delivery: false,
    desc: '',
  })

  const rules = {}

  const onSubmit = () => {
    console.log('submit!', form)
  }
</script>
