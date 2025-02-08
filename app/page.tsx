"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // check auth before allowing entry
  // if user isn't validated, route to login
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Bark bark go login!");
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Bark bark bark...</div>
  };

  return (
    <>
      <NavBar />
      <main></main>
    </>
  );
}
