// Import React so we can use JSX and React features
import React from "react";
// Import the FlexnairaHero component, which shows the hero/banner section for Flex Naira
import FlexnairaHero from "../components/FlexNaira/FlexnairaHero";
// Import the BeBetter component, which shows improvement tips or features for Flex Naira
import BeBetter from "../components/FlexNaira/BeBetter";
// import StayPrepared from "../components/FlexNaira/StayPrepared"; // (Optional) Section for future use

// This is the main page component for the Flex Naira feature
// It displays the hero section and improvement tips for Flex Naira
const FlexNaira = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div sets the minimum height and background color using Tailwind CSS
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* FlexnairaHero displays the top banner/hero section for Flex Naira */}
      <FlexnairaHero />
      {/* BeBetter displays improvement tips or features for Flex Naira */}
      <BeBetter />
      {/* <StayPrepared /> Uncomment to show the StayPrepared section in the future */}
    </div>
  );
};

// Export the component so it can be used in routing and other parts of the app
export default FlexNaira;
