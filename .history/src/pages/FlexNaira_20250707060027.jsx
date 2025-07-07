import React from "react";
import FlexnairaHero from "../components/FlexNaira/FlexnairaHero";
import BeBetter from "../components/FlexNaira/BeBetter";
// import StayPrepared from "../components/FlexNaira/StayPrepared";

const FlexNaira = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <FlexnairaHero />
      <BeBetter />
      {/* <StayPrepared /> */}
    </div>
  );
};

export default FlexNaira;
