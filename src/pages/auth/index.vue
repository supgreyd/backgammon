<script lang="ts">
  import { defineComponent } from "vue";
  import SignInForm from "@/features/SignIn/index.vue";
  import SignUpForm from "@/features/SignUp/index.vue";
  import PasswordRecoveryForm from "@/features/RecoverPassword/index.vue";
  export default defineComponent({
    name: "AuthPage",
    components: {
      SignInForm,
      SignUpForm,
      PasswordRecoveryForm,
    },
  });
</script>

<template>
  <h1>Auth</h1>
  <SignInForm />
  <SignUpForm />
  <PasswordRecoveryForm />
</template>
