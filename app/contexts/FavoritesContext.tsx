"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Dog } from "@/app/components/DogCard";

interface FavoritesContextType {
  favorites: Dog[];
  addFavorite: (dog: Dog) => void;
  removeFavorite: (dogId: string) => void;
  toggleFavorite: (dog: Dog) => void;
  isFavorite: (dogId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Dog[]>([]);

  const addFavorite = (dog: Dog) => {
    setFavorites((prev) => {
      if (prev.find((d) => d.id === dog.id)) {
        return prev;
      }
      return [...prev, dog];
    });
  };

  const removeFavorite = (dogId: string) => {
    setFavorites((prev) => prev.filter((d) => d.id !== dogId));
  };

  const toggleFavorite = (dog: Dog) => {
    if (favorites.find((d) => d.id === dog.id)) {
      removeFavorite(dog.id);
    } else {
      addFavorite(dog);
    }
  };

  const isFavorite = (dogId: string) => {
    return favorites.some((d) => d.id === dogId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used in FavoritesProvider");
  }
  return context;
};
