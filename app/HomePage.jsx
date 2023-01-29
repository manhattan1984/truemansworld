"use client";
import { Suspense } from "react";
import SolarSystem from "../components/SolarSystem";

export default function HomePage() {
  // bg-cover bg-[url('https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
  return (
    <Suspense>
      <div className="h-screen w-screen ">
        <SolarSystem />
      </div>
    </Suspense>
  );
}
