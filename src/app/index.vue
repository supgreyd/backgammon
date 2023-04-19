<script lang="ts">
  import { defineComponent } from "vue";
  import BaseLayout from "@/shared/components/BaseLayout/index.vue";
  import AppHeader from "@/shared/components/AppHeader/index.vue";
  import HeaderMenu from "@/widgets/HeaderMenu/index.vue";
  export default defineComponent({
    name: "App",

    components: {
      BaseLayout,
      AppHeader,
      HeaderMenu,
    },
  });
</script>

<template>
  <BaseLayout>
    <template #header>
      <AppHeader>
        <HeaderMenu />
      </AppHeader>
    </template>
    <template #main>
      <main class="container xl mx-auto">
        <RouterView />
      </main>
    </template>
  </BaseLayout>
</template>

<style>
  @import "./index.css";
</style>
