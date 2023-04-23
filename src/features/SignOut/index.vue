<script>
  import BaseButton from "@/shared/components/BaseButton/index.vue";

  import { useSignOut } from "@/features/SignOut/model";

  export default {
    name: "SignOut",

    components: {
      BaseButton,
    },

    setup() {
      const { onSignOut } = useSignOut();

      return { onSignOut };
    },
  };
</script>

<template>
  <BaseButton @click="onSignOut">Sign out</BaseButton>
</template>
