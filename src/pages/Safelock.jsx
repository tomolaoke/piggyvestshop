import React from "react";
import SafelockHero from "../components/safelock/SafelockHero";
import SafelockTwo from "../components/safelock/SafelockTwo";
import AvoidTemptation from "../components/safelock/AvoidTemptation";

const Safelock = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <SafelockHero />
      <SafelockTwo />
      <AvoidTemptation />
    </div>
  );
};

export default Safelock;
