import React from "react";
import HouseHero from "../components/block/housemoney/HouseHero";
import HouseInvest from "../components/block/housemoney/HouseInvest";

const HouseMoney = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <HouseHero />
      <HouseInvest />
    </div>
  );
};

export default HouseMoney;
