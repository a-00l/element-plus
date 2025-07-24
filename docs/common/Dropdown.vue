<template>
  <Dropdown @command="handlecommand">
    <span>点击以下</span>
    <template #dropdown>
      <DropdownMenu>
        <DropdownItem command="1">选项1</DropdownItem>
        <DropdownItem command="2">选项2</DropdownItem>
        <DropdownItem command="3">选项3</DropdownItem>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

<script setup>
  import Dropdown from '@/components/DropDown/DropdownDown.vue'
  import DropdownItem from '@/components/DropDown/DropdownItem.vue'
  const handlecommand = (command) => {
    console.log(command)
  }

  import DropdownMenu from '@/components/DropDown/DropdownMenu.vue'
</script>
