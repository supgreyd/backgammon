<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BaseForm",

    props: {
      title: {
        type: String,
        default: "",
      },
    },

    setup() {
      const onSubmit = (event: Event) => {
        console.log({ event });
      };

      return {
        onSubmit,
      };
    },
  });
</script>

<template>
  <div class="base-form">
    <form
      class="space-y-6"
      action="#"
      @submit.prevent="onSubmit($event)"
    >
      <h5
        v-if="title"
        class="base-form-title"
      >
        {{ title }}
      </h5>
      <slot name="fields" />
      <slot name="actions" />
    </form>
  </div>
</template>

<style scoped>
  .base-form {
    @apply w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8;
  }
  .base-form-title {
    @apply text-xl font-medium text-gray-900;
  }
</style>
