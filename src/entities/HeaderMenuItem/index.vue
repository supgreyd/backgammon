<script lang="ts">
  import type { MenuItem } from "./model";
  import type { PropType } from "vue";
  export default {
    name: "HeaderMenuItem",
    props: {
      menuItem: {
        type: Object as PropType<MenuItem>,
        required: true,
      },
    },
  };
</script>

<template>
  <router-link
    :to="menuItem.path"
    class="px-3 py-2 rounded-md text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200"
  >
    <span>{{ menuItem.title }}</span>
  </router-link>
</template>
