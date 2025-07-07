
// --- StayPrepared Component Imports ---
// Import React so we can use JSX and React features
import React from "react";

// --- StayPrepared Component ---
// This component displays a section encouraging users to build an emergency fund.
// It uses Tailwind CSS for styling and is fully responsive.
// All code is commented for beginners.
const StayPrepared = () => {
  // The return statement describes what will be rendered on the page
  return (
    // The outermost div uses flexbox for layout and Tailwind for background and spacing
    <div className="flex items-center justify-between pl-[50px] bg-[#EA4FA2] max-md:flex-col max-md:pl-0 max-md:pb-0 max-md:gap-y-[40px]">
      {/* Left section: Text content */}
      <section className="text-white max-w-[450px] max-md:p-[5px] max-md:w-[90%] max-md:mx-auto">
        {/* Main heading for the section */}
        <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 max-md:text-[30px] max-md:text-center max-md:leading-[40px]">
          Stay prepared for life's emergencies
        </h1>
        {/* Description paragraph for the section */}
        <p className="leading-7 font-[400] text-[16px] max-md:text-center">
          Give your emergency funds a boost! We know that emergencies can happen anytime. Building an emergency fund in Flex Naira helps you to stay ahead, so you can avoid borrowing or extra financial burden when there is a crisis. Best of all, you earn interests.
        </p>
      </section>

      {/* Right section: Image content */}
      <section className="h-[460px] max-w-[600px] max-md:h-auto max-md:w-[90%] max-md:mx-auto">
        {/* Image illustrating the emergency fund concept */}
        <img
          src="../../../public/imgi_36_image_e9186b5e07.png"
          alt="Stay Prepared"
          className="h-full w-full object-contain"
        />
      </section>
    </div>
  );
};

// Export the component so it can be used in other parts of the app
export default StayPrepared;
