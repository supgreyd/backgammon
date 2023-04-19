<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BaseButton",

    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },

    setup(props, { emit }) {
      function handleClick() {
        emit("click");
      }

      return {
        handleClick,
      };
    },
  });
</script>

<template>
  <button
    class="base-btn"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
  .base-btn {
    @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg
  text-sm px-5 py-2.5 focus:outline-none;
  }
</style>
