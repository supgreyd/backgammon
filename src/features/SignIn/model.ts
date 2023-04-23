import { emailRule, passwordRule } from "@/shared/validation";
import { useForm } from "vee-validate";
import { reactive, toRefs } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "@/app/utils";

import type { StringSchema } from "yup";

interface SignInFields {
  email: string;
  password: string;
}

interface SignInRules {
  email: StringSchema;
  password: StringSchema;
}

interface SignInForm {
  fields: SignInFields;
  rules: SignInRules;
}

export function useSignInForm() {
  const router = useRouter();

  const signInForm = reactive<SignInForm>({
    fields: {
      email: "",
      password: "",
    },
    rules: {
      email: emailRule,
      password: passwordRule,
    },
  });

  const { errors, handleSubmit } = useForm({
    initialValues: signInForm.fields,
  });

  const login = async (params: SignInFields) => {
    const { email, password } = params;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const onSubmit = handleSubmit(params => {
    login(params).then(() => {
      router.push("/");
    });
  });

  return {
    ...toRefs(signInForm),
    onSubmit,
    errors,
  };
}
