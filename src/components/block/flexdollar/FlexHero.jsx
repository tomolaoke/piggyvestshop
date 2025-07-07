import React from "react";
import FlexDollar from "../../../assets/images/flexdollar.png";
import PiggyBtn from "../../reusable/PiggyBtn";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple, FaDollarSign } from "react-icons/fa";

const FlexHero = () => {
  return (
    <div className=" bg-[#0c1825] pt-[100px] overflow-hidden max-md:h-[max-content]">
      <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between w-full mt-[7.5%] max-md:flex-col max-md:mx-auto max-md:text-center ">
          <div className="text-white w-[500px] flex flex-col">
            <h1 className="text-[50px] font-semibold tracking-tighter ">
              Flex Dollar
            </h1>
            <div className="flex items-center w-[150px] h-[40px] bg-[#ffffff] gap-1 rounded-full text-[#0c1825] justify-center mb-[20px] max-md:mx-auto">
              <span>
                <FaDollarSign size={25} />
              </span>
              <span className="font-normal">Dollar Savings</span>
            </div>
            <p className="text-[20px] mb-[20px] leading-7 max-md:mb-[60px]">
              Save and grow your money in foreign currencies such as Dollars.
            </p>
            <div className="flex gap-2 max-md:justify-center max-md:mb-[60px]">
              <PiggyBtn
                title="Get on iPhone"
                iconTitle={<FaApple />}
                bgColor="#ffffff"
                textColor="#0c1825"
              />
              <PiggyBtn
                title="Get on Android"
                iconTitle={<BiLogoPlayStore />}
                bgColor="#ffffff"
                textColor="#0c1825"
              />
            </div>
          </div>

          <div className="w-[400px] ">
            <img src={FlexDollar} alt="flexDollar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexHero;
