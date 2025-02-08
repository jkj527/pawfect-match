"use client";

import React from "react";
import { useAuth } from "@/app/contexts/AuthContext";

const AccountDropdown: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md border border-ashGray/50 rounded-lg shadow-md p-4">
      <p className="text-sm text-jet">Signed in as:</p>
      <p className="text-sm font-bold text-ashGray">
        {user?.name || "Guest"}
      </p>
      <p className="text-sm text-ashGray">
        {user?.email || "No email"}
      </p>
      <button
        onClick={() => logout()}
        className="mt-2 w-full text-sm font-semibold text-white bg-roseQuartz rounded py-1 hover:bg-roseQuartz/90 hover:scale-105 transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountDropdown;
