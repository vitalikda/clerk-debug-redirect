import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ClerkProvider clerkJSVariant="headless" {...pageProps}>
        <main
          className={inter.className}
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <Component {...pageProps} />
        </main>
      </ClerkProvider>
    </StrictMode>
  );
}
