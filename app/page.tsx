"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./contexts/AuthContext";
import NavBar from "./components/NavBar";
import LinkCard from "./components/LinkCard";

export default function Home() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  // check auth before allowing entry
  // if user isn't validated, route to login
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Bark bark go login!");
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Bark bark bark...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex flex-grow flex-col md:flex-row items-center justify-center gap-6">
        <LinkCard href="/dogs/search" label="Search" />
        <LinkCard href="/dogs/favorites" label="Favorites" />
      </main>
    </div>
  );
}
