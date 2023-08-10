import { useUser, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const { isSignedIn } = useUser();

  if (isSignedIn) router.push("/");

  return (
    <div>
      <button
        onClick={() =>
          signUp?.authenticateWithRedirect({
            strategy: "oauth_github",
            redirectUrl: "/callback",
            redirectUrlComplete: "/",
          })
        }
      >
        Continue with GitHub
      </button>
    </div>
  );
}
