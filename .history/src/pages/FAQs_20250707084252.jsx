// Import React so we can use JSX and React features
import React from "react";
// Import the ChevronDown icon for FAQ toggles (if used in children)
import { FaChevronDown } from "react-icons/fa";
// Import the FaqHero component, which shows the hero/banner section for FAQs
import FaqHero from "../components/block/faqs/FaqHero";
// Import the FaqSection component, which shows the main FAQ questions/answers
import FaqSection from "../components/block/faqs/FaqSection";
// Import the FaqInvest component, which shows investment-related FAQs
import FaqInvest from "../components/block/faqs/FaqInvest";

// This is the main page component for the FAQs (Frequently Asked Questions)
// It displays the hero section, main FAQ section, and investment FAQ section
const FAQs = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div sets the minimum height and background color using Tailwind CSS
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* FaqHero displays the top banner/hero section for FAQs */}
      <FaqHero />
      {/* FaqSection displays the main FAQ questions/answers */}
      <FaqSection />
      {/* FaqInvest displays investment-related FAQs */}
      <FaqInvest />
    </div>
  );
};

// Export the component so it can be used in routing and other parts of the app
export default FAQs;
