<template>
  <div class="mb-4">
    <my-button size="large">Large</my-button>
    <my-button>Default</my-button>
    <my-button size="small">Small</my-button>
    <my-button
      size="large"
      icon="magnifying-glass"
      >Search
    </my-button>
    <my-button icon="magnifying-glass">Search</my-button>
    <my-button
      size="small"
      icon="magnifying-glass"
      >Search
    </my-button>
  </div>

  <div class="mb-4">
    <my-button
      size="large"
      round
      >Large</my-button
    >
    <my-button round>Default</my-button>
    <my-button
      size="small"
      round
      >Small</my-button
    >
    <my-button
      size="large"
      icon="magnifying-glass"
      round
      >Search
    </my-button>
    <my-button
      icon="magnifying-glass"
      round
      >Search</my-button
    >
    <my-button
      size="small"
      icon="magnifying-glass"
      round
      >Search
    </my-button>
  </div>

  <div class="mb-4">
    <my-button
      size="large"
      icon="magnifying-glass"
      circle
    >
    </my-button>
    <my-button
      icon="magnifying-glass"
      circle
    ></my-button>
    <my-button
      size="small"
      icon="magnifying-glass"
      circle
    >
    </my-button>
  </div>
</template>

<style lang="scss" scoped>
  .mb-4 {
    margin-bottom: 1rem;
  }
</style>
