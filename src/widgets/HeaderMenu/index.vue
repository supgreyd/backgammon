<script>
  import HeaderMenuItem from "@/entities/HeaderMenuItem/index.vue";
  import SignOut from "@/features/SignOut/index.vue";
  import { headerMenu } from "@/widgets/HeaderMenu/model";
  export default {
    name: "HeaderMenu",

    components: {
      HeaderMenuItem,
      SignOut,
    },

    setup() {
      return {
        headerMenu,
      };
    },
  };
</script>

<template>
  <nav
    class="max-w-7xl mx-auto px-4"
    aria-label="Top"
  >
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="block">
          <div class="ml-10 flex items-baseline space-x-4">
            <HeaderMenuItem
              v-for="item in headerMenu"
              :key="item.slug"
              :menu-item="item"
            />
          </div>
        </div>
        <SignOut />
      </div>
    </div>
  </nav>
</template>
