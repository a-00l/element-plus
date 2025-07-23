<template>
  <div class="mb-4">
    <Button>Default</Button>
    <Button type="primary"> Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </div>
  <div class="mb-4">
    <Button plain>Plain</Button>
    <Button
      plain
      type="primary"
    >
      Primary</Button
    >
    <Button
      plain
      type="success"
      >Success</Button
    >
    <Button
      plain
      type="info"
      >Info</Button
    >
    <Button
      plain
      type="warning"
      >Warning</Button
    >
    <Button
      plain
      type="danger"
      >Danger</Button
    >
  </div>
  <div class="mb-4">
    <Button>Default</Button>
    <Button
      round
      type="primary"
    >
      Round</Button
    >
    <Button
      round
      type="success"
      >Success</Button
    >
    <Button
      round
      type="info"
      >Info</Button
    >
    <Button
      round
      type="warning"
      >Warning</Button
    >
    <Button
      round
      type="danger"
      >Danger</Button
    >
  </div>
  <div class="mb-4">
    <Button
      circle
      type="primary"
      icon="fa-house"
    >
    </Button>
    <Button
      circle
      type="success"
      icon="fa-thumbs-up"
    ></Button>
    <Button
      circle
      type="info"
      icon="fa-headphones"
    ></Button>
    <Button
      circle
      type="warning"
      icon="fa-user"
    ></Button>
    <Button
      circle
      type="danger"
      icon="fa-comment"
    ></Button>
  </div>
</template>

<script setup>
  import Button from '@/components/Button/Button.vue'
</script>

<style scoped>
  .mb-4 {
    margin-bottom: 1rem;
  }
</style>
