<template>
  <my-dropdown :hide-on-click="false">
    <span class="my-dropdown-link"> Dropdown List </span>
    <template #dropdown>
      <my-dropdown-menu>
        <my-dropdown-item command="a">Action 1</my-dropdown-item>
        <my-dropdown-item command="b">Action 2</my-dropdown-item>
        <my-dropdown-item command="c">Action 3</my-dropdown-item>
        <my-dropdown-item
          command="d"
          disabled
          >Action 4
        </my-dropdown-item>
        <my-dropdown-item
          command="e"
          divided
          >Action 5
        </my-dropdown-item>
      </my-dropdown-menu>
    </template>
  </my-dropdown>
</template>

<style scoped>
  .my-dropdown-link {
    cursor: pointer;
    color: var(--my-color-primary);
    display: flex;
    align-items: center;
  }
</style>
