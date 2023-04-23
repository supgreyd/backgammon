import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "@/app/utils";

export function useSignOut() {
  const router = useRouter();

  async function onSignOut() {
    console.log("sign out");
    try {
      await signOut(auth);
      router.push("/auth");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return { onSignOut };
}
