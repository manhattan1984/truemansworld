import React from "react";
import planets, { PlanetType } from "../../../constants/planets";
import PlanetDetail from "./PlanetDetail";

const page = ({ params: { slug } }: { params: { slug: string } }) => {
  // @ts-ignore
  const planet: PlanetType = planets.find((planet) => planet.slug === slug);
  //   console.log(planets);

  //   const planet = { name: "Venus" };
  return <PlanetDetail planet={planet} />;
};

export default page;
