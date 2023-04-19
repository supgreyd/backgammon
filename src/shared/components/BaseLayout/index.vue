<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "BaseInput",
  });
</script>

<template>
  <slot name="header" />
  <slot name="main" />
  <slot name="footer" />
</template>
