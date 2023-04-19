<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BaseInput",

    props: {
      placeholder: {
        type: String,
        default: "Enter text",
      },
      modelValue: {
        type: String,
        default: "",
      },
      id: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "text",
      },
      name: {
        type: String,
        default: "",
      },
    },

    emits: ["update:modelValue"],

    setup(props, { emit }) {
      function inputHandler(value: string) {
        emit("update:modelValue", value);
      }

      return {
        inputHandler,
      };
    },
  });
</script>

<template>
  <input
    class="base-input"
    :type="type"
    :id="id"
    :value="modelValue"
    :placeholder="placeholder"
    :name="name"
    @input="inputHandler($event.target.value)"
  />
</template>

<style scoped>
  .base-input {
    @apply block w-full p-2 text-gray-900 border border-gray-300 rounded-lg
  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500;
  }
</style>
