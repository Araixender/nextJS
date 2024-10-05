"use client";
import { SessionProvider, useSession } from "next-auth/react";
import Image from "next/image";
import Me from "./me";

export default function Home() {

  return (
    <SessionProvider>
        <main>
          Helllo
          <Me />
        </main>
    </SessionProvider>
  );
}
