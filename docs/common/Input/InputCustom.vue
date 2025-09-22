<template>
  <div>
    <my-input
      v-model="input1"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #prepend>Http://</template>
    </my-input>
  </div>
  <div class="mt-4">
    <my-input
      v-model="input2"
      style="max-width: 600px"
      placeholder="Please input"
    >
      <template #append>.com</template>
    </my-input>
  </div>
  <div class="mt-4">
    <my-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <my-select
          v-model="select"
          placeholder="Select"
          style="width: 115px"
        >
          <my-option
            label="Restaurant"
            value="1"
          />
          <my-option
            label="Order No."
            value="2"
          />
          <my-option
            label="Tel"
            value="3"
          />
        </my-select>
      </template>
      <template #append>
        <my-button icon="magnifying-glass" />
      </template>
    </my-input>
  </div>
  <div class="mt-4">
    <my-input
      v-model="input3"
      style="max-width: 600px"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <my-button :icon="Search" />
      </template>
      <template #append>
        <my-select
          v-model="select"
          placeholder="Select"
          style="width: 115px"
        >
          <my-option
            label="Restaurant"
            value="1"
          />
          <my-option
            label="Order No."
            value="2"
          />
          <my-option
            label="Tel"
            value="3"
          />
        </my-select>
      </template>
    </my-input>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  const select = ref('')
</script>

<style>
  .mt-4 {
    margin-top: 1rem;
  }

  .input-with-select .my-input-group__prepend {
    background-color: var(--my-fill-color-blank);
  }
</style>
