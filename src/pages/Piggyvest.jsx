import React from "react";
import Piggyvesthero from "../components/piggyvest/Piggyvesthero";
import Savewithout from "../components/piggyvest/Savewithout";
import Build from "../components/piggyvest/Build";

const Piggyvest = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <Piggyvesthero />
      <Savewithout />
      <Build />
    </div>
  );
};

export default Piggyvest;
