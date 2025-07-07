// Import React library so we can use JSX and React features
import React from "react";
// Import the HouseHero component, which shows the hero/banner section for House Money
import HouseHero from "../components/block/housemoney/HouseHero";
// Import the HouseInvest component, which shows the investment options/details for House Money
import HouseInvest from "../components/block/housemoney/HouseInvest";

// This is the main page component for the House Money feature
// It displays the hero section and the investment section for House Money
const HouseMoney = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div sets the minimum height and background color using Tailwind CSS
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* HouseHero displays the top banner/hero section for House Money */}
      <HouseHero />
      {/* HouseInvest displays the investment options/details for House Money */}
      <HouseInvest />
    </div>
  );
};

// Export the component so it can be used in routing and other parts of the app
export default HouseMoney;
