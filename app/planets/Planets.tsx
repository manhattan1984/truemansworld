"use client";
import Link from "next/link";
import React from "react";

const Planets = ({ planets }) => {
  return (
    <div className="h-screen w-screen">
      <p>Planets</p>
      <div className="flex flex-col gap-4">
        {planets.map(({ name, slug }) => (
          <Link href={`/planets/${slug}`}>{name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Planets;
