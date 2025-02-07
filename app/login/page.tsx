"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Title from "@/app/components/Title";

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch("https://frontend-take-home-service.fetch.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ name, email }),
            });
            if (res.ok) {
                router.push('/');
            } else {
                alert('Login failed. Please submit valid credentials.');
            }
        } catch (error) {
            console.log("Error logging in:", error);
            alert("Error logging in.");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-white">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
            >

                <Title variant="large" />

                <div className="hidden md:block h-40 border-l-2 border-ashGray mx-8"></div>

                <div className="w-80 flex flex-col space-y-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className="border border-ashGray rounded px-4 py-2 text-black focus:outline-none"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="border border-ashGray rounded px-4 py-2 text-black focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-cerulean text-white rounded px-4 py-2 hover:bg-softBlue hover:text-black transition-colors"
                    >
                        Login
                    </button>
                </div>
            </form>
        </main>
    );
};

export default LoginPage;
