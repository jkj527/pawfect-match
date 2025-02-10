"use client";

import React, { useState, useEffect } from "react";
import DogCard, { Dog } from "./DogCard";
import Filter from "./Filter";
import Pagination from "./Pagination";

const DogCardGrid: React.FC = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    // filtering and sorting
    const [availableBreeds, setAvailableBreeds] = useState<string[]>([]);
    const [selectedBreed, setSelectedBreed] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // pagination
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 24;
    const totalPages = Math.ceil(total / pageSize);

    useEffect(() => {
        async function fetchBreeds() {
            try {
                const res = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
                    credentials: "include",
                });
                const data = await res.json();
                setAvailableBreeds(data);
            } catch (error) {
                console.error("Error fetching breeds:", error);
            }
        }
        fetchBreeds();
    }, []);

    async function fetchDogs() {
        setLoading(true);
        try {
            const offset = (currentPage - 1) * pageSize;
            const params = new URLSearchParams();
            params.append("sort", `breed:${sortOrder}`);
            params.append("size", pageSize.toString());
            params.append("from", offset.toString());
            if (selectedBreed) {
                params.append("breeds", selectedBreed);
            }
            const res = await fetch(
                `https://frontend-take-home-service.fetch.com/dogs/search?${params.toString()}`,
                { credentials: "include" }
            );
            if (!res.ok) {
                const errorText = await res.text();
                console.error("Error fetching search data:", res.status, errorText);
                setLoading(false);
                return;
            }
            const searchData = await res.json();

            const resDogs = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(searchData.resultIds),
            });
            if (!resDogs.ok) {
                const errorText = await resDogs.text();
                console.error("Error fetching dog details:", resDogs.status, errorText);
                setLoading(false);
                return;
            }
            const dogsData = await resDogs.json();
            setDogs(dogsData);
            setTotal(searchData.total);
        } catch (error) {
            console.error("Error fetching dogs:", error);
            alert("Error fetching dogs.");
        }
        setLoading(false);
    }

    // fetch dogs again whenever we filter for breed or sort order
    useEffect(() => {
        setCurrentPage(1);
        fetchDogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBreed, sortOrder]);

    useEffect(() => {
        fetchDogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage]);

    const handleSortToggle = () => {
        setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    };

    return (
        <div className="w-full">
            <Filter
                availableBreeds={availableBreeds}
                selectedBreed={selectedBreed}
                onBreedChange={setSelectedBreed}
                sortOrder={sortOrder}
                onSortToggle={handleSortToggle}
            />
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dogs.map(dog => (
                        <DogCard key={dog.id} dog={dog} />
                    ))}
                </div>
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page: number) => setCurrentPage(page)}
            />
        </div>
    );
};

export default DogCardGrid;
