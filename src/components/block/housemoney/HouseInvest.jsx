import React from "react";
import fallback from "../../../assets/images/fallbackImg.png";
import PiggyBtn from "../../reusable/PiggyBtn";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.jpg";
import image4 from "../../../assets/images/image4.jpg";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const HouseInvest = () => {
  return (
    <div className="max-h-[100vh] bg-[#f2f7f8] flex items-center ">
      <div className="flex items-center gap-24 mx-auto max-w-[1200px] mt-[10%] max-md:flex-col-reverse max-md:w-[100%]">
        <div className="w-[450px] max-md:w-[90%] max-md:mx-auto">
          <img src={fallback} alt="fallback" />
        </div>
        <div className="">
          <div className="flex mb-[20px] items-center  max-md:w-[55%] mx-auto">
            <img
              src={image1}
              alt=""
              className="w-[4rem] h-[4rem] rounded-full border-[5px] border-white"
            />
            <img
              src={image2}
              alt=""
              className="w-[4rem] h-[4rem] rounded-full border-[5px] border-white ml-[-20px]"
            />
            <img
              src={image3}
              alt=""
              className="w-[4rem] h-[4rem] rounded-full border-[5px] border-white ml-[-20px]"
            />
            <img
              src={image4}
              alt=""
              className="w-[4rem] h-[4rem] rounded-full border-[5px] border-white ml-[-20px]"
            />
            <span className="w-[4rem] h-[4rem] rounded-full flex items-center justify-center bg-amber-50  ml-[-20px]">
              5m+
            </span>
          </div>
          <div className="w-[500px] mb-[20px] max-md:w-[100%]">
            <h1 className=" text-[35px] font-bold tracking-tighter leading-10 max-md:text-center">
              Join 5+ million people who save and invest with us
            </h1>
          </div>
          <div className="flex gap-2 max-md:w-[80%] max-md:mx-auto">
            <PiggyBtn
              title="Get on iPhone"
              iconTitle={<FaApple />}
              borderColor="#000"
              textColor="#0c0e1b"
              bgColor="#f2f7f8"
            />
            <PiggyBtn
              title="Get on Android"
              iconTitle={<BiLogoPlayStore />}
              borderColor="#000"
              textColor="#0c0e1b"
              bgColor="#f2f7f8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseInvest;
