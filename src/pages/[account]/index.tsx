import { useSession } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { session } = useSession();

  return (
    <>
      <header>
        <button onClick={() => router.push("/")}>Home</button>
      </header>
      <section>
        {session?.user.imageUrl ? (
          <>
            <Image
              src={session.user.imageUrl}
              alt={session.user.fullName ?? ""}
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
            />
            <small style={{ maxWidth: "50ch" }}>{session.user.imageUrl}</small>
          </>
        ) : (
          <p>
            No <code>imageUrl</code> found
          </p>
        )}
      </section>
    </>
  );
}
