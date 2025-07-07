
// Import React library to use JSX and React features
import React from "react";


// Import Apple icon from react-icons library
import { FaApple } from "react-icons/fa";
// Import Arrow Right icon from react-icons library
import { RiArrowRightWideLine } from "react-icons/ri";
// Import custom Button component
import Button from "../../reusable/Button";


// Hero component: This is the main banner section of the homepage
// It introduces the app and provides download buttons for iPhone and Android
const Hero = () => {
  return (
    <>
      {/* Main background container for the hero section */}
      <div className="bg-[#F2F7F8]">
        {/* Flex container to arrange text and image side by side on large screens, stacked on small screens */}
        <div
          className="flex justify-between pt-[150px] max-w-[1280px] h-full px-16 mx-auto items-center  pb-[130px] flex-wrap max-md:max-w-[100%]
        max-md:flex-col max-md:gap-y-[50px]"
        >
          {/* Left section: Contains the main text and download buttons */}
          <section
            className="max-w-[450px] max-tablet:flex max-tablet:flex-col max-tablet:items-center max-md:w-[100%]
           max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6"
          >
            {/* Link to the PiggyVest Savings Report */}
            <a href="#">
              <div className="flex items-center bg-[#0089FF] w-[350px] rounded-[48px] px-2.5 py-1.5 text-[white] gap-1.5 font-semibold mb-6 report-hover-effect cursor-pointer transition-colors">
                {/* Book logo icon */}
                <img src="/images/booklogo.svg" alt="" className="book" />
                {/* Report title */}
                <h3>The 2024 PiggyVest Savings Report</h3>
                {/* Arrow icon to indicate link */}
                <RiArrowRightWideLine size={25} />
              </div>
            </a>
            {/* Main headline for the hero section */}
            <h1 className="font-bold text-[42px] leading-12 mb-6 text-[#122231]">
              The Better Way to Save & Invest
            </h1>
            {/* Short description about Piggyvest */}
            <p className="text-lg mb-5 text-[#3D4F60]">
              Piggyvest helps over 5 million customers achieve their financial
              goals by helping them save and invest with ease.
            </p>
            {/* Download buttons for iPhone and Android */}
            <a href="#">
              <div className=" flex gap-2.5">
                {/* Button for iPhone download, shows Apple icon */}
                <Button
                  iconTitle={<FaApple color="white" size={30} />}
                  title="Get on Iphone"
                  textColor="white"
                  bgColor="#122231"
                />
                {/* Button for Android download, shows Google Play image */}
                <Button
                  srcTitle="/images/go.png"
                  title="Get on Android"
                  textColor="white"
                  bgColor="#122231"
                />
              </div>
            </a>
          </section>
          {/* Right section: Contains the main hero image and decorative images */}
          <section className="max-w-[550px] relative max-md:max-w-[95%] max-md:mx-auto">
            {/* Main hero image (lady) with Bounce Animation */}
            <img
              src="/images/lady.avif"
              alt="Hero lady"
              className="w-full h-[550px] animate-bounce-slow"
            />

            {/* Decorative images positioned around the main image for visual effect */}
            <main>
              {/* Top left decorative image */}
              <img
                src="/images/image01.png"
                alt="Decorative 1"
                className="h-[60px] absolute left-[-14%] top-[75px] w-auto"
              />
              {/* Top right decorative image */}
              <img
                src="/images/image2.png"
                alt="Decorative 2"
                className="h-[85px] absolute right-[-8%] top-[45px] w-auto"
              />
              {/* Middle left decorative image */}
              <img
                src="/images/image3.png"
                alt="Decorative 3"
                className="h-[75px] absolute left-[-11%] top-[240px] w-[212px]"
              />
              {/* Middle right decorative image */}
              <img
                src="/images/image4.png"
                alt="Decorative 4"
                className="h-[65px] absolute right-[-10%] top-[280px] w-auto"
              />
              {/* Bottom left decorative image */}
              <img
                src="/images/image5.png"
                alt="Decorative 5"
                className="h-[70px] absolute left-[-11%] top-[430px] w-[180px]"
              />
              {/* Bottom right decorative image */}
              <img
                src="/images/image6.png"
                alt="Decorative 6"
                className="h-[75px] absolute right-[-7%] bottom-[-26px] w-auto"
              />
            </main>
          </section>
        </div>
      </div>
    </>
  );
};


// Export the Hero component so it can be used in other parts of the app
export default Hero;
