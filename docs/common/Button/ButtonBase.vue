<template>
  <div class="mb-4">
    <my-button>Default</my-button>
    <my-button type="primary"> Primary</my-button>
    <my-button type="success">Success</my-button>
    <my-button type="info">Info</my-button>
    <my-button type="warning">Warning</my-button>
    <my-button type="danger">Danger</my-button>
  </div>
  <div class="mb-4">
    <my-button plain>Plain</my-button>
    <my-button
      plain
      type="primary"
    >
      Primary</my-button
    >
    <my-button
      plain
      type="success"
      >Success</my-button
    >
    <my-button
      plain
      type="info"
      >Info</my-button
    >
    <my-button
      plain
      type="warning"
      >Warning</my-button
    >
    <my-button
      plain
      type="danger"
      >Danger</my-button
    >
  </div>
  <div class="mb-4">
    <my-button>Default</my-button>
    <my-button
      round
      type="primary"
    >
      Round</my-button
    >
    <my-button
      round
      type="success"
      >Success</my-button
    >
    <my-button
      round
      type="info"
      >Info</my-button
    >
    <my-button
      round
      type="warning"
      >Warning</my-button
    >
    <my-button
      round
      type="danger"
      >Danger</my-button
    >
  </div>
  <div class="mb-4">
    <my-button
      circle
      type="primary"
      icon="fa-house"
    >
    </my-button>
    <my-button
      circle
      type="success"
      icon="fa-thumbs-up"
    ></my-button>
    <my-button
      circle
      type="info"
      icon="fa-headphones"
    ></my-button>
    <my-button
      circle
      type="warning"
      icon="fa-user"
    ></my-button>
    <my-button
      circle
      type="danger"
      icon="fa-comment"
    ></my-button>
  </div>
</template>

<style scoped>
  .mb-4 {
    margin-bottom: 1rem;
  }
</style>
