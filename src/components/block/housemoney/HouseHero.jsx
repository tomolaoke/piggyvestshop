import React from "react";
import housemoney from "../../../assets/images/housemoney.png";
import PiggyBtn from "../../reusable/PiggyBtn";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple, FaHome } from "react-icons/fa";

const HouseHero = () => {
  return (
    <div className="max-h-[100vh] bg-[#0c0e1b] pt-[100px] overflow-hidden">
      <div className=" flex items-center max-w-[1200px] mx-auto h-full ">
        <div className="flex items-center justify-between w-full mt-[7.5%] max-md:flex-col max-md:gap-y-[90px]">
          <div className="text-white w-[500px] max-md:w-[90%] mx-auto">
            <h1 className="text-[50px] font-semibold tracking-tighter max-md:text-center">
              House Money
            </h1>
            <div
              className="flex items-center w-[180px] h-[40px] bg-[#ffffff] gap-2 rounded-full text-[#0c0e1b] justify-center mb-[20px] 
            max-md:w-[50%] max-md:mx-auto"
            >
              <span>
                <FaHome size={10} color="hotpink" />
              </span>
              <span className="font-normal">Semi Strict Wallet</span>
            </div>
            <p className="text-[20px] mb-[20px] leading-7 max-md:text-center ">
              Semi-strict wallet to save for your house rent and bills. Earn up
              to 14% interest p.a
            </p>
            <div className="flex gap-2  max-md:w-[80%] max-md:mx-auto max-md:justify-between max-md:gap-x-[10px] ">
              <PiggyBtn
                title="Get on iPhone"
                iconTitle={<FaApple />}
                bgColor="#ffffff"
                textColor="#0c0e1b"
              />
              <PiggyBtn
                title="Get on Android"
                iconTitle={<BiLogoPlayStore />}
                bgColor="#ffffff"
                textColor="#0c0e1b"
              />
            </div>
          </div>

          <div className="w-[400px]  ">
            <img src={housemoney} alt="housemoney" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseHero;
