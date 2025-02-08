"use client";

import React from "react";
import Link from "next/link";
import { PawPrint } from "lucide-react";

interface LinkCardProps {
  href: string;
  label: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="group relative flex flex-col flex-grow m-6 min-w-[300px] h-96 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cerulean/50 via-softBlue/20 to-softBlue/10 transition-all duration-300 group-hover:from-roseQuartz/60 group-hover:via-roseQuartz/20 group-hover:to-softBlue/30" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-ashGray/30 transition-all duration-300 group-hover:opacity-60 group-hover:scale-110">
        <PawPrint size={280} />
      </div>

      <div className="relative flex items-center justify-center h-full p-8">
        <span className="text-white text-5xl font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {label}
        </span>
      </div>
    </Link>
  );
};

export default LinkCard;
