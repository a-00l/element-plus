<template>
  <my-select
    v-model="value"
    filterable
    remote
    :remote-method="remoteMethod"
    placeholder="Please enter a keyword"
    style="width: 240px"
  >
    <my-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </my-select>
</template>

<script setup>
  import { onMounted, ref } from 'vue'

  const list = ref([])
  const value = ref([])
  const loading = ref(false)

  onMounted(() => {
    list.value = states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` }
    })
  })

  const remoteMethod = (query) => {
    return new Promise((resolve) => {
      if (query) {
        loading.value = true
        setTimeout(() => {
          const filteredOptions = list.value.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
          // 使用 resolve 返回过滤后的结果
          loading.value = false
          resolve(filteredOptions)
        }, 200)
      } else {
        console.log(query)

        // 使用 resolve 返回空数组
        resolve([])
      }
    })
  }

  const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]
</script>
