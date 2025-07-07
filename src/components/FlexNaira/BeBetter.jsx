import React from "react";

const BeBetter = () => {
  return (
    <div>
      <div>
        <div className="px-[50px]  pb-[100px] bg-[#F2F7F8] ">
          <section className="text-center py-[100px]">
            <h1 className="font-bold text-[55px] text-[#122231] max-md:text-[30px]">
              Be better prepared for emergencies.
            </h1>
            <p className="text-[#3D4F60]">
              Building an emergency fund helps hedge against life’s risks and
              can help reduce frivolous spending.
            </p>
          </section>

          <section className="flex gap-[50px] max-md:flex-col max-md:w-[100%] ">
            <main
              className="flex flex-col items-center w-[420px]  px-[30px] gap-[150px] bg-white rounded-[15px]  
            max-md:w-[100%] max-md:pt-[50px] max-md:gap-y-[50px]"
            >
              <div className="max-w-[300px]">
                <h1 className="text-[#EA4FA2] font-bold text-[36px] leading-10 pb-5 max-md:text-center">
                  Free transfers and withdrawals
                </h1>
                <p className="text-center">
                  Withdraw or transfer anytime you need to.
                </p>
              </div>

              <div>
                <img
                  src="../../../public/flex-1.png"
                  alt=""
                  className="max-w-[390px] h-[225px] max-md:w-[100%]"
                />
              </div>
            </main>

            <main
              className="flex flex-col justify-between items-center bg-white w-[420px]   px-[30px]  rounded-[15px] 
            max-md:w-[100%] max-md:pt-[50px] max-md:gap-y-[50px]"
            >
              <div>
                <h1 className="text-[#EA4FA2] font-bold text-[36px] leading-10 pb-5 max-md:text-center">
                  Manage your money
                </h1>
                <p className="max-md:text-center">
                  Organise, separate, name and categorise your emergency funds
                  with Labels in Flex Naira.
                </p>
              </div>

              <div>
                <img
                  src="../../../public/flex-2.png"
                  alt=""
                  className="max-w-[390px] h-[225px] max-md:w-[100%]"
                />
              </div>
            </main>

            <main
              className="flex flex-col justify-between items-center  bg-white  w-[420px] pt-[30px]  px-[30px]  rounded-[15px] 
            max-md:w-[100%] max-md:gap-y-[50px] max-md:flex-col"
            >
              <div className="max-md:w-[100%] ">
                <h1 className="text-[#EA4FA2] font-bold text-[36px] leading-10 pb-5 max-md:text-center ">
                  Earn interest
                </h1>
                <p className="text-[#3D4F60] pb-3 max-md:text-center">
                  We believe that every money you have saved should be earning
                  you interests, even if it's an emergency fund.
                </p>
              </div>

              <div className="max-md:w-[100%]">
                <img
                  src="../../../public/flex-3.png"
                  alt=""
                  className="max-w-[390px]  h-[225px] max-md:w-[100%]"
                />
              </div>
            </main>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BeBetter;
