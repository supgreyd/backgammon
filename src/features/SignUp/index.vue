<script>
  import BaseForm from "@/shared/components/BaseForm/index.vue";
  import BaseButton from "@/shared/components/BaseButton/index.vue";
  import FormField from "@/entities/FormField/index.vue";

  import { useSignUpForm } from "./model";

  export default {
    name: "SignUpForm",

    components: {
      BaseForm,
      BaseButton,
      FormField,
    },

    setup() {
      const { fields, rules, errors, onSubmit } = useSignUpForm();

      return {
        errors,
        onSubmit,
        fields,
        rules,
      };
    },
  };
</script>

<template>
  <BaseForm
    title="Sign Up"
    class="max-w-sm"
    @submit="onSubmit"
  >
    <template #fields>
      <FormField
        v-model="fields.email"
        placeholder="Enter email"
        id="email"
        label="Email"
        name="email"
        :error-message="errors.email"
        :rules="rules.email"
      />
      <FormField
        v-model="fields.password"
        type="password"
        placeholder="Enter password"
        id="password"
        label="Password"
        name="password"
        :error-message="errors.password"
        :rules="rules.password"
      />
      <FormField
        v-model="fields.passwordConfirm"
        type="password"
        placeholder="Confirm password"
        id="passwordConfirm"
        label="Confirm password"
        name="passwordConfirm"
        :error-message="errors.passwordConfirm"
        :rules="rules.passwordConfirm"
      />
    </template>
    <template #actions>
      <BaseButton class="w-full">Sign up</BaseButton>
    </template>
  </BaseForm>
</template>
