
// --- Targets Page Imports ---
// Import React so we can use JSX and React features
import React from "react";
// Import the TargetHero component (shows the hero/banner section for Targets)
import TargetHero from "../components/block/targets/TargetHero";
// Import the TargetGoals component (shows the goals section for Targets)
import TargetGoals from "../components/block/targets/TargetGoals";
// Import the TargetFun component (shows the fun/interactive section for Targets)
import TargetFun from "../components/block/targets/TargetFun";
// Import the TargetChallenges component (shows the challenges section for Targets)
import TargetChallenges from "../components/block/targets/TargetChallenges";


// --- Targets Page Component ---
// This is the main page component for the Targets feature.
// It displays the hero, goals, fun, and challenges sections for Targets.
// All code is commented for beginners.
const Targets = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div sets the minimum height and background color using Tailwind CSS
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      {/* TargetHero displays the top banner/hero section for Targets */}
      <TargetHero />
      {/* TargetGoals displays the goals section for Targets */}
      <TargetGoals />
      {/* TargetFun displays the fun/interactive section for Targets */}
      <TargetFun />
      {/* TargetChallenges displays the challenges section for Targets */}
      <TargetChallenges />
    </div>
  );
};

// Export the component so it can be used in routing and other parts of the app
export default Targets;
