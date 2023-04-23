import { string } from "yup";
import { defineRule } from "vee-validate";

export const emailRule = string().required().email();
export const passwordRule = string().required().min(8);

defineRule("confirmed", (value: string, [target]: string) => {
  if (value === target) {
    return true;
  }
  return "Passwords must match";
});
