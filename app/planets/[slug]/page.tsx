import React from "react";
import planets from "../../../constants/planets";
import Planet from "./Planet";

const page = ({ params: { slug } }: { params: { slug: string } }) => {
    const planet = planets.find((planet) => planet.slug === slug);
//   console.log(planets);

//   const planet = { name: "Venus" };
  return <Planet planet={planet} />;
};

export default page;
