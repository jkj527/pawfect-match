"use client";

import React from "react";

interface FilterProps {
    availableBreeds: string[];
    selectedBreed: string;
    onBreedChange: (breed: string) => void;
    sortOrder: "asc" | "desc";
    onSortToggle: () => void;
}

const Filter: React.FC<FilterProps> = ({
    availableBreeds,
    selectedBreed,
    onBreedChange,
    sortOrder,
    onSortToggle,
}) => {
    return (
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-4 mb-8 p-4 bg-white/80 backdrop-blur-md border border-ashGray/50 rounded-lg shadow-md">
            
            {/* filter */}
            <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
                <label className="font-semibold text-jet whitespace-nowrap">
                    Filter by Breed:
                </label>
                <select
                    value={selectedBreed}
                    onChange={(e) => onBreedChange(e.target.value)}
                    className="w-full md:w-auto border border-ashGray rounded px-4 py-2 text-jet focus:outline-none"
                >
                    <option value="">All Breeds</option>
                    {availableBreeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>

            {/* sort */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                <label className="font-semibold text-jet whitespace-nowrap">
                    Sort:
                </label>
                <button
                    onClick={onSortToggle}
                    className="border border-ashGray rounded px-4 py-2 text-jet focus:outline-none hover:bg-softBlue/30 transition-colors"
                >
                    {sortOrder === "asc" ? "A-Z" : "Z-A"}
                </button>
            </div>
        </div>
    );
};

export default Filter;
