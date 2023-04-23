<script lang="ts">
  import BaseInput from "@/shared/components/BaseInput/index.vue";

  import { useField } from "vee-validate";

  export default {
    name: "FormField",
    components: {
      BaseInput,
    },
    props: {
      placeholder: {
        type: String,
        default: "Enter text",
      },
      label: {
        type: String,
        default: "",
      },
      modelValue: {
        type: String,
        default: "",
      },
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: "text",
      },
      errorMessage: {
        type: String,
        default: "",
      },
      id: {
        type: String,
        required: true,
      },
      rules: {
        required: true,
      },
    },
    emits: ["update:modelValue"],
    setup(props: any, { emit }: any) {
      const { value, errorMessage, validate } = useField(props.name, props.rules);

      function inputHandler(value: string) {
        emit("update:modelValue", value);
      }
      return {
        inputHandler,
        value,
        errors: errorMessage.value,
        validate,
      };
    },
  };
</script>

<template>
  <div class="relative">
    <label
      :for="name"
      class="base-input-label"
    >
      {{ label }}
    </label>
    <BaseInput
      :value="value"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      @input="inputHandler($event.target.value)"
    />
    <span class="base-input-error">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
  .base-input-label {
    @apply block mb-2 text-sm font-medium text-gray-900;
  }
  .base-input-error {
    @apply mt-2 text-sm text-red-600;
  }
</style>
