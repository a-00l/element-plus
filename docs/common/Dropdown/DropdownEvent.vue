<template>
  <my-dropdown @command="handleCommand">
    <span class="my-dropdown-link"> Dropdown </span>
    <template #dropdown>
      <my-dropdown-menu>
        <my-dropdown-item command="a">Action 1</my-dropdown-item>
        <my-dropdown-item command="b">Action 2</my-dropdown-item>
        <my-dropdown-item command="c">Action 3</my-dropdown-item>
        <my-dropdown-item
          command="d"
          disabled
          >Action 4</my-dropdown-item
        >
        <my-dropdown-item
          command="e"
          divided
          >Action 5</my-dropdown-item
        >
      </my-dropdown-menu>
    </template>
  </my-dropdown>
</template>

<script setup>
  import myDropdown from '@/components/Dropdown/Dropdown.vue'
  import myDropdownItem from '@/components/Dropdown/DropdownItem.vue'
  import myDropdownMenu from '@/components/Dropdown/DropdownMenu.vue'
  import { createMessage } from '@/components/Message/method.ts'
  const handleCommand = (command) => {
    createMessage({
      message: `click on item ${command}`,
      type: 'info',
    })
  }
</script>

<style scoped>
  .my-dropdown-link {
    cursor: pointer;
    color: var(--my-color-primary);
    display: flex;
    align-items: center;
  }
</style>
