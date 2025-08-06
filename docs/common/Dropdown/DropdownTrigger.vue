<template>
  <my-row class="block-col-2">
    <div class="col-2">
      <span class="demonstration">hover to trigger</span>
      <my-dropdown>
        <span class="my-dropdown-link">
          Dropdown List<my-icon class="my-icon--right"><arrow-down /></my-icon>
        </span>
        <template #dropdown>
          <my-dropdown-menu>
            <my-dropdown-item :icon="Plus">Action 1</my-dropdown-item>
            <my-dropdown-item :icon="CirclePlusFilled"> Action 2 </my-dropdown-item>
            <my-dropdown-item :icon="CirclePlus">Action 3</my-dropdown-item>
            <my-dropdown-item :icon="Check">Action 4</my-dropdown-item>
            <my-dropdown-item :icon="CircleCheck">Action 5</my-dropdown-item>
          </my-dropdown-menu>
        </template>
      </my-dropdown>
    </div>
    <div class="col-2">
      <span class="demonstration">click to trigger</span>
      <my-dropdown trigger="click">
        <span class="my-dropdown-link"> Dropdown List </span>
        <template #dropdown>
          <my-dropdown-menu>
            <my-dropdown-item :icon="Plus">Action 1</my-dropdown-item>
            <my-dropdown-item :icon="CirclePlusFilled"> Action 2 </my-dropdown-item>
            <my-dropdown-item :icon="CirclePlus">Action 3</my-dropdown-item>
            <my-dropdown-item :icon="Check">Action 4</my-dropdown-item>
            <my-dropdown-item :icon="CircleCheck">Action 5</my-dropdown-item>
          </my-dropdown-menu>
        </template>
      </my-dropdown>
    </div>
    <div class="col-2">
      <span class="demonstration">right click to trigger</span>
      <my-dropdown trigger="contextmenu">
        <span class="my-dropdown-link">
          Dropdown List<my-icon class="my-icon--right"><arrow-down /></my-icon>
        </span>
        <template #dropdown>
          <my-dropdown-menu>
            <my-dropdown-item>Action 1</my-dropdown-item>
            <my-dropdown-item> Action 2 </my-dropdown-item>
            <my-dropdown-item>Action 3</my-dropdown-item>
            <my-dropdown-item>Action 4</my-dropdown-item>
            <my-dropdown-item>Action 5</my-dropdown-item>
          </my-dropdown-menu>
        </template>
      </my-dropdown>
    </div>
  </my-row>
</template>

<script setup>
  import myDropdown from '@/components/Dropdown/Dropdown.vue'
  import myDropdownItem from '@/components/Dropdown/DropdownItem.vue'
  import myDropdownMenu from '@/components/Dropdown/DropdownMenu.vue'
</script>
<style scoped>
  .block-col-2 {
    display: flex;
    justify-content: space-between;
  }

  .block-col-2 .demonstration {
    display: block;
    color: var(--my-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }

  .block-col-2 .my-dropdown-link {
    display: flex;
    align-items: center;
  }

  .col-2 {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
