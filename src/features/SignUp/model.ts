import { emailRule, passwordRule } from "@/shared/validation";
import { useForm } from "vee-validate";
import { reactive, toRefs } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "@/app/utils";

import type { StringSchema } from "yup";

interface SignUpFields {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface SignUpRules {
  email: StringSchema;
  password: StringSchema;
  passwordConfirm: string;
}

interface SignUpForm {
  fields: SignUpFields;
  rules: SignUpRules;
}

export function useSignUpForm() {
  const router = useRouter();

  const signUpForm = reactive<SignUpForm>({
    fields: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    rules: {
      email: emailRule,
      password: passwordRule,
      passwordConfirm: "confirmed:@password",
    },
  });

  const { errors, handleSubmit } = useForm({
    initialValues: signUpForm.fields,
  });

  const signUp = async (params: SignUpFields) => {
    const { email, password } = params;
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const onSubmit = handleSubmit(params => {
    signUp(params).then(() => {
      router.push("/");
    });
  });

  return {
    ...toRefs(signUpForm),
    onSubmit,
    errors,
  };
}
