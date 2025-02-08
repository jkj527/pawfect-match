"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";
import NavBar from "@/app/components/NavBar";
import DogCardGrid from "@/app/components/DogCardGrid";

const SearchPage: React.FC = () => {
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
            <main className="flex flex-col p-8">
                <h1 className="text-4xl font-bold text-center mb-8">Search</h1>
                <DogCardGrid />
            </main>
        </div>
    );
}

export default SearchPage;
