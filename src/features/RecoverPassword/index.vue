<script>
  import BaseForm from "@/shared/components/BaseForm/index.vue";
  import BaseButton from "@/shared/components/BaseButton/index.vue";
  import FormField from "@/entities/FormField/index.vue";

  import { usePasswordRecoveryForm } from "./model";

  export default {
    name: "PasswordRecoveryForm",

    components: {
      BaseForm,
      BaseButton,
      FormField,
    },

    setup() {
      const { fields, rules, errors, onSubmit } = usePasswordRecoveryForm();

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
    title="Password recovery"
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
    </template>
    <template #actions>
      <BaseButton class="w-full">Recover password</BaseButton>
    </template>
  </BaseForm>
</template>
