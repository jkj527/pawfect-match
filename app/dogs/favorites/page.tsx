"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import NavBar from "@/app/components/NavBar";
import DogCard from "@/app/components/DogCard";
import { useFavorites } from "@/app/contexts/FavoritesContext";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
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
      <main className="flex flex-col flex-grow p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-center text-lg text-ashGray">
            No favorites yet!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {favorites.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FavoritesPage