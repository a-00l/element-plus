<template>
  <div class="tooltip-base-box">
    <div class="center">
      <my-tooltip
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
        trigger="click"
      >
        <my-button>top-start</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <my-button>top</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
        trigger="click"
      >
        <my-button>top-end</my-button>
      </my-tooltip>
    </div>

    <div class="row">
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <my-button>left-start</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
        trigger="click"
      >
        <my-button>right-start</my-button>
      </my-tooltip>
    </div>

    <div class="row">
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <my-button class="mt-3 mb-3">left</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <my-button>right</my-button>
      </my-tooltip>
    </div>

    <div class="row">
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <my-button>left-end</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <my-button>right-end</my-button>
      </my-tooltip>
    </div>

    <div class="center">
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <my-button>bottom-start</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <my-button>bottom</my-button>
      </my-tooltip>
      <my-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <my-button>bottom-end</my-button>
      </my-tooltip>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
  .tooltip-base-box {
    width: 600px;
    margin: auto;
  }

  .tooltip-base-box .row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .tooltip-base-box .center {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
</style>
