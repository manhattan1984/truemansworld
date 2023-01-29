"use client";
import { Suspense } from "react";
import SolarSystem from "../components/SolarSystem";

export default function HomePage() {
  // bg-cover bg-[url('https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]
  return (
    <div className="h-screen w-screen ">
      <div className="absolute z-10 m-4 text-white flex flex-col gap-2">
        <p className="font-clashBold text-4xl capitalize">
          Welcome to the true man's world
        </p>
        <p>Each planet is a project I have worked on</p>
        <p>And I am the sun, the center of this world</p>
        <div className="text-gray-300 text-lg">
          <p>Pinch or Scroll To Zoom In</p>
          <p>Drag the screen to navigate this world</p>
          <p>Select A Planet To Explore</p>
        </div>
      </div>
      <Suspense
        fallback={
          <p className="text-black text-3xl">Loading The True Man's World</p>
        }
      >
        <SolarSystem />
      </Suspense>
    </div>
  );
}
