"use client";

import React, { useState } from "react";
import { useFavorites } from "@/app/contexts/FavoritesContext";
import DogCard, { Dog } from "@/app/components/DogCard";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const MatchGenerator: React.FC = () => {
  const { favorites } = useFavorites();
  const [matchedDog, setMatchedDog] = useState<Dog | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generateMatch = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://frontend-take-home-service.fetch.com/dogs/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(favorites.map((dog) => dog.id)),
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText);
      }
      const data = await res.json();
      const matchId = data.match;
      const dog = favorites.find((d) => d.id === matchId);
      if (dog) {
        setMatchedDog(dog);
      } else {
        throw new Error("Matched dog not found in favorites.");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Error generating match:", err.message);
      } else {
        console.error("Unknown error generating match");
      }
    }
    setLoading(false);
  };

  const handleClose = () => {
    setMatchedDog(null);
  };

  return (
    <div className="mt-8 p-4 bg-white/90 backdrop-blur-md border border-ashGray/50 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Generate Match</h2>
      {favorites.length === 0 ? (
        <p>Pick out your favorite dogs to generate a match!</p>
      ) : (
        <>
          <p className="mb-4">Match with one of your favorite dogs!</p>
          <button
            onClick={generateMatch}
            disabled={loading}
            className="px-4 py-2 bg-roseQuartz text-white rounded hover:bg-roseQuartz/90 transition-colors"
          >
            {loading ? "Generating..." : "Generate Match"}
          </button>
        </>
      )}

      <Dialog
        open={Boolean(matchedDog)}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="text-center">Your Pawfect Match</DialogTitle>
        <DialogContent>
          {matchedDog && <DogCard dog={matchedDog} />}
        </DialogContent>
        <DialogActions className="justify-center">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-roseQuartz text-white rounded hover:bg-roseQuartz/90 transition-colors"
          >
            Close
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MatchGenerator;
