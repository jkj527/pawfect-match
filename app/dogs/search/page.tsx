"use client";

import React from "react";
import NavBar from "@/app/components/NavBar";
import DogCardGrid from "@/app/components/DogCardGrid";

export default function SearchPage() {

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex flex-col p-8">
                <h1 className="text-4xl font-bold text-center mb-8">Search</h1>
                <DogCardGrid />
            </main>
        </div>
    );
}
