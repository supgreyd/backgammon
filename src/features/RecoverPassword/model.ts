import { emailRule } from "@/shared/validation";
import { useForm } from "vee-validate";
import { reactive, toRefs } from "vue";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "@/app/utils";

import type { StringSchema } from "yup";

interface PasswordRecoveryFields {
  email: string;
}

interface PasswordRecoveryRules {
  email: StringSchema;
}

interface PasswordRecoveryForm {
  fields: PasswordRecoveryFields;
  rules: PasswordRecoveryRules;
}

export function usePasswordRecoveryForm() {
  const router = useRouter();

  const passwordRecoveryForm = reactive<PasswordRecoveryForm>({
    fields: {
      email: "",
    },
    rules: {
      email: emailRule,
    },
  });

  const { errors, handleSubmit } = useForm({
    initialValues: passwordRecoveryForm.fields,
  });

  const sendRecoveryEmail = async (params: PasswordRecoveryFields) => {
    const { email } = params;
    try {
      const response = await sendPasswordResetEmail(auth, email);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const onSubmit = handleSubmit(params => {
    sendRecoveryEmail(params).then( () => {
      router.push("/auth");
    });
  });

  return {
    ...toRefs(passwordRecoveryForm),
    onSubmit,
    errors,
  };
}
