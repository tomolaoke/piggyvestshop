import React from "react";

const FlexnairaHero = () => {
  return (
    <div className="max-md:w-[100%] ">
      <div>
        <div className="flex justify-between items-center bg-[#EA4FA2] px-[50px] pt-[160px] max-md:flex-col max-md:px-[20px] max-md:gap-y-[50px]">
          <section className="max-w-[34em] max-md:max-w-[100%]  ">
            <h1 className="text-white font-bold text-[50px] py-2 max-md:text-center">
              Flex Naira
            </h1>

            <main className="bg-white max-w-[180px] rounded-[20px] flex justify-center items-center  py-2.5 px-[12px] max-md:mx-auto max-md:max-w-[70%] ">
              <img src="" alt="" />
              <p className="text-[#2295F2] 9ext-[20px] py-0.5">
                Flexible Savings
              </p>
            </main>

            <p className="text-white text-[20px] leading-[32px] font-[400] py-4 max-md:text-center">
              Flexible savings for life's emergencies. Free transfers and
              withdrawals. Earn up to 12% p.a.
            </p>

            <main className="flex border">
              <div>
                <img src="" alt="" />
                <p className="text-white"> Get on iPhone</p>
              </div>

              <div>
                <img src="" alt="" />
                <p className="text-white"> Get on Android</p>
              </div>
            </main>
          </section>

          <section className="w-[500px] max-md:w-[70%] max-md:mx-auto">
            <img src="../../../public/flexnaira img.png" alt="" />
          </section>
        </div>
      </div>
    </div>
  );
};

export default FlexnairaHero;
