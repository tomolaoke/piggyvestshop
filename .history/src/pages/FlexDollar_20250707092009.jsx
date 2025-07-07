// Import React so we can use JSX and React features
import React from "react";
// Import the FlexHero component, which shows the hero/banner section for Flex Dollar
import FlexHero from "../components/block/flexdollar/FlexHero";
// Import the FlexMoney component, which shows the money features for Flex Dollar
import FlexMoney from "../components/block/flexdollar/FlexMoney";
// Import the FlexFun component, which shows fun facts or features for Flex Dollar
import FlexFun from "../components/block/flexdollar/FlexFun";
// Import the HouseInvest component, which shows investment options/details for House Money
import HouseInvest from "../components/block/housemoney/HouseInvest";

// This is the main page component for the Flex Dollar feature
// It displays the hero section, money features, fun facts, and house investment options
const FlexDollar = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div sets the minimum height and background color using Tailwind CSS
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* FlexHero displays the top banner/hero section for Flex Dollar */}
      <FlexHero />
      {/* FlexMoney displays the money features for Flex Dollar */}
      <FlexMoney />
      {/* FlexFun displays fun facts or features for Flex Dollar */}
      <FlexFun />
      {/* HouseInvest displays the investment options/details for House Money */}
      <HouseInvest />
    </div>
  );
};

// Export the component so it can be used in routing and other parts of the app
export default FlexDollar;
