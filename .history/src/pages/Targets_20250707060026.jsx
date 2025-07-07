import React from "react";
import TargetHero from "../components/block/targets/TargetHero";
import TargetGoals from "../components/block/targets/TargetGoals";
import TargetFun from "../components/block/targets/TargetFun";
import TargetChallenges from "../components/block/targets/TargetChallenges";

const Targets = () => {
  return (
    <div className="min-h-screen w-full bg-[#f2f7f8]">
      <TargetHero />
      <TargetGoals />
      <TargetFun />
      <TargetChallenges />
    </div>
  );
};

export default Targets;
