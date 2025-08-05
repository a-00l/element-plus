<template>
  <div class="mb-4">
    <my-button disabled>Default</my-button>
    <my-button
      type="primary"
      disabled
      >Primary
    </my-button>
    <my-button
      type="success"
      disabled
      >Success
    </my-button>
    <my-button
      type="info"
      disabled
      >Info
    </my-button>
    <my-button
      type="warning"
      disabled
      >Warning
    </my-button>
    <my-button
      type="danger"
      disabled
      >Danger
    </my-button>
  </div>

  <div>
    <my-button
      plain
      disabled
      >Plain
    </my-button>
    <my-button
      type="primary"
      plain
      disabled
      >Primary
    </my-button>
    <my-button
      type="success"
      plain
      disabled
      >Success
    </my-button>
    <my-button
      type="info"
      plain
      disabled
      >Info
    </my-button>
    <my-button
      type="warning"
      plain
      disabled
      >Warning
    </my-button>
    <my-button
      type="danger"
      plain
      disabled
      >Danger
    </my-button>
  </div>
</template>

<script setup>
  import myButton from '@/components/Button/Button.vue'
</script>

<style scoped>
  .mb-4 {
    margin-bottom: 1rem;
  }
</style>
