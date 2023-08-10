import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { signIn } = useSignIn();
  const { isSignedIn } = useUser();

  if (isSignedIn) router.push("/");

  return (
    <div>
      <button
        onClick={() =>
          signIn?.authenticateWithRedirect({
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
