import React from "react";

import { FaChevronDown } from "react-icons/fa";
import FaqHero from "../components/block/faqs/FaqHero";
import FaqSection from "../components/block/faqs/FaqSection";
import FaqInvest from "../components/block/faqs/FaqInvest";

const FAQs = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <FaqHero />
      <FaqSection />
      <FaqInvest />
    </div>
  );
};

export default FAQs;
