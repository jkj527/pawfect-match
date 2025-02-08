"use client";

import React from "react";
import Image from "next/image";

export interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogCardProps {
  dog: Dog;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  return (
    <div className="group relative flex flex-col m-4 min-w-[280px] h-96 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-cerulean/50 via-softBlue/20 to-softBlue/10 transition-all duration-300 group-hover:from-roseQuartz/60 group-hover:via-roseQuartz/20 group-hover:to-softBlue/30"></div>
      
      <div className="relative h-48 w-full mb-4 rounded-t-2xl overflow-hidden border-b border-white/30">
        <Image
          src={dog.img}
          alt={dog.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="relative z-10 flex flex-col justify-evenly px-4 pb-4 space-y-2">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{dog.name}</h3>
        <p className="text-base text-jet drop-shadow">
          <span className="font-semibold text-cerulean">Breed: </span>
          {dog.breed}
        </p>
        <p className="text-base text-jet drop-shadow">
          <span className="font-semibold text-cerulean">Age: </span>
          {dog.age}
        </p>
        <p className="text-base text-jet drop-shadow">
          <span className="font-semibold text-cerulean">Zip: </span>
          {dog.zip_code}
        </p>
      </div>
    </div>
  );
};

export default DogCard;
