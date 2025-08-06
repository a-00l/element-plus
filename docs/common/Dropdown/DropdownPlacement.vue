<template>
  <div class="box">
    <my-dropdown placement="top-start">
      <my-button> topStart </my-button>
      <template #dropdown>
        <my-dropdown-menu>
          <my-dropdown-item>The Action 1st</my-dropdown-item>
          <my-dropdown-item>The Action 2st</my-dropdown-item>
          <my-dropdown-item>The Action 3st</my-dropdown-item>
        </my-dropdown-menu>
      </template>
    </my-dropdown>
    <my-dropdown placement="top">
      <my-button> top </my-button>
      <template #dropdown>
        <my-dropdown-menu>
          <my-dropdown-item>The Action 1st</my-dropdown-item>
          <my-dropdown-item>The Action 2st</my-dropdown-item>
          <my-dropdown-item>The Action 3st</my-dropdown-item>
        </my-dropdown-menu>
      </template>
    </my-dropdown>
    <my-dropdown placement="top-end">
      <my-button> topEnd </my-button>
      <template #dropdown>
        <my-dropdown-menu>
          <my-dropdown-item>The Action 1st</my-dropdown-item>
          <my-dropdown-item>The Action 2st</my-dropdown-item>
          <my-dropdown-item>The Action 3st</my-dropdown-item>
        </my-dropdown-menu>
      </template>
    </my-dropdown>
    <my-dropdown placement="bottom-start">
      <my-button> bottomStart </my-button>
      <template #dropdown>
        <my-dropdown-menu>
          <my-dropdown-item>The Action 1st</my-dropdown-item>
          <my-dropdown-item>The Action 2st</my-dropdown-item>
          <my-dropdown-item>The Action 3st</my-dropdown-item>
        </my-dropdown-menu>
      </template>
    </my-dropdown>
    <my-dropdown placement="bottom">
      <my-button> bottom </my-button>
      <template #dropdown>
        <my-dropdown-menu>
          <my-dropdown-item>The Action 1st</my-dropdown-item>
          <my-dropdown-item>The Action 2st</my-dropdown-item>
          <my-dropdown-item>The Action 3st</my-dropdown-item>
        </my-dropdown-menu>
      </template>
    </my-dropdown>
    <my-dropdown placement="bottom-end">
      <my-button> bottomEnd </my-button>
      <template #dropdown>
        <my-dropdown-menu>
          <my-dropdown-item>The Action 1st</my-dropdown-item>
          <my-dropdown-item>The Action 2st</my-dropdown-item>
          <my-dropdown-item>The Action 3st</my-dropdown-item>
        </my-dropdown-menu>
      </template>
    </my-dropdown>
  </div>
</template>

<script setup>
  import myDropdown from '@/components/Dropdown/Dropdown.vue'
  import myDropdownItem from '@/components/Dropdown/DropdownItem.vue'
  import myDropdownMenu from '@/components/Dropdown/DropdownMenu.vue'
  import myButton from '@/components/Button/Button.vue'
</script>

<style scoped>
  .box {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1rem;
  }
</style>
