import React from "react";
import planets from "../../constants/planets";
import Planets from "./Planets";

const page = () => {
  return <Planets planets={planets} />;
};

export default page;
