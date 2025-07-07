import React from "react";

import FlexHero from "../components/block/flexdollar/FlexHero";
import FlexMoney from "../components/block/flexdollar/FlexMoney";
import FlexFun from "../components/block/flexdollar/FlexFun";
import HouseInvest from "../components/block/housemoney/HouseInvest";

const FlexDollar = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <FlexHero />
      <FlexMoney />
      <FlexFun />
      <HouseInvest />
    </div>
  );
};

export default FlexDollar;
